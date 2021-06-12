<template>
  <div>
    <h4 class="text-center mb-6 text-2xl">הכינו את הארוחה לא בבית שלהם</h4>
    <ul>
      <li
        v-for="value in dishes"
        :key="value.id"
        class="
          flex
          justify-between
          py-3
          px-6
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
        <span v-if="getC(value.id)">{{ getC(value.id).name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['contestants'],

  data() {
    return {
      dishes: [
        {
          id: '6077fe568905dcba4d5a294c',
          desc: 'בישל אצל ההורים שלו',
        },
        { id: '6077fd498905dcba4d5a2949', desc: 'בישל בתנור של השכן' },
        { id: '6077fd498905dcba4d5a293f', desc: 'בישלה אצל ההורים שלה' },
        { id: '6077fed6a93beac05efc6939', desc: 'הכין את האוכל בעסק שלו' },
        { id: '6077fed6a93beac05efc693b', desc: 'השתמש בחדר האוכל של הקיבוץ' },
        { id: '6077fed6a93beac05efc6929', desc: 'אירחה אצל ההורים' },
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
