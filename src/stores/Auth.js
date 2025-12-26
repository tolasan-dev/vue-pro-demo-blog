import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/services/axios";

export const useAuthStore = defineStore("auth", () => {
  // ===== state =====
  const user = ref(null);
  const token = ref(localStorage.getItem("token"));

  // ===== actions =====
  const login = async (payload) => {
    try {
      const res = await api.post("/auth/login", payload);

      const authToken = res.data?.data?.token;
      const authUser = res.data?.data?.user;

      if (!authToken) {
        throw new Error("Token not found in response");
      }

      token.value = authToken;
      user.value = authUser ?? null;

      localStorage.setItem("token", authToken);

      return res.data;
    } catch (error) {
      console.error("Auth login error:", error);
      throw error; // allow component to handle error
    }
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem("token");
  };

  return {
    user,
    token,
    login,
    logout,
  };
});
