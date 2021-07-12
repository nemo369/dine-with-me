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
    <blockquote class="text-brand-100 text-center font-thin mb-10 text-3xl">
      <cld-image
        loading="lazy"
        public-id="v1626112426/73375409_2615358545173707_3258313120191348736_n_jlniu2.jpg"
        fetch-format="auto"
        quality="auto"
        width="450"
        class="rounded mt-4 mx-auto"
        :alt="`רועי עידן וחגית השמשוני - ברור שהואכל שלנו הכי טעים`"
      />
      אני/אנחנו _________.
    </blockquote>
    <div class="grid md:grid-cols-2 gap-y-2 gap-x-4">
      <div
        v-for="c in ppls"
        :key="c.id"
        class="flex py-2 sm:px-4 bg-brand shadow px-1 tet-sm items-end"
      >
        <span class="text-xl">
          <span class="font-mono text-2xl">"</span>
          {{ c.quote.trim() }}
          <span class="font-mono text-2xl">"</span>
        </span>
        <span class="text-sm mr-1 px-2 rounded bg-white bg-opacity-25">{{
          getC(c.id).name
        }}</span>
        <!-- <span class="mr-1"> עונה:{{ getC(c.id).session_number }}</span> -->
      </div>
      <svg-winner class="mt-2 ml-6 flex justify-end" />
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
          id: '6077fd498905dcba4d5a291c',
          quote: 'באתי בשביל לנצח',
        },
        {
          id: '6077fd498905dcba4d5a2926',
          quote: 'באתי לנצח את התחרות ',
        },
        {
          id: '6077fd498905dcba4d5a2924',
          quote: 'באתי לנצח',
        },
        {
          id: '6077fd498905dcba4d5a293a',
          quote: ' באתי להיות ראשון',
        },
        {
          id: '6077fd498905dcba4d5a2938',
          quote: 'באתי לנצח',
        },
        {
          id: '6077fd498905dcba4d5a293e',
          quote: 'מאוד, מאוד, מאוד רוצה לנצח',
        },
        {
          id: '6077fd498905dcba4d5a2941',
          quote: 'אדם מאוד תחרותי',
        },
        {
          id: '6077fd498905dcba4d5a2945',
          quote: 'אדם מאוד תחרותית',
        },
        {
          id: '6077fed6a93beac05efc6915',
          quote: 'מאוד רוצה לזכות, באתי לנצח',
        },
        {
          id: '6077fed6a93beac05efc6927',
          quote: 'בן אדם מאוד תחרותי',
        },
        {
          id: '60b88fc3ccc85f85822661bc',
          quote: 'באתי לנצח וניצחתי',
        },
        {
          id: '60b885e71653cc67f9aa714c',
          quote: 'רוצים לנצח',
        },
        {
          id: '60b885e81653cc67f9aa7159',
          quote: 'רוצה לנצח',
        },
        {
          id: '60b88fc3ccc85f85822661c7',
          quote: 'ממש רוצות לנצח',
        },
        {
          id: '60b8867b1653cc67f9aa716e',
          quote: 'מאוד תחרותיים',
        },

        {
          id: '60b88f1accc85f85822661b2',
          quote: 'מאוד תחרותיים',
        },
        {
          id: '60b88f1accc85f85822661b1',
          quote: 'עושה הכל לנצח',
        },
        {
          id: '60b88f1accc85f85822661b5',
          quote: 'באנו לנצח חד וחלק ואין אופציה אחרת',
        },
        {
          id: '60b88f1accc85f85822661b6',
          quote: 'תחרותיים',
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
