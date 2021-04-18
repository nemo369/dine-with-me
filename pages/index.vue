<template>
  <main class="main py-10 px-4 min-h-screen bg-blue-200">
    <welcome :contestants="contestants.length" />
    <article class="mx-auto"></article>
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
    this.weeks = await fetch(`${process.env.API_ENDPOINT}weeks`).then((res) =>
      res.json()
    )
    this.contestants = await fetch(
      `${process.env.API_ENDPOINT}contestants`
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
body {
  font-family: 'Varela Round', sans-serif;
}
</style>
