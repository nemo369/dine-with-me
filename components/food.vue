<template>
  <section class="section mb-28 mt-16">
    <h3
      class="subtitle tac mt-32 mb-10 flex justify-center text-2xl font-light"
    >
      <span class="py-1 sm:px-6 bg-brand-100 rounded shadow text-brand-900">
        אוכל
      </span>
    </h3>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box title="התיאור הארוך ביותר" class="md:w-3/6">
        <div v-if="longest" class="flex flex-wrap text-lg justify-between">
          <span>
            <span class="font-extralight">למנה עיקרית: </span>
            {{ longest[0] }}
          </span>
          <common-<common-sticker
            :id="longest[1].id"
            :name="longest[1].name"
            :src="longest[1].avatar"
            width="120"
          />
        </div>
      </common-box>
      <common-box v-if="malbi" title="לקינוח: מלבי" class="md:w-3/6">
        <ul class="flex flex-wrap">
          <li
            v-for="(contestant, index) in malbi"
            :key="index"
            class="my-2 xl:w-1/3 md:w-1/2"
          >
            <common-sticker
              :id="contestant.id"
              :name="contestant.name"
              :src="contestant.avatar"
              :width="`${
                [3, 4].includes(+contestant.session_number) ? '150' : '90'
              }`"
            />
          </li>
        </ul>
      </common-box>
    </div>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box v-if="sacvhice" title="סביצ׳ה">
        <ul class="text-sm list-disc list-inside">
          <li
            v-for="(contestant, index) in sacvhice"
            :key="index"
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
        <div class="md:min-w-30">
          <div class="text-2xl">{{ vegan.length }} צמחונים</div>
          <div class="text-2xl">{{ vegetarian.length }} טבעונים</div>
        </div>
      </common-box>
    </div>
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box
        v-if="coscos"
        title="קוסקוס - גם ביתי וגם משקית"
        class="flex-grow"
      >
        <div class="flex flex-wrap max-w-2xl">
          <div
            v-for="(contestant, index) in coscos"
            :key="index"
            class="text-sm px-3 relative toglle-on-hover"
          >
            <common-sticker
              :id="contestant.id"
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
                sm:px-4
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
                sm:px-4
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
                sm:px-4
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
          <cld-image
            loading="lazy"
            public-id="v1626157528/s1e31_Moment_yhou08.jpg"
            fetch-format="auto"
            quality="auto"
            class="rounded mt-6 ml-auto"
            width="450"
            :alt="`אני היחיד שעליתי על זה שהקוסקוס הוא לא ביתי`"
          />
        </div>
      </common-box>
      <common-box
        v-if="grandma"
        title="גדלתי על הבישולים של סבתא"
        class="flex-grow"
      >
        <ul class="list-disc list-inside">
          <li
            v-for="(contestant, index) in grandma"
            :key="index"
            class="my-6 px-3 leading-4 text-sm"
          >
            <span v-if="contestant.course" class="w-3/6 text-base">
              <span v-html="findWord(contestant.course[0])"></span>
              <span
                class="font-thin text-sm"
                v-html="findWord(contestant.course[1])"
              ></span>
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
  props: {
    contestants: {
      type: Array,
      default: () => [],
    },
    weeks: {
      type: Array,
      default: () => [],
    },
    entities: {
      type: Object,
      default: () => {},
    },
  },
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
  methods: {
    findWord(sentence) {
      if (!sentence) return ''
      const word = `סבתא`
      const index = sentence.indexOf(word)
      if (index === -1) return sentence

      return (
        sentence.substring(0, index) +
        "<span class='bg-white bg-opacity-10 rounded px-1'>" +
        sentence.substring(index, index + word.length) +
        '</span>' +
        sentence.substring(index + word.length)
      )
    },
  },
}
</script>

<style>
.min-w-30 {
  min-width: 300px;
}
</style>
