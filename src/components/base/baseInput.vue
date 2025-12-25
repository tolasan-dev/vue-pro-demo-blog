<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
  />
</template>

<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: String,
});

defineEmits(["update:modelValue", "blur"]);
</script>

<style scoped>
.base-input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  transition: all 0.2s ease;
}

.base-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.base-input.error {
  border-color: #ef4444;
  background: #fff5f5;
}
</style>
