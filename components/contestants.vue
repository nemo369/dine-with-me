<template>
  <section class="section mb-28 mt-16">
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="חלוקה מגדרית">
        <ul class="text-2xl flex gap-x-3">
          <li v-for="(value, name) in genders" :key="value">
            {{ name }}: {{ value }}
          </li>
        </ul>
      </common-box>
      <common-box title="ממוצע גילים" :number="ages" />
    </div>
    <div class="flex justify-center gap-x-8 mb-12">
      <svg-israel :contestants="contestants"></svg-israel>
    </div>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="המשתתפים הגרועים ביותר">
        <podium
          color="red"
          :conts="orderByScored.slice(Math.max(orderByScored.length - 3, 1))"
        />
      </common-box>
      <common-box title="המשתתפים הטובים ביותר">
        <podium :conts="orderByScored.slice(0, 3)" color="green" />
      </common-box>
    </div>
    <uniq-realty :contestants="contestants" />

    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="עורכי דין" :number="lawyrs.length"> </common-box>
      <common-box title="LGBTQ 🏳️‍🌈" :number="lgbtq.length"> </common-box>
      <common-box title="הציון הגבוה ביותר שניתן">
        <div class="flex justify-between items-center">
          <div class="number">10</div>
          <common-sticker
            name="שי אביבי"
            src="https://res.cloudinary.com/diowvie2f/image/upload/v1618772206/%D7%A9%D7%99_%D7%90%D7%91%D7%99%D7%91%D7%99_ayzlm5.png"
          />
        </div>
      </common-box>
      <common-box title="הציון הנמוך ביותר שהוענק">
        <div class="flex justify-between items-center">
          <div class="number">0</div>
          <common-sticker
            name="שי אביבי"
            src="https://res.cloudinary.com/diowvie2f/image/upload/v1618772206/%D7%A9%D7%99_%D7%90%D7%91%D7%99%D7%91%D7%99_ayzlm5.png"
          />
        </div>
      </common-box>
    </div>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="התקפי צחוק" :number="laugh.length"> </common-box>
      <common-box title="מתמודדים שבכו" :number="cry.length"> </common-box>
    </div>
    <div class="flex justify-between gap-x-8 mb-12">
      <uniq-sessions :contestants="contestants" />
      <uniq-order :contestants="contestants" />
      <common-box v-if="beniamin" title="משתתפים שנפסלו">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <nuxt-link :to="`contestant/${beniamin.id}`">
            <common-sticker :name="beniamin.name" />
          </nuxt-link>
        </div>
      </common-box>
    </div>

    <!-- // נתנו ציון גרוע וניצחו ולהפך -->
  </section>
</template>

<script>
import podium from './podium.vue'
export default {
  components: { podium },
  props: ['contestants', 'weeks'],
  data() {
    return {
      laugh: [],
      cry: [],
    }
  },
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
      let totalContestants = 0
      const totalAges = this.contestants.reduce((acc, item) => {
        if (item.age) {
          totalContestants++
          acc += +item.age
        }
        return acc
      }, 0)
      return Math.round(totalAges / totalContestants)
    },
    beniamin() {
      return this.contestants?.find((c) => c.name?.includes('בנימין יעקביאן'))
    },
    lgbtq() {
      return this.contestants.filter((c) => !c.lgbt?.includes('סטרייט'))
    },
    lawyrs() {
      return this.contestants.filter(
        (c) => c.job?.includes('עורך דין') || c.job?.includes('עורכת דין')
      )
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
