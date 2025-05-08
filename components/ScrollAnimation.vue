<script>
export default {
  name: 'ScrollAnimation',
  props: {
    delay: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'up',
      validator: value => ['up', 'down', 'left', 'right'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    // Skip animation for better performance if disabled
    if (this.disabled) {
      this.isVisible = true
      return
    }
    
    // Preload animation for mobile devices or slow connections
    if (window.matchMedia('(max-width: 768px)').matches || 
        (navigator.connection && navigator.connection.effectiveType === 'slow-2g')) {
      this.isVisible = true
      return
    }

    // Use passive option for better performance
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true
            this.observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )
    this.observer.observe(this.$el)
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>

<template>
  <div
    :class="[
      disabled ? '' : 'transition-all duration-300 ease-out',
      {
        'opacity-0': !isVisible && !disabled,
        'opacity-100': isVisible || disabled,
        'translate-y-2': !isVisible && direction === 'up' && !disabled,
        'translate-y-0': (isVisible && direction === 'up') || disabled,
        '-translate-y-2': !isVisible && direction === 'down' && !disabled,
        'translate-y-0': (isVisible && direction === 'down') || disabled,
        'translate-x-2': !isVisible && direction === 'left' && !disabled,
        'translate-x-0': (isVisible && direction === 'left') || disabled,
        '-translate-x-2': !isVisible && direction === 'right' && !disabled,
        'translate-x-0': (isVisible && direction === 'right') || disabled
      }
    ]"
    :style="disabled ? {} : { transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template> 