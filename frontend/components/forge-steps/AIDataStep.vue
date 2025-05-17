<template>
  <div>
    <h3 class="text-2xl font-bold text-white mb-4">Customize AI Features</h3>
    <p class="text-gray-300 mb-6">Enhance your website with AI-powered features and custom data.</p>
    
    <div class="bg-gray-800/60 rounded-xl p-4 border border-cyan-500/20 mb-6">
      <div class="flex items-start mb-4">
        <div class="p-2 bg-cyan-500/20 rounded-lg mr-3">
          <Icon name="heroicons:sparkles" class="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h4 class="text-white font-medium mb-1">AI Features Are Optional</h4>
          <p class="text-gray-400 text-sm">You can skip this step if you don't need AI-powered features on your website.</p>
        </div>
      </div>
    </div>
    
    <div class="space-y-4 mb-6">
      <div class="flex items-center bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
        <input
          type="checkbox"
          id="chatbot"
          v-model="localAiFeatures.chatbot"
          class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
          @change="updateFeatures"
        />
        <label for="chatbot" class="ml-3">
          <h4 class="text-white font-medium">AI Chatbot</h4>
          <p class="text-gray-400 text-sm">Add a customizable chatbot to assist your visitors</p>
        </label>
      </div>
      
      <div class="flex items-center bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
        <input
          type="checkbox"
          id="content-generator"
          v-model="localAiFeatures.contentGenerator"
          class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
          @change="updateFeatures"
        />
        <label for="content-generator" class="ml-3">
          <h4 class="text-white font-medium">Dynamic Content Generator</h4>
          <p class="text-gray-400 text-sm">AI-generated content that updates based on user interactions</p>
        </label>
      </div>
      
      <div class="flex items-center bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
        <input
          type="checkbox"
          id="personalization"
          v-model="localAiFeatures.personalization"
          class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
          @change="updateFeatures"
        />
        <label for="personalization" class="ml-3">
          <h4 class="text-white font-medium">User Experience Personalization</h4>
          <p class="text-gray-400 text-sm">Customize user experience based on visitor behavior</p>
        </label>
      </div>
    </div>
    
    <div v-if="isAnyAiFeatureSelected" class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
      <h4 class="text-white font-medium mb-2">Custom AI Training Data</h4>
      <p class="text-gray-400 text-sm mb-3">Provide content for the AI to learn about your business, products, services, or brand voice.</p>
      <textarea
        v-model="localAiTrainingData"
        class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
        placeholder="Enter specific information about your business, FAQs, product details, or any content you want the AI to know about"
        rows="5"
        @input="updateTrainingData"
      ></textarea>
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
        
        <h3 class="text-2xl font-bold text-white mb-4">AI Features Preview</h3>
        
        <div class="rounded-2xl overflow-hidden border border-gray-600/50 mb-6">
          <div class="bg-gray-900 h-8 flex items-center px-4">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mx-auto text-xs text-gray-300">
              ai-features-preview.example.com
            </div>
          </div>
          
          <div class="bg-white aspect-[16/9] flex items-center justify-center">
            <div v-if="previewLoading" class="text-center">
              <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
              <p class="text-gray-800">Generating AI preview...</p>
            </div>
            <div v-else-if="isAnyAiFeatureSelected" class="w-full h-full relative overflow-hidden">
              <!-- AI Feature Demo Preview -->
              <img 
                v-if="previewInfo.imageUrl" 
                :src="previewInfo.imageUrl" 
                alt="AI Features Preview" 
                class="w-full h-auto"
              />

              <!-- Chat Interface Mock -->
              <div v-if="localAiFeatures.chatbot" class="absolute bottom-4 right-4 bg-white shadow-lg rounded-2xl w-80 border border-gray-200">
                <div class="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl p-3">
                  <h4 class="text-white font-medium">AI Chatbot Assistant</h4>
                </div>
                <div class="h-48 p-3 bg-gray-50">
                  <div class="bg-gray-200 rounded-lg p-2 text-gray-800 text-sm mb-2 max-w-[80%]">
                    Hi there! How can I assist you today?
                  </div>
                  <div class="flex justify-end">
                    <div class="bg-blue-500 rounded-lg p-2 text-white text-sm mb-2 max-w-[80%]">
                      Tell me about your services
                    </div>
                  </div>
                  <div class="bg-gray-200 rounded-lg p-2 text-gray-800 text-sm max-w-[80%]">
                    Based on your training data, I can provide information about...
                  </div>
                </div>
                <div class="border-t border-gray-200 p-2 flex">
                  <input type="text" class="w-full bg-gray-100 rounded-lg p-2 text-sm" placeholder="Type your message...">
                  <button class="p-2 text-cyan-500 ml-2">
                    <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="text-center p-8">
              <Icon name="heroicons:sparkles" class="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p class="text-gray-500">No AI features selected</p>
              <p class="text-gray-400 text-sm mt-2">Select at least one AI feature to see a preview</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
          <h4 class="text-white font-medium mb-2">Selected AI Features</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <div class="flex items-center text-gray-300 mb-2">
                <Icon 
                  :name="localAiFeatures.chatbot ? 'heroicons:check-circle' : 'heroicons:x-circle'" 
                  class="w-5 h-5 mr-2"
                  :class="localAiFeatures.chatbot ? 'text-green-500' : 'text-gray-500'"
                />
                AI Chatbot
              </div>
              <div class="flex items-center text-gray-300 mb-2">
                <Icon 
                  :name="localAiFeatures.contentGenerator ? 'heroicons:check-circle' : 'heroicons:x-circle'" 
                  class="w-5 h-5 mr-2"
                  :class="localAiFeatures.contentGenerator ? 'text-green-500' : 'text-gray-500'"
                />
                Dynamic Content Generator
              </div>
              <div class="flex items-center text-gray-300">
                <Icon 
                  :name="localAiFeatures.personalization ? 'heroicons:check-circle' : 'heroicons:x-circle'" 
                  class="w-5 h-5 mr-2"
                  :class="localAiFeatures.personalization ? 'text-green-500' : 'text-gray-500'"
                />
                User Experience Personalization
              </div>
            </div>
            <div v-if="isAnyAiFeatureSelected">
              <p class="text-gray-400">Custom AI Training Data:</p>
              <p class="text-white bg-gray-700/50 p-2 rounded-lg mt-1 text-xs max-h-20 overflow-y-auto">
                {{ localAiTrainingData || 'No custom training data provided' }}
              </p>
            </div>
          </div>
          
          <div v-if="isAnyAiFeatureSelected" class="bg-gray-800/60 rounded-xl p-3 border border-cyan-500/20">
            <p class="text-cyan-400 text-sm font-medium mb-1">How AI Will Enhance Your Website</p>
            <ul class="text-gray-300 text-sm space-y-1 pl-4">
              <li v-if="localAiFeatures.chatbot">• Chatbot will provide instant support to your visitors based on your custom data</li>
              <li v-if="localAiFeatures.contentGenerator">• Dynamic content will adapt to different types of visitors and their interests</li>
              <li v-if="localAiFeatures.personalization">• User experience will be personalized based on visitor behavior patterns</li>
            </ul>
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
            :disabled="!isAnyAiFeatureSelected || !previewInfo.imageUrl"
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
        <p class="text-white font-medium">Generating AI features...</p>
        <p class="text-gray-400 text-sm">This will just take a moment</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIDataStep',
  data() {
    return {
      localAiFeatures: {
        chatbot: false,
        contentGenerator: false,
        personalization: false
      },
      localAiTrainingData: '',
      
      // Preview functionality
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
      previewInfo: {
        imageUrl: null
      },
      previewImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
      ]
    };
  },
  computed: {
    isAnyAiFeatureSelected() {
      return this.localAiFeatures.chatbot || 
             this.localAiFeatures.contentGenerator || 
             this.localAiFeatures.personalization;
    }
  },
  methods: {
    updateFeatures() {
      this.$emit('update:aiFeatures', { ...this.localAiFeatures });
    },
    updateTrainingData() {
      this.$emit('update:aiTrainingData', this.localAiTrainingData);
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
      
      // Simulate API call to generate preview based on AI features
      setTimeout(() => {
        if (this.isAnyAiFeatureSelected) {
          const randomIndex = Math.floor(Math.random() * this.previewImages.length);
          
          this.previewInfo = {
            imageUrl: this.previewImages[randomIndex]
          };
        } else {
          this.previewInfo = {
            imageUrl: null
          };
        }
        
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
      if (this.isAnyAiFeatureSelected && this.previewInfo.imageUrl) {
        // In a real app, this would trigger a download of the preview
        alert('AI features preview download started');
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