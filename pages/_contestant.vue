<template>
  <main class="w-full flex-grow lg:flex flex-row-reverse text-lg">
    <header class="flex justify-between py-6 mb-4">
      <span></span>
      <nuxt-link
        to="/"
        class="
          md:mx-0
          mx-auto
          h-10
          flex
          items-center
          bg-brand-700
          sm:px-4
          px-1
          py-2
          rounded
          gap-x-4
          border-brand-700 border
          hover:bg-brand-700
        "
      >
        <span class="mr-2">חזרה לעמוד הבית</span>
        <svg-arrow-home class="w-6 fill-current" />
      </nuxt-link>
    </header>
    <div class="py-6 sm:px-4 mx-auto px-1">
      <article
        class="
          bg-brand-300
          rounded
          py-6
          sm:px-4
          max-w-3xl
          shadow-lg
          mx-auto
          border-brand border-4
        "
      >
        <cld-image
          v-if="contestant.avatar"
          loading="lazy"
          :public-id="contestant.avatar.provider_metadata.public_id"
          :width="220"
          fetch-format="auto"
          quality="auto"
          effect="trim"
          class="z-[1] relative mx-auto text-xs"
          :alt="`${contestant.name}`"
        />
        <h1 class="text-white font-bold my-2 text-center text-5xl">
          {{ contestant.name }}
        </h1>
        <h2
          class="
            text-white
            mb-6
            text-center text-xl
            flex
            items-center
            justify-center
          "
        >
          <span
            class="w-1 h-1 rounded-full bg-brand-700 mx-2 inline-block"
          ></span>
          <span> {{ contestant.city }} </span>
          <span
            class="w-1 h-1 rounded-full bg-brand-700 mx-2 inline-block"
          ></span>
          <span> עונה: {{ contestant.session_number }}</span>
          <span class="w-1 h-1 rounded-full bg-brand-700 mx-2"></span>
          <span> פרקים: {{ contestant.week.episodes }} </span>
          <span class="w-1 h-1 rounded-full bg-brand-700 mx-2"></span>
        </h2>
        <h3
          class="
            text-white
            mb-6
            text-center text-xl
            flex
            items-center
            justify-center
          "
        >
          <span> סדר אירוח {{ contestant.order }} </span>
          <span class="w-1 h-1 rounded-full bg-brand-700 mx-2"></span>
          <span>
            {{ [3, 4].includes(+contestant.session_number) ? 'סיימו' : 'סיים' }}
            במקום ה {{ contestant.final_place }}</span
          >
          <span class="w-1 h-1 rounded-full bg-brand-700 mx-2"></span>
          <span> ציון סופי: {{ contestant.score }} </span>
        </h3>
        <div v-if="contestant.more_info" v-html="contestant.more_info"></div>
        <div v-for="(value, key) in contestant" :key="key">
          <div
            v-if="keyToString(key) && value"
            class="border-b-2 border-brand-300 py-2 flex"
          >
            <span>{{ keyToString(key) }}</span>
            <span class="ml-2 font-bold text-brand-700">:</span>
            <span>{{ value }}</span>
          </div>
          <hr
            v-if="keyToString(key) && value"
            class="bg-brand opacity-60 border border-brand-700"
          />
        </div>
        <div class="mt-10">
          <common-box title="מנה ראשונה">
            <div class="text-2xl">
              {{ contestant.first_course }}
            </div>
          </common-box>
          <common-box title="עיקרית">
            <div class="text-2xl">
              {{ contestant.main_course }}
            </div>
          </common-box>
          <common-box title="קינוח">
            <div class="text-2xl">
              {{ contestant.dessert }}
            </div>
          </common-box>
        </div>
        <div class="mt-6 flex">
          <common-box
            :title="`השתתפו ${
              [3, 4].includes(+contestant.session_number) ? 'איתם' : 'איתו'
            }`"
          >
            <div class="text-lg">
              {{ contestant.week.contestants_as_string }}
              | שבוע {{ contestant.week.description }}
            </div>
          </common-box>
        </div>
      </article>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { contestant: payload }
    const { API_ENDPOINT } = process.env
    const contestant = await fetch(
      `${API_ENDPOINT}contestants/${params.contestant}`
    ).then((res) => res.json())
    return { contestant }
  },
  data() {
    return {
      contestant: null,
      mountains: [],
    }
  },
  // call fetch only on client-side
  // fetchOnServer: false,
  head() {
    return {
      title: `בואו לאכול איתי ישראל - ${this.contestant?.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'סטטיסטיקות ועובדות מורכבות לאורך כל העונות של בואו לאכול איתי',
        },
      ],
    }
  },
  methods: {
    keyToString(key) {
      switch (key) {
        case 'job':
          return 'מקצוע'
        case 'lgbt':
          return 'lgbt'
        case 'community':
          return 'מוצא'
        case 'family_status':
          return 'מצב משפחתי'
        case 'at_his_house':
          return 'מצאו לו בבית'
        case 'vegan':
          return 'צמחוני'
        case 'reality':
          return 'ריאלטי'
        case 'cooking_style':
          return 'סגנון בישול'
        case 'relation_type':
          return 'קשר'
        default:
          return null
      }
    },
  },
}
</script>

<style></style>
