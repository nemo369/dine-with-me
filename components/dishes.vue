<template>
  <section class="section mb-28 mt-16">
    <h4 class="text-center mb-6 text-2xl">שטיפת כלים לא בכיור</h4>
    <ul>
      <li
        v-for="value in dishes"
        :key="value.name"
        class="flex justify-between py-3 px-2 bg-opacity-75 rounded-sm shadow max-w-md mx-auto mb-1"
      >
        <strong>{{ value.place }}</strong>
        <span>{{ value.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dishes: [{ place: 'בחצר', name: 'ארז שיינר', src: '' }],
    }
  },
}
</script>

<style></style>
