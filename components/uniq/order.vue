<template>
  <common-box title="סדר אירוח vs תוצאה סופית">
    <div class="text-lg">
      רק {{ winnersFirst.length }} מהמנצחים אירחו ראשונים בתחרות
    </div>
    <div class="text-lg">
      {{ lostFirst.length }} אירחו ראשונים והגיעו מקום אחרון
    </div>
    <div class="text-lg">
      מבין המארחים אחרונים, {{ winnersLast.length }} ניצחו
    </div>
  </common-box>
</template>

<script>
export default {
  props: ['contestants'],
  data() {
    return {}
  },
  computed: {
    winnersFirst() {
      const winnersAmount = this.contestants.filter(
        (contestant) => contestant.order === 1 && contestant.final_place === 1
      )
      return winnersAmount
    },
    winnersLast() {
      const winnersAmount = this.contestants.filter((contestant) => {
        if (
          contestant.session_number === 3 ||
          contestant.session_number === 4
        ) {
          return contestant.order === 3 && contestant.final_place === 1
        }
        return contestant.order === 5 && contestant.final_place === 1
      })
      return winnersAmount
    },
    lostFirst() {
      const total = this.contestants.filter((contestant) => {
        if (
          contestant.session_number === 3 ||
          contestant.session_number === 4
        ) {
          return contestant.order === 1 && contestant.final_place === 3
        }
        return contestant.order === 1 && contestant.final_place === 5
      })
      return total
    },
  },
}
</script>

<style scoped></style>
