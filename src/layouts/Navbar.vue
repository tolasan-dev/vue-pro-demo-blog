<template>
  <div>
    <nav class="navbar">
      <button @click="$emit('toggle-sidebar')">
        <i class="bi bi-grid"></i>
      </button>

      <!-- Profile dropdown / logout -->
      <button class="logout-btn" @click="$emit('logout')">Logout</button>
    </nav>
  </div>
</template>

<script setup>
defineEmits(["toggle-sidebar", "logout"]);
</script>

<style>
/* Navbar container */
.navbar {
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Sidebar toggle button */
.menu-btn {
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #374151;
  padding: 6px 10px;
  border-radius: 8px;
}

.menu-btn:hover {
  background: #f3f4f6;
}

/* Profile section */
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Username */
.username {
  font-size: 0.9rem;
  color: #374151;
  font-weight: 500;
}

.logout-btn:hover {
  background: #dc2626;
}

.logout-btn:active {
  transform: scale(0.96);
}

/* Mobile */
@media (max-width: 768px) {
  .username {
    display: none;
  }
}
</style>
