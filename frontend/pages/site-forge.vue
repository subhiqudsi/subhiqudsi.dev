<script setup>
useHead({
  title: 'SiteForge AI - Build Static Sites with AI',
  meta: [
    { name: 'description', content: 'Generate beautiful static websites through natural language conversation with SiteForge AI' }
  ]
})

// Reactive state for the chat
const messages = ref([
  {
    role: 'system',
    content: 'Welcome to SiteForge! I can help you create a stunning static website through our conversation. Just describe what you want, and I\'ll generate it for you. Let\'s start with the basics - what kind of website would you like to build?',
    timestamp: new Date()
  }
])
const userInput = ref('')
const isProcessing = ref(false)
const previewUrl = ref('')
const previewVisible = ref(false)
const chatContainerRef = ref(null)

// Example site templates to showcase
const siteTemplates = [
  {
    title: 'Business Portfolio',
    description: 'Professional and clean design for businesses or freelancers',
    preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Creative Agency',
    description: 'Bold and dynamic design for creative professionals',
    preview: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'E-commerce Store',
    description: 'Clean product layouts with conversion-focused design',
    preview: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Personal Blog',
    description: 'Minimalist design with focus on content and readability',
    preview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
]

// Feature list for marketing section
const features = [
  {
    icon: 'heroicons:chat-bubble-left-ellipsis',
    title: 'Conversational Design',
    description: 'Describe your website in natural language and watch it take shape in real-time'
  },
  {
    icon: 'heroicons:code-bracket',
    title: 'Clean, Optimized Code',
    description: 'Generated sites use modern HTML, CSS and JavaScript with best practices'
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Responsive Design',
    description: 'All sites work perfectly on desktop, tablet, and mobile devices'
  },
  {
    icon: 'heroicons:rocket-launch',
    title: 'Ready to Deploy',
    description: 'Download your site as a zip file, ready for deployment on any static hosting service'
  },
  {
    icon: 'heroicons:paint-brush',
    title: 'Customizable Themes',
    description: 'Choose from various design themes or describe your own custom style'
  },
  {
    icon: 'heroicons:photo',
    title: 'Image Integration',
    description: 'Automatically sources and optimizes images based on your content needs'
  }
]

// Simulated user message sending
const sendMessage = async () => {
  if (!userInput.value.trim() || isProcessing.value) return

  const userMessage = {
    role: 'user',
    content: userInput.value,
    timestamp: new Date()
  }
  
  messages.value.push(userMessage)
  userInput.value = ''
  isProcessing.value = true
  
  // Scroll to bottom of chat
  scrollToBottom()
  
  // Simulate AI thinking
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Simulate AI response
  const aiResponse = generateAIResponse(userMessage.content)
  messages.value.push({
    role: 'system',
    content: aiResponse,
    timestamp: new Date()
  })
  
  isProcessing.value = false
  scrollToBottom()
  
  // If we're far enough in the conversation, show a website preview
  if (messages.value.length > 4) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    previewUrl.value = siteTemplates[Math.floor(Math.random() * siteTemplates.length)].preview
    previewVisible.value = true
  }
}

// Simulate AI responses based on user input patterns
const generateAIResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase()
  
  if (lowerMessage.includes('portfolio') || lowerMessage.includes('business')) {
    return "I'll create a professional portfolio site for you. Would you like a minimalist design or something more colorful? What sections do you need - About, Services, Portfolio, Contact?"
  } else if (lowerMessage.includes('blog') || lowerMessage.includes('personal')) {
    return "A blog sounds great! I can create a clean, content-focused blog design. Would you like features like categories, featured posts, and a newsletter signup? What's the primary topic of your blog?"
  } else if (lowerMessage.includes('shop') || lowerMessage.includes('store') || lowerMessage.includes('ecommerce')) {
    return "I can help with an e-commerce site layout. What kind of products will you be selling? Would you prefer a grid layout or more image-focused design for your products?"
  } else if (lowerMessage.includes('color') || lowerMessage.includes('style') || lowerMessage.includes('theme')) {
    return "I've updated the design with your color preferences. Would you like to see a preview? I can adjust the styling further based on your feedback."
  } else if (lowerMessage.includes('image') || lowerMessage.includes('photo') || lowerMessage.includes('picture')) {
    return "I'll incorporate high-quality images in the design. Would you like me to focus on photography, illustrations, or a mix of both? I can arrange them in galleries, hero sections, or as background elements."
  } else if (lowerMessage.includes('download') || lowerMessage.includes('deploy') || lowerMessage.includes('publish')) {
    return "Your website is ready to download! You can deploy it to any static hosting service like Netlify, Vercel, or GitHub Pages. Would you like me to generate deployment instructions for any specific platform?"
  } else {
    return "I'm designing your website based on your description. Could you tell me more about the specific sections you'd like to include and any color preferences you have? This helps me create a site that perfectly matches your vision."
  }
}

// Scroll chat to bottom after messages update
const scrollToBottom = () => {
  nextTick(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
    }
  })
}

// Format chat timestamps
const formatTime = (date) => {
  return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
}

// Handle Enter key for sending messages
const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    sendMessage()
  }
}

// Template suggestions for quick starts
const templates = [
  "I need a portfolio website for my photography business",
  "Create a personal blog with a minimal design",
  "I want an e-commerce site for selling handmade jewelry",
  "Build me a landing page for my new app"
]

const selectTemplate = (template) => {
  userInput.value = template
}
</script>

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
        <!-- Hero Section -->
        <ScrollAnimation direction="down" :delay="200">
          <div class="text-center mb-16">
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