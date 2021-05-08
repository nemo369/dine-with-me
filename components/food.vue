<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-opacity-10 bg-blue-50 rounded shadow"
        >אוכל</span
      >
    </h3>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="התיאור הארוך ביותר">
        <div v-if="longest" class="flex text-lg justify-between">
          <span class="w-4/6">
            <span class="font-extralight">למנה עיקרית: </span>
            {{ longest[0] }}
          </span>
          <span class="text-lg">{{ longest[1].name }}</span>
        </div>
      </common-box>
      <common-box title="הקצר ביותר">
        <div v-if="shortest" class="flex text-lg justify-between">
          <span class="w-4/6">
            <span class="font-extralight">למנה עיקרית: </span>
            {{ shortest[0] }}
          </span>
          <span class="text-lg">{{ shortest[1].name }}</span>
        </div>
      </common-box>
      <common-box v-if="malbi" title="לקינוח: מלבי">
        <div v-for="contestant in malbi" :key="contestant.id" class="my-2">
          <common-sticker :name="contestant.name" />
        </div>
      </common-box>
    </div>
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box v-if="sacvhice" title="סביצ׳ה">
        <ul
          v-for="contestant in sacvhice"
          :key="contestant.id"
          class="my-2 text-sm list-disc px-3"
        >
          <li>
            <span v-if="contestant.first_course.join().includes(`סביצ`)"
              >{{ contestant.first_course[0]
              }}<span class="font-thin">{{ contestant.first_course[1] }}</span>
            </span>
            <span v-if="contestant.main_course.join().includes(`סביצ`)"
              >{{ contestant.main_course[0]
              }}<span class="font-thin">{{ contestant.main_course[1] }}</span>
            </span>
            <span v-if="contestant.dessert.join().includes(`סביצ`)"
              >{{ contestant.dessert[0]
              }}<span class="font-thin">{{ contestant.dessert[1] }}</span>
            </span>
          </li>
        </ul>
      </common-box>
      <common-box :title="`״לא אוכל חיות מתות״`">
        <div class="text-2xl">{{ vegan.length }} צמחונים</div>
        <div class="text-2xl">{{ vegetarian.length }} טבעונים</div>
      </common-box>
      <common-box v-if="fish" title="דגים">
        <div
          v-for="contestant in fish"
          :key="contestant.id"
          class="text-sm px-3"
        >
          <div class="relative">
            <common-sticker :src="contestant.avatar" />
            <span
              v-if="contestant.first_course.join().includes(`דג`)"
              class="hidden on-hover"
              >{{ contestant.first_course[0]
              }}<span class="font-thin">{{ contestant.first_course[1] }}</span>
            </span>
            <span
              v-if="contestant.main_course.join().includes(`דג`)"
              class="hidden on-hover"
              >{{ contestant.main_course[0]
              }}<span class="font-thin">{{ contestant.main_course[1] }}</span>
            </span>
            <span
              v-if="contestant.dessert.join().includes(`דג`)"
              class="hidden on-hover"
              >{{ contestant.dessert[0]
              }}<span class="font-thin">{{ contestant.dessert[1] }}</span>
            </span>
          </div>
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
        return a?.length > b?.length ? a : b
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
    vegan() {
      return this.contestants.filter((c) => {
        return c.vegan?.includes('צמח')
      })
    },
    vegetarian() {
      return this.contestants.filter((c) => {
        return c.vegan?.includes('טבע')
      })
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
    fish() {
      const sacvhice = this.contestants.filter((c) => {
        return (
          (c.first_course.includes(`דג`) && !c.first_course.includes(`סביצ`)) ||
          (c.main_course.includes(`דג`) && !c.main_course.includes(`סביצ`)) ||
          (c.dessert.includes(`דג`) && !c.dessert.includes(`סביצ`))
        )
      })

      return sacvhice.map((c) => ({
        ...c,
        first_course: c.first_course.split('-'),
        main_course: c.main_course.split('-'),
        dessert: c.dessert.split('-'),
      }))
    },
    sacvhice() {
      const sacvhice = this.contestants.filter((c) => {
        return (
          c.first_course.includes(`סביצ`) ||
          c.main_course.includes(`סביצ`) ||
          c.dessert.includes(`סביצ`)
        )
      })

      return sacvhice.map((c) => ({
        ...c,
        first_course: c.first_course.split('-'),
        main_course: c.main_course.split('-'),
        dessert: c.dessert.split('-'),
      }))
    },
    shortest() {
      const allDishes = this.contestants
        .map((c) => [c.first_course, c.main_course, c.dessert])
        .flat()

      const shortest = allDishes.reduce(function (a, b) {
        return a?.length && a.length < b.length ? a : b
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
