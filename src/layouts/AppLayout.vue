<template>
  <div class="admin-layout">
    <!-- Sidebar -->
    <Sidebar :isOpen="sidebarOpen" />

    <!-- Page Wrapper -->
    <div class="page">
      <!-- Navbar -->
      <Navbar @toggle-sidebar="toggleSidebar" @logout="handleLogout" />

      <!-- Main Content -->
      <main class="content" :class="{ expanded: sidebarOpen }">
        <div class="page-header">
          <h1>Dashboard</h1>
          <p>Welcome back 👋</p>
        </div>

        <BaseButton
          variant="outline-primary"
          :isLoading="loading"
          @click="submitForm"
        >
          Click Me
        </BaseButton>

        <!-- Route Content -->
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import { useAuthStore } from "@/stores/auth";
import { useRoute } from "vue-router";

const sidebarOpen = ref(false);
const loading = ref(false);

const route = useRoute();
const authStore = useAuthStore();

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

// ✅ LOGOUT HANDLER (FIXED)
const handleLogout = async () => {
  await authStore.logout();
  route.replace({ name: "login" });
};

const submitForm = () => {
  loading.value = true;
  //  show loading
};
</script>

<style scoped>
/* Root Layout */
.admin-layout {
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
}

/* Page Wrapper */
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Main Content */
.content {
  margin-left: 250px;
  padding: 2rem;
  transition: margin-left 0.3s ease;
}

.content.expanded {
  margin-left: 0;
}

/* Page Header */
.page-header {
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
}

.page-header p {
  font-size: 0.9rem;
  color: #6b7280;
}

/* Responsive */
@media (max-width: 768px) {
  .content {
    margin-left: 0;
    padding: 1rem;
  }
}
</style>
