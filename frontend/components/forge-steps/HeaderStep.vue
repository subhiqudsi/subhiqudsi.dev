<template>
  <div>
    <h3 class="text-2xl font-bold text-white mb-4">Create Navigation & Header</h3>
    <p class="text-gray-300 mb-6">Design your website's navigation and header to guide visitors.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <h4 class="text-white font-medium mb-3">Header Style</h4>
        <div class="space-y-3">
          <div
            v-for="(header, index) in headerStyles"
            :key="index"
            :class="[
              'p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center',
              selectedHeaderStyle === index 
                ? 'border-cyan-500/50 bg-cyan-500/10' 
                : 'border-gray-700/50 hover:border-gray-600/50'
            ]"
            @click="selectedHeaderStyle = index"
          >
            <div class="w-16 h-12 bg-gray-700/70 rounded-lg mr-3 flex items-center justify-center overflow-hidden">
              <div class="w-full p-2">
                <div v-if="index === 0" class="flex justify-between items-center">
                  <div class="w-4 h-3 bg-cyan-500/50 rounded-sm"></div>
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                  </div>
                </div>
                <div v-if="index === 1" class="flex flex-col items-center">
                  <div class="w-6 h-2 bg-cyan-500/50 rounded-sm mb-1"></div>
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                    <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                  </div>
                </div>
                <div v-if="index === 2" class="w-full flex items-center justify-between">
                  <div class="w-5 h-3 bg-cyan-500/50 rounded-sm"></div>
                  <div class="w-5 h-3 bg-gray-500/50 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-white text-sm font-medium">{{ header.name }}</h4>
              <p class="text-gray-400 text-xs">{{ header.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4 class="text-white font-medium mb-3">Navigation Links</h4>
        <p class="text-gray-400 text-sm mb-3">These links will be automatically generated from your pages.</p>
        
        <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-4">
          <div class="flex flex-wrap gap-2">
            <div
              v-for="(page, index) in websitePages"
              :key="index"
              class="px-3 py-1 bg-gray-700/70 rounded-lg text-sm text-gray-300 border border-gray-600/50"
            >
              {{ page.title || `Page ${index + 1}` }}
            </div>
          </div>
        </div>
        
        <div class="flex items-center bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
          <input
            type="checkbox"
            id="responsive-menu"
            v-model="headerOptions.responsiveMenu"
            class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
          />
          <label for="responsive-menu" class="ml-3">
            <h4 class="text-white font-medium">Responsive Mobile Menu</h4>
            <p class="text-gray-400 text-sm">Add a hamburger menu for mobile devices</p>
          </label>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
      <h4 class="text-white font-medium mb-2">Logo & Brand</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-gray-400 text-sm mb-1">Brand/Website Name</label>
          <input
            v-model="headerOptions.brandName"
            class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="Enter your brand name"
          />
        </div>
        <div>
          <label class="block text-gray-400 text-sm mb-1">Tagline (Optional)</label>
          <input
            v-model="headerOptions.tagline"
            class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="A short description of your brand"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-between">
      <div class="flex">
        <button
          @click="$emit('previous-step')"
          class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
        >
          <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
          Back
        </button>
        <button
          @click="openPreviewModal"
          class="px-5 py-2 border border-cyan-500/30 bg-cyan-500/10 text-white rounded-xl hover:bg-cyan-500/20 flex items-center ml-3"
        >
          <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
          Preview
        </button>
      </div>
      <div class="flex">
        <button
          @click="generateAndPreview"
          class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
        >
          <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2" />
          Generate & Preview
        </button>
        <button
          @click="$emit('next-step')"
          class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
        >
          Continue
          <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>

    <!-- Preview Modal -->
    <div v-if="showPreviewModal" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" @click="closePreviewModal"></div>
      <div class="relative bg-gray-800/90 rounded-3xl border border-cyan-500/20 p-6 shadow-xl shadow-cyan-500/5 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <button 
          @click="closePreviewModal" 
          class="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
        
        <h3 class="text-2xl font-bold text-white mb-4">Header Preview</h3>
        
        <div class="rounded-2xl overflow-hidden border border-gray-600/50 mb-6">
          <div class="bg-gray-900 h-8 flex items-center px-4">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mx-auto text-xs text-gray-300">
              {{ getSiteUrl() }}
            </div>
          </div>
          
          <div class="bg-white aspect-[16/9] flex flex-col">
            <div v-if="previewLoading" class="flex-1 flex items-center justify-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
              <p class="text-gray-800">Generating header preview...</p>
            </div>
            <div v-else class="flex-1 flex flex-col">
              <!-- Header Preview Based on Selected Style -->
              <div 
                class="w-full p-4 bg-white border-b border-gray-200 shadow-sm"
                :class="{'flex justify-between items-center': selectedHeaderStyle === 0 || selectedHeaderStyle === 2}"
              >
                <!-- Classic Horizontal -->
                <div v-if="selectedHeaderStyle === 0" class="flex items-center">
                  <div class="w-8 h-8 rounded bg-gray-800 mr-2"></div>
                  <div>
                    <h4 class="font-bold text-gray-900">{{ headerOptions.brandName || 'Company Name' }}</h4>
                    <p v-if="headerOptions.tagline" class="text-xs text-gray-500">{{ headerOptions.tagline }}</p>
                  </div>
                </div>
                
                <!-- Centered Logo -->
                <div v-if="selectedHeaderStyle === 1" class="flex flex-col items-center justify-center text-center">
                  <div class="w-12 h-12 rounded-full bg-gray-800 mb-2"></div>
                  <h4 class="font-bold text-gray-900">{{ headerOptions.brandName || 'Company Name' }}</h4>
                  <p v-if="headerOptions.tagline" class="text-xs text-gray-500">{{ headerOptions.tagline }}</p>
                </div>
                
                <!-- Split Header -->
                <div v-if="selectedHeaderStyle === 2" class="flex items-center">
                  <div class="w-8 h-8 rounded bg-gray-800 mr-2"></div>
                  <div>
                    <h4 class="font-bold text-gray-900">{{ headerOptions.brandName || 'Company Name' }}</h4>
                    <p v-if="headerOptions.tagline" class="text-xs text-gray-500">{{ headerOptions.tagline }}</p>
                  </div>
                </div>
                
                <!-- Navigation Menu -->
                <div 
                  :class="{
                    'flex items-center gap-4': selectedHeaderStyle === 0 || selectedHeaderStyle === 2,
                    'flex justify-center gap-4 py-2': selectedHeaderStyle === 1
                  }"
                >
                  <div v-for="(page, index) in websitePages.slice(0, 5)" :key="index" 
                      class="text-sm font-medium text-gray-700 hover:text-cyan-600">
                    {{ page.title || `Page ${index + 1}` }}
                  </div>
                  
                  <!-- Mobile Menu Button (if responsive) -->
                  <div v-if="headerOptions.responsiveMenu" 
                      class="md:hidden p-2 rounded-md border border-gray-300">
                    <div class="w-5 h-0.5 bg-gray-700 mb-1"></div>
                    <div class="w-5 h-0.5 bg-gray-700 mb-1"></div>
                    <div class="w-5 h-0.5 bg-gray-700"></div>
                  </div>
                </div>
              </div>
              
              <!-- Page Content Preview -->
              <div v-if="!previewLoading && previewInfo.imageUrl" class="flex-1">
                <img 
                  :src="previewInfo.imageUrl" 
                  alt="Page Content Preview" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div v-else-if="!previewLoading" class="flex-1 bg-gray-100 p-8 flex items-center justify-center">
                <div class="text-center">
                  <Icon name="heroicons:photo" class="w-16 h-16 text-gray-300 mx-auto mb-3" />
                  <p class="text-gray-500">Page content will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
          <h4 class="text-white font-medium mb-2">Header Details</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p class="text-gray-400">Header Style:</p>
              <p class="text-white">{{ headerStyles[selectedHeaderStyle].name }}</p>
            </div>
            <div>
              <p class="text-gray-400">Brand Name:</p>
              <p class="text-white">{{ headerOptions.brandName || 'Not specified' }}</p>
            </div>
            <div>
              <p class="text-gray-400">Responsive Menu:</p>
              <p class="text-white">{{ headerOptions.responsiveMenu ? 'Enabled' : 'Disabled' }}</p>
            </div>
          </div>
          
          <div class="mt-3">
            <p class="text-gray-400">Navigation Links:</p>
            <div class="flex flex-wrap gap-2 mt-1">
              <div
                v-for="(page, index) in websitePages"
                :key="index"
                class="px-2 py-1 bg-gray-700/70 rounded-md text-xs text-cyan-400 border border-cyan-500/20"
              >
                {{ page.title || `Page ${index + 1}` }}
              </div>
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
            :disabled="!previewInfo.imageUrl"
          >
            <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
            Download Preview
          </button>
        </div>
      </div>
    </div>

    <!-- Generating Notification -->
    <div v-if="showGeneratingNotification" class="fixed bottom-4 right-4 z-40 bg-gray-800/90 rounded-xl shadow-lg border border-cyan-500/20 p-4 flex items-center">
      <div class="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-500 mr-3"></div>
      <div>
        <p class="text-white font-medium">Generating header...</p>
        <p class="text-gray-400 text-sm">This will just take a moment</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderStep',
  data() {
    return {
      selectedHeaderStyle: 0,
      headerStyles: [
        { name: 'Classic Horizontal', description: 'Traditional top navigation bar' },
        { name: 'Centered Logo', description: 'Logo centered with navigation below' },
        { name: 'Split Header', description: 'Logo and navigation on opposite sides' }
      ],
      headerOptions: {
        responsiveMenu: true,
        brandName: '',
        tagline: ''
      },
      websitePages: [
        { title: 'Home', type: 'home', content: '' },
        { title: 'About', type: 'about', content: '' },
        { title: 'Services', type: 'services', content: '' },
        { title: 'Contact', type: 'contact', content: '' }
      ],
      
      // Preview functionality
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
      previewInfo: {
        imageUrl: null
      },
      previewImages: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1546788774-97427c595622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1577017040065-650ee4d43339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      ]
    };
  },
  watch: {
    selectedHeaderStyle() {
      this.$emit('update:selectedHeaderStyle', this.selectedHeaderStyle);
    },
    'headerOptions.responsiveMenu'() {
      this.updateHeaderOptions();
    },
    'headerOptions.brandName'() {
      this.updateHeaderOptions();
    },
    'headerOptions.tagline'() {
      this.updateHeaderOptions();
    }
  },
  methods: {
    updateHeaderOptions() {
      this.$emit('update:headerOptions', { ...this.headerOptions });
    },
    getSiteUrl() {
      return this.headerOptions.brandName
        ? `${this.headerOptions.brandName.toLowerCase().replace(/\s+/g, '-')}.example.com`
        : 'your-website.example.com';
    },
    openPreviewModal() {
      this.generatePreview();
      this.showPreviewModal = true;
    },
    closePreviewModal() {
      this.showPreviewModal = false;
    },
    generatePreview() {
      this.previewLoading = true;
      
      // Simulate API call to generate preview based on header settings
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.previewImages.length);
        
        this.previewInfo = {
          imageUrl: this.previewImages[randomIndex]
        };
        
        this.previewLoading = false;
      }, 1500);
    },
    generateAndPreview() {
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
        alert('Header preview download started');
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