<template>
  <section class="section mb-28 mt-16">
    <h3
      class="subtitle tac mt-32 mb-10 flex justify-center text-2xl font-light"
    >
      <span class="py-1 sm:px-6 bg-brand-100 rounded shadow text-brand-900"
        >ועכשיו לקטע האומנותי</span
      >
    </h3>
    <ul class="md:grid md:grid-cols-2 gap-x-4 gap-y-10 justify-center">
      <li v-for="show in shows" :key="show.publicId" class="mb-10">
        <div class="rounded-lg overflow-hidden max-w-[600px] mx-auto">
          <client-only>
            <cld-image
              loading="lazy"
              :public-id="show.publicId"
              :alt="getC(show.contestnetId).name"
              class="mx-auto text-xs"
            />
          </client-only>
        </div>
        <div class="mt-2 flex">
          <span class="bg-brand-700 rounded sm:px-4 py-2 mx-auto">
            <nuxt-link :to="`/${show.contestnetId}`">
              {{ getC(show.contestnetId).name }} | עונה:{{
                getC(show.contestnetId).session_number
              }}
            </nuxt-link>
          </span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    contestants: {
      type: Array,
      default: () => [],
    },
    entities: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    // https://res.cloudinary.com/diowvie2f/image/upload/v1623862254/ezgif-6-52511ed9a7ef_jdvvg5.webp
    // https://res.cloudinary.com/diowvie2f/image/upload/f_auto,q_auto/v1623862254/ezgif-6-52511ed9a7ef_jdvvg5.webp
    return {
      shows: [
        {
          publicId: 'v1623862283/danci-gadi_1_qfycii.webp',
          contestnetId: '6077fed6a93beac05efc6910',
          desc: 'דנסי',
        },
        {
          publicId: 'v1623862022/ezgif-6-61643253f432_h7cmly.webp',
          contestnetId: '6077fed6a93beac05efc6916',
          desc: 'יובל',
        },
        {
          publicId: 'v1623862254/ezgif-6-52511ed9a7ef_jdvvg5.gif',
          contestnetId: '60b8867b1653cc67f9aa7182',
          desc: 'חגי',
        },
        {
          publicId: 'v1623837100/s4e14-chicken_ui3xl9.webp',
          contestnetId: '60b88f1accc85f85822661b1',
          desc: 'מריאז',
        },
        {
          publicId: 'v1623837078/star-wars-s3e14_s10871.webp',
          contestnetId: '60b885e81653cc67f9aa7157',
          desc: 'גלית',
        },
        {
          publicId: 'v1623831880/clown-s2e15_gumhwc.webp',
          contestnetId: '6077fed6a93beac05efc6933',
          desc: 'יוסקה',
        },
        {
          publicId: 'v1623831891/circus-s3e2_osejzp.webp',
          contestnetId: '60b88fc3ccc85f85822661c0',
          desc: 'נחמני',
        },
      ],
    }
  },
  methods: {
    getC(id) {
      return this.entities[id]
    },
  },
}
</script>

<style></style>
