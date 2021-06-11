<template>
  <div v-if="reArragne">
    <div class="podium py-3">
      <div class="flex items-end gap-12 justify-center podium-rows">
        <div
          v-for="(contestant, index) in reArragne"
          :key="index"
          :class="`h-full bg-${color}-400 border-${color}-100 border pb-4 w-28`"
          :style="`height:${getHeight(index)}px`"
        >
          {{ contestant.score }}
        </div>
      </div>
      <div class="flex gap-12 justify-center items-end mt-2">
        <div v-for="(contestant, index) in reArragne" :key="index">
          <nuxt-link v-if="contestant" :to="`contestant/${contestant.id}`">
            <div class="w-28">
              <common-sticker
                :width="`${
                  [3, 4].includes(+contestant.session_number) ? '120' : '70'
                }`"
                :name="contestant.name"
                :src="contestant.avatar"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slugify } from '../utils/utils'
export default {
  props: ['conts', 'color', 'isWorst'],
  computed: {
    reArragne() {
      if (this.isWorst) {
        return [this.conts[1], this.conts[2], this.conts[0]]
      }
      return [this.conts[2], this.conts[0], this.conts[1]]
    },
  },
  methods: {
    sluged(p) {
      return slugify(p)
    },
    getHeight(i) {
      if (i === 0) {
        return 150
      }
      if (i === 1) {
        return 220
      }
      return 180
    },
  },
}
</script>

<style>
.podium .sticker__name {
  transform: unset;
  margin: auto;
}
</style>
