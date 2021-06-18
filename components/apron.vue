<template>
  <section class="section mb-28 mt-16">
    <h4 class="text-center mb-6 text-2xl">סינרים</h4>
    <ul class="md:grid md:grid-cols-3 gap-x-4cx gap-y-10">
      <li v-for="apron in aprons" :key="apron.publicId" class="mb-10">
        <client-only>
          <cld-image
            :public-id="apron.publicId"
            fetch-format="auto"
            quality="auto"
            :alt="`${getC(apron.contestnetId).name}`"
            class="mx-auto"
          />
        </client-only>
        <div class="mt-4 flex">
          <span class="bg-brand-700 rounded px-4 py-2 mx-auto">{{
            getC(apron.contestnetId).name
          }}</span>
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
      aprons: [
        {
          publicId: 'v1623764448/vivian_f7i47r.png',
          contestnetId: '60b88f1accc85f85822661ae',
        },
        {
          publicId: 'v1623764448/yoska_p0grhk.png',
          contestnetId: '6077fed6a93beac05efc6933',
        },
        {
          publicId: 'v1623763956/blank_gcrocn.png',
          contestnetId: '60b88fc3ccc85f85822661ca',
        },
        {
          publicId: 'v1623763957/ysgev_b2waxv.png',
          contestnetId: '60b88fc3ccc85f85822661c6',
        },
        {
          publicId: 'v1623763956/orly_ylbacd.png',
          contestnetId: '6077fd498905dcba4d5a291c',
        },
        {
          publicId: 'v1623763956/rakft_h7rzq1.png',
          contestnetId: '60b88fc3ccc85f85822661c7',
        },
        {
          publicId: 'v1623763956/anar_lmgbik.png',
          contestnetId: '60b88e7d1653cc67f9aa71cd',
        },
        {
          publicId: 'v1623763956/gali_e2nrkr.png',
          contestnetId: '6077fd498905dcba4d5a291b',
        },
        {
          publicId: 'v1623763956/ronit_edm7dn.png',
          contestnetId: '6077fd498905dcba4d5a2923',
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
