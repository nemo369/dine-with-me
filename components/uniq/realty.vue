<template>
  <section class="section mb-28 mt-16">
    <div class="grid md:grid-cols-2 justify-between gap-x-8 mb-12">
      <common-box title="האח הגדול">
        <div class="flex items-center gap-x-3 flex-wrap">
          <div class="number ml-auto">{{ bigBrother.length }}</div>
          <common-sticker
            v-for="c in bigBrother"
            :id="c.id"
            :key="c.name"
            :src="c.avatar"
            :alt="c.name"
            :width="`${[3, 4].includes(+c.session_number) ? '110' : '80'}`"
          />
        </div>
      </common-box>
      <common-box title="ביק אוף ישראל">
        <div class="flex items-center">
          <div class="number ml-2">{{ bakeOf.length }}</div>
          <common-sticker
            v-for="c in bakeOf"
            :id="c.id"
            :key="c.name"
            :width="`${[3, 4].includes(+c.session_number) ? '110' : '80'}`"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
    </div>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box title="גולסטאר">
        <div class="flex items-center flex-wrap">
          <div class="number">{{ golstar.length }}</div>
          <common-sticker
            v-for="c in golstar"
            :id="c.id"
            :key="c.name"
            :width="`${[3, 4].includes(+c.session_number) ? '110' : '80'}`"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
      <common-box title="כוכבי ילדים">
        <div class="flex items-center flex-wrap">
          <div class="number ml-auto">2</div>
          <common-sticker
            :id="gadi.id"
            name="דנסי גדי"
            :src="gadi.avatar"
            :width="`${[3, 4].includes(+gadi.session_number) ? '110' : '80'}`"
          />
          <common-sticker
            :id="hagi.id"
            class="hagi-avatar"
            :name="hagi.name"
            :src="hagi.avatar"
            :width="`${[3, 4].includes(+hagi.session_number) ? '120' : '70'}`"
          />
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants', 'entities'],

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
      return this.entities['6077fed6a93beac05efc6910'] || {}
      // return this.contestants.find((c) => c.name === 'גדי חפר')
    },
    hagi() {
      return this.entities['60b8867b1653cc67f9aa7182'] || {}
      // return this.contestants.find((c) => c.name.includes('חגי הספורטאי'))
    },
  },
}
</script>

<style>
.hagi-avatar.sticker {
  align-items: center;
}
</style>
