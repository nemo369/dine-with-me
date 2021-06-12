<template>
  <section class="section mb-28 mt-16">
    <h2 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-brand-100 rounded shadow text-brand-900"
        >על בואו לאכול איתי</span
      >
    </h2>
    <div class="grid grid-cols-3 justify-between gap-3 mb-6">
      <common-box title="מספר משתתפים" :number="contestantsNumber" />
      <common-box title="טיולים קולינריים לאיטליה  🇮🇹" :number="weeksNumber" />
      <common-box title="קריינים">
        <div class="flex justify-between items-center">
          <div class="number">1</div>

          <img
            alt="שי אביבי"
            src="https://res.cloudinary.com/diowvie2f/image/upload/v1618772206/%D7%A9%D7%99_%D7%90%D7%91%D7%99%D7%91%D7%99_ayzlm5.png"
          />
        </div>
      </common-box>
    </div>
    <div class="grid grid-cols-2 justify-between gap-3 mb-6">
      <common-box title="סוגי עונות">
        <div class="flex gap-x-6">
          <div class="flex gap-x-1">
            <svg-couple-waiter />
            <span>2</span>
          </div>
          <div class="flex gap-x-1">
            <svg-single-waiter />
            <span>2</span>
          </div>
        </div>
      </common-box>
      <common-box title="מספר פרקים" :number="episodes" />
    </div>
  </section>
</template>

<script>
import { COUPLES_SESSIONS } from '../utils/utils'
export default {
  props: ['contestants', 'weeks'],
  computed: {
    contestantsNumber() {
      let total = 0
      this.contestants?.forEach((c) => {
        const sum = COUPLES_SESSIONS.includes(+c.session_number) ? 2 : 1
        total += sum
      })
      return total
    },
    weeksNumber() {
      return this.weeks?.length
    },
    episodes() {
      let total = 0
      this.weeks?.forEach((week) => {
        const [first, last] = week?.episodes?.split('-')
        const sum = parseInt(last) - parseInt(first) + 1
        total += sum
      })
      return total
    },
  },
}
</script>

<style></style>
