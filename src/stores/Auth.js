import { defineStore } from "pinia";

export const useAuthStore= defineStore("Auth", ()=> {

    const token = ref(null);
    const user = ref(localStorage.getItem("token") || null)
})