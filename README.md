```import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  
  // =====================
  // AXIOS CONFIG (LOCAL)
  // =====================
  const api = axios.create({
    baseURL: "http://localhost:8000/api", // change if needed
    headers: {
      "Content-Type": "application/json",
    },
  });

  // attach token automatically
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // =====================
  // STATE
  // =====================
  const user = ref(null);
  const token = ref(localStorage.getItem("token"));
  const loading = ref(false);
  const error = ref(null);

  // =====================
  // GETTERS
  // =====================
  const isAuthenticated = computed(() => !!token.value);

  // =====================
  // ACTIONS
  // =====================

  /**
   * LOGIN
   */
  const login = async (payload) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await api.post("/login", payload);

      // expected response:
      // { token: "...", user: {...} }

      token.value = res.data.token;
      user.value = res.data.user;

      localStorage.setItem("token", token.value);

      return true;
    } catch (err) {
      error.value =
        err.response?.data?.message ||
        "Invalid email or password";
      return false;
    } finally {
      loading.value = false;
    }
  };

  /**
   * LOGOUT
   */
  const logout = () => {
    user.value = null;
    token.value = null;
    error.value = null;

    localStorage.removeItem("token");
  };

  /**
   * AUTO LOGIN / FETCH USER
   */
  const fetchUser = async () => {
    if (!token.value) return;

    try {
      const res = await api.get("/me");
      user.value = res.data;
    } catch (err) {
      logout();
    }
  };

  // =====================
  // RETURN
  // =====================
  return {
    // state
    user,
    token,
    loading,
    error,

    // getters
    isAuthenticated,

    // actions
    login,
    logout,
    fetchUser,
  };
});
