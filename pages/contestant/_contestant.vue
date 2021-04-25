<template>
  <main>
    <h1>{{ contestant }}שם:</h1>
  </main>
</template>

<script>
export default {
  data() {
    return {
      contestant: null,
    }
  },
  async fetch({ params }) {
    // const unSluged = unSlugify(params.contestant)
    const contestant = await fetch(
      `${process.env.API_ENDPOINT}contestants/${params.contestant}`
    ).then((res) => res.json())
    // if (!contestant) {
    //   // TODO: redircet to 404
    //   return this.$nuxt.error({
    //     statusCode: 404,
    //     message: 'Contestant not found',
    //   })
    // }
    this.contestant = contestant
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
