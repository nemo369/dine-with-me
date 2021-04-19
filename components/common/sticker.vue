<template>
  <div class="sticker flex items-end">
    <img
      v-if="src"
      :src="src"
      :alt="name"
      class="h-28 z-10 w-auto"
      height="112"
      width="112"
    />
    <div
      v-if="name"
      class="bg-blue-100 py-1 pl-3 pr-6 rounded text-base transform translate-x-9 -translate-y-3"
    >
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    name: String,
    src: String,
  },
}
</script>

<style></style>
class="name"
