<template>
  <div class="card shadow-sm">
    <!-- Header (optional) -->
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>

    <!-- Body -->
    <div class="card-body">
      <slot></slot>
    </div>

    <!-- Footer (optional) -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
// No props needed for now (simple base component)
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
