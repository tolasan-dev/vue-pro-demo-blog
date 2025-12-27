import axios from "axios";

/**
 * Create Axios instance
 */
const api = axios.create({
  baseURL:"http://blogs.csm.linkpc.net/api/v1",
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
    if (error.response) {
      // Unauthorized → logout
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      }

      // Optional: normalize backend error
      return Promise.reject({
        status: error.response.status,
        message:
          error.response.data?.message ||
          "Something went wrong. Please try again.",
        errors: error.response.data?.errors || null,
      });
    }

    // Network / CORS / timeout
    return Promise.reject({
      status: null,
      message: "Network error. Please check your connection.",
    });
  }
);

export default api;
