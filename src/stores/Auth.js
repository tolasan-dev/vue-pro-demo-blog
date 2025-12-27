// src/stores/auth.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/services/axios";

export const useAuthStore = defineStore("auth", () => {
  // STATE
  const user = ref(null);
  const token = ref(localStorage.getItem("token"));

  // GETTER
  const isAuthenticated = computed(() => Boolean(token.value));

  // ACTIONS
  const login = async (payload) => {
    const res = await api.post("/auth/login", payload);
    const data = res?.data?.data;

    if (!data?.token) {
      throw new Error("Login failed");
    }

    token.value = data.token;
    user.value = data.user ?? null;

    localStorage.setItem("token", data.token);
    api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    return data;
  };

  const logout = () => {
    token.value = null;
    user.value = null;

    localStorage.removeItem("token");
    delete api.defaults.headers.common.Authorization;
  };

  // INIT (important for refresh)
  const initAuth = () => {
    if (token.value) {
      api.defaults.headers.common.Authorization = `Bearer ${token.value}`;
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    initAuth,
  };
});
