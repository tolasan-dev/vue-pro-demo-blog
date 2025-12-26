import { defineStore } from "pinia";

import api from "@/services/axios";
import { computed, ref, useTransitionState } from "vue";

export const useAuthStore = defineStore("Auth", () => {
  // state

  const user = ref(null);
  const token = ref(localStorage.getItem("token"));
  const loading = ref(false);
  const error = ref(null);

  //==================
  //   Getter function
  //   =============

  const isAuthenticated = computed(() => !!token.value);

  // Actions

  // LOGIN
  const login = async (credentials) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await api.post("/auth/login", credentials);

      token.value = res.data.token;
      user.value = res.data.user;

      localStorage.setItem("token", token.value);

      return true;
    } catch (err) {
      error.value = err.response?.data?.message || "Login failed";
      return false;
    } finally {
      loading.value = false;
    }
  };

  // FETCH USER (auto-login)
  const fetchUser = async () => {
    if (!token.value) return;

    try {
      const res = await api.get("/auth/me");
      user.value = res.data;
    } catch {
      logout();
    }
  };

  //LOGOUT

  const Logout = async () => {
    try {
      await api.post("auth/logout");
    } catch (_) {}

    user.value = null;
    user.value = null;
    user.value = null;

    localStorage.removeItem("token");
  };

  return {
    // state

    user,
    loading,
    token,
    error,

    // getter

    isAuthenticated,

    // action

    Login,
    Logout,
    fetchUser,
  };
});
