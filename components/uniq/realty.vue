<template>
  <section class="section mb-28 mt-16">
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="האח הגדול">
        <div class="flex justify-between items-center">
          <div class="number">{{ bigBrother.length }}</div>
          <common-sticker
            v-for="c in bigBrother"
            :key="c.name"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
      <common-box title="האח הגדול">
        <div class="flex justify-between items-center">
          <div class="number">{{ bigBrother.length }}</div>
          <common-sticker
            v-for="c in bakeOf"
            :key="c.name"
            :name="c.name"
            :src="c.avatar"
          />
        </div>
      </common-box>
      <common-box title="דאנסי גדי">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <common-sticker :name="gadi.name" :src="gadi.avatar" />
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants'],

  computed: {
    bigBrother() {
      return this.contestants.filter((c) => c.reality.includes('הגדול'))
    },
    bakeOf() {
      return this.contestants.filter((c) => c.reality.includes('בייק'))
    },
    gadi() {
      return this.contestants.find((c) => c.name === 'גדי חפר')
    },
  },
}
// ["ערב טוב לך את מושלמת (פ14ע1)", " הבאנו שלום עליכם (פ33ע1)",
//  "לכבוד מיליארד מיליארד טועים פ49ע1",
//   " hello is me you looking for פ5ע2", " גנגאם סטייל ע2פ11",
//    " אני ניצחתי דנה אינטרנשיול ע3פ1",
//    " never gonna dance again ע3פ1", " לאן שלא תלכי שירי מימון ע3פ9",
//    " בית זו בסך הכל קופסא שגרים בה ע3פ11",
//    " טוי נטע ע3פ13 ד2", " ואני רק רציתי לשיר ע3פ15", "
//    "האהבה מעירה את היום" קדם אירווזיון 2006 ע3פ19 ד2:30",
//    " תה ואורז ע4פ1",
//    " נשיקות על השפתיים עופר לוי ועדן אבוטבול פ2ע4 ד44", ""]
</script>

<style></style>
