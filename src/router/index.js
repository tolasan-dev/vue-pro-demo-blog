import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/Login.vue";
import Dashboard from "@/views/Dashboard/Dashboard.vue";
import AppLayout from "@/layouts/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Login page (no layout)
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "Login",
      },
    },

    // App layout
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
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

router.beforeEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Admin Panel`
    : "Admin Panel";

  return true;
});

export default router;
