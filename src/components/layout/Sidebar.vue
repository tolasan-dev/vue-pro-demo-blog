<template>
  <aside class="sidebar" :class="{ closed: isOpen }">
    <div class="p-3 pt-5">
      <h6 class="text-uppercase text-secondary mb-3">Admin</h6>

      <ul class="nav nav-pills flex-column gap-1">
        <li class="nav-item">
          <a class="nav-link active" href=""> <i class="bi bi-speedometer me-2"></i>Dashboard</a>
        </li>

        <li class="nav-item">
          <a class="nav-link d-flex justify-content-between align-items-center" href="#articleCollapse"
            data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="articleCollapse">
            My Article
            <i class="bi bi-chevron-down"></i>
          </a>

          <div class="collapse" id="articleCollapse">
            <ul class="nav flex-column ms-3 mt-1">
              <li class="nav-item">
                <a class="nav-link" href="#">All Article</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Create Article</a>
              </li>
            </ul>
          </div>
        </li>

        <!-- Logout -->
        <li class="nav-item mt-3">
          <a class="nav-link text-danger" href="#">Logout</a>
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

<style scoped>
.sidebar {
  position: fixed;
  top: 56px;
  left: 0;
  width: 250px;
  height: calc(100vh - 56px);
  background-color: #212529;
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.sidebar.closed {
  transform: translateX(-250px);
}

.nav-link {
  color: #adb5bd;
}

.nav-link.active,
.nav-link:hover {
  color: #fff;
  background-color: #343a40;
}
</style>
