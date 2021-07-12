<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-brand-100 rounded shadow text-brand-900"
        >המשתתפים</span
      >
    </h3>
    <clean-sick :contestants="contestants" :entities="entities" />

    <div class="grid md:grid-cols-2 justify-between gap-x-8 mb-12">
      <common-box title="חלוקה מגדרית">
        <div class="flex">
          <ul class="text-2xl gap-x-3">
            <li v-for="(value, name) in genders" :key="value">
              {{ name }}: {{ value }}
            </li>
          </ul>
          <svg-gender />
        </div>
      </common-box>
      <common-box title="ממוצע גילים" :number="ages"></common-box>
    </div>
    <div class="flex justify-center gap-x-8 mb-12">
      <svg-israel :contestants="contestants" :entities="entities"></svg-israel>
    </div>
    <div class="lg:flex justify-between gap-x-8 mb-12">
      <common-box title="המשתתפים הגרועים ביותר">
        <podium
          color="bg-brand-700 border-brand-900"
          class="worst"
          :is-worst="true"
          :conts="orderByScored.slice(Math.max(orderByScored.length - 3, 1))"
        />
      </common-box>
      <common-box title="המשתתפים הטובים ביותר">
        <podium
          :conts="orderByScored.slice(0, 3)"
          color="bg-brand-300 border-brand-100"
        />
      </common-box>
    </div>
    <uniq-realty :contestants="contestants" :entities="entities" />
    <div class="md:flex justify-around gap-x-8 mb-12">
      <common-box title="עורכי דין" :number="lawyrs.length"> </common-box>
      <common-box title="LGBTQ 🏳️‍🌈" :number="lgbtq.length"> </common-box>
      <common-box title="הציון הגבוה ביותר שניתן">
        <div class="flex justify-between items-center">
          <common-sticker
            :id="best[0].id"
            :name="getC(best[0].id).name"
            :src="getC(best[0].id).avatar"
            :width="80"
          />
        </div>
        <p class="text-sm">*נתנה ציון 10 לכל אחד מארבעת המתמודדים מולה</p>
      </common-box>
      <common-box title="הציון הנמוך ביותר שהוענק">
        <div class="">
          <div class="flex justify-between items-center">
            <common-sticker
              :id="lowest[0].id"
              :name="getC(lowest[0].id).name"
              :src="getC(lowest[0].id).avatar"
              :width="80"
            />
            <div class="text-2xl w-10 fill-current">
              <span> 0 </span>
              <svg-arrow-home />
            </div>
            <common-sticker
              :id="lowest[1].id"
              :name="getC(lowest[1].id).name"
              :src="getC(lowest[1].id).avatar"
              :width="80"
            />
          </div>
          <div class="text-sm">
            *הציון הנמוך ביותר שנאפשר להעניק הוא 1, אז הוא קיפל את הציון של 10
          </div>
        </div>
      </common-box>
    </div>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box title="התקפי צחוק" :number="laugh.length"> </common-box>
      <common-box title="מתמודדים שבכו" :number="cry.length"> </common-box>
    </div>
    <not-eating />
    <div class="lg:flex justify-between gap-x-8 mb-12">
      <uniq-sessions :contestants="contestants" :entities="entities" />
      <uniq-order :contestants="contestants" :entities="entities" />
      <common-box v-if="beniamin" title="משתתפים שנפסלו">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <nuxt-link :to="`contestant/${beniamin.id}`">
            <common-sticker
              :name="beniamin.name"
              :src="beniamin.avatar"
              width="90"
            />
          </nuxt-link>
        </div>
      </common-box>
    </div>

    <!-- // נתנו ציון גרוע וניצחו ולהפך -->
  </section>
</template>

<script>
import { COUPLES_SESSIONS } from '../utils/utils'
export default {
  props: {
    entities: {
      type: Object,
      default: () => {},
    },
    contestants: {
      type: Array,
      default: () => [],
    },
    weeks: {
      type: Array,
      default: () => [],
    },
  },
  // props: ['contestants', 'weeks', 'entities'],
  data() {
    return {
      laugh: [
        { id: '6077fed6a93beac05efc6925' },
        { id: '6077fed6a93beac05efc6929' },
        { id: '6077fed6a93beac05efc6937' },
        { id: '60b88fc3ccc85f85822661c7' },
        { id: '60b88f1accc85f85822661af' },
        { id: '60b88f1accc85f85822661b1' },
      ],
      cry: [
        { id: '6077fd498905dcba4d5a2923' },
        { id: '6077fd498905dcba4d5a292a' },
        { id: '6077fed6a93beac05efc6915' },
        { id: '6077fed6a93beac05efc6918' },
        { id: '6077fed6a93beac05efc691e' },
        { id: '6077fed6a93beac05efc6924' },
        { id: '6077fed6a93beac05efc692a' },
        { id: '6077fed6a93beac05efc692d' },
        { id: '6077fed6a93beac05efc6933' },
        { id: '60b885e81653cc67f9aa715b' },
      ],
    }
  },
  computed: {
    genders() {
      return this.contestants?.reduce((acc, item) => {
        if (COUPLES_SESSIONS.includes(+item.session_number)) {
          const genders = item.gender
            ?.split(',')
            .map((word) => word.replace(/,/g, '').trim())
          genders.forEach((gender) => {
            acc = { ...acc, [gender]: acc[gender] ? acc[gender] + 1 : 1 }
          })
          return acc
        }

        return {
          ...acc,
          [item.gender]: acc[item.gender] ? acc[item.gender] + 1 : 1,
        }
      }, {})
    },
    ages() {
      let totalContestants = 0
      const totalAges = this.contestants?.reduce((acc, item) => {
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
    lowest() {
      return [
        { id: '6077fed6a93beac05efc6927' },
        { id: '6077fed6a93beac05efc6924' },
      ]
    },
    best() {
      return [{ id: '6077fd498905dcba4d5a2939' }]
    },
    orderByScored() {
      if (!this.contestants) return []
      const sorted = [...this.contestants].sort((a, b) =>
        a.score < b.score ? 1 : a.score > b.score ? -1 : 0
      )
      return sorted.filter((contestant) => contestant.score)
    },
  },
  methods: {
    getC(id) {
      return this.entities[id]
    },
  },
}
</script>

<style>
.worst .podium-rows {
  align-items: flex-start;
}

.podium .sticker {
  display: block;
}
.podium .sticker-text {
  transform: translateY(-12px);
  padding: 4px;
  text-align: center;
}
</style>
