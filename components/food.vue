<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-brand-100 rounded shadow text-brand-900"
        >אוכל</span
      >
    </h3>
    <div class="md:flex justify-between gap-x-8 mb-12">
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
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box v-if="sacvhice" title="סביצ׳ה">
        <ul class="text-sm list-disc list-inside">
          <li
            v-for="contestant in sacvhice"
            :key="contestant.id"
            class="my-2 px-3"
          >
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
        <div class="min-w-30">
          <div class="text-2xl">{{ vegan.length }} צמחונים</div>
          <div class="text-2xl">{{ vegetarian.length }} טבעונים</div>
        </div>
      </common-box>
    </div>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box v-if="coscos" title="קוסקוס" class="flex-grow">
        <div class="flex flex-wrap max-w-2xl">
          <div
            v-for="contestant in coscos"
            :key="contestant.id"
            class="text-sm px-3 relative toglle-on-hover"
          >
            <common-sticker
              class=""
              :src="contestant.avatar"
              :width="`${
                [3, 4].includes(+contestant.session_number) ? '100' : '75'
              }`"
            />
            <span
              v-if="contestant.first_course.join().includes(`קוסקוס`)"
              class="
                hidden
                on-hover
                absolute
                bg-brand-700
                px-4
                py-2
                rounded
                top-[90%]
                w-max
                z-10
              "
              >{{ contestant.first_course[0]
              }}<span class="font-thin"
                ><br />{{ contestant.first_course[1] }}</span
              >
            </span>
            <span
              v-if="contestant.main_course.join().includes(`קוסקוס`)"
              class="
                hidden
                on-hover
                absolute
                bg-brand-700
                px-4
                py-2
                rounded
                top-[90%]
                w-max
                z-10
              "
              >{{ contestant.main_course[0] }}<br /><span class="font-thin">{{
                contestant.main_course[1]
              }}</span>
            </span>
            <span
              v-if="contestant.dessert.join().includes(`קוסקוס`)"
              class="
                hidden
                on-hover
                absolute
                bg-brand-700
                px-4
                py-2
                rounded
                top-[90%]
                w-max
                z-10
              "
              >{{ contestant.dessert[0] }}<br /><span class="font-thin">{{
                contestant.dessert[1]
              }}</span>
            </span>
          </div>
        </div>
      </common-box>
      <common-box
        v-if="grandma"
        title="גדלתי על הבישולים של סבתא"
        class="flex-grow"
      >
        <ul class="list-disc list-inside">
          <li
            v-for="contestant in grandma"
            :key="contestant.id"
            class="my-6 px-3 leading-4 text-sm"
          >
            <span v-if="contestant.course" class="w-3/6 text-base"
              >{{ contestant.course[0] }} -
              <span class="font-thin text-sm">{{ contestant.course[1] }}</span>
            </span>
            <span class="bg-brand-700 px-2 py-1 rounded text-xs">{{
              contestant.name
            }}</span>
          </li>
        </ul>
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
    coscos() {
      const sacvhice = this.contestants.filter((c) => {
        return (
          (c.first_course.includes(`קוסקוס`) &&
            !c.first_course.includes(`סביצ`)) ||
          (c.main_course.includes(`קוסקוס`) &&
            !c.main_course.includes(`סביצ`)) ||
          (c.dessert.includes(`קוסקוס`) && !c.dessert.includes(`סביצ`))
        )
      })

      return sacvhice.map((c) => ({
        ...c,
        first_course: c.first_course.split('-'),
        main_course: c.main_course.split('-'),
        dessert: c.dessert.split('-'),
      }))
    },
    grandma() {
      const grandmas = []
      this.contestants.forEach((c) => {
        if (c.first_course.includes(`סבתא`)) {
          grandmas.push({
            course: c.first_course.split('-'),
            name: c.name,
            id: c.id,
          })
        }
        if (c.main_course.includes(`סבתא`)) {
          grandmas.push({
            course: c.main_course.split('-'),
            name: c.name,
            id: c.id,
          })
        }
        if (c.dessert.includes(`סבתא`)) {
          grandmas.push({
            course: c.dessert.split('-'),
            name: c.name,
            id: c.id,
          })
        }
      })
      return grandmas
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

<style>
.min-w-30 {
  min-width: 300px;
}
</style>
