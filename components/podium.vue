<template>
  <div v-if="conts" class="podium flex items-end gap-1">
    <div
      v-for="(contestant, index) in conts"
      :key="index"
      :class="`bg-green-200 border-green-100 border ${
        index ? `h-${index * 3 + 18} order-${index - 1}` : 'h-40 order-1'
      }`"
    >
      <div v-if="contestant">
        <small class="mx-4">{{ contestant.score }}</small>
        <common-sticker :name="contestant.name" src="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['conts'],
}
</script>

<style scoped>
.podium {
}
</style>
