<template>
  <section class="section mb-28 mt-16">
    <div class="flex justify-between gap-3 mb-6">
      <common-box title="סה״כ פרקים" :number="episodes" />
      <common-box
        title="סה״כ טיולים קולינריים לאיטליה"
        :number="contestantsNumber"
      />
      <common-box title="סה״כ קריינים">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <common-sticker
            name="שי אביבי"
            src="https://res.cloudinary.com/diowvie2f/image/upload/v1618772206/%D7%A9%D7%99_%D7%90%D7%91%D7%99%D7%91%D7%99_ayzlm5.png"
          />
        </div>
      </common-box>
    </div>
    <div class="flex justify-between gap-3 mb-6">
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
      <common-box title="מספר שבועות" :number="weeksNumber" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants', 'weeks'],
  computed: {
    contestantsNumber() {
      return this.contestants?.length
    },
    weeksNumber() {
      return this.weeks?.length
    },
    episodes() {
      let total = 0
      this.weeks?.forEach((week) => {
        const [first, last] = week.episodes.split('-')
        total += +last - +first + 1
      })
      return total
    },
  },
}
</script>

<style></style>
