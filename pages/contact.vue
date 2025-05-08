<script setup>
useHead({
  title: 'Contact - Subhi Qudsi',
  meta: [
    { name: 'description', content: 'Get in touch with Subhi Qudsi for software development and team enablement solutions' }
  ]
})

const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
  services: {
    cloudInfrastructure: false,
    kubernetes: false,
    devopsCicd: false,
    microservices: false,
    other: false
  }
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const projectTypes = [
  { value: '', label: 'Select project type', disabled: true },
  { value: 'cloud-migration', label: 'Cloud Migration' },
  { value: 'infrastructure-optimization', label: 'Infrastructure Optimization' },
  { value: 'devops-implementation', label: 'DevOps Implementation' },
  { value: 'kubernetes-deployment', label: 'Kubernetes Deployment' },
  { value: 'ci-cd-pipeline', label: 'CI/CD Pipeline Setup' },
  { value: 'security-compliance', label: 'Security & Compliance' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' }
]

const budgetRanges = [
  { value: '', label: 'Select budget range', disabled: true },
  { value: 'under-25k', label: 'Under $25,000' },
  { value: '25k-50k', label: 'S25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: '100k-250k', label: '$100,000 - $250,000' },
  { value: 'over-250k', label: 'Over $250,000' },
  { value: 'not-sure', label: 'Not sure yet' }
]

const officeLocations = [
  {
    city: 'Amman',
    address: 'Amman, Jordan',
    postalCode: '',
    phone: '+962 79 964 5774',
    email: 'subhi@subhiqudsi.dev'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    submitStatus.value = 'success'
    
    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'object') {
        Object.keys(form[key]).forEach(nestedKey => {
          form[key][nestedKey] = false
        })
      } else {
        form[key] = ''
      }
    })
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    
    // Auto-reset status after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  }
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
        <!-- Header -->
        <ScrollAnimation direction="down" :delay="200">
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-4">
              <Icon name="heroicons:chat-bubble-left-right" class="w-4 h-4 mr-2" />
              Enterprise Solutions
            </div>
            <h1 class="text-5xl font-bold text-white mb-6 leading-tight">
              Let's Discuss Your <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Cloud Strategy</span>
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Speak with me to explore how I can help accelerate your cloud journey
            </p>
          </div>
        </ScrollAnimation>

        <!-- Form Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div class="lg:col-span-2">
            <ScrollAnimation direction="up" :delay="300">
              <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/10">
                <h2 class="text-2xl font-semibold text-white mb-8 flex items-center">
                  <Icon name="heroicons:document-text" class="w-6 h-6 text-cyan-400 mr-2" />
                  Project Inquiry Form
                </h2>

                <!-- Status Alert -->
                <div v-if="submitStatus === 'success'" class="mb-8 bg-green-900/30 text-green-400 p-4 rounded-xl border border-green-500/20 flex items-start">
                  <Icon name="heroicons:check-circle" class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Thank you for your inquiry!</p>
                    <p class="text-sm mt-1">I've received your message and will contact you within 1 business day.</p>
                  </div>
                </div>

                <div v-if="submitStatus === 'error'" class="mb-8 bg-red-900/30 text-red-400 p-4 rounded-xl border border-red-500/20 flex items-start">
                  <Icon name="heroicons:exclamation-circle" class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p class="font-medium">Something went wrong</p>
                    <p class="text-sm mt-1">Please try again or contact me directly at subhi@subhiqudsi.dev</p>
                  </div>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Contact Information -->
                  <div>
                    <h3 class="text-lg font-medium text-white mb-4">Contact Information</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                        <label for="firstName" class="block text-sm font-medium text-gray-300">First Name *</label>
                        <input
                          id="firstName"
                          v-model="form.firstName"
                          type="text"
                          required
                          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                        />
                      </div>
                      <div class="space-y-2">
                        <label for="lastName" class="block text-sm font-medium text-gray-300">Last Name *</label>
                        <input
                          id="lastName"
                          v-model="form.lastName"
                          type="text"
                          required
                          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                        />
                      </div>
                    </div>
                    
                    <div class="mt-6 space-y-2">
                      <label for="company" class="block text-sm font-medium text-gray-300">Company Name *</label>
                      <input
                        id="company"
                        v-model="form.company"
                        type="text"
                        required
                        class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                      />
                    </div>
                    
                    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-300">Email *</label>
                        <input
                          id="email"
                          v-model="form.email"
                          type="email"
                          required
                          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                        />
                      </div>
                      <div class="space-y-2">
                        <label for="phone" class="block text-sm font-medium text-gray-300">Phone</label>
                        <input
                          id="phone"
                          v-model="form.phone"
                          type="tel"
                          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Project Information -->
                  <div class="pt-6 border-t border-gray-700">
                    <h3 class="text-lg font-medium text-white mb-4">Project Information</h3>
                    
                    <div class="space-y-2">
                      <label for="projectType" class="block text-sm font-medium text-gray-300">Project Type *</label>
                      <select
                        id="projectType"
                        v-model="form.projectType"
                        required
                        class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                      >
                        <option 
                          v-for="option in projectTypes" 
                          :key="option.value" 
                          :value="option.value"
                          :disabled="option.disabled"
                        >
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                    
                    <div class="mt-6 space-y-2">
                      <label for="budget" class="block text-sm font-medium text-gray-300">Budget Range</label>
                      <select
                        id="budget"
                        v-model="form.budget"
                        class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                      >
                        <option 
                          v-for="option in budgetRanges" 
                          :key="option.value" 
                          :value="option.value"
                          :disabled="option.disabled"
                        >
                          {{ option.label }}
                        </option>
                      </select>
                    </div>
                    
                    <div class="mt-6 space-y-4">
                      <label class="block text-sm font-medium text-gray-300">Services of Interest</label>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="flex items-center">
                          <input
                            id="cloudInfrastructure"
                            v-model="form.services.cloudInfrastructure"
                            type="checkbox"
                            class="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900"
                          />
                          <label for="cloudInfrastructure" class="ml-3 text-sm text-gray-300">Cloud Infrastructure</label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="kubernetes"
                            v-model="form.services.kubernetes"
                            type="checkbox"
                            class="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900"
                          />
                          <label for="kubernetes" class="ml-3 text-sm text-gray-300">Kubernetes</label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="devopsCicd"
                            v-model="form.services.devopsCicd"
                            type="checkbox"
                            class="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900"
                          />
                          <label for="devopsCicd" class="ml-3 text-sm text-gray-300">DevOps & CI/CD</label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="microservices"
                            v-model="form.services.microservices"
                            type="checkbox"
                            class="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900"
                          />
                          <label for="microservices" class="ml-3 text-sm text-gray-300">Microservices Architecture</label>
                        </div>
                        <div class="flex items-center">
                          <input
                            id="other"
                            v-model="form.services.other"
                            type="checkbox"
                            class="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-700 rounded bg-gray-900"
                          />
                          <label for="other" class="ml-3 text-sm text-gray-300">Other</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="mt-6 space-y-2">
                      <label for="message" class="block text-sm font-medium text-gray-300">Project Description *</label>
                      <textarea
                        id="message"
                        v-model="form.message"
                        rows="5"
                        required
                        placeholder="Please share details about your project, challenges, and goals..."
                        class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                      ></textarea>
                    </div>
                  </div>

                  <div class="pt-6">
                    <button
                      type="submit"
                      :disabled="isSubmitting"
                      class="w-full px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 flex justify-center items-center"
                    >
                      <Icon v-if="isSubmitting" name="heroicons:arrow-path" class="w-5 h-5 mr-2 animate-spin" />
                      {{ isSubmitting ? 'Submitting...' : 'Submit Inquiry' }}
                    </button>
                    <p class="text-sm text-gray-400 mt-3 text-center">
                      I'll respond to your inquiry within 1 business day
                    </p>
                  </div>
                </form>
              </div>
            </ScrollAnimation>
          </div>

          <!-- Contact Information -->
          <div>
            <ScrollAnimation direction="up" :delay="500">
              <div class="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/10 sticky top-24">
                <h2 class="text-2xl font-semibold text-white mb-8 flex items-center">
                  <Icon name="heroicons:building-office" class="w-6 h-6 text-cyan-400 mr-2" />
                  Contact Us
                </h2>

                <div class="space-y-8">
                  <div v-for="(location, index) in officeLocations" :key="index" class="pb-6 border-b border-gray-700 last:border-0 last:pb-0">
                    <h3 class="text-lg font-medium text-white mb-2">{{ location.city }}</h3>
                    <div class="space-y-4">
                      <div class="flex items-start">
                        <div class="flex-shrink-0 p-2 rounded-lg bg-gray-900/70 text-cyan-400">
                          <Icon name="heroicons:map-pin" class="w-5 h-5" />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-300">
                            {{ location.address }}<br>
                            {{ location.postalCode }}
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex-shrink-0 p-2 rounded-lg bg-gray-900/70 text-cyan-400">
                          <Icon name="heroicons:phone" class="w-5 h-5" />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-300">
                            {{ location.phone }}
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex-shrink-0 p-2 rounded-lg bg-gray-900/70 text-cyan-400">
                          <Icon name="heroicons:envelope" class="w-5 h-5" />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-300">
                            {{ location.email }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Social Media -->
                <div class="mt-8 pt-6 border-t border-gray-700">
                  <h3 class="text-lg font-medium text-white mb-4">Connect With Me</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="p-3 rounded-lg bg-gray-900/70 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      <Icon name="mdi:twitter" class="w-5 h-5" />
                    </a>
                    <a href="#" class="p-3 rounded-lg bg-gray-900/70 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      <Icon name="mdi:linkedin" class="w-5 h-5" />
                    </a>
                    <a href="#" class="p-3 rounded-lg bg-gray-900/70 text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      <Icon name="mdi:github" class="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <!-- FAQ Section -->
        <ScrollAnimation direction="up" :delay="600">
          <div class="mb-24">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p class="text-gray-300 max-w-3xl mx-auto">
                Common questions about my services and engagement process
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10">
                <h3 class="text-xl font-semibold text-white mb-3 flex items-start">
                  <Icon name="heroicons:question-mark-circle" class="w-6 h-6 text-cyan-400 mr-2 flex-shrink-0" />
                  <span>What is your typical engagement process?</span>
                </h3>
                <p class="text-gray-300">
                  My process begins with a discovery call to understand your needs and objectives. I then provide a detailed proposal with recommendations, timelines, and pricing. Once approved, I execute the project in iterative phases with regular demonstrations, feedback cycles, and thorough knowledge transfer at each stage.
                </p>
              </div>

              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10">
                <h3 class="text-xl font-semibold text-white mb-3 flex items-start">
                  <Icon name="heroicons:question-mark-circle" class="w-6 h-6 text-cyan-400 mr-2 flex-shrink-0" />
                  <span>How does your Team Enablement service work?</span>
                </h3>
                <p class="text-gray-300">
                  My Team Enablement service begins with a comprehensive assessment of your team's current capabilities, structure, and workflows. I then create a customized program that may include training workshops, pair programming sessions, code reviews, and leadership mentoring. My goal is to elevate your team's technical skills and processes while ensuring knowledge transfer throughout the engagement.
                </p>
              </div>

              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10">
                <h3 class="text-xl font-semibold text-white mb-3 flex items-start">
                  <Icon name="heroicons:question-mark-circle" class="w-6 h-6 text-cyan-400 mr-2 flex-shrink-0" />
                  <span>Do you work with remote or distributed teams?</span>
                </h3>
                <p class="text-gray-300">
                  Absolutely! I have extensive experience working with distributed teams across different time zones. I use collaborative tools and methodologies specifically designed for remote work, ensuring effective communication and seamless project delivery regardless of location. My team enablement services are also optimized for remote and hybrid work environments.
                </p>
              </div>

              <div class="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10">
                <h3 class="text-xl font-semibold text-white mb-3 flex items-start">
                  <Icon name="heroicons:question-mark-circle" class="w-6 h-6 text-cyan-400 mr-2 flex-shrink-0" />
                  <span>What technologies and frameworks do you specialize in?</span>
                </h3>
                <p class="text-gray-300">
                  I specialize in modern web and mobile development technologies including React, Vue, Node.js, Python, and cloud infrastructure on AWS, Azure, and Google Cloud. I also have expertise in DevOps practices, CI/CD implementation, and microservice architectures. For specific technology needs, please contact me to discuss your project requirements in detail.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  </PageTransition>
</template>

<style>
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

/* Form Animations */
.form-input {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Contact Card Animations */
.contact-card {
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Social Link Animations */
.social-link {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.social-link:hover {
  transform: translateY(-4px) scale(1.1);
}
</style> 