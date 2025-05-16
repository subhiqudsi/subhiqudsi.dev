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
          </div>
        </button>
      </div>

      <!-- Step Content -->
      <div v-if="steps[currentStep]" class="mb-8">
        <!-- Step 1: Generate Style -->
        <div v-if="currentStep === 0">
          <h3 class="text-2xl font-bold text-white mb-4">Define Your Style</h3>
          <p class="text-gray-300 mb-6">Choose a visual style that reflects your brand identity. This will guide the overall look and feel of your website.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div 
              v-for="(style, index) in styleOptions" 
              :key="index"
              :class="[
                'p-4 rounded-xl border transition-all duration-200 cursor-pointer',
                selectedStyle === index 
                  ? 'border-cyan-500/50 bg-cyan-500/10' 
                  : 'border-gray-700/50 hover:border-gray-600/50'
              ]"
              @click="selectedStyle = index"
            >
              <div class="aspect-video bg-gray-700/50 rounded-lg mb-3 overflow-hidden">
                <div class="w-full h-full bg-gradient-to-br p-3 flex items-center justify-center"
                     :class="style.gradient">
                  <Icon :name="style.icon" class="w-8 h-8" :class="style.iconColor" />
                </div>
              </div>
              <h4 class="text-white font-medium mb-1">{{ style.name }}</h4>
              <p class="text-gray-400 text-sm">{{ style.description }}</p>
            </div>
          </div>

          <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
            <h4 class="text-white font-medium mb-2">Custom Style Description</h4>
            <textarea
              v-model="styleDescription"
              class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
              placeholder="Describe your desired style in detail (e.g., minimalist design with blue and white color scheme, professional and clean look)"
              rows="3"
            ></textarea>
          </div>

          <div class="flex justify-between">
            <div>
              <button
                @click="generatePreview"
                class="px-5 py-2 border border-cyan-500/30 bg-cyan-500/10 text-white rounded-xl hover:bg-cyan-500/20 flex items-center mr-3"
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
                @click="goToNextStep"
                class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              >
                Continue
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <!-- Step 2: Add and Generate Pages -->
        <div v-if="currentStep === 1">
          <h3 class="text-2xl font-bold text-white mb-4">Add & Generate Pages</h3>
          <p class="text-gray-300 mb-6">Define the pages you want on your website and their content.</p>
          
          <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-white font-medium">Website Pages</h4>
              <button
                @click="addNewPage"
                class="text-cyan-400 hover:text-cyan-300 flex items-center text-sm"
              >
                <Icon name="heroicons:plus-circle" class="w-5 h-5 mr-1" />
                Add Page
              </button>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="(page, index) in websitePages" 
                :key="index"
                class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50"
              >
                <div class="flex justify-between items-center mb-3">
                  <div class="flex items-center">
                    <input
                      v-model="page.title"
                      class="bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/40 w-full max-w-xs"
                      placeholder="Page Title"
                    />
                    <select
                      v-model="page.type"
                      class="ml-3 bg-gray-700/50 border border-gray-600/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500/40"
                    >
                      <option value="home">Home</option>
                      <option value="about">About</option>
                      <option value="services">Services</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="blog">Blog</option>
                      <option value="contact">Contact</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                  <button
                    @click="removePage(index)"
                    class="text-gray-500 hover:text-gray-300"
                  >
                    <Icon name="heroicons:trash" class="w-5 h-5" />
                  </button>
                </div>
                <textarea
                  v-model="page.content"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
                  :placeholder="`Describe what you want on your ${page.title || 'page'} (e.g., sections, content, features)`"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Generate & Preview buttons for each page -->
          <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
            <h4 class="text-white font-medium mb-3">Generate Content</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(page, index) in websitePages" :key="index" class="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg border border-gray-600/50">
                <span class="text-gray-300">{{ page.title || `Page ${index + 1}` }}</span>
                <button
                  @click="generateAndPreview"
                  class="px-3 py-1 text-sm bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 flex items-center"
                >
                  <Icon name="heroicons:sparkles" class="w-4 h-4 mr-1" />
                  Generate & Preview
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="flex">
              <button
                @click="goToPreviousStep"
                class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                @click="generatePreview"
                class="px-5 py-2 border border-cyan-500/30 bg-cyan-500/10 text-white rounded-xl hover:bg-cyan-500/20 flex items-center ml-3"
              >
                <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
                Preview All
              </button>
            </div>
            <div class="flex">
              <button
                @click="generateAndPreview"
                class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
              >
                <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2" />
                Generate All & Preview
              </button>
              <button
                @click="goToNextStep"
                class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              >
                Continue
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Add Custom AI Data -->
        <div v-if="currentStep === 2">
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
                v-model="aiFeatures.chatbot"
                class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
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
                v-model="aiFeatures.contentGenerator"
                class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
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
                v-model="aiFeatures.personalization"
                class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
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
              v-model="aiTrainingData"
              class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
              placeholder="Enter specific information about your business, FAQs, product details, or any content you want the AI to know about"
              rows="5"
            ></textarea>
          </div>

          <div class="flex justify-between">
            <div class="flex">
              <button
                @click="goToPreviousStep"
                class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                @click="generatePreview"
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
                @click="goToNextStep"
                class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              >
                Continue
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <!-- Step 4: Generate Header -->
        <div v-if="currentStep === 3">
          <h3 class="text-2xl font-bold text-white mb-4">Create Navigation & Header</h3>
          <p class="text-gray-300 mb-6">Design your website's navigation and header to guide visitors.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 class="text-white font-medium mb-3">Header Style</h4>
              <div class="space-y-3">
                <div
                  v-for="(header, index) in headerStyles"
                  :key="index"
                  :class="[
                    'p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center',
                    selectedHeaderStyle === index 
                      ? 'border-cyan-500/50 bg-cyan-500/10' 
                      : 'border-gray-700/50 hover:border-gray-600/50'
                  ]"
                  @click="selectedHeaderStyle = index"
                >
                  <div class="w-16 h-12 bg-gray-700/70 rounded-lg mr-3 flex items-center justify-center overflow-hidden">
                    <div class="w-full p-2">
                      <div v-if="index === 0" class="flex justify-between items-center">
                        <div class="w-4 h-3 bg-cyan-500/50 rounded-sm"></div>
                        <div class="flex space-x-1">
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                        </div>
                      </div>
                      <div v-if="index === 1" class="flex flex-col items-center">
                        <div class="w-6 h-2 bg-cyan-500/50 rounded-sm mb-1"></div>
                        <div class="flex space-x-1">
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                          <div class="w-2 h-2 bg-gray-500/50 rounded-sm"></div>
                        </div>
                      </div>
                      <div v-if="index === 2" class="w-full flex items-center justify-between">
                        <div class="w-5 h-3 bg-cyan-500/50 rounded-sm"></div>
                        <div class="w-5 h-3 bg-gray-500/50 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="text-white text-sm font-medium">{{ header.name }}</h4>
                    <p class="text-gray-400 text-xs">{{ header.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="text-white font-medium mb-3">Navigation Links</h4>
              <p class="text-gray-400 text-sm mb-3">These links will be automatically generated from your pages.</p>
              
              <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-4">
                <div class="flex flex-wrap gap-2">
                  <div
                    v-for="(page, index) in websitePages"
                    :key="index"
                    class="px-3 py-1 bg-gray-700/70 rounded-lg text-sm text-gray-300 border border-gray-600/50"
                  >
                    {{ page.title || `Page ${index + 1}` }}
                  </div>
                </div>
              </div>
              
              <div class="flex items-center bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
                <input
                  type="checkbox"
                  id="responsive-menu"
                  v-model="headerOptions.responsiveMenu"
                  class="w-5 h-5 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
                />
                <label for="responsive-menu" class="ml-3">
                  <h4 class="text-white font-medium">Responsive Mobile Menu</h4>
                  <p class="text-gray-400 text-sm">Add a hamburger menu for mobile devices</p>
                </label>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50 mb-6">
            <h4 class="text-white font-medium mb-2">Logo & Brand</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-gray-400 text-sm mb-1">Brand/Website Name</label>
                <input
                  v-model="headerOptions.brandName"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="Enter your brand name"
                />
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-1">Tagline (Optional)</label>
                <input
                  v-model="headerOptions.tagline"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="A short description of your brand"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="flex">
              <button
                @click="goToPreviousStep"
                class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                @click="generatePreview"
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
                @click="goToNextStep"
                class="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center"
              >
                Continue
                <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        <!-- Step 5: Deploy Website -->
        <div v-if="currentStep === 4">
          <h3 class="text-2xl font-bold text-white mb-4">Deploy Your Website</h3>
          <p class="text-gray-300 mb-6">Get your website online and accessible to everyone.</p>
          
          <div class="bg-gray-800/60 rounded-xl p-4 border border-cyan-500/20 mb-6">
            <div class="flex items-start mb-4">
              <div class="p-2 bg-cyan-500/20 rounded-lg mr-3">
                <Icon name="heroicons:check-badge" class="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 class="text-white font-medium mb-1">Website Successfully Generated!</h4>
                <p class="text-gray-400 text-sm">Your website has been created based on your specifications.</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
              <h4 class="text-white font-medium mb-3">Deployment Options</h4>
              
              <div class="space-y-3">
                <div class="flex items-center p-3 bg-gray-700/50 rounded-lg border border-cyan-500/30">
                  <input
                    type="radio"
                    id="free-hosting"
                    name="hosting"
                    value="free"
                    v-model="deploymentOptions.hostingType"
                    class="w-5 h-5 rounded-full border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label for="free-hosting" class="ml-3 flex-grow">
                    <h5 class="text-white text-sm font-medium">Free Subhiqudsi.dev Domain</h5>
                    <p class="text-gray-400 text-xs">Host on our servers with a yoursite.subhiqudsi.dev subdomain</p>
                  </label>
                  <span class="text-cyan-400 text-sm font-medium">Free</span>
                </div>
                
                <div class="flex items-center p-3 bg-gray-700/50 rounded-lg border border-gray-600/30">
                  <input
                    type="radio"
                    id="custom-domain"
                    name="hosting"
                    value="custom"
                    v-model="deploymentOptions.hostingType"
                    class="w-5 h-5 rounded-full border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"
                  />
                  <label for="custom-domain" class="ml-3 flex-grow">
                    <h5 class="text-white text-sm font-medium">Use Custom Domain</h5>
                    <p class="text-gray-400 text-xs">Connect your own domain to your website</p>
                  </label>
                  <span class="text-white text-sm">$9.99/mo</span>
                </div>
              </div>
              
              <div v-if="deploymentOptions.hostingType === 'custom'" class="mt-4">
                <label class="block text-gray-400 text-sm mb-1">Domain Name</label>
                <input
                  v-model="deploymentOptions.domainName"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  placeholder="yourdomain.com"
                />
                <p class="text-gray-500 text-xs mt-2">After purchase, you'll need to set up CNAME records pointing to subhiqudsi.dev</p>
              </div>
            </div>
            
            <div class="bg-gray-800/60 rounded-xl p-4 border border-gray-700/50">
              <h4 class="text-white font-medium mb-3">Website Preview</h4>
              
              <div class="relative rounded-lg overflow-hidden border border-gray-600/50 aspect-video bg-gray-700/50 mb-4">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <Icon name="heroicons:photo" class="w-12 h-12 text-gray-500 mx-auto mb-2" />
                    <p class="text-gray-400 text-sm">Website Preview</p>
                  </div>
                </div>
              </div>
              
              <div class="flex space-x-3">
                <button
                  @click="generatePreview"
                  class="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 text-white text-sm rounded-lg hover:bg-gray-700/70 flex items-center justify-center"
                >
                  <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
                  Preview
                </button>
                <button
                  @click="downloadPreview"
                  class="flex-1 px-3 py-2 bg-gray-700/50 border border-gray-600/50 text-white text-sm rounded-lg hover:bg-gray-700/70 flex items-center justify-center"
                >
                  <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-cyan-900/20 rounded-xl p-4 border border-cyan-500/30 mb-6">
            <h4 class="text-cyan-400 font-medium mb-2">Deployment Instructions</h4>
            <ol class="text-gray-300 text-sm space-y-2 pl-5 list-decimal">
              <li>Select your preferred hosting option above</li>
              <li>If using a custom domain, purchase it through your preferred domain registrar</li>
              <li>Set up CNAME records pointing to subhiqudsi.dev</li>
              <li>Click the "Deploy Website" button below to publish your site</li>
              <li>Your website will be live within minutes!</li>
            </ol>
          </div>

          <div class="flex justify-between">
            <div class="flex">
              <button
                @click="goToPreviousStep"
                class="px-5 py-2 border border-gray-600/50 text-white rounded-xl hover:bg-gray-700/50 flex items-center"
              >
                <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
                Back
              </button>
              <button
                @click="generatePreview"
                class="px-5 py-2 border border-cyan-500/30 bg-cyan-500/10 text-white rounded-xl hover:bg-cyan-500/20 flex items-center ml-3"
              >
                <Icon name="heroicons:eye" class="w-5 h-5 mr-2" />
                Preview Site
              </button>
            </div>
            <div class="flex">
              <button
                @click="generateAndPreview"
                class="px-5 py-2 border border-cyan-500/30 bg-gray-700/50 text-white rounded-xl hover:bg-gray-700/70 flex items-center mr-3"
              >
                <Icon name="heroicons:sparkles" class="w-5 h-5 mr-2" />
                Final Preview
              </button>
              <button
                @click="deployWebsite"
                class="px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 flex items-center font-medium"
              >
                <Icon name="heroicons:rocket-launch" class="w-5 h-5 mr-2" />
                Deploy Website
              </button>
            </div>
          </div>
        </div>
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
  <!-- Generating Notification -->
  <div v-if="showGeneratingNotification" class="fixed bottom-4 right-4 z-40 bg-gray-800/90 rounded-xl shadow-lg border border-cyan-500/20 p-4 flex items-center">
    <div class="inline-block animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-cyan-500 mr-3"></div>
    <div>
      <p class="text-white font-medium">Generating content...</p>
      <p class="text-gray-400 text-sm">This will just take a moment</p>
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
      
      <h3 class="text-2xl font-bold text-white mb-4">Website Preview</h3>
      
      <div class="rounded-2xl overflow-hidden border border-gray-600/50 mb-6">
        <div class="bg-gray-900 h-8 flex items-center px-4">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div class="mx-auto text-xs text-gray-300">
            {{ previewInfo.url || 'your-awesome-site.example.com' }}
          </div>
        </div>
        
        <div class="bg-white aspect-[16/9] flex items-center justify-center">
          <div v-if="previewLoading" class="text-center">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mb-2"></div>
            <p class="text-gray-800">Generating preview...</p>
          </div>
          <img 
            v-else-if="previewInfo.imageUrl" 
            :src="previewInfo.imageUrl" 
            alt="Website Preview" 
            class="w-full h-auto"
          />
          <div v-else class="text-center p-8">
            <Icon name="heroicons:photo" class="w-16 h-16 text-gray-300 mx-auto mb-3" />
            <p class="text-gray-500">Preview will be generated here</p>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-700/30 rounded-xl p-4 border border-gray-600/50 mb-6">
        <h4 class="text-white font-medium mb-2">Preview Details</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p class="text-gray-400">Style:</p>
            <p class="text-white">{{ previewInfo.style || 'Not specified' }}</p>
          </div>
          <div>
            <p class="text-gray-400">Pages:</p>
            <p class="text-white">{{ previewInfo.pages || 'Not specified' }}</p>
          </div>
          <div>
            <p class="text-gray-400">Generated on:</p>
            <p class="text-white">{{ previewInfo.timestamp || 'Not generated yet' }}</p>
          </div>
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
          :disabled="!previewInfo.imageUrl"
        >
          <Icon name="heroicons:arrow-down-tray" class="w-5 h-5 mr-2" />
          Download Preview
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatInterface',
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
      
      // Preview Modal
      showPreviewModal: false,
      previewLoading: false,
      showGeneratingNotification: false,
      previewInfo: {
        imageUrl: null,
        style: '',
        pages: '',
        url: '',
        timestamp: ''
      },
      previewImages: [
        'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
        'https://images.unsplash.com/photo-1607081349371-cf63bb812ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1840&q=80',
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
    }
  },
  methods: {
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
    addNewPage() {
      this.websitePages.push({
        title: '',
        type: 'custom',
        content: ''
      });
    },
    removePage(index) {
      this.websitePages.splice(index, 1);
    },
    deployWebsite() {
      // Here would be the actual deployment logic
      alert('Website deployment initiated! Your site will be live shortly.');
    },
    
    // Preview Methods
    openPreviewModal() {
      this.showPreviewModal = true;
    },
    
    closePreviewModal() {
      this.showPreviewModal = false;
    },
    
    generatePreview() {
      this.previewLoading = true;
      this.openPreviewModal();
      
      // Simulate API call to generate preview
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.previewImages.length);
        
        // Create preview info based on current step
        const pagesList = this.websitePages.map(page => page.title || 'Untitled').join(', ');
        const styleName = this.styleOptions[this.selectedStyle]?.name || 'Custom Style';
        
        this.previewInfo = {
          imageUrl: this.previewImages[randomIndex],
          style: styleName,
          pages: pagesList,
          url: this.headerOptions.brandName 
            ? `${this.headerOptions.brandName.toLowerCase().replace(/\s+/g, '-')}.example.com` 
            : 'your-awesome-site.example.com',
          timestamp: new Date().toLocaleString()
        };
        
        this.previewLoading = false;
      }, 2000);
    },
    
    generateAndPreview() {
      // First simulate generating content for the current step
      this.showGeneratingNotification = true;
      
      setTimeout(() => {
        this.showGeneratingNotification = false;
        // Then show the preview
        this.generatePreview();
      }, 1500);
    },
    
    downloadPreview() {
      if (this.previewInfo.imageUrl) {
        // In a real app, this would trigger a download of the preview or website files
        alert('Download started for website preview');
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