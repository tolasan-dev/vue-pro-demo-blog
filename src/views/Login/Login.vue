<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-gradient">
    <div class="card login-card shadow-lg border-0 overflow-hidden">
      <div class="card-body p-5 p-md-6">
        <!-- Header -->
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-1">Welcome Back</h2>
          <p class="text-muted">Please enter your details to sign in</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="form-label fw-medium">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="hello@example.com"
              required
              autocomplete="email"
            />
          </div>

          <div class="mb-5">
            <label class="form-label fw-medium">Password</label>
            <input
              v-model="form.password"
              type="password"
              class="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="••••••••"
              required
              autocomplete="current-password"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary btn-lg w-100 rounded-pill fw-semibold"
            :disabled="isLoading"
          >
            <span v-if="isLoading">
              <span class="spinner-border spinner-border-sm me-2" role="status"></span>
              Signing in...
            </span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <!-- Footer links -->
        <div class="mt-4 text-center small">
          <p class="text-muted mb-2">
            Don't have an account?
            <a href="#" class="text-primary text-decoration-none fw-medium">Sign up</a>
          </p>
          <a href="#" class="text-muted text-decoration-none hover-text-primary">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  email: '',
  password: ''
})

const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true

  // Simulate API call
  setTimeout(() => {
    console.log('Login attempt with:', form)
    isLoading.value = false
    // Add your actual login logic here
  }, 1200)
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}

.form-control {
  padding: 0.85rem 1.25rem;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.15);
  outline: none;
}

.btn-primary {
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border: none;
  padding: 0.85rem;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.35);
  background: linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%);
}

.rounded-pill {
  border-radius: 9999px !important;
}

.hover-text-primary:hover {
  color: #6366f1 !important;
  transition: color 0.2s ease;
}

@media (max-width: 576px) {
  .card-body {
    padding: 2rem !important;
  }
}
</style>