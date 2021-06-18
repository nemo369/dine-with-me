<template>
  <main class="main min-h-screen bg-brand rounded-md">
    <welcome :contestants="contestants.length" />
    <article class="mx-auto py-10 px-4">
      <genrael :contestants="contestants" :weeks="weeks" />
      <came-for :contestants="contestants" />
      <contestants :contestants="contestants" :weeks="weeks" />
      <oren :contestants="contestants" />
      <entrance :contestants="contestants" />
      <also-more :contestants="contestants" />
      <div class="flex justify-center gap-x-8 mb-12">
        <client-only>
          <svg-world :contestants="contestants" />
        </client-only>
      </div>
      <shows :contestants="contestants" />
      <uniq-shai-avivi />
      <food :contestants="contestants" :weeks="weeks" />
      <apron :contestants="contestants" />
      <more :contestants="contestants" />
    </article>
    <div>
      <the-footer :contestants="contestants" />
    </div>
  </main>
</template>

<script>
import theFooter from '../components/the-footer.vue'
import { rnd } from '../utils/utils'
/* eslint-disable prettier/prettier */

export default {
  components: { theFooter },
  async asyncData() {
    const weeks = await fetch(`${process.env.API_ENDPOINT}weeks?_limit=-1`).then(
      (res) => res.json()
    )

    const contestants = await fetch(
      `${process.env.API_ENDPOINT}contestants?_limit=-1`
    ).then((res) => res.json())

    return {contestants ,weeks}
  },
  data() {
    return {
      weeks: [],
      contestants: [],
      hue: rnd(150,360),
      dir:-1,
      title:'בואו לאכול איתי עונת הסטטיסטיקות',
      description:'סטטיסטיקות ועובדות מורכבות לאורך כל העונות של בואו לאכול איתי',
      image:'http://dinewithme.co.il/image.png'
    }
  },
  head() {
    return {
      title: 'בואו לאכול איתי ישראל - עונת הסטטיסטיקות',
      bodyAttrs: {
        class: 'home-page',
      },
      meta: [
      {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
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
      this.hue += (0.25 * this.dir);
      if(this.hue < 155){
        this.dir = 1
      }
      if(this.hue > 420){
        this.dir = -1
      }
      const root = document.documentElement
      const brand = {
        100: `hsl(${Math.round(this.hue)}, 33%, 88%)`,
        300: `hsl(${Math.round(this.hue)}, 40%, 50%`,
        DEFAULT: `hsl(${Math.round(this.hue)}, 50%, 50%)`,
        700: `hsl(${Math.round(this.hue)}, 61%, 35%)`,
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
