<script setup>
useHead({
  title: 'AI Chat with Subhi Qudsi',
  meta: [
    { name: 'description', content: 'Chat with an AI assistant that knows about Subhi Qudsi\'s expertise, background, and approach to software development' }
  ]
})

// Reactive state for the chat
const messages = ref([
  {
    role: 'system',
    content: 'Hi there! I\'m SubhiBot, an AI assistant with knowledge about Subhi Qudsi\'s work, expertise, and approach to software development. How can I help you learn more about Subhi\'s skills or services today?',
    timestamp: new Date()
  }
])
const userInput = ref('')
const isProcessing = ref(false)
const chatContainerRef = ref(null)

// Subhi's key information for the AI to reference
const subhiInfo = {
  expertise: [
    'Full-stack development with Python, JavaScript, and TypeScript',
    'AI-driven system architecture and integration',
    'Cloud infrastructure and DevOps (AWS, Azure, Kubernetes)',
    'Team enablement and technical mentoring',
    'Legacy system modernization',
    'Microservices architecture',
    'Mobile application development'
  ],
  experience: [
    '15+ years of software development experience',
    'Led teams of 3-10 engineers on various projects',
    'Worked with clients across banking, e-commerce, education, and government sectors',
    'Expertise in both startup environments and enterprise-scale projects',
    'Extensive experience with cross-functional team leadership'
  ],
  approach: [
    'Focus on clean, maintainable code architecture',
    'User-centered design thinking',
    'Agile methodology with regular demos and feedback cycles',
    'Knowledge transfer and documentation emphasis',
    'Prioritizes security and performance optimization',
    'Solutions that balance technical excellence with business needs'
  ],
  education: [
    'Computer Science degree',
    'Continuous learning through professional development',
    'Regular participation in tech conferences and workshops'
  ],
  personalInfo: [
    'Based in Amman, Jordan',
    'Languages: English (fluent), Arabic (native)',
    'Available for remote work worldwide',
    'Passionate about mentoring junior developers'
  ]
}

// Suggested questions for users to ask
const suggestedQuestions = [
  "What technologies does Subhi specialize in?",
  "How does Subhi approach new projects?",
  "Can you tell me about Subhi's team enablement services?",
  "What industries has Subhi worked with?",
  "How does Subhi integrate AI into development projects?",
  "What's Subhi's experience with cloud infrastructure?",
  "How does Subhi handle legacy system modernization?"
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
}

