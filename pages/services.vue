<script setup>
useHead({
  title: 'Services - Subhi Qudsi',
  meta: [
    { name: 'description', content: 'Technology solutions: Full-stack development, team enablement, and cloud services' }
  ]
})

const primaryServices = [
  {
    icon: 'heroicons:code-bracket',
    title: 'Full-Stack Development',
    description: 'End-to-end software development services from concept to deployment and beyond',
    features: [
      'Custom Web & Mobile Applications',
      'Enterprise Software Solutions',
      'API Development & Integration',
      'Legacy System Modernization'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    icon: 'heroicons:user-group',
    title: 'Team Enablement',
    description: 'Comprehensive team development and coaching to elevate your engineering capabilities',
    features: [
      'Technical Skills Assessment',
      'Custom Training Programs',
      'Leadership Development',
      'Agile Practice Implementation'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    icon: 'heroicons:arrow-path',
    title: 'Cloud Infrastructure',
    description: 'Modern cloud solutions to accelerate development and application deployment',
    features: [
      'Cloud Architecture & Migration',
      'Deployment Pipeline Implementation',
      'Infrastructure Planning',
      'Container Solutions'
    ],
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
]

const additionalServices = [
  {
  icon: 'heroicons:cpu-chip',
  title: 'AI-Driven System Architecture',
  description: 'Design of intelligent systems that combine scalable architecture with integrated AI capabilities',
  features: [
    'Modular Microservices with AI-First Design',
    'Data Pipelines for Ingestion, Processing, and Feature Engineering',
    'Scalable Model Serving for Real-Time & Batch Inference',
    'Monitoring & Continuous Model Improvement'
  ]
},
  {
    icon: 'heroicons:arrow-path',
    title: 'DevOps & CI/CD',
    description: 'Streamlined development workflows and automated deployment pipelines',
    features: [
      'CI/CD Pipeline Implementation',
      'Build Process Optimization',
      'Deployment Automation',
      'Testing Integration'
    ]
  },
  {
    icon: 'heroicons:user-circle',
    title: 'CTO as a Service',
    description: 'On-demand executive technology leadership and strategic guidance',
    features: [
      'Technology Strategy Development',
      'Architecture & Roadmap Planning',
      'Vendor Selection & Management',
      'Executive-level Technology Representation'
    ]
  },
  {
    icon: 'heroicons:document-check',
    title: 'Technical Interviews',
    description: 'Expert-led technical assessment services for hiring top talent',
    features: [
      'Custom Interview Design',
      'Technical Skills Evaluation',
      'Pair Programming Sessions',
      'Comprehensive Candidate Assessment Reports'
    ]
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Technical Mentoring',
    description: 'One-on-one guidance for key technical personnel in your organization',
    features: [
      'Junior - Senior Developer Mentoring',
      'Architect Role Development',
      'Growth & Training Recommendations',
      'Team Structure Optimization'
    ]
  },
  {
    icon: 'heroicons:academic-cap',
    title: 'Toolchain Implementation',
    description: 'Setup and optimization of development and collaboration tools',
    features: [
      'Development Environment Setup',
      'Version Control Systems',
      'Project Management Tools',
      'Communication & Collaboration Platforms'
    ]
  }
]

const methodologies = [
  {
    title: 'Discovery',
    description: 'Thorough needs assessment, requirement gathering, and project scoping'
  },
  {
    title: 'Analysis & Design',
    description: 'Technical analysis, architecture planning, and solution design'
  },
  {
    title: 'Development',
    description: 'Agile implementation with regular demonstrations and feedback cycles'
  },
  {
    title: 'Delivery & Support',
    description: 'Smooth deployment, knowledge transfer, and ongoing enhancement'
  }
]
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
        <!-- Header -->
        <ScrollAnimation direction="down" :delay="200">
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-4">
              <Icon name="heroicons:rocket-launch" class="w-4 h-4 mr-2" />
              Enterprise Solutions
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Full-Stack <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Technology Solutions</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development, technical analysis, and infrastructure services 
              to power your digital business initiatives
            </p>
          </div>
        </ScrollAnimation>

        <!-- Primary Services -->
        <div class="mb-24">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollAnimation 
              v-for="(service, index) in primaryServices" 
              :key="index"
              direction="up"
              :delay="200 * (index + 1)"
            >
              <div class="relative group h-full">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                <div class="relative h-full bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/10 group-hover:border-cyan-500/20 overflow-hidden transition-all duration-300">
                  <div class="relative z-20">
                    <div class="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-colors duration-300">
                      <Icon :name="service.icon" class="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 class="text-2xl font-semibold text-white mb-4">{{ service.title }}</h3>
                    <p class="text-gray-300 mb-6">{{ service.description }}</p>
                    <ul class="space-y-3 mb-8">
                      <li 
                        v-for="(feature, featureIndex) in service.features" 
                        :key="featureIndex"
                        class="flex items-start text-gray-300 group-hover:text-white transition-colors duration-200"
                      >
                        <Icon name="heroicons:check-circle" class="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{{ feature }}</span>
                      </li>
                    </ul>
                    <div class="mt-auto pt-6 border-t border-cyan-500/10">
                      <NuxtLink
                        to="/contact"
                        class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-200"
                      >
                        Schedule Consultation
                        <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-1" />
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 h-full w-full">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/30 z-10"></div>
                    <img 
                      :src="service.image.replace('w=2070&q=80', 'w=800&q=50')"
                      :alt="service.title"
                      class="absolute bottom-0 left-0 right-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <!-- Our Methodology Section -->
        <ScrollAnimation direction="up" :delay="300">
          <div class="mb-24 py-16 px-8 bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-cyan-500/10">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-white mb-4">My Methodology</h2>
              <p class="text-gray-300 max-w-3xl mx-auto">
                I follow a proven approach to deliver reliable, scalable solutions that meet your business needs
              </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div v-for="(methodology, index) in methodologies" :key="index" class="relative">
                <div class="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {{ index + 1 }}
                </div>
                <div class="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 h-full">
                  <h3 class="text-xl font-semibold text-white mb-3">{{ methodology.title }}</h3>
                  <p class="text-gray-300">{{ methodology.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <!-- Additional Services -->
        <div class="mb-24">
          <ScrollAnimation direction="down" :delay="200">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-white mb-4">Additional Services</h2>
              <p class="text-gray-300 max-w-3xl mx-auto">
                Complementary services to enhance your software development and digital transformation
              </p>
            </div>
          </ScrollAnimation>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation 
              v-for="(service, index) in additionalServices" 
              :key="index"
              direction="up"
              :delay="150 * (index + 1)"
            >
              <div class="relative group h-full">
                <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-xl group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                <div class="relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 group-hover:border-cyan-500/20 h-full transition-all duration-300">
                  <div class="flex items-start">
                    <div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-colors duration-300 flex-shrink-0">
                      <Icon :name="service.icon" class="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold text-white mb-2">{{ service.title }}</h3>
                      <p class="text-gray-300 mb-4">{{ service.description }}</p>
                      <ul class="space-y-2">
                        <li 
                          v-for="(feature, featureIndex) in service.features" 
                          :key="featureIndex"
                          class="flex items-start text-gray-300 group-hover:text-white transition-colors duration-200"
                        >
                          <Icon name="heroicons:check" class="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                          <span>{{ feature }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <!-- CTA Section -->
        <ScrollAnimation direction="up" :delay="400">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-3xl"></div>
            <div class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-cyan-500/20 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-600/5 to-cyan-400/5 opacity-70"></div>
              <div class="relative">
                <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Next Project?</h2>
                <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Schedule a free consultation with our senior engineers to discuss your specific needs and objectives.
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

/* Service Card Animations */
.service-card {
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
</style> 