<template>
  <PageTransition>
    <div class="min-h-screen py-16 relative overflow-hidden">
      <!-- Gradient background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div
            class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-20 w-60 h-60 border border-cyan-500/10 rounded-full"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 border border-blue-500/10 rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <LoginRegisterModal v-if="!isAuthenticated" :updateAuthenticated="updateAuthenticated"/>

        <!-- Hero Section -->
        <ScrollAnimation direction="down" :delay="200">
          <div class="text-center mb-16">
            <!-- User menu when authenticated -->
            <div v-if="isAuthenticated" class="absolute top-4 right-4 z-10">
              <div class="flex items-center gap-3">
                <div class="text-right hidden md:block">
                  <p class="text-cyan-400 text-sm">Logged in</p>
                </div>
                <button
                    @click="handleLogout"
                    class="px-3 py-1 rounded-lg border border-cyan-500/30 bg-gray-800/50 hover:bg-gray-700/70 text-white text-sm flex items-center gap-1"
                >
                  <Icon name="heroicons:arrow-right-on-rectangle" class="w-4 h-4"/>
                  <span>Logout</span>
                </button>
              </div>
            </div>

            <div
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-4">
              <Icon name="heroicons:sparkles" class="w-4 h-4 mr-2"/>
              AI-Powered Website Builder
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Create Stunning Websites with <span
                class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">SiteForge AI</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Just describe what you want in natural language, and watch as SiteForge generates
              beautiful, responsive websites ready for deployment
            </p>
          </div>
        </ScrollAnimation>
        
        <!-- Process Section -->
        <ScrollAnimation direction="up" :delay="250">
          <div class="mb-16">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-bold text-white mb-4">How It Works</h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these simple steps to create and deploy your website
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mr-3">1</div>
                  <h3 class="text-lg font-semibold text-white">Generate Style</h3>
                </div>
                <p class="text-gray-300 text-sm">Define your brand's unique style and visual identity through AI assistance</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mr-3">2</div>
                  <h3 class="text-lg font-semibold text-white">Add & Generate Pages</h3>
                </div>
                <p class="text-gray-300 text-sm">Create and customize pages with content that matches your brand's voice and goals</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mr-3">3</div>
                  <h3 class="text-lg font-semibold text-white">Add Custom AI Data</h3>
                </div>
                <p class="text-gray-300 text-sm">Optionally enhance your site with custom AI-powered features and personalized content</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mr-3">4</div>
                  <h3 class="text-lg font-semibold text-white">Generate Header</h3>
                </div>
                <p class="text-gray-300 text-sm">Create a professional navigation and header that guides visitors through your site</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mr-3">5</div>
                  <h3 class="text-lg font-semibold text-white">Deploy Your Site</h3>
                </div>
                <p class="text-gray-300 text-sm">Buy a domain and map the CNAME to your hosted URL at subhiqudsi.dev for instant publishing</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <!-- ForgeStepsMain -->
        <ForgeStepsMain />

        <!-- Features Section -->
        <ScrollAnimation direction="up" :delay="300">
          <div class="mb-24">
            <div class="text-center mb-16">
              <h2 class="text-3xl font-bold text-white mb-4">Why Use SiteForge?</h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Generate production-ready websites in minutes through AI-powered conversations
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                  v-for="(feature, index) in features"
                  :key="index"
                  class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]"
              >
                <div
                    class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon :name="feature.icon" class="w-6 h-6 text-cyan-400"/>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ feature.title }}</h3>
                <p class="text-gray-300">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>


        <!-- CTA Section -->
        <ScrollAnimation direction="up" :delay="500">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl"></div>
            <div
                class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/20 overflow-hidden">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-cyan-400/5 opacity-70"></div>
              <div class="relative">
                <h2 class="text-3xl font-bold text-white mb-4">Ready to Build Your Website?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start chatting with SiteForge AI and have your website ready in minutes. No coding required.
                </p>
                <button
                    @click="scrollToBottom"
                    class="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Start Building Now
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 inline-block"/>
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </PageTransition>
</template>


<script>
import {nextTick} from 'vue'
import LoginRegisterModal from "~/components/LoginRegisterModal.vue";
import ForgeStepsMain from "~/components/ForgeStepsMain.vue";

export default {
  name: 'SiteForgePage',
  components: {ChatInterface: ForgeStepsMain, LoginRegisterModal},

  data() {
    return {
      isAuthenticated: false,

      isProcessing: false,
      chatContainerRef: null,
      siteTemplates: [
        {
          title: 'Business Portfolio',
          description: 'Professional and clean design for businesses or freelancers',
          preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?...'
        },
        {
          title: 'Creative Agency',
          description: 'Bold and dynamic design for creative professionals',
          preview: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?...'
        },
        {
          title: 'E-commerce Store',
          description: 'Clean product layouts with conversion-focused design',
          preview: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?...'
        },
        {
          title: 'Personal Blog',
          description: 'Minimalist design with focus on content and readability',
          preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?...'
        }
      ],
      features: [
        {
          icon: 'heroicons:chat-bubble-left-ellipsis',
          title: 'Conversational Design',
          description: 'Describe your website...'
        },
        {
          icon: 'heroicons:code-bracket',
          title: 'Clean, Optimized Code',
          description: 'Generated sites use modern HTML...'
        },
        {
          icon: 'heroicons:device-phone-mobile',
          title: 'Responsive Design',
          description: 'All sites work perfectly on...'
        },
        {icon: 'heroicons:rocket-launch', title: 'Ready to Deploy', description: 'Download your site as a zip file...'},
        {
          icon: 'heroicons:paint-brush',
          title: 'Customizable Themes',
          description: 'Choose from various design themes...'
        },
        {
          icon: 'heroicons:photo',
          title: 'Image Integration',
          description: 'Automatically sources and optimizes images...'
        }
      ],
    }
  },

  created() {
    useHead({
      title: 'SiteForge AI - Build Static Sites with AI',
      meta: [
        {
          name: 'description',
          content: 'Generate beautiful static websites through natural language conversation with SiteForge AI'
        }
      ]
    })
  },
  mounted() {
    this.isAuthenticated = sessionStorage.getItem('token') !== 'undefined';
  },

  methods: {
    scrollToBottom() {
      nextTick(() => {
        if (this.chatContainerRef) {
          this.chatContainerRef.scrollTop = this.chatContainerRef.scrollHeight
        }
      })
    },


    updateAuthenticated() {
      this.isAuthenticated = true
    },


    handleLogout() {
      sessionStorage.setItem('token', undefined)
      this.isAuthenticated = false
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