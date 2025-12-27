
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

import Login from "@/views/Login/Login.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import AppLayout from "@/layouts/AppLayout.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },

    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        guestOnly: true,
        title: "Login",
      },
    },

    {
      path: "/dashboard",
      component: AppLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
          meta: {
            title: "Dashboard",
          },
        },
      ],
    },
  ],
});

/**
 * 🌐 GLOBAL AUTH GUARD
 */
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  // Page title
  document.title = to.meta.title
    ? `${to.meta.title} - Admin Panel`
    : "Admin Panel";

  // 🔐 Protected routes
  if (to.meta.requiresAuth && !auth.isAuthenticated.value) {
    return next({ name: "login" });
  }

  // 🚫 Logged-in users can't access login
  if (to.meta.guestOnly && auth.isAuthenticated.value) {
    return next({ name: "dashboard" });
  }

  next();
});

export default router;
