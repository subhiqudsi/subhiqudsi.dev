<template>
  <div>
    <h3 class="text-2xl font-bold text-white mb-4">Add & Generate Pages</h3>
    <p class="text-gray-300 mb-6">Define the pages you want on your website and their content.</p>
    
    <div class="mb-6">
      <div class="flex justify-between items-center mb-4">
        <h4 class="text-white font-medium">Website Pages</h4>
        <button
          @click="addNewPage"
          class="text-cyan-400 hover:text-cyan-300 flex items-center text-sm"
        >
          <Icon name="heroicons:plus-circle" class="w-5 h-5 mr-1" />
          Add Page
        </button>
      </div>
      
      <div class="space-y-4">
        <div 
          v-for="(page, index) in websitePages" 
          :key="index"
          class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50"
        >
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center">
              <input
                v-model="page.title"
                class="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/40 w-full max-w-xs"
                placeholder="Page Title"
                @input="updatePage(index, 'title', $event.target.value)"
              />
              <select
                v-model="page.type"
                class="ml-3 bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/40"
                @change="updatePage(index, 'type', $event.target.value)"
              >
                <option value="home">Home</option>
                <option value="about">About</option>
                <option value="services">Services</option>
                <option value="portfolio">Portfolio</option>
                <option value="blog">Blog</option>
                <option value="contact">Contact</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <button
              @click="removePage(index)"
              class="text-gray-500 hover:text-gray-300"
            >
              <Icon name="heroicons:trash" class="w-5 h-5" />
            </button>
          </div>
          <textarea
            v-model="page.content"
            class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
            :placeholder="`Describe what you want on your ${page.title || 'page'} (e.g., sections, content, features)`"
            rows="3"
            @input="updatePage(index, 'content', $event.target.value)"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Generate & Preview buttons for each page -->
    <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
      <h4 class="text-white font-medium mb-3">Generate Content</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(page, index) in websitePages" :key="`gen-${index}`" class="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
          <span class="text-gray-300">{{ page.title || `Page ${index + 1}` }}</span>
          <button
            @click="generateAndPreviewPage(index)"
            class="px-3 py-1 text-sm bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 flex items-center"
          >
            <Icon name="heroicons:sparkles" class="w-4 h-4 mr-1" />
            Generate & Preview
          </button>
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
          Preview All
        </button>
      </div>
      <div class="flex">
        <button
          @click="generateAndPreviewAll"
          class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
        >
          <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2" />
          Generate All & Preview
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
        
        <h3 class="text-2xl font-bold text-white mb-4">Pages Preview</h3>
        
        <div class="rounded-2xl overflow-hidden border border-gray-600/50 mb-6">
          <div class="bg-gray-900 h-8 flex items-center px-4">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mx-auto text-xs text-gray-300">
              pages-preview.example.com{{ previewingPage !== null ? '/' + websitePages[previewingPage].type : '' }}
            </div>
          </div>
          
          <div class="bg-white aspect-[16/9] flex items-center justify-center">
            <div v-if="previewLoading" class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
              <p class="text-gray-800">Generating pages preview...</p>
            </div>
            <img 
              v-else-if="previewInfo.imageUrl" 
              :src="previewInfo.imageUrl" 
              alt="Pages Preview" 
              class="w-full h-auto"
            />
            <div v-else class="text-center p-8">
              <Icon name="heroicons:photo" class="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p class="text-gray-500">Pages preview will be generated here</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
          <h4 class="text-white font-medium mb-2">Pages Details</h4>
          <div v-if="previewingPage !== null" class="mb-4">
            <div class="flex justify-between items-center">
              <p class="text-cyan-400 font-medium">Currently Previewing: {{ websitePages[previewingPage].title || `Page ${previewingPage + 1}` }}</p>
              <div class="flex space-x-2">
                <button
                  @click="previousPage"
                  class="px-2 py-1 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700"
                  :disabled="previewingPage <= 0"
                >
                  <Icon name="heroicons:chevron-left" class="w-5 h-5" />
                </button>
                <button
                  @click="nextPage"
                  class="px-2 py-1 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-700"
                  :disabled="previewingPage >= websitePages.length - 1"
                >
                  <Icon name="heroicons:chevron-right" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-2">
            <div v-for="(page, index) in websitePages" :key="index" 
                 :class="['p-2 rounded-lg border', previewingPage === index ? 'border-cyan-500/30 bg-cyan-500/10' : 'border-gray-700/50']">
              <p class="text-white font-medium">{{ page.title || `Page ${index + 1}` }} 
                <span class="text-gray-400 text-xs">({{ page.type }})</span>
              </p>
              <p class="text-gray-400 text-sm truncate">{{ page.content || 'No content description' }}</p>
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
        <p class="text-white font-medium">Generating pages...</p>
        <p class="text-gray-400 text-sm">This will just take a moment</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesStep',
  data() {
    return {
      websitePages: [
        { title: 'Home', type: 'home', content: '' },
        { title: 'About', type: 'about', content: '' },
        { title: 'Contact', type: 'contact', content: '' }
      ],
      
      // Preview functionality
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
      previewingPage: null,
      previewInfo: {
        imageUrl: null
      },
      previewImages: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      ]
    };
  },
  watch: {
    websitePages: {
      handler(newValue) {
        // Emit the updated pages to parent
        this.$emit('update:pages', [...newValue]);
      },
      deep: true
    }
  },
  methods: {
    addNewPage() {
      this.websitePages.push({
        title: '',
        type: 'custom',
        content: ''
      });
    },
    removePage(index) {
      this.websitePages.splice(index, 1);
    },
    updatePage(index, property, value) {
      // Update the page directly
      this.websitePages[index][property] = value;
    },
    openPreviewModal() {
      this.previewingPage = 0; // Start with the first page
      this.generatePreview();
      this.showPreviewModal = true;
    },
    closePreviewModal() {
      this.showPreviewModal = false;
      this.previewingPage = null;
    },
    generatePreview() {
      this.previewLoading = true;
      
      // Simulate API call to generate preview based on pages
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.previewImages.length);
        
        this.previewInfo = {
          imageUrl: this.previewImages[randomIndex]
        };
        
        this.previewLoading = false;
      }, 1500);
    },
    generateAndPreviewAll() {
      // First simulate generating content for all pages
      this.showGeneratingNotification = true;
      
      setTimeout(() => {
        this.showGeneratingNotification = false;
        // Then show the preview of all pages
        this.openPreviewModal();
      }, 1500);
    },
    generateAndPreviewPage(pageIndex) {
      // First simulate generating content for specific page
      this.showGeneratingNotification = true;
      
      setTimeout(() => {
        this.showGeneratingNotification = false;
        // Then show the preview of this specific page
        this.previewingPage = pageIndex;
        this.generatePreview();
        this.showPreviewModal = true;
      }, 1500);
    },
    nextPage() {
      if (this.previewingPage < this.websitePages.length - 1) {
        this.previewingPage++;
        this.generatePreview();
      }
    },
    previousPage() {
      if (this.previewingPage > 0) {
        this.previewingPage--;
        this.generatePreview();
      }
    },
    downloadPreview() {
      if (this.previewInfo.imageUrl) {
        // In a real app, this would trigger a download of the preview
        alert('Pages preview download started');
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