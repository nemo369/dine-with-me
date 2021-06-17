<template>
  <ol class="flex flex-wrap max-w-7xl px-3 mx-auto py-6 text-sm">
    <li v-for="(c, index) in contestants" :key="c.id">
      <nuxt-link :to="`contestant/${c.id}`" class="hover:underline flex">
        <span>{{ c.name }}</span> <span class="mr-3">;</span>
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['contestants'],
}
</script>

<style></style>
