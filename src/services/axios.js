import axios from "axios";

/**
 * Create Axios instance
 */
const api = axios.create({
  
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 * Attach token automatically
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 * Handle global errors
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Unauthorized → force logout
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // optional: redirect to login
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;
