<template>
  <section class="section mb-28 mt-16">
    <h4 class="text-center mb-6 text-2xl">סינרים שבישלו איתם</h4>
    <ul class="flex gap-x-2">
      <li v-for="apron in aprons" :key="apron.src"></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      aprons: [],
    }
  },
}
</script>

<style></style>
