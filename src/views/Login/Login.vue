<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-5">
        <div class="card p-5">
          <label for="form-label">username</label>
          <input type="text" name="" id="" class="form-control" />
          <div class="valid-feedback"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
    
    defineProps([
        label: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "",
        }
    ])
</script>
