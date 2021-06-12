<template>
  <main v-if="contestants" class="main min-h-screen bg-brand rounded-md">
    <welcome :contestants="contestants.length" />
    <article class="mx-auto py-10 px-4">
      <genrael :contestants="contestants" :weeks="weeks" />
      <contestants :contestants="contestants" :weeks="weeks" />
      <oren :contestants="contestants" />
      <div class="flex justify-center gap-x-8 mb-12">
        <client-only>
          <svg-world :contestants="contestants" />
        </client-only>
      </div>
      <uniq-shai-avivi />
      <food :contestants="contestants" :weeks="weeks" />
      <apron />
      <dishes />
    </article>
  </main>
</template>

<script>
/* eslint-disable prettier/prettier */

export default {
  data() {
    return {
      weeks: [],
      contestants: [],
      hue: 326,
    }
  },
  async fetch() {
    this.weeks = await fetch(`${process.env.API_ENDPOINT}weeks?_limit=-1`).then(
      (res) => res.json()
    )

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
  beforeMount() {
    window.addEventListener('scroll',this.switchColor,300)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.switchColor)
  },
  methods: {
    switchColor(e) {
      this.hue -= 0.4
      const root = document.documentElement
      const brand = {
        100: `hsl(${Math.round(this.hue)}, 33%, 88%)`,
        300: `hsl(${Math.round(this.hue)}, 40%, 50%`,
        DEFAULT: `hsl(${Math.round(this.hue)}, 50%, 50%)`,
        700: `hsl(${Math.round(this.hue)}, 71%, 25%)`,
        900: `hsl(${Math.round(this.hue)}, 100%, 10%)`,
      }

      root.style.setProperty('--colors-brand', `${brand.DEFAULT}`)
      root.style.setProperty('--colors-brand-100', `${brand[100]}`)
      root.style.setProperty('--colors-brand-300', `${brand[300]}`)
      root.style.setProperty('--colors-brand-700', `${brand[700]}`)
      root.style.setProperty('--colors-brand-900', `${brand[900]}`)
    },
  },
}
</script>

<style></style>
