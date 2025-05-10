<script setup>
useHead({
  title: 'Subhi Qudsi - Full-Stack Developer & AI Solutions Architect',
  meta: [
    { name: 'description', content: 'Independent developer specializing in software development, AI-driven architecture, team enablement, and infrastructure solutions' }
  ]
})

const features = [
  {
    icon: 'heroicons:code-bracket',
    title: 'Custom Software Development',
    description: 'Bespoke applications built with modern technologies to solve your unique business challenges'
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Web & Mobile Applications',
    description: 'Responsive web and cross-platform mobile solutions with exceptional user experiences'
  },
  {
    icon: 'heroicons:cpu-chip',
    title: 'AI-Driven System Architecture',
    description: 'Design of intelligent systems that combine scalable architecture with integrated AI capabilities'
  },
  {
    icon: 'heroicons:cube-transparent',
    title: 'System Architecture',
    description: 'Design and implementation of scalable, maintainable software architectures'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Cloud Infrastructure',
    description: 'Modern cloud solutions and deployment pipelines to accelerate your development lifecycle'
  },
  {
    icon: 'heroicons:user-group',
    title: 'Team Enablement',
    description: 'Training, coaching, and expertise to elevate your technical team\'s capabilities'
  }
]

const techCategories = [
  {
    name: 'Languages',
    items: [
      { name: 'Python', icon: 'logos:python' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' }
    ]
  },
  {
    name: 'Frameworks & Libraries',
    items: [
      { name: 'Django', icon: 'logos:django' },
      { name: 'FastAPI', icon: 'logos:fastapi' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'jQuery', icon: 'logos:jquery' },
      { name: 'NestJS', icon: 'logos:nestjs' }
    ]
  },
  {
    name: 'Databases',
    items: [
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MongoDB', icon: 'logos:mongodb' }
    ]
  },
  {
    name: 'DevOps & Infrastructure',
    items: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Kubernetes', icon: 'logos:kubernetes' },
      { name: 'Helm', icon: 'logos:helm' },
      { name: 'Git', icon: 'logos:git-icon' }
    ]
  },
  {
    name: 'Cloud Providers',
    items: [
      { name: 'AWS', icon: 'logos:aws' },
      { name: 'GCP', icon: 'logos:google-cloud' }
    ]
  },
  {
    name: 'Data Processing',
    items: [
      { name: 'Kafka', icon: 'logos:kafka-icon' },
      { name: 'Elasticsearch', icon: 'logos:elasticsearch' }
    ]
  }
]
</script>

<template>
  <div class="min-h-screen relative overflow-hidden">
      <!-- Gradient background effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-600/10 to-cyan-400/5 rounded-full blur-3xl"></div>
        <div class="absolute top-1/3 -left-20 w-60 h-60 border border-cyan-500/10 rounded-full"></div>
        <div class="absolute bottom-1/4 right-10 w-40 h-40 border border-blue-500/10 rounded-full"></div>
      </div>

      <!-- Hero Section -->
      <div class="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right" :delay="200">
              <div class="text-left">
                <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-6">
                  <Icon name="heroicons:cpu-chip" class="w-4 h-4 mr-2" />
                  AI Solutions & Technology Consultant
                </div>
                <h1 class="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                  Building <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Intelligent Solutions</span> for Modern Business
                </h1>
                <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                  I deliver end-to-end AI-driven architecture and technology solutions from conception to deployment, helping businesses transform ideas into intelligent digital experiences.
                </p>
                <div class="flex flex-col sm:flex-row gap-4">
                  <NuxtLink
                    to="/services"
                    class="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    Explore Services
                  </NuxtLink>
                  <NuxtLink
                    to="/contact"
                    class="px-8 py-4 rounded-xl font-semibold bg-gray-800/60 backdrop-blur-sm text-white hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-[1.02] border border-cyan-500/20"
                  >
                    Schedule Consultation
                  </NuxtLink>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" :delay="400">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-3xl"></div>
                <div class="relative overflow-hidden backdrop-blur-sm rounded-3xl p-1 border border-cyan-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Cloud Infrastructure and DevOps"
                    class="rounded-3xl w-full h-[450px] object-cover"
                    loading="lazy"
                    decoding="async"
                    width="1000"
                    height="450"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="py-20 sm:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-white mb-4">My Services & Expertise</h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to design, build, and maintain high-quality software systems
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation v-for="(feature, index) in features" :key="index" direction="up" :delay="150 * (index % 3 + 1)">
              <div class="relative group h-full">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                <div class="relative bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/10 group-hover:border-cyan-500/20 h-full transition-all duration-300">
                  <div class="relative">
                    <div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-colors duration-300">
                      <Icon :name="feature.icon" class="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-4">{{ feature.title }}</h3>
                    <p class="text-gray-300">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>


      <!-- Technologies & Stack Section -->
      <div class="py-16 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border-y border-cyan-500/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-3">My Technology Stack</h2>
            <p class="text-gray-300 max-w-3xl mx-auto">Experienced with a diverse range of technologies to build robust, scalable solutions</p>
          </div>
          
          <div class="space-y-10">
            <div v-for="(category, categoryIndex) in techCategories" :key="categoryIndex">
              <div class="mb-5">
                <h3 class="text-xl font-semibold text-cyan-400 mb-1">{{ category.name }}</h3>
                <div class="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>
              
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div v-for="(item, itemIndex) in category.items" :key="categoryIndex +'/'+ itemIndex" class="group">
                  <div class="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 hover:bg-gray-800/60 transition-all duration-300 h-full">
                    <div class="w-12 h-12 mb-3 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                      <Icon :name="item.icon" class="h-10 w-10" />
                    </div>
                    <span class="text-xs text-center text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Key Benefits Section -->
      <div class="py-16 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border-y border-cyan-500/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollAnimation direction="right">
                <h2 class="text-3xl font-bold text-white mb-6">Why Choose Me for Your Digital Journey</h2>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Icon name="heroicons:check" class="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <p class="ml-3 text-gray-300">End-to-end development services with consistent on-time, on-budget delivery</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Icon name="heroicons:check" class="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <p class="ml-3 text-gray-300">Technical excellence with senior developers having 7+ years of experience</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Icon name="heroicons:check" class="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <p class="ml-3 text-gray-300">Agile methodology with regular demos and transparent communication</p>
                  </li>
                  <li class="flex items-start">
                    <div class="flex-shrink-0 mt-1">
                      <div class="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Icon name="heroicons:check" class="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <p class="ml-3 text-gray-300">Long-term partnership approach with dedicated support and maintenance</p>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
            <ScrollAnimation direction="left">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-3xl"></div>
                <div class="relative overflow-hidden backdrop-blur-sm rounded-3xl p-1 border border-cyan-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Cloud Server Room"
                    class="rounded-3xl w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width="1000"
                    height="600"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="py-20 sm:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" :delay="400">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl"></div>
              <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/20 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-cyan-400/5 opacity-70"></div>
                <div class="relative">
                  <h2 class="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Business?</h2>
                  <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Schedule a free consultation to discuss your project needs and objectives.
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
    </div>
</template>

<style>
.animate-fade-in {
  animation: fadeIn 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-up {
  animation: fadeInUp 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Optimized Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 200ms ease-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Enhanced Scroll Animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition: all 800ms cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 