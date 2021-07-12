<template>
  <div
    class="
      not-eating
      my-10
      py-10
      sm:px-6
      bg-brand-300
      border-t-2 border-brand-700 border-b-2
    "
  >
    <h4 class="text-brand-100 text-center font-thin mb-10 text-3xl">
      חולי ניקיון
    </h4>
    <div class="flex flex-wrap gap-x-6 gap-y-2 max-w-2xl mx-auto">
      <common-sticker
        v-for="c in ppls"
        :id="c.id"
        :key="c.id"
        :src="getC(c.id).avatar"
        class="flex-grow"
        :width="`${[3, 4].includes(+getC(c.id).session_number) ? '150' : '90'}`"
      >
      </common-sticker>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contestants', 'entities'],
  data() {
    return {
      ppls: [
        {
          id: '60b8867b1653cc67f9aa716e',
        },
        {
          id: '6077fd498905dcba4d5a2923',
        },
        {
          id: '6077fd498905dcba4d5a2936',
        },
        {
          id: '6077fed6a93beac05efc6926',
        },
        {
          id: '60b885e71653cc67f9aa7149',
        },
        {
          id: '60b885e81653cc67f9aa714e',
        },
        {
          id: '60b885e81653cc67f9aa714f',
        },
        {
          id: '60b885e81653cc67f9aa7158',
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
