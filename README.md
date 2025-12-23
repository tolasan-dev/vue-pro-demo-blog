



<template>
  <aside class="sidebar" :class="{ closed: !isOpen }">
    <div class="p-3 pt-5">
      <h6 class="text-uppercase text-secondary mb-3">Admin</h6>

      <ul class="nav nav-pills flex-column gap-1">
        <li class="nav-item">
          <a class="nav-link active">
            <i class="bi bi-speedometer me-2"></i>Dashboard
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#articleCollapse"
          >
            My Article
            <i class="bi bi-chevron-down"></i>
          </a>

          <div class="collapse" id="articleCollapse">
            <ul class="nav flex-column ms-3 mt-1">
              <li class="nav-item">
                <a class="nav-link">All Article</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Create Article</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})
</script>


<template>
  <Navbar @toggle-sidebar="toggleSidebar" />
  <Sidebar :isOpen="sidebarOpen" />

  <main class="content mt-5" :class="{ expanded: !sidebarOpen }">
    <!-- Page Content -->
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const sidebarOpen = ref(true)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>