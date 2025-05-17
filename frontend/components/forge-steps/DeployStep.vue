<template>
  <div>
    <h3 class="text-2xl font-bold text-white mb-4">Deploy Your Website</h3>
    <p class="text-gray-300 mb-6">Get your website online and accessible to everyone.</p>
    
    <div class="bg-gray-800/60 rounded-xl p-4 border border-cyan-500/20 mb-6">
      <div class="flex items-start mb-4">
        <div class="p-2 bg-cyan-500/20 rounded-lg mr-3">
          <Icon name="heroicons:check-badge" class="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h4 class="text-white font-medium mb-1">Website Successfully Generated!</h4>
          <p class="text-gray-400 text-sm">Your website has been created based on your specifications.</p>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
        <h4 class="text-white font-medium mb-3">Deployment Options</h4>
        
        <div class="space-y-3">
          <div class="flex items-center p-3 bg-gray-700/50 rounded-lg border border-cyan-500/30">
            <input
              type="radio"
              id="free-hosting"
              name="hosting"
              value="free"
              v-model="deploymentOptions.hostingType"
              class="w-5 h-5 rounded-full border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
            />
            <label for="free-hosting" class="ml-3 flex-grow">
              <h5 class="text-white text-sm font-medium">Free Subhiqudsi.dev Domain</h5>
              <p class="text-gray-400 text-xs">Host on our servers with a yoursite.subhiqudsi.dev subdomain</p>
            </label>
            <span class="text-cyan-400 text-sm font-medium">Free</span>
          </div>
          
          <div class="flex items-center p-3 bg-gray-700/50 rounded-lg border border-gray-600/30">
            <input
              type="radio"
              id="custom-domain"
              name="hosting"
              value="custom"
              v-model="deploymentOptions.hostingType"
              class="w-5 h-5 rounded-full border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
            />
            <label for="custom-domain" class="ml-3 flex-grow">
              <h5 class="text-white text-sm font-medium">Use Custom Domain</h5>
              <p class="text-gray-400 text-xs">Connect your own domain to your website</p>
            </label>
            <span class="text-white text-sm">$9.99/mo</span>
          </div>
        </div>
        
        <div v-if="deploymentOptions.hostingType === 'custom'" class="mt-4">
          <label class="block text-gray-400 text-sm mb-1">Domain Name</label>
          <input
            v-model="deploymentOptions.domainName"
            class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="yourdomain.com"
          />
          <p class="text-gray-500 text-xs mt-2">After purchase, you'll need to set up CNAME records pointing to subhiqudsi.dev</p>
        </div>
      </div>
      
      <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
        <h4 class="text-white font-medium mb-3">Website Preview</h4>
        
        <div class="relative rounded-lg overflow-hidden border border-gray-600/50 aspect-video bg-gray-700/50 mb-4">
          <div v-if="previewInfo.imageUrl" class="w-full h-full">
            <img 
              :src="previewInfo.imageUrl" 
              alt="Website Preview" 
              class="w-full h-full object-cover"
            />
          </div>
          <div v-else class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <Icon name="heroicons:photo" class="w-12 h-12 text-gray-500 mx-auto mb-2" />
              <p class="text-gray-400 text-sm">Website Preview</p>
            </div>
          </div>
        </div>
        
        <div class="flex space-x-3">
          <button
            @click="openPreviewModal"
            class="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 text-white text-sm rounded-lg hover:bg-gray-700/70 flex items-center justify-center"
          >
            <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
            Preview
          </button>
          <button
            @click="downloadSiteFiles"
            class="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 text-white text-sm rounded-lg hover:bg-gray-700/70 flex items-center justify-center"
          >
            <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
    
    <div class="bg-cyan-900/20 rounded-xl p-4 border border-cyan-500/30 mb-6">
      <h4 class="text-cyan-400 font-medium mb-2">Deployment Instructions</h4>
      <ol class="text-gray-300 text-sm space-y-2 pl-5 list-decimal">
        <li>Select your preferred hosting option above</li>
        <li>If using a custom domain, purchase it through your preferred domain registrar</li>
        <li>Set up CNAME records pointing to subhiqudsi.dev</li>
        <li>Click the "Deploy Website" button below to publish your site</li>
        <li>Your website will be live within minutes!</li>
      </ol>
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
          Preview Site
        </button>
      </div>
      <div class="flex">
        <button
          @click="generateAndPreview"
          class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
        >
          <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2" />
          Final Preview
        </button>
        <button
          @click="deploySite"
          class="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center font-medium"
        >
          <Icon name="heroicons:rocket-launch" class="w-5 h-5 mr-2" />
          Deploy Website
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
        
        <h3 class="text-2xl font-bold text-white mb-4">Website Preview</h3>
        
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
          
          <div class="bg-white aspect-[16/9] flex items-center justify-center">
            <div v-if="previewLoading" class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
              <p class="text-gray-800">Generating website preview...</p>
            </div>
            <img 
              v-else-if="previewInfo.imageUrl" 
              :src="previewInfo.imageUrl" 
              alt="Website Preview" 
              class="w-full h-auto"
            />
            <div v-else class="text-center p-8">
              <Icon name="heroicons:photo" class="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p class="text-gray-500">Website preview will be generated here</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
          <h4 class="text-white font-medium mb-2">Deployment Details</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="text-gray-400">Hosting Type:</p>
              <p class="text-white">{{ deploymentOptions.hostingType === 'free' ? 'Free Subdomain' : 'Custom Domain' }}</p>
            </div>
            <div v-if="deploymentOptions.hostingType === 'custom'">
              <p class="text-gray-400">Domain Name:</p>
              <p class="text-white">{{ deploymentOptions.domainName || 'Not specified' }}</p>
            </div>
            <div v-else>
              <p class="text-gray-400">Subdomain:</p>
              <p class="text-white">{{ getSubdomainName() }}</p>
            </div>
            <div>
              <p class="text-gray-400">Generated:</p>
              <p class="text-white">{{ new Date().toLocaleString() }}</p>
            </div>
          </div>
          
          <div class="mt-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
            <p class="text-cyan-400 text-sm font-medium mb-1">Deployment Ready</p>
            <p class="text-gray-300 text-sm">Your website is ready to deploy. Click the Deploy Website button to go live.</p>
          </div>
        </div>
        
        <div class="flex justify-between">
          <button
            class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
            @click="closePreviewModal"
          >
            Close
          </button>
          <div class="flex space-x-3">
            <button
              class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center"
              @click="downloadSiteFiles"
            >
              <Icon name="heroicons:document-arrow-down" class="w-5 h-5 mr-2" />
              Download Files
            </button>
            <button
              class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              @click="deploySite"
            >
              <Icon name="heroicons:rocket-launch" class="w-5 h-5 mr-2" />
              Deploy Website
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Generating Notification -->
    <div v-if="showGeneratingNotification" class="fixed bottom-4 right-4 z-40 bg-gray-800/90 rounded-xl shadow-lg border border-cyan-500/20 p-4 flex items-center">
      <div class="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-500 mr-3"></div>
      <div>
        <p class="text-white font-medium">Preparing deployment...</p>
        <p class="text-gray-400 text-sm">This will just take a moment</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeployStep',
  data() {
    return {
      deploymentOptions: {
        hostingType: 'free',
        domainName: ''
      },
      
      // Preview functionality
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
      previewInfo: {
        imageUrl: null
      },
      previewImages: [
        'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      ],
      deployStatus: 'ready' // ready, deploying, deployed
    };
  },
  watch: {
    'deploymentOptions.hostingType'() {
      this.updateDeploymentOptions();
    },
    'deploymentOptions.domainName'() {
      this.updateDeploymentOptions();
    }
  },
  methods: {
    updateDeploymentOptions() {
      this.$emit('update:deploymentOptions', { ...this.deploymentOptions });
    },
    getSiteUrl() {
      if (this.deploymentOptions.hostingType === 'custom' && this.deploymentOptions.domainName) {
        return this.deploymentOptions.domainName;
      } else {
        return this.getSubdomainName();
      }
    },
    getSubdomainName() {
      // Generate a random subdomain name for demo purposes
      return `site-${Math.floor(Math.random() * 10000)}.subhiqudsi.dev`;
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
      
      // Simulate API call to generate preview based on deployment settings
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
    downloadSiteFiles() {
      // In a real app, this would trigger a download of the site files
      alert('Website files download started');
    },
    deploySite() {
      // In a real app, this would trigger the deployment
      this.deployStatus = 'deploying';
      this.showGeneratingNotification = true;
      
      setTimeout(() => {
        this.showGeneratingNotification = false;
        this.deployStatus = 'deployed';
        
        // Alert the user of successful deployment
        alert(`Website successfully deployed to ${this.getSiteUrl()}!`);
        
        // Emit deploy event to parent
        this.$emit('deploy-website');
      }, 2500);
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