// Generate AI responses based on user input patterns
const generateAIResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase()
  
  // Technology and skills responses
  if (lowerMessage.includes('technolog') || lowerMessage.includes('skill') || lowerMessage.includes('stack')) {
    return `Subhi specializes in full-stack development with expertise in Python (Django), JavaScript/TypeScript (React, Vue, Node.js), and modern cloud infrastructure. He's particularly skilled in AI-driven architectures, integrating machine learning models with scalable applications. His tech stack includes Docker, Kubernetes, AWS, and Azure for deployment and infrastructure management. Recently, he's been focused on developing AI-powered solutions that solve real business problems through intelligent automation and data processing.`
  } 
  
  // AI-related questions
  else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('artificial intelligence')) {
    return `Subhi has deep expertise in AI-driven system architecture. He specializes in designing systems that integrate AI capabilities into scalable applications. This includes developing data pipelines for efficient model training, implementing real-time and batch inference systems, and creating architectures that allow for continuous model improvement. He takes a pragmatic approach to AI integration, focusing on solutions that deliver tangible business value rather than implementing AI for its own sake.`
  } 
  
  // Project approach
  else if (lowerMessage.includes('approach') || lowerMessage.includes('methodology') || lowerMessage.includes('process')) {
    return `Subhi approaches projects with a balance of technical excellence and business pragmatism. He typically begins with a thorough discovery phase to understand core requirements and constraints. He's an advocate for clean, maintainable code architecture and follows agile methodologies with regular demos and client feedback. What sets his approach apart is his emphasis on knowledge transfer - he ensures clients understand the technical decisions made and provides comprehensive documentation. This collaborative style helps create solutions that not only meet immediate needs but are sustainable for the long term.`
  } 
  
  // Team enablement
  else if (lowerMessage.includes('team') || lowerMessage.includes('enablement') || lowerMessage.includes('mentor')) {
    return `Subhi's team enablement services focus on elevating engineering teams through technical assessment, custom training programs, and leadership development. He begins with a comprehensive evaluation of the team's current capabilities, workflows, and pain points. Based on this assessment, he creates tailored programs that might include hands-on workshops, pair programming sessions, code reviews, and technical mentoring. His goal is to not just improve technical skills but to help teams establish better processes, communication patterns, and engineering cultures that lead to sustainable high performance.`
  } 
  
  // Experience and background
  else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('history')) {
    return `Subhi has over 15 years of software development experience across diverse industries. He's worked with financial institutions like Ahlibank on their digital account creation system, e-commerce platforms like Ezad.ae for their auction system, and educational institutions through Doroob.sa. His experience spans from startup environments to enterprise-scale projects, giving him a versatile perspective on software development challenges. He's particularly skilled at coming into existing projects, quickly understanding complex codebases, and implementing strategic improvements.`
  } 
  
  // Industries and sectors
  else if (lowerMessage.includes('industr') || lowerMessage.includes('sector') || lowerMessage.includes('client')) {
    return `Subhi has worked across multiple industries including banking (Ahlibank), e-commerce (Ezad.ae auction platform), education (Doroob.sa), and government sectors (Embassy fuel tracking system). This diverse experience allows him to bring cross-industry insights to his projects. For example, the security practices required in banking applications inform his approach to data protection in other sectors, while the user experience focus from e-commerce informs his design thinking across all projects.`
  } 
  
  // Cloud and infrastructure
  else if (lowerMessage.includes('cloud') || lowerMessage.includes('infrastructure') || lowerMessage.includes('devops')) {
    return `Subhi has extensive experience with cloud infrastructure and DevOps practices. He's skilled in AWS and Azure cloud platforms, with particular expertise in containerization using Docker and orchestration with Kubernetes. He designs cloud architectures that prioritize scalability, security, and cost-efficiency. For deployment, he implements CI/CD pipelines that automate testing and deployment processes. His DevOps philosophy centers around creating infrastructure as code, ensuring environments are consistent, reproducible, and well-documented.`
  } 
  
  // Legacy systems
  else if (lowerMessage.includes('legacy') || lowerMessage.includes('modernization') || lowerMessage.includes('upgrade')) {
    return `Subhi takes a pragmatic approach to legacy system modernization. Rather than suggesting complete rewrites (which are often risky), he typically advocates for incremental modernization strategies. This might involve gradually extracting functionality into microservices, improving test coverage, implementing API layers over legacy systems, or creating clear boundaries between old and new code. His experience with OpenedX at Doroob.sa demonstrates his ability to maintain legacy applications while strategically modernizing components over time.`
  } 
  
  // Communication and working style
  else if (lowerMessage.includes('communication') || lowerMessage.includes('work style') || lowerMessage.includes('collaboration')) {
    return `Subhi places a high value on clear, transparent communication. His working style is collaborative, with an emphasis on regular demos, feedback cycles, and knowledge sharing. He's known for his ability to translate complex technical concepts into language that non-technical stakeholders can understand. When leading teams, he focuses on creating an environment where people feel comfortable sharing ideas and concerns. He's adaptable to different communication styles and tools, allowing him to integrate effectively with existing team structures.`
  } 
  
  // Contact or engagement questions
  else if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('engage') || lowerMessage.includes('work with')) {
    return `You can contact Subhi directly via email at subhi@subhiqudsi.dev to discuss your project needs. He typically begins with a discovery call to understand your specific requirements and objectives. From there, he can provide a proposal outlining approach, timeline, and pricing. Subhi is available for both project-based engagements and ongoing consulting arrangements. He works remotely with clients worldwide and can adapt to different time zones as needed.`
  } 
  
  // Default response for other queries
  else {
    return `That's an interesting question about Subhi. While I don't have specific information about that aspect, I can tell you that Subhi is an experienced full-stack developer and technology consultant specializing in custom software development, AI-driven architectures, team enablement, and cloud infrastructure. He has 15+ years of experience working across various industries and focuses on creating maintainable, scalable solutions that align with business objectives. Would you like to know more about any of these areas specifically?`
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

// Select a suggested question
const selectQuestion = (question) => {
  userInput.value = question
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
              <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 mr-2" />
              AI Assistant
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Chat with <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">SubhiBot</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn more about Subhi's expertise, background, and approach to software development
              through this AI assistant
            </p>
          </div>
        </ScrollAnimation>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <!-- Chat Section -->
          <div class="lg:col-span-2">
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 overflow-hidden">
              <div class="p-6 border-b border-cyan-500/10 bg-gray-800/60">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3">
                    <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 class="text-xl font-semibold text-white">SubhiBot</h2>
                    <p class="text-gray-400 text-sm">AI assistant with knowledge about Subhi Qudsi</p>
                  </div>
                </div>
              </div>
              
              <!-- Messages -->
              <div ref="chatContainerRef" class="h-[500px] overflow-y-auto p-4 space-y-4">
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
                      <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 text-white" />
                    </div>
                    <div v-else class="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <Icon name="heroicons:user" class="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="font-medium text-white">
                          {{ message.role === 'user' ? 'You' : 'SubhiBot' }}
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
                      <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 text-white" />
                    </div>
                    <div class="flex space-x-1">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                      <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                      <div class="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Input -->
              <div class="p-4 border-t border-cyan-500/10 bg-gray-800/80">
                <div class="flex">
                  <textarea
                    v-model="userInput"
                    @keydown="handleKeyDown"
                    placeholder="Ask anything about Subhi Qudsi..."
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
          </div>
          
          <!-- Information Sidebar -->
          <div class="lg:col-span-1">
            <!-- Suggested Questions -->
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 p-6 mb-8">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <Icon name="heroicons:question-mark-circle" class="w-5 h-5 text-cyan-400 mr-2" />
                Suggested Questions
              </h3>
              <ul class="space-y-3">
                <li v-for="(question, index) in suggestedQuestions" :key="index">
                  <button 
                    @click="selectQuestion(question)"
                    class="text-left w-full px-4 py-3 rounded-lg bg-gray-700/40 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 border border-transparent hover:border-cyan-500/30"
                  >
                    {{ question }}
                  </button>
                </li>
              </ul>
            </div>
            
            <!-- About SubhiBot -->
            <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl border border-cyan-500/10 p-6">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <Icon name="heroicons:information-circle" class="w-5 h-5 text-cyan-400 mr-2" />
                About This AI Assistant
              </h3>
              <div class="text-gray-300 space-y-4">
                <p>
                  SubhiBot is an AI assistant with knowledge about Subhi Qudsi's expertise, background, and approach to software development.
                </p>
                <p>
                  This is a simulated AI experience designed to showcase the potential of AI assistants in providing information about professional services.
                </p>
                <p>
                  For direct communication with Subhi, please use the contact page to send an email or schedule a consultation.
                </p>
              </div>
              
              <div class="mt-6 pt-6 border-t border-gray-700">
                <h4 class="font-medium text-white mb-2">SubhiBot knows about:</h4>
                <ul class="text-gray-300 space-y-2">
                  <li class="flex items-start">
                    <Icon name="heroicons:check" class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Technical expertise and skills</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:check" class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Project approach and methodology</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:check" class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Experience across industries</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:check" class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Team enablement services</span>
                  </li>
                  <li class="flex items-start">
                    <Icon name="heroicons:check" class="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span>AI and cloud architecture</span>
                  </li>
                </ul>
              </div>
              
              <div class="mt-6 flex justify-center">
                <NuxtLink
                  to="/contact"
                  class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 flex items-center transition-all duration-300"
                >
                  <Icon name="heroicons:envelope" class="w-5 h-5 mr-2" />
                  Contact Subhi Directly
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Features/Expertise Section -->
        <ScrollAnimation direction="up" :delay="300">
          <div class="mb-24">
            <div class="text-center mb-16">
              <h2 class="text-3xl font-bold text-white mb-4">Areas of Expertise</h2>
              <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                Subhi specializes in these key technology areas. Ask SubhiBot for more details!
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:code-bracket" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
                <p class="text-gray-300">End-to-end development with Python, JavaScript/TypeScript, and modern frameworks for web and mobile applications.</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:cpu-chip" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">AI-Driven Architecture</h3>
                <p class="text-gray-300">Design and implementation of intelligent systems that combine scalable architecture with integrated AI capabilities.</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:cloud" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p class="text-gray-300">Design and implementation of robust cloud solutions using AWS, Azure, Docker, and Kubernetes for scalable applications.</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:user-group" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Team Enablement</h3>
                <p class="text-gray-300">Comprehensive coaching and training programs to elevate engineering teams' capabilities and establish better processes.</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:arrows-right-left" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Legacy Modernization</h3>
                <p class="text-gray-300">Pragmatic approaches to modernizing legacy systems through incremental improvements and strategic architecture decisions.</p>
              </div>
              
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/10 transition-all duration-300 hover:border-cyan-500/20 hover:transform hover:translate-y-[-4px]">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                  <Icon name="heroicons:cog-6-tooth" class="w-6 h-6 text-cyan-400" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Technical Leadership</h3>
                <p class="text-gray-300">Guiding teams and projects with technical vision, strategic planning, and clear direction for complex software initiatives.</p>
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
                <h2 class="text-3xl font-bold text-white mb-4">Ready to Work with Subhi?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Learn more about how Subhi can help with your project through a personal consultation.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                  <NuxtLink
                    to="/contact"
                    class="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    Schedule Consultation
                    <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2 inline-block" />
                  </NuxtLink>
                  <NuxtLink
                    to="/case-studies"
                    class="px-8 py-4 rounded-xl font-semibold bg-gray-800/60 backdrop-blur-sm text-white hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-[1.02] border border-cyan-500/20"
                  >
                    View Case Studies
                  </NuxtLink>
                </div>
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