<template>
  <section
    class="section mb-28 mt-16 md:flex justify-around align-top max-w-6xl"
  >
    <div>
      <h4 class="text-center mb-6 text-2xl">שירים ששי אביבי שר</h4>
      <ul>
        <li
          v-for="value in songs"
          :key="value.name"
          class="flex justify-between py-3 px-2 bg-opacity-75 rounded-sm shadow max-w-md mx-auto mb-1 text-center"
        >
          <a :href="value.src" target="_blank" rel="noopener noreferrer">
            <span>{{ value.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="w-60">
      <common-box
        class="w-full mb-4"
        title="לבשו מנומר"
        :number="manomrer.length"
      >
      </common-box>
      <common-box class="w-full mb-4" title="לבשו חלפו" :number="suit.length">
      </common-box>
      <common-box
        class="w-full"
        title="לבשו גם מנומר וגם חליפה"
        :number="both.length"
      >
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          name: 'ערב טוב- ליאור נרקיס',
          src: 'https://www.youtube.com/watch?v=jW7fi-9MRUQ',
        },
        { name: 'הבאנו שלום עליכם', src: '' },
        {
          name: 'לכבוד מיליארד מיליארד טועים - אביב גפן',
          src: 'https://www.youtube.com/watch?v=HkNZdZbL3_c',
        },
        {
          name: 'ניצחתי - דנה אינטרנשיונל',
          src: 'https://www.youtube.com/watch?v=KBVItrVZgUw',
        },
        {
          name: 'לאן שלא תלכי - שירי מימון',
          src: 'https://www.youtube.com/watch?v=Qgr__2lPWK0',
        },
        {
          name: 'George Michael - Careless Whisper (Official Video)',
          src: 'https://www.youtube.com/watch?v=izGwDsrQ1eQ',
        },
        {
          name: 'Netta - TOY',
          src: 'https://www.youtube.com/watch?v=CziHrYYSyPc',
        },
        {
          name: 'עופר לוי & עדן אבוטבול נשיקות על השפתיים',
          src: 'https://www.youtube.com/watch?v=eDwfDJZ4d-o',
        },
      ],
      manomrer: [
        {
          name: 'שירן זך כהן',
          src: '',
        },
        {
          name: 'הילה עטיה',
          src: '',
        },
        {
          name: 'הילה מודרה',
          src: '',
        },
        {
          name: 'חן שאבו',
          src: '',
        },
        {
          name: 'אורלי יחזקאל',
          src: '',
        },
        {
          name: 'אינה מדוודב',
          src: '',
        },
      ],
      suit: [
        {
          name: 'נועם ברדה',
          src: '',
        },
        {
          name: 'אינה מדוודב',
          src: '',
        },
        {
          name: 'איציק קרסנטי',
          src: '',
        },
        {
          name: 'אולריך סאם',
          src: '',
        },
        {
          name: 'מחמד קרוואן',
          src: '',
        },
        {
          name: 'ערן לונה',
          src: '',
        },
        {
          name: 'אבינועם אייק',
          src: '',
        },
        // אינה פ7ע1, אבינועם אייק פ20ע1, ערן לונה פ21ע1, מחמד קרוואן פ25ע1, אולריך סאם פ41ע1, איציק קרסנטי פ2ע2, נועם ברדה ע3פ20, ז'אק ע4פ3      ],
      ],
      both: [
        {
          name: 'אינה מדוודב',
          src: '',
        },
      ],
    }
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
