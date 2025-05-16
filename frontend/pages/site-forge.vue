<template>
  <PageTransition>
    <div class="min-h-screen py-16 relative overflow-hidden">
      <!-- Gradient background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-20 w-60 h-60 border border-cyan-500/10 rounded-full"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 border border-blue-500/10 rounded-full"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <LoginRegisterModal v-if="!isAuthenticated" />

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
                  <Icon name="heroicons:arrow-right-on-rectangle" class="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-4">
              <Icon name="heroicons:sparkles" class="w-4 h-4 mr-2" />
              AI-Powered Website Builder
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Create Stunning Websites with <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">SiteForge AI</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Just describe what you want in natural language, and watch as SiteForge generates
              beautiful, responsive websites ready for deployment
            </p>
          </div>
        </ScrollAnimation>

        <!-- Chat Interface -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          <!-- Chat Window -->
          <div class="lg:col-span-3 bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 overflow-hidden">
            <div class="p-6 border-b border-cyan-500/10 bg-gray-800/60">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                  <Icon name="heroicons:code-bracket-square" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-xl font-semibold text-white">SiteForge AI</h2>
                  <p class="text-gray-400 text-sm">Let's build your website together</p>
                </div>
              </div>
            </div>
            
            <!-- Messages -->
            <div ref="chatContainerRef" class="h-96 overflow-y-auto p-4 space-y-4">
              <div 
                v-for="(message, index) in messages" 
                :key="index"
                :class="[
                  message.role === 'user' ? 'ml-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/20' : 'mr-auto bg-gray-700/30 border-gray-600/30',
                  'max-w-[80%] rounded-2xl p-4 border backdrop-blur-sm'
                ]"
              >
                <div class="flex items-start gap-3">
                  <div v-if="message.role !== 'user'" class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:code-bracket" class="w-4 h-4 text-white" />
                  </div>
                  <div v-else class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:user" class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div class="flex justify-between items-center mb-1">
                      <span class="font-medium text-white">
                        {{ message.role === 'user' ? 'You' : 'SiteForge AI' }}
                      </span>
                      <span class="text-xs text-gray-400">{{ formatTime(message.timestamp) }}</span>
                    </div>
                    <p class="text-gray-300">{{ message.content }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Typing indicator -->
              <div v-if="isProcessing" class="mr-auto max-w-[80%] rounded-2xl p-4 border backdrop-blur-sm bg-gray-700/30 border-gray-600/30">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Icon name="heroicons:code-bracket" class="w-4 h-4 text-white" />
                  </div>
                  <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Quick templates -->
            <div class="p-4 border-t border-cyan-500/10 bg-gray-800/60">
              <p class="text-sm text-gray-400 mb-3">Quick start templates:</p>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="(template, index) in templates" 
                  :key="index"
                  @click="selectTemplate(template)"
                  class="px-3 py-1 text-sm bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-full border border-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-200"
                >
                  {{ template }}
                </button>
              </div>
            </div>
            
            <!-- Input -->
            <div class="p-4 border-t border-cyan-500/10 bg-gray-800/80">
              <div class="flex">
                <textarea
                  v-model="userInput"
                  @keydown="handleKeyDown"
                  placeholder="Describe the website you want to create..."
                  class="flex-grow px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-l-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
                  rows="2"
                ></textarea>
                <button 
                  @click="sendMessage"
                  :disabled="isProcessing || !userInput.trim()"
                  class="px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-r-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Icon v-if="isProcessing" name="heroicons:arrow-path" class="w-5 h-5 animate-spin" />
                  <Icon v-else name="heroicons:paper-airplane" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <!-- Preview Panel -->
          <div class="lg:col-span-2">
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 overflow-hidden h-full flex flex-col">
              <div class="p-6 border-b border-cyan-500/10 bg-gray-800/60">
                <h2 class="text-xl font-semibold text-white flex items-center">
                  <Icon name="heroicons:computer-desktop" class="w-6 h-6 text-cyan-400 mr-2" />
                  Website Preview
                </h2>
              </div>
              
              <div class="p-8 flex-grow flex items-center justify-center">
                <div v-if="previewVisible" class="w-full">
                  <div class="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                    <img :src="previewUrl" alt="Website Preview" class="w-full h-auto" />
                    <div class="absolute top-0 left-0 right-0 h-8 bg-gray-800/80 backdrop-blur-sm flex items-center px-4">
                      <div class="flex space-x-2">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div class="mx-auto text-xs text-gray-300">your-awesome-site.com</div>
                    </div>
                  </div>
                  
                  <div class="mt-6 flex justify-center">
                    <button class="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center transition-all duration-300 transform hover:scale-[1.02]">
                      <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
                      Download Website
                    </button>
                  </div>
                </div>
                
                <div v-else class="text-center">
                  <div class="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="heroicons:code-bracket" class="w-12 h-12 text-cyan-400" />
                  </div>
                  <p class="text-gray-300 mb-2">Describe your website in the chat</p>
                  <p class="text-gray-500 text-sm">Your website preview will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon :name="feature.icon" class="w-6 h-6 text-cyan-400" />
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
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/20 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-cyan-400/5 opacity-70"></div>
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
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 inline-block" />
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
import LoginRegisterModal from "~/pages/LoginRegisterModal.vue";

export default {
  name: 'SiteForgePage',
  components: {LoginRegisterModal},

  data() {
    return {
      isAuthenticated: false,
      messages: [
        {
          role: 'system',
          content: 'Welcome to SiteForge! I can help you create a stunning static website through our conversation. Just describe what you want, and I\'ll generate it for you. Let\'s start with the basics - what kind of website would you like to build?',
          timestamp: new Date()
        }
      ],
      userInput: '',
      isProcessing: false,
      previewUrl: '',
      previewVisible: false,
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
        { icon: 'heroicons:chat-bubble-left-ellipsis', title: 'Conversational Design', description: 'Describe your website...' },
        { icon: 'heroicons:code-bracket', title: 'Clean, Optimized Code', description: 'Generated sites use modern HTML...' },
        { icon: 'heroicons:device-phone-mobile', title: 'Responsive Design', description: 'All sites work perfectly on...' },
        { icon: 'heroicons:rocket-launch', title: 'Ready to Deploy', description: 'Download your site as a zip file...' },
        { icon: 'heroicons:paint-brush', title: 'Customizable Themes', description: 'Choose from various design themes...' },
        { icon: 'heroicons:photo', title: 'Image Integration', description: 'Automatically sources and optimizes images...' }
      ],
      templates: [
        "I need a portfolio website for my photography business",
        "Create a personal blog with a minimal design",
        "I want an e-commerce site for selling handmade jewelry",
        "Build me a landing page for my new app"
      ]
    }
  },

  created() {
    useHead({
      title: 'SiteForge AI - Build Static Sites with AI',
      meta: [
        { name: 'description', content: 'Generate beautiful static websites through natural language conversation with SiteForge AI' }
      ]
    })
  },

  methods: {
    async sendMessage() {
      if (!this.userInput.trim() || this.isProcessing) return

      const userMessage = {
        role: 'user',
        content: this.userInput,
        timestamp: new Date()
      }

      this.messages.push(userMessage)
      this.userInput = ''
      this.isProcessing = true
      this.scrollToBottom()

      await new Promise(resolve => setTimeout(resolve, 1500))

      const aiResponse = this.generateAIResponse(userMessage.content)
      this.messages.push({ role: 'system', content: aiResponse, timestamp: new Date() })

      this.isProcessing = false
      this.scrollToBottom()

      if (this.messages.length > 4) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const random = Math.floor(Math.random() * this.siteTemplates.length)
        this.previewUrl = this.siteTemplates[random].preview
        this.previewVisible = true
      }
    },

    generateAIResponse(message) {
      const lower = message.toLowerCase()
      if (lower.includes('portfolio') || lower.includes('business')) {
        return "I'll create a professional portfolio site for you..."
      } else if (lower.includes('blog') || lower.includes('personal')) {
        return "A blog sounds great! I can create a clean design..."
      } else if (lower.includes('shop') || lower.includes('store') || lower.includes('ecommerce')) {
        return "I can help with an e-commerce site layout..."
      } else if (lower.includes('color') || lower.includes('style') || lower.includes('theme')) {
        return "I've updated the design with your color preferences..."
      } else if (lower.includes('image') || lower.includes('photo') || lower.includes('picture')) {
        return "I'll incorporate high-quality images in the design..."
      } else if (lower.includes('download') || lower.includes('deploy') || lower.includes('publish')) {
        return "Your website is ready to download!"
      } else {
        return "I'm designing your website based on your description..."
      }
    },

    scrollToBottom() {
      nextTick(() => {
        if (this.chatContainerRef) {
          this.chatContainerRef.scrollTop = this.chatContainerRef.scrollHeight
        }
      })
    },

    formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },

    handleKeyDown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        this.sendMessage()
      }
    },

    selectTemplate(template) {
      this.userInput = template
    },

    handleLogout() {
      this.isAuthenticated = false
    }
  }
}
</script>


<style scoped>
.animate-bounce {
  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-6px);
  }
}
</style>