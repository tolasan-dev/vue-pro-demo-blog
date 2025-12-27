import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/services/axios";

export const useAuthStore = defineStore("auth", () => {
  /* =========================
   * STATE
   * ========================= */
  const token = ref(localStorage.getItem("token"));
  const user = ref(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  /* =========================
   * GETTERS
   * ========================= */
  const isAuthenticated = computed(() => !!token.value);

  /* =========================
   * ACTIONS
   * ========================= */
  const login = async (payload) => {
    const res = await api.post("/auth/login", payload);
    const data = res?.data?.data;

    if (!data?.token) {
      throw new Error("Login failed");
    }

    token.value = data.token;
    user.value = data.user || null;

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (_) {
      // ignore
    } finally {
      token.value = null;
      user.value = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  };

  return {
    // state
    token,
    user,

    // getters
    isAuthenticated,

    // actions
    login,
    logout,
  };
});
