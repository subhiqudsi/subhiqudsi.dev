<script setup>
defineProps({
  delay: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="!disabled" :style="{ transitionDelay: `${delay}ms` }">
    <slot />
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<style scoped>
/* Apply transitions through CSS instead of class bindings to avoid hydration mismatch */
div {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
</style> 