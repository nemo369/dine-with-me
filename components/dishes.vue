<template>
  <div>
    <h4 class="text-center mb-6 text-2xl">שטיפת כלים לא בכיור</h4>
    <ul>
      <li
        v-for="value in dishes"
        :key="value.id"
        class="
          flex
          justify-between
          py-3
          sm:px-6
          bg-brand-300
          rounded-sm
          shadow
          max-w-md
          mx-auto
          mb-1
          items-center
        "
      >
        <strong>{{ value.desc }}</strong>
        <div class="border border-dashed flex-grow h-0 mx-6 w-9"></div>
        <span>{{ getC(value.id).name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contestants', 'entities'],

  data() {
    return {
      dishes: [
        {
          id: '6077fd498905dcba4d5a292f',
          desc: 'השאיר את הכלים בקרטון בשביל שאשתו תשטוף',
        },
        { id: '6077fd498905dcba4d5a2934', desc: 'שטף את הכלים עם צינור בגינה' },
        { id: '6077fd498905dcba4d5a293e', desc: 'אחת האורחות שטפה בשבילו' },
        { id: '60b88fc3ccc85f85822661bf', desc: 'העוזרת שטפה בשבילם' },
        { id: '60b885e81653cc67f9aa7158', desc: 'שטפה כלים בזמן הארוחה' },
        { id: '60b88fc3ccc85f85822661cb', desc: 'שטפו את הכלים באמבטיה' },
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
