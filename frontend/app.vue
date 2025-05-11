<script setup>
import PageTransition from '~/components/PageTransition.vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  document.documentElement.classList.add('dark')
})

const navLinks = [
  { name: 'Home', path: '/', icon: 'heroicons:home' },
  { name: 'Services', path: '/services', icon: 'heroicons:server-stack' },
  { name: 'Portfolio', path: '/case-studies', icon: 'heroicons:document-chart-bar' },
  { name: 'SiteForge', path: '/site-forge', icon: 'heroicons:code-bracket-square' },
  { name: 'AI Chat', path: '/ai-chat', icon: 'heroicons:chat-bubble-left-right' },
  { name: 'Contact', path: '/contact', icon: 'heroicons:envelope' }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <!-- Navigation -->
    <nav class="bg-black/30 backdrop-blur-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="flex items-center space-x-2">
                <Icon name="mdi:brain" class="h-8 w-8 text-cyan-400" />
                <span class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  SubhiQudsi.dev
                </span>
              </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden lg:ml-10 lg:flex lg:space-x-8">
              <NuxtLink
                v-for="link in navLinks" 
                :key="link.name"
                :to="link.path"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-200 hover:text-cyan-400 hover:bg-cyan-900/20 rounded-md transition-colors"
                active-class="text-cyan-400 bg-cyan-900/30 border-l-2 border-cyan-400"
              >
                <Icon :name="link.icon" class="mr-2 h-5 w-5" />
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Contact button for desktop -->
          <div class="hidden lg:flex lg:items-center">
            <a 
              href="mailto:subhi@subhiqudsi.dev" 
              class="ml-8 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Get in Touch
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center lg:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-cyan-400 hover:bg-cyan-900/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              @click="toggleMenu"
            >
              <span class="sr-only">Open main menu</span>
              <Icon
                :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
                class="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden"
      >
        <div class="pt-2 pb-3 space-y-1 px-4">
          <NuxtLink
            v-for="link in navLinks" 
            :key="link.name"
            :to="link.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-cyan-400 hover:bg-cyan-900/20 transition-colors flex items-center"
            active-class="text-cyan-400 bg-cyan-900/30 border-l-2 border-cyan-400"
            @click="isMenuOpen = false"
          >
            <Icon :name="link.icon" class="mr-2 h-5 w-5" />
            {{ link.name }}
          </NuxtLink>
        </div>
        <div class="pt-4 pb-3 border-t border-cyan-500/20">
          <div class="px-4">
            <a 
              href="mailto:subhi@subhiqudsi.dev" 
              class="block text-center px-4 py-3 rounded-md shadow-sm text-sm font-medium text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-black/30 border-t border-cyan-500/20 mt-20">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <Icon name="mdi:brain" class="h-8 w-8 text-cyan-400" />
              <span class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                SubhiQudsi.dev
              </span>
            </div>
            <p class="mt-2 text-base text-gray-300">
              Based in Amman, Jordan, I transform businesses through innovative software development, team enablement, and modern infrastructure solutions. I help organizations build exceptional digital experiences worldwide.
            </p>
            <div class="mt-6 flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors">
                <Icon name="mdi:twitter" class="h-6 w-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors">
                <Icon name="mdi:linkedin" class="h-6 w-6" />
              </a>
              <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors">
                <Icon name="mdi:github" class="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Full-Stack Development
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Team Enablement
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  AI-Driven Architecture
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Cloud Infrastructure
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Partner Services
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul class="mt-4 space-y-3">
              <li>
                <NuxtLink to="/" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Services
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/case-studies" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Case Studies
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-base text-gray-300 hover:text-cyan-400 transition-colors">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-cyan-500/20 pt-8">
          <p class="text-base text-gray-400 text-center">
            &copy; {{ new Date().getFullYear() }} SubhiQudsi.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
