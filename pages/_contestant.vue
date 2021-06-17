<template>
  <main class="w-full flex-grow">
    <header class="flex justify-between py-6 mb-4">
      <span></span>
      <nuxt-link
        to="/"
        class="
          flex
          items-center
          bg-brand-700
          px-4
          py-2
          rounded
          gap-x-4
          border-brand-700 border
          hover:bg-brand-300
        "
      >
        <span class="mr-2">חזרה לעמוד הבית</span>
        <svg-arrow-home class="w-6 fill-current" />
      </nuxt-link>
    </header>
    <div class="py-6 px-4">
      {{ contestant }}
      <article
        v-if="0"
        class="bg-brand-700 rounded py-6 px-4 max-w-3xl shadow-lg mx-auto"
      >
        <!-- <cld-image
          v-if="contestant.avatar"
          :public-id="contestant.avatar.provider_metadata.public_id"
          :width="width"
          fetch-format="auto"
          quality="auto"
          effect="trim"
          class="z-[1] relative"
          :alt="`${contestant.name}`"
        /> -->
        <h1 class="text-white font-bold my-2 text-center text-3xl">
          {{ contestant.name }}
        </h1>
        <h2 class="text-white mb-6 text-center text-xl flex items-center">
          <span> {{ contestant.city }} </span>
          <span
            class="w-1 h-1 rounded-full bg-brand-300 mx-2 inline-block"
          ></span>
          <span> {{ contestant.session_number }} עונה:</span>
          <span> {{ contestant.episodes }} פרקים:</span>
          <span class="w-1 h-1 rounded-full bg-brand-300 mx-2"></span>
        </h2>
        <h3 class="text-white mb-6 text-center text-xl flex items-center">
          <span> {{ contestant.order }} אירח במקום</span>
          <span class="w-1 h-1 rounded-full bg-brand-300 mx-2"></span>
          <span> {{ contestant.final_place }} סיים במקום ה:</span>
          <span> {{ contestant.score }} ציון סופי:</span>
          <span class="w-1 h-1 rounded-full bg-brand-300 mx-2"></span>
        </h3>
        <div v-for="(key, value) in contestant" :key="key">
          <div
            v-if="keyToString(key) && value"
            class="border-b-2 border-brand-300 py-2 flex"
          >
            <span>{{ keyToString(key) }}</span>
            <span>{{ value }}</span>
          </div>
        </div>
        <div class="mt-6">
          <common-box title="מנה ראשונה">
            {{ contestant.first_course }}
          </common-box>
          <common-box title="עיקרית">
            {{ contestant.main_course }}
          </common-box>
          <common-box title="קינוח">
            {{ contestant.dessert }}
          </common-box>
        </div>
        <div class="mt-6 flex">
          <common-box title="השתתפו איתו">
            {{ contestant.dessert }}
          </common-box>
        </div>
      </article>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      contestant: null,
    }
  },
  async fetch({ params, env: { API_ENDPOINT } }) {
    console.log(
      `${API_ENDPOINT}contestants/${encodeURIComponent(params.contestant)}`
    )
    this.contestant = await fetch(
      `${API_ENDPOINT}contestants/${encodeURIComponent(params.contestant)}`
    ).then((res) => res.json())
  },
  // call fetch only on client-side
  fetchOnServer: false,
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
        case 'final_place':
          return 'מקום סופי'
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

        default:
          return null
      }
    },
  },
}
</script>

<style></style>
