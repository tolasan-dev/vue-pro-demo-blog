<template>
  <nav class="navbar navbar-dark bg-dark px-3 fixed-top">
    <button class="btn btn-outline-light me-3" @click="$emit('toggle-sidebar')">
      <i class="bi bi-list"></i>
    </button>

    <span class="navbar-brand mb-0 h5">Site</span>

    <div class="ms-auto d-flex align-items-center">
      <img
        src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-PNG.png"
        class="rounded-circle me-2 img-fluid"
        alt="avatar"
        width="40"
        height="40"
      />
      <span class="text-white">Admin</span>
    </div>
  </nav>
</template>

<script setup></script>
