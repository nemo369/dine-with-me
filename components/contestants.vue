<template>
  <section class="section mb-28 mt-16">
    <div class="flex justify-between gap-3 mb-6">
      <common-box title="חלוקה מגדרית">
        <ul class="text-2xl flex gap-x-3">
          <li v-for="(value, name) in genders" :key="value">
            {{ name }}: {{ value }}
          </li>
        </ul>
      </common-box>
      <common-box title="ממוצע גילים" :number="ages" />
    </div>
    <div class="flex justify-between gap-3 mb-6">
      <common-box title="מקום אירוח בארץ" number="x" />
      <common-box title="ממוצע הציונים" number="x" />
    </div>
    <div class="flex justify-between gap-3 mb-6">
      <common-box title="המשתתפים הגרועים ביותר">
        <podium
          :conts="orderByScored.slice(Math.max(orderByScored.length - 3, 1))"
        />
      </common-box>
      <common-box title="המשתתפים הטובים ביותר">
        <podium :conts="orderByScored.slice(0, 3)" />
      </common-box>
    </div>
    <div class="flex justify-between gap-3 mb-6">
      <common-box title="סדר אירוח vs תוצאה סופית" number="x" />
      <common-box title="משתתפים שנפסלו" number="x" />
    </div>

    <!-- // נתנו ציון גרוע וניצחו ולהפך -->
  </section>
</template>

<script>
import podium from './podium.vue'
export default {
  components: { podium },
  props: ['contestants', 'weeks'],
  computed: {
    genders() {
      return this.contestants.reduce((acc, item) => {
        if (Object.prototype.hasOwnProperty.call(acc, item.gender)) {
          return { ...acc, [item.gender]: acc[item.gender] + 1 }
        }
        return { ...acc, [item.gender]: 1 }
      }, {})
    },
    ages() {
      const totalAges = this.contestants.reduce(
        (acc, item) => (item.age ? (acc += +item.age) : acc),
        0
      )
      return totalAges / this.contestants.length
    },
    orderByScored() {
      if (!this.contestants) return []
      const sorted = [...this.contestants].sort((a, b) =>
        a.score < b.score ? 1 : a.score > b.score ? -1 : 0
      )
      return sorted.filter((contestant) => contestant.score)
    },
  },
}
</script>

<style></style>
