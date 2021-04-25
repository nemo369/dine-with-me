<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-opacity-10 bg-blue-50 rounded shadow"
        >אוכל</span
      >
    </h3>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="התיאור הארוך ביותר">
        <div class="flex text-lg justify-between">
          <span class="w-4/6">
            <span class="font-extralight">למנה עיקרית: </span>
            {{ longest[0] }}
          </span>
          <span class="text-lg">{{ longest[1].name }}</span>
        </div>
      </common-box>
      <common-box title="הקצר ביותר">
        <div class="flex text-lg justify-between">
          <span class="w-4/6">
            <span class="font-extralight">למנה עיקרית: </span>
            {{ shortest[0] }}
          </span>
          <span class="text-lg">{{ shortest[1].name }}</span>
        </div>
      </common-box>
      <common-box title="לקינוח: מלבי">
        <div
          v-for="contestant in malbi"
          :key="contestant.id"
          :class="`text-xl`"
        >
          {{ contestant.name }}
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants', 'weeks'],
  computed: {
    longest() {
      const allDishes = this.contestants
        .map((c) => [c.first_course, c.main_course, c.dessert])
        .flat()

      const longest = allDishes.reduce(function (a, b) {
        return a.length > b.length ? a : b
      })
      return [
        longest,
        this.contestants.find((c) => {
          if (
            (c.first_course && c.first_course.includes(longest)) ||
            (c.main_course && c.main_course.includes(longest)) ||
            (c.dessert && c.dessert.includes(longest))
          ) {
            return true
          }
          return false
        }),
      ]
    },
    malbi() {
      return this.contestants.filter((c) => {
        return (
          c.first_course.includes('מלבי') ||
          c.main_course.includes('מלבי') ||
          c.dessert.includes('מלבי')
        )
      })
    },
    shortest() {
      const allDishes = this.contestants
        .map((c) => [c.first_course, c.main_course, c.dessert])
        .flat()

      const shortest = allDishes.reduce(function (a, b) {
        return a.length && a.length < b.length ? a : b
      })
      return [
        shortest,
        this.contestants.find((c) => {
          if (
            (c.first_course && c.first_course.includes(shortest)) ||
            (c.main_course && c.main_course.includes(shortest)) ||
            (c.dessert && c.dessert.includes(shortest))
          ) {
            return true
          }
          return false
        }),
      ]
    },
  },
}
</script>

<style></style>
