<template>
  <div class="login-page">
    <div class="login-box">
      <h2>Welcome Back</h2>
      <p class="subtitle">Sign in to continue</p>

      <form @submit.prevent="onSubmit">
        <!-- Email -->
        <div class="form-group">
          <label>Email</label>
          <BaseInput
            v-model="form.email"
            type="email"
            placeholder="example@email.com"
            :class="{ error: errors.email }"
            @blur="validateEmail"
          />
          <div v-if="errors.email" class="error-message">
            {{ errors.email }}
          </div>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label>Password</label>
          <BaseInput
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            :class="{ error: errors.password }"
            @blur="validatePassword"
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password }}
          </div>
        </div>

        <!-- Submit -->
        <BaseButton type="submit" :disabled="isLoading" class="btn-login">
          {{ isLoading ? "Logging in..." : "Login" }}
        </BaseButton>
      </form>

      <div class="links">
        <p>Don't have an account? <a href="#">Sign up</a></p>
        <a href="#" class="forgot">Forgot password?</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useRequiredValidator } from "@/composables/useReqiureValidator";

const form = reactive({
  email: "",
  password: "",
});

const { errors, validateField } = useRequiredValidator();
const isLoading = ref(false);

const validateEmail = () =>
  validateField("email", form.email, "Email is required");

const validatePassword = () =>
  validateField("password", form.password, "Password is required");

const validateForm = () => {
  const emailOk = validateEmail();
  const passwordOk = validatePassword();
  return emailOk && passwordOk;
};

const onSubmit = () => {
  if (!validateForm()) return;

  isLoading.value = true;

  // simulate API
  setTimeout(() => {
    console.log("Login data:", form);
    isLoading.value = false;
  }, 1200);

  console.log(validateForm());
};
</script>

<style scoped>
/* ========== Page ========== */
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* ========== Card ========== */
.login-box {
  width: 100%;
  max-width: 420px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  /* animation: slideFade 0.4s ease; */
}

/* ========== Header ========== */
.login-box h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4px;
  color: #1f2937;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 24px;
}

/* ========== Form ========== */
.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

/* ========== Error Message ========== */
.error-message {
  margin-top: 6px;
  font-size: 12px;
  color: #ef4444;
}

/*  btn login */
.btn-login {
  width: 100%;
}
/* ========== Links ========== */
.links {
  margin-top: 22px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

.links a {
  color: #6366f1;
  font-weight: 500;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

.forgot {
  display: inline-block;
  margin-top: 6px;
}

/* ========== Animation ========== */
@keyframes slideFade {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== Mobile ========== */
@media (max-width: 480px) {
  .login-box {
    padding: 24px;
  }
}
</style>
