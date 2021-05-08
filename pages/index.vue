<template>
  <main v-if="contestants" class="main py-10 px-4 min-h-screen bg-blue-200">
    <welcome :contestants="contestants.length" />
    <article class="mx-auto">
      <genrael :contestants="contestants" :weeks="weeks" />
      <contestants :contestants="contestants" :weeks="weeks" />
      <food :contestants="contestants" :weeks="weeks" />
      <div class="flex justify-center gap-x-8 mb-12">
        <client-only>
          <svg-world :contestants="contestants" />
        </client-only>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      weeks: [],
      contestants: [],
    }
  },
  async fetch() {
    this.weeks = await fetch(
      `${process.env.API_ENDPOINT}weeks?_limit=-1`
    ).then((res) => res.json())

    this.contestants = await fetch(
      `${process.env.API_ENDPOINT}contestants?_limit=-1`
    ).then((res) => res.json())
  },
  head() {
    return {
      title: 'בואו לאכול איתי ישראל - עונת הסטטיסטיקות',
      bodyAttrs: {
        class: 'home-page',
      },
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
}
</script>

<style></style>
