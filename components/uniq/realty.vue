<template>
  <section class="section mb-28 mt-16">
    <div class="grid section-131342 justify-between gap-x-8 mb-12">
      <common-box title="האח הגדול">
        <div class="flex items-center flex-nagtive">
          <div class="number">{{ bigBrother.length }}</div>
          <common-sticker
            v-for="c in bigBrother"
            :key="c.name"
            :src="c.avatar"
            :width="`${[3, 4].includes(+c.session_number) ? '180' : '100'}`"
          />
        </div>
      </common-box>
      <common-box title="ביק אוף ישראל">
        <div class="flex justify-between items-center">
          <div class="number">{{ bakeOf.length }}</div>
          <common-sticker
            v-for="c in bakeOf"
            :key="c.name"
            :width="`${[3, 4].includes(+c.session_number) ? '180' : '100'}`"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
    </div>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="גולסטאר">
        <div class="flex items-center">
          <div class="number">{{ golstar.length }}</div>
          <common-sticker
            v-for="c in golstar"
            :key="c.name"
            :width="`${[3, 4].includes(+c.session_number) ? '180' : '100'}`"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
      <common-box title="כוכבי ילדים">
        <div class="flex items-center">
          <div class="number">2</div>
          <common-sticker
            name="דנסי גדי"
            :src="gadi.avatar"
            :width="`${[3, 4].includes(+gadi.session_number) ? '180' : '100'}`"
          />
          <common-sticker
            name="חגי הספורטאי"
            :src="hagi.avatar"
            :width="`${[3, 4].includes(+hagi.session_number) ? '180' : '100'}`"
          />
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants'],

  computed: {
    bigBrother() {
      return this.contestants.filter((c) => c.reality.includes('הגדול'))
    },
    bakeOf() {
      return this.contestants.filter((c) => c.reality.includes('בייק'))
    },
    golstar() {
      return this.contestants.filter((c) => c.reality.includes('גולסטאר'))
    },
    gadi() {
      return this.contestants.find((c) => c.name === 'גדי חפר')
    },
    hagi() {
      return this.contestants.find((c) => c.name.includes('חגי הספורטאי'))
    },
  },
}
</script>

<style scoped>
.section-131342 {
  grid-template-columns: 3fr 1fr;
}
.flex-nagtive .sticker:not(:last-of-type) {
  margin-left: -1vw;
}

/* .flex-nagtive .sticker {
  margin-left: -3.5vw;
} */
</style>
