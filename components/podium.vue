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
        <nuxt-link :to="`contestant/${contestant.id}`">
          <small class="mx-4">{{ contestant.score }}</small>
          <common-sticker :name="contestant.name" src="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { slugify } from '../utils/utils'
export default {
  props: ['conts'],
  methods: {
    sluged(p) {
      return slugify(p)
    },
  },
}
</script>

<style scoped>
.podium {
}
</style>
