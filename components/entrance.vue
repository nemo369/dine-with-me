<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-brand-100 rounded shadow text-brand-900"
        >כניסות</span
      >
    </h3>
    <ul class="md:grid md:grid-cols-2 gap-x-4 gap-y-10 justify-center">
      <li v-for="entrance in entrances" :key="entrance.publicId" class="mb-10">
        <div class="rounded-lg overflow-hidden max-w-[600px] mx-auto">
          <client-only>
            <cld-image
              loading="lazy"
              :public-id="entrance.publicId"
              fetch-format="auto"
              quality="auto"
              :alt="`${getC(entrance.contestnetId).name}`"
              class="mx-auto"
            />
          </client-only>
        </div>
        <div class="mt-2 flex">
          <span class="bg-brand-700 rounded px-4 py-2 mx-auto">
            <nuxt-link :to="`/${entrance.contestnetId}`">
              {{ getC(entrance.contestnetId).name }} | עונה:{{
                getC(entrance.contestnetId).session_number
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
  },
  data() {
    return {
      entrances: [
        {
          publicId: 'v1623862532/ezgif-6-4d60609cc034_upeess.gif',
          contestnetId: '6077fd498905dcba4d5a292f',
          desc: 'יורם',
        },
        {
          publicId: 'v1623938928/ezgif-2-63e8c1d8ab2c_c9hvkg.gif',
          contestnetId: '6077fd498905dcba4d5a294a',
          desc: 'רחל',
        },
        {
          publicId: 'v1623837102/s2e2_entrance_gndip2.gif',
          contestnetId: '6077fed6a93beac05efc6911',
          desc: 'שני',
        },
        {
          publicId: 'v1623837009/bynaimin_gajnha.gif',
          contestnetId: '6077fed6a93beac05efc6927',
          desc: 'בנימין',
        },
        {
          publicId: 'v1623837046/ron-entrace-min_eawf1i.gif',
          contestnetId: '60b88fc3ccc85f85822661c2',
          desc: 'רון',
        },
        {
          publicId: 'v1623858031/ezgif-6-063bf4291324_g1kobg.gif',
          contestnetId: '60b88f1accc85f85822661b9',
          desc: 'אושרי וליאת',
        },
      ],
    }
  },
  methods: {
    getC(id) {
      return this.contestants?.find((c) => c.id === id)
    },
  },
}
</script>

<style></style>
