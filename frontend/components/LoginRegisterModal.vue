<template>
  <div
      class="fixed inset-0 bg-gray-900/70 backdrop-blur-sm z-50 flex items-center justify-center">
    <div class="w-full max-w-md">
      <!-- Login Form -->
      <div v-if="showLogin"
           class="bg-gray-800/90 rounded-3xl border border-cyan-500/20 p-8 shadow-xl shadow-cyan-500/5 relative">
        <button @click="redirectToHome" class="absolute top-4 right-4 text-gray-400 hover:text-white">
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
        <div class="text-center mb-6">
          <div
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-2">
            <Icon name="heroicons:lock-closed" class="w-4 h-4 mr-2"/>
            Login to SiteForge
          </div>
          <h2 class="text-2xl font-bold text-white">Welcome Back</h2>
          <p class="text-gray-300 text-sm mt-1">Sign in to your account to continue</p>
        </div>

        <div v-if="authError" class="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-xl text-sm text-red-300">
          {{ authError }}
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
                id="username"
                v-model="loginForm.username"
                type="text"
                placeholder="yourusername"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
                id="password"
                v-model="loginForm.password"
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" type="checkbox"
                     class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500"/>
              <label for="remember-me" class="ml-2 block text-sm text-gray-300">Remember me</label>
            </div>
            <div class="text-sm">
              <a href="#" class="text-cyan-400 hover:text-cyan-300">Forgot password?</a>
            </div>
          </div>
          <button
              type="submit"
              class="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 flex items-center justify-center"
              :disabled="isProcessing"
          >
            <Icon v-if="isProcessing" name="heroicons:arrow-path" class="w-5 h-5 animate-spin mr-2"/>
            <span>Sign in</span>
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-400">
          Don't have an account?
          <button @click="toggleAuthForm" class="text-cyan-400 hover:text-cyan-300 ml-1">Sign up</button>
        </div>

        <div class="mt-6 flex items-center justify-center">
          <div class="text-center text-xs text-gray-500">
            <p>Demo account: demo / password</p>
          </div>
        </div>
      </div>

      <!-- Registration Form -->
      <div v-else class="bg-gray-800/90 rounded-3xl border border-cyan-500/20 p-8 shadow-xl shadow-cyan-500/5 relative">
        <button @click="redirectToHome" class="absolute top-4 right-4 text-gray-400 hover:text-white">
          <Icon name="heroicons:x-mark" class="w-6 h-6" />
        </button>
        <div class="text-center mb-6">
          <div
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 mb-2">
            <Icon name="heroicons:user-plus" class="w-4 h-4 mr-2"/>
            Join SiteForge
          </div>
          <h2 class="text-2xl font-bold text-white">Create Account</h2>
          <p class="text-gray-300 text-sm mt-1">Register to start building websites with AI</p>
        </div>

        <div v-if="authError" class="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-xl text-sm text-red-300">
          {{ authError }}
        </div>

        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label for="reg-email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
                id="reg-email"
                v-model="registerForm.email"
                type="email"
                placeholder="your@email.com"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div>
            <label for="reg-username" class="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
                id="reg-username"
                v-model="registerForm.username"
                type="text"
                placeholder="yourusername"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div>
            <label for="reg-password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
                id="reg-password"
                v-model="registerForm.password"
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div>
            <label for="confirm-password" class="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <input
                id="confirm-password"
                v-model="registerForm.confirmPassword"
                type="password"
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-gray-700/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                required
            />
          </div>
          <div class="flex items-center">
            <input id="terms" type="checkbox"
                   class="h-4 w-4 rounded border-gray-600 bg-gray-700 text-cyan-600 focus:ring-cyan-500" required/>
            <label for="terms" class="ml-2 block text-sm text-gray-300">
              I agree to the <a href="#" class="text-cyan-400 hover:text-cyan-300">Terms</a> and <a href="#"
                                                                                                    class="text-cyan-400 hover:text-cyan-300">Privacy
              Policy</a>
            </label>
          </div>
          <button
              type="submit"
              class="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 flex items-center justify-center"
              :disabled="isProcessing"
          >
            <Icon v-if="isProcessing" name="heroicons:arrow-path" class="w-5 h-5 animate-spin mr-2"/>
            <span>Create Account</span>
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-gray-400">
          Already have an account?
          <button @click="toggleAuthForm" class="text-cyan-400 hover:text-cyan-300 ml-1">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginRegisterModal',
  props: {
    isAuthenticated: {},
    updateAuthenticated:{}
  },
  data() {
    return {
      authError: '',
      isProcessing: false,
      loginForm: {username: '', password: ''},
      registerForm: {email: '', username: '', password: '', confirmPassword: ''},
      showLogin: true,
    }
  },

  methods: {
    redirectToHome() {
      navigateTo('/')
    },
    
    handleLogin() {
      this.authError = ''
      if (!this.loginForm.username || !this.loginForm.password) {
        this.authError = 'Please fill in all fields'
        return
      }
      this.isProcessing = true
      
      // Demo account fallback for local testing
      if (this.loginForm.username === 'demo' && this.loginForm.password === 'password') {
        setTimeout(() => {
          this.isAuthenticated = true
          this.loginForm = {username: '', password: ''}
          this.isProcessing = false
        }, 500);
        return;
      }
      
      // Send login data to backend
      try {
        fetch(useRuntimeConfig().public.backendUrl + '/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.loginForm.username,
            password: this.loginForm.password,
          }),
        })
        .then(response => {
          if (!response.ok) {
            return response.json().then(data => {
              throw new Error(data.message || 'Login failed');
            });
          }
          return response.json();
        })
        .then(data => {
          // Login successful
          sessionStorage.setItem('token', data.token)
          this.updateAuthenticated()
          this.loginForm = {username: '', password: ''};
        })
        .catch(error => {
          this.authError = error.message || 'Invalid username or password';
        })
        .finally(() => {
          this.isProcessing = false;
        });
      } catch (error) {
        this.authError = 'Login failed. Please try again.';
        this.isProcessing = false;
      }
    },

    handleRegister() {
      this.authError = ''
      if (!this.registerForm.email || !this.registerForm.username || !this.registerForm.password || !this.registerForm.confirmPassword) {
        this.authError = 'Please fill in all fields'
        return
      }
      if (this.registerForm.password !== this.registerForm.confirmPassword) {
        this.authError = 'Passwords do not match'
        return
      }
      this.isProcessing = true
      
      // Send registration data to backend
      try {
        fetch(useRuntimeConfig().public.backendUrl + '/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.registerForm.email,
            username: this.registerForm.username,
            password: this.registerForm.password,
          }),
        })
        .then(response => {
          if (!response.ok) {
            return response.json().then(data => {
              throw new Error(data.message || 'Registration failed');
            });
          }
          return response.json();
        })
        .then(data => {
          // Registration successful
          this.showLogin = true;
          this.registerForm = {email: '', username: '', password: '', confirmPassword: ''};
        })
        .catch(error => {
          this.authError = error.message || 'Registration failed. Please try again.';
        })
        .finally(() => {
          this.isProcessing = false;
        });
      } catch (error) {
        this.authError = 'Registration failed. Please try again.';
        this.isProcessing = false;
      }
    },

    toggleAuthForm() {
      this.showLogin = !this.showLogin
      this.authError = ''
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