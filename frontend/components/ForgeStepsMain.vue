<template>
  <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 overflow-hidden mb-24">
    <div class="p-6 border-b border-cyan-500/10 bg-gray-800/60">
      <div class="flex items-center">
        <div
            class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
          <Icon name="heroicons:code-bracket-square" class="w-6 h-6 text-white"/>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-white">SiteForge AI Studio</h2>
          <p class="text-gray-400 text-sm">Build your website step by step</p>
        </div>
      </div>
    </div>

    <!-- Process Steps Container -->
    <div class="p-6">
      <!-- Step Navigation -->
      <div class="flex mb-8 border-b border-gray-700/50 pb-4">
        <button 
          v-for="(step, index) in steps" 
          :key="index"
          @click="currentStep = index"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 mr-2',
            currentStep === index 
              ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/30' 
              : 'text-gray-400 hover:text-gray-300 border border-transparent hover:border-gray-700/50'
          ]"
        >
          <div class="flex items-center">
            <div 
              :class="[
                'w-6 h-6 rounded-full flex items-center justify-center mr-2',
                currentStep === index ? 'bg-cyan-500/30 text-cyan-400' : 'bg-gray-700/50 text-gray-500'
              ]"
            >
              {{ index + 1 }}
            </div>
            {{ step.title }}
            
            <!-- Step Completion Indicator -->
            <div class="ml-2">
              <Icon 
                v-if="index < currentStep && !isStepCompleted(index)" 
                name="heroicons:x-mark" 
                class="w-5 h-5 text-red-500" 
                :title="`${step.title} Missing`"
              />
              <Icon 
                v-else-if="(index < currentStep && isStepCompleted(index)) || (isStepCompleted(index) && index <= currentStep)" 
                name="heroicons:check" 
                class="w-5 h-5 text-green-500" 
                :title="`${step.title} Completed`"
              />
            </div>
          </div>
        </button>
      </div>

      <!-- Step Content -->
      <div v-if="steps[currentStep]" class="mb-8">
        <!-- Step 1: Generate Style -->
        <StyleStep
          v-if="currentStep === 0"
          @update:style="updateStyleData"
          @next-step="goToNextStep"
        />

        <!-- Step 2: Add and Generate Pages -->
        <PagesStep
          v-if="currentStep === 1"
          @update:pages="updatePagesData"
          @previous-step="goToPreviousStep"
          @next-step="goToNextStep"
        />

        <!-- Step 3: Add Custom AI Data -->
        <AIDataStep
          v-if="currentStep === 2"
          @update:aiFeatures="updateAIFeatures"
          @update:aiTrainingData="updateAITrainingData"
          @previous-step="goToPreviousStep"
          @next-step="goToNextStep"
        />

        <!-- Step 4: Generate Header -->
        <HeaderStep
          v-if="currentStep === 3"
          @update:selectedHeaderStyle="selectedHeaderStyle = $event"
          @update:headerOptions="updateHeaderOptions"
          @previous-step="goToPreviousStep"
          @next-step="goToNextStep"
        />

        <!-- Step 5: Deploy Website -->
        <DeployStep
          v-if="currentStep === 4"
          @update:deploymentOptions="updateDeploymentOptions"
          @previous-step="goToPreviousStep"
          @deploy-website="deployWebsite"
        />
      </div>
      
      <!-- Progress Bar -->
      <div class="bg-gray-700/30 rounded-full h-2 mb-2">
        <div 
          class="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300"
          :style="{ width: `${(currentStep + 1) * 20}%` }"
        ></div>
      </div>
      <div class="text-xs text-gray-400 text-right">Step {{ currentStep + 1 }} of {{ steps.length }}</div>
    </div>
  </div>
</template>

<script>
import StyleStep from '~/components/forge-steps/StyleStep.vue';
import PagesStep from '~/components/forge-steps/PagesStep.vue';
import AIDataStep from '~/components/forge-steps/AIDataStep.vue';
import HeaderStep from '~/components/forge-steps/HeaderStep.vue';
import DeployStep from '~/components/forge-steps/DeployStep.vue';

export default {
  name: 'ForgeStepsMain',
  components: {
    StyleStep,
    PagesStep,
    AIDataStep,
    HeaderStep,
    DeployStep
  },
  data() {
    return {
      currentStep: 0,
      steps: [
        { title: 'Style', icon: 'paint-brush' },
        { title: 'Pages', icon: 'document-text' },
        { title: 'AI Data', icon: 'sparkles' },
        { title: 'Header', icon: 'menu' },
        { title: 'Deploy', icon: 'rocket-launch' }
      ],
      
      
      // Step 1: Style data
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
      
      // Step 2: Pages data
      websitePages: [
        { title: 'Home', type: 'home', content: '' },
        { title: 'About', type: 'about', content: '' },
        { title: 'Contact', type: 'contact', content: '' }
      ],
      
      // Step 3: AI Features data
      aiFeatures: {
        chatbot: false,
        contentGenerator: false,
        personalization: false
      },
      aiTrainingData: '',
      
      // Step 4: Header data
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
      
      // Step 5: Deployment data
      deploymentOptions: {
        hostingType: 'free',
        domainName: ''
      }
    }
  },
  computed: {
    isAnyAiFeatureSelected() {
      return this.aiFeatures.chatbot || this.aiFeatures.contentGenerator || this.aiFeatures.personalization;
    },
    isAiDataStepCompleted() {
      // AI step is considered complete if any feature is selected
      // OR if user has explicitly provided aiTrainingData
      return this.isAnyAiFeatureSelected || this.aiTrainingData.trim().length > 0;
    }
  },
  methods: {
    isStepCompleted(index) {
      // Check completion for each step
      switch (index) {
        case 0: // Style step
          return this.styleDescription.trim().length > 0;
        case 1: // Pages step
          return this.websitePages.length > 0 && this.websitePages.some(page => page.title && page.content);
        case 2: // AI Data step
          return this.isAiDataStepCompleted;
        case 3: // Header step
          return this.headerOptions.brandName.trim().length > 0;
        case 4: // Deploy step
          return this.deploymentOptions.hostingType === 'custom' ? 
            this.deploymentOptions.domainName.trim().length > 0 : true;
        default:
          return false;
      }
    },
    goToNextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    addNewPage(page) {
      this.websitePages.push(page || {
        title: '',
        type: 'custom',
        content: ''
      });
    },
    removePage(index) {
      this.websitePages.splice(index, 1);
    },
    updatePage({ index, page }) {
      this.websitePages[index] = page;
    },
    updateAIFeatures(features) {
      this.aiFeatures = features;
    },
    updateAITrainingData(data) {
      this.aiTrainingData = data;
    },
    updateHeaderOptions(options) {
      this.headerOptions = options;
    },
    updateDeploymentOptions(options) {
      this.deploymentOptions = options;
    },
    updateStyleData(styleData) {
      // Update style data from the StyleStep component
      if (styleData) {
        this.selectedStyle = styleData.selectedStyle;
        this.styleDescription = styleData.styleDescription;
      }
    },
    updatePagesData(pages) {
      this.websitePages = pages;
    },
    deployWebsite() {
      // Here would be the actual deployment logic
      alert('Website deployment initiated! Your site will be live shortly.');
    },
    
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