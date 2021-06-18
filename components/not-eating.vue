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
    <blockquote class="text-brand-100 text-center font-thin mb-10 text-3xl">
      <span class="text-5xl text-whit font-serif">"</span>
      אני לא אוכל/ת _________.
      <span
        class="text-5xl text-white font-serif transform rotate-180 inline-block"
        >"</span
      >
    </blockquote>
    <div class="grid md:grid-cols-2 gap-y-1 gap-x-4">
      <div
        v-for="c in ppls"
        :key="c.id"
        class="flex justify-between py-2 px-4 bg-brand shadow"
      >
        <span class="w-4/6">"{{ c.text }}"</span>
        <span>{{ c.name }}</span>
        <!-- <span>s:{{ c.s }},e:{{ c.name }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ppls: [
        {
          id: '60b88fc3ccc85f85822661c8',
          text: 'לא אוכלת בשר בכלל,אבל כן אוכלת בשר טחון, המבורגר, שניצל, קציצה, כבד עוף וזהו, לא נוגעת בבשר',
          s: 3,
          e: 15,
          name: 'סימה דהן',
        },
        {
          id: '60b8867b1653cc67f9aa7184',
          text: 'פסטה, דגים, חלקי פנים, גבינות, עוף, משהו קשור לים, ביצים, תאנים, פירה חלבי',
          s: 4,
          e: 15,
          name: 'לירז כהן',
        },
        {
          id: '6077fd498905dcba4d5a291b',
          text: 'בצל חי וקשיו כבש',
          s: 2,
          e: 20,
          name: 'גלי משיח רוסו',
        },
        {
          id: '6077fd498905dcba4d5a2923',
          text: 'בשר נא ואיברים פנימיים',
          s: 1,
          e: 6,
          name: 'רונית ליאון',
        },
        {
          id: '6077fd498905dcba4d5a2920',
          text: 'עגבניות טריים (ANTI TOMATO GROUP)',
          s: 1,
          e: 8,
          name: 'קובי דימנט',
        },
        {
          id: '6077fd498905dcba4d5a2928',
          text: 'דגים',
          s: 1,
          e: 15,
          name: 'ענבל שורר רמתי',
        },
        {
          id: '6077fd498905dcba4d5a2939',
          text: 'כבד',
          s: 1,
          e: 35,
          name: 'רינה גולדצוייג',
        },
        {
          id: '6077fed6a93beac05efc693e',
          text: 'ירקות וחסה',
          s: 1,
          e: 31,
          name: 'רמי לאור',
        },
        {
          id: '6077fd498905dcba4d5a293d',
          text: 'סלמוון',
          s: 1,
          e: 39,
          name: 'רינה לזר',
        },
        {
          id: '6077fd498905dcba4d5a2944',
          text: 'כבד אווז',
          s: 1,
          e: 41,
          name: 'איציק יעקוב',
        },
        {
          id: '6077fd498905dcba4d5a2945',
          text: ' שוקולד, נסיכת הנילוס, כבש',
          s: 1,
          e: 44,
          name: 'ענת דודי',
        },
        {
          id: '6077fd498905dcba4d5a2947',
          text: 'פירות',
          s: 1,
          e: 47,
          name: 'אמיר בלנק',
        },
        {
          id: '6077fed6a93beac05efc692d',
          text: 'בוטנים, נבטים, שמן זית',
          s: 2,
          e: 13,
          name: 'הילה מודרר',
        },
        {
          id: '60b88fc3ccc85f85822661bd',
          text: 'דג חי',
          s: 3,
          e: 1,
          name: 'רונית נובק',
        },
        {
          id: '60b88fc3ccc85f85822661c0',
          text: 'דג ובשר חי',
          s: 3,
          e: 3,
          name: 'שמעון נחמני',
        },
        {
          id: '60b885e71653cc67f9aa714c',
          text: 'מלבי וכבש',
          s: 3,
          e: 8,
          name: 'שניר רובין',
        },
        {
          id: '60b885e81653cc67f9aa7157',
          text: 'דגים',
          s: 3,
          e: 13,
          name: 'גלית להב',
        },
        {
          id: '60b885e81653cc67f9aa7155',
          text: ' חצילים קישואים ובצל',
          s: 3,
          e: 14,
          name: 'אורית בלוג',
        },
        {
          id: '60b88fc3ccc85f85822661c7',
          text: 'דגים בננה ואבוקודו',
          s: 3,
          e: 15,
          name: 'רקפת מרקוס',
        },
      ],
    }
  },
}
//                              ענבל שורר (עונה 1, פרק 11-15) דגים
//                              תרצה נחמני (עונה 1, פרק 31-35) שמנת בבישול
// 6077fd498905dcba4d5a2938
</script>

<style></style>
