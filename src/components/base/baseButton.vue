<template>
  <button
    class="btn base-btn"
    :class="`btn-${variant}`"
    :disabled="isDisabled || isLoading"
    @click="handleClick"
  >
    <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>

    <span :class="{ 'opacity-50': isLoading }">
      <slot />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  if (props.isLoading || props.isDisabled) return;
  emit("click");
};
</script>

<style scoped>
.base-btn {
  font-weight: 600;
  border-radius: 0.5rem;
  min-width: 120px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Smooth loading effect */
.base-btn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

/* Spinner spacing fix */
.spinner-border {
  vertical-align: middle;
}
</style>
