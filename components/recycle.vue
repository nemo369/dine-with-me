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
      class="sm:flex flex-wrap gap-x-4 gap-y-2 max-w-6xl justify-center mx-auto"
    >
      <div v-for="c in ppls" :key="c.id">
        <div v-if="c.note">*</div>
        <div class="h-32">
          <common-sticker
            :id="c.id"
            :src="getC(c.id).avatar"
            class="flex-grow"
            :width="`${
              [3, 4].includes(+getC(c.id).session_number) ? '150' : '90'
            }`"
          >
          </common-sticker>
        </div>
        <div v-if="c.note">{{ c.note }}</div>
      </div>
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
          id: '6077fd498905dcba4d5a2922',
        },
        {
          note: 'הגיש קינוח במפית',
          id: '6077fd498905dcba4d5a294b',
        },
        {
          id: '6077fed6a93beac05efc6929',
        },
        {
          id: '60b885e81653cc67f9aa7155',
        },
        {
          id: '60b88f1accc85f85822661b8',
        },
        {
          id: '60b8867b1653cc67f9aa7184',
        },
        {
          id: '60b885e81653cc67f9aa7158',
          note: 'הביאה כלים חד פעמיים מהבית',
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
