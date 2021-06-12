<template>
  <div
    class="
      not-eating
      my-10
      py-10
      px-6
      bg-brand-300
      border-t-2 border-brand-700 border-b-2
    "
  >
    <h4 class="text-brand-100 text-center font-thin mb-10 text-3xl">
      הגישו בחד-פעמי
    </h4>
    <div
      class="flex flex-wrap gap-x-4 gap-y-2 max-w-5xl justify-center mx-auto"
    >
      <div v-for="c in ppls" :key="c.id">
        <div v-if="c.id === '60b885e81653cc67f9aa7158'">*</div>
        <common-sticker
          :src="getC(c.id).avatar"
          class="flex-grow"
          :width="`${
            [3, 4].includes(+getC(c.id).session_number) ? '150' : '90'
          }`"
        >
        </common-sticker>
        <div v-if="c.id === '60b885e81653cc67f9aa7158'">
          הביאה כלים חד פעמיים מהבית
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contestants'],
  data() {
    return {
      ppls: [
        {
          id: '6077fd498905dcba4d5a2922',
        },
        {
          id: '6077fd498905dcba4d5a294b',
        },
        {
          id: '6077fed6a93beac05efc6929',
        },
        {
          id: '60b885e81653cc67f9aa7155',
        },
        {
          id: '60b885e81653cc67f9aa7158',
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
