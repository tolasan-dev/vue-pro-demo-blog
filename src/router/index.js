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
      meta: { guest: true },
    },

    {
      path: "/dashboard",
      component: AppLayout,
      meta: { requiresAuth: true },
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

/* =========================
 * GLOBAL AUTH GUARD
 * ========================= */
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();

  const requiresAuth = to.matched.some(
    (route) => route.meta.requiresAuth
  );

  const isGuest = to.matched.some(
    (route) => route.meta.guest
  );

  // Page title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  //  Protected route
  if (requiresAuth && !auth.isAuthenticated) {
    return next({ name: "login" });
  }

  //  Guest-only route
  if (isGuest && auth.isAuthenticated) {
    return next({ name: "dashboard" });
  }

  next();
});

export default router;
