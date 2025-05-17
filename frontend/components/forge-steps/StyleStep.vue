<template>
  <div>
    <h3 class="text-2xl font-bold text-white mb-4">Define Your Style</h3>
    <p class="text-gray-300 mb-6">Choose a visual style that reflects your brand identity. This will guide the overall
      look and feel of your website.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div
          v-for="(style, index) in styleOptions"
          :key="index"
          :class="[
          'p-4 rounded-xl border transition-all duration-200 cursor-pointer',
          selectedStyle === index 
            ? 'border-cyan-500/50 bg-cyan-500/10' 
            : 'border-gray-700/50 hover:border-gray-600/50'
        ]"
          @click="selectedStyle = index"
      >
        <div class="aspect-video bg-gray-700/50 rounded-lg mb-3 overflow-hidden">
          <div class="w-full h-full bg-gradient-to-br p-3 flex items-center justify-center"
               :class="style.gradient">
            <Icon :name="style.icon" class="w-8 h-8" :class="style.iconColor"/>
          </div>
        </div>
        <h4 class="text-white font-medium mb-1">{{ style.name }}</h4>
        <p class="text-gray-400 text-sm">{{ style.description }}</p>
      </div>
    </div>

    <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
      <h4 class="text-white font-medium mb-2">Custom Style Description</h4>
      <textarea
          v-model="styleDescription"
          class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
          placeholder="Describe your desired style in detail (e.g., minimalist design with blue and white color scheme, professional and clean look)"
          rows="3"
      ></textarea>
    </div>

    <div class="flex justify-between">
      <div>
        <button
            @click="generatePreview"
            class="px-5 py-2 border border-cyan-500/30 bg-cyan-500/10 text-white rounded-xl hover:bg-cyan-500/20 flex items-center mr-3"
        >
          <Icon name="heroicons:eye" class="w-5 h-5 mr-2"/>
          Preview
        </button>
      </div>
      <div class="flex">
        <button
            @click="saveDraft"
            class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
        >
          <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2"/>
          Save
        </button>
        <button
            v-if="false"
            @click="$emit('next-step')"
            class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
        >
          Continue
          <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2"/>
        </button>
        <button
            v-else
            class="px-5 py-2 text-gray-500 rounded-xl flex items-center"
        >
          Continue
          <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2"/>
        </button>
      </div>
    </div>

    <!-- Preview Modal -->
    <div v-if="showPreviewModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" @click="closePreviewModal"></div>
      <div
          class="relative bg-gray-800/90 rounded-3xl border border-cyan-500/20 p-6 shadow-xl shadow-cyan-500/5 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <button
            @click="closePreviewModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6"/>
        </button>

        <h3 class="text-2xl font-bold text-white mb-4">Style Preview</h3>

        <div class="rounded-2xl overflow-hidden border border-gray-600/50 mb-6">
          <div class="bg-gray-900 h-8 flex items-center px-4">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mx-auto text-xs text-gray-300">
              {{ previewUrl }}
            </div>
          </div>

          <div class="bg-white aspect-[16/9] flex items-center justify-center">
            <div v-if="previewLoading" class="text-center">
              <div
                  class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
              <p class="text-gray-800">Generating style preview...</p>
            </div>
            <iframe
                v-else-if="previewUrl"
                :src="previewUrl"
                class="w-full h-auto"
            />
            <div v-else class="text-center p-8">
              <Icon name="heroicons:photo" class="w-16 h-16 text-gray-300 mx-auto mb-3"/>
              <p class="text-gray-500">Style preview will be generated here</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
          <h4 class="text-white font-medium mb-2">Style Details</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-400">Selected Style:</p>
              <p class="text-white">{{ styleOptions[selectedStyle].name }}</p>
            </div>
            <div>
              <p class="text-gray-400">Custom Description:</p>
              <p class="text-white">{{ styleDescription || 'No custom description provided' }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <button
              class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
              @click="closePreviewModal"
          >
            Close
          </button>
          <button
              class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              @click="downloadPreview"
              :disabled="true"
          >
            <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2"/>
            Download Preview
          </button>
        </div>
      </div>
    </div>

    <!-- Generating Notification -->
    <div v-if="showGeneratingNotification"
         class="fixed bottom-4 right-4 z-40 bg-gray-800/90 rounded-xl shadow-lg border border-cyan-500/20 p-4 flex items-center">
      <div class="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-500 mr-3"></div>
      <div>
        <p class="text-white font-medium">Generating style...</p>
        <p class="text-gray-400 text-sm">This will just take a moment</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleStep',
  data() {
    return {
      selectedStyle: 0,
      styleDescription: '',
      styleOptions: [
        {
          name: 'Modern Minimalist',
          description: 'Clean and sleek design with ample white space',
          gradient: 'from-gray-100 to-gray-200',
          icon: 'heroicons:squares-2x2',
          iconColor: 'text-gray-800'
        },
        {
          name: 'Bold & Vibrant',
          description: 'Colorful design with striking elements',
          gradient: 'from-pink-500 to-yellow-500',
          icon: 'heroicons:paint-brush',
          iconColor: 'text-white'
        },
        {
          name: 'Corporate Professional',
          description: 'Serious and trustworthy business aesthetic',
          gradient: 'from-blue-700 to-gray-800',
          icon: 'heroicons:briefcase',
          iconColor: 'text-white'
        }
      ],
      previewUrl: '',
      // Preview functionality
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
    };
  },
  watch: {
    selectedStyle(newValue) {
      // Emit the updated value to parent
      this.$emit('update:style', {
        selectedStyle: newValue,
        styleDescription: this.styleDescription
      });
    },
    styleDescription(newValue) {
      // Emit the updated value to parent
      this.$emit('update:style', {
        selectedStyle: this.selectedStyle,
        styleDescription: newValue
      });
    }
  },
  methods: {
    openPreviewModal() {
      this.generatePreview();
      this.showPreviewModal = true;
    },

    closePreviewModal() {
      this.showPreviewModal = false;
    },

    generatePreview() {
      this.previewLoading = true;
      const body = {
        type: 'style',
        prompt: `${this.styleOptions[this.selectedStyle].name} ${this.styleDescription}`
      }

      const token = sessionStorage.getItem('token')

      try {
        fetch(useRuntimeConfig().public.backendUrl + '/generate-draft', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          },
          body: JSON.stringify(body),
        })
            .then(response => {
              if (!response.ok) {
                return response.json().then(data => {
                  throw new Error(data.message || 'Login failed');
                });
              }
              return response.json();
            })
            .then(data => {
              this.previewUrl = data.previewUrl
              this.showPreviewModal = true;

            })
            .finally(() => {
              this.previewLoading = false;
            });
      } catch (error) {
        this.previewLoading = false;
      }
    },

    saveDraft() {
      // First simulate generating content
      this.showGeneratingNotification = true;

      setTimeout(() => {
        this.showGeneratingNotification = false;
        // Then show the preview
        this.openPreviewModal();
      }, 1500);
    },

    downloadPreview() {
      if (this.previewInfo.imageUrl) {
        // In a real app, this would trigger a download of the preview
        alert('Style preview download started');
      }
    }
  }
}
</script>

<style scoped>
@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}
</style>