<template>
  <div class="admin-layout">
    <!-- Layout -->
    <Navbar @toggle-sidebar="toggleSidebar" />
    <Sidebar :isOpen="sidebarOpen" />

    <!-- Main Content -->
    <main class="content mt-5" :class="{ expanded: sidebarOpen }">
      <h1>Main Content</h1>

      <!-- ✅ Instant loading button -->
      <BaseButton
        variant="outline-primary"
        :isLoading="loading"
        @click="submitForm"
      >
        Click Me
      </BaseButton>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Navbar from "../components/layout/Navbar.vue";
import Sidebar from "../components/layout/Sidebar.vue";

const sidebarOpen = ref(false);
const loading = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const submitForm = () => {
  loading.value = true; // ✅ instantly show loading
};
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
}

.content {
  margin-left: 250px;
  padding: 1.5rem;
  transition: margin-left 0.3s ease;
}

.content.expanded {
  margin-left: 0;
}
</style>
