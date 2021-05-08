<template>
  <div class="relative" @click="display = !display">
    <div v-if="display" class="absolute">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: true,
    }
  },
}
</script>

<style scoped></style>
