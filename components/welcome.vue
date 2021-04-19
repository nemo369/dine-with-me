<template>
  <section
    class="text-center bg-blue-100 py-10 rounded flex flex-col align-center justify-center"
  >
    <logo />
    <h2 class="text-5xl NuxtLogo my-3">עונת הסטטיסטיקות</h2>
    <p class="max text-lg">
      הקינוח האמיתי של תוכנית הקאלט בגרסתה הישראלית
      <br />
      כולל <strong> סטטיסטיקות ועובדות מורכבות </strong> לאורך
      <br />
      <span class="text-blue-900 text-2xl">{{ totalSessions }}</span>
      עונות בכיכובם של
      <span class="text-blue-900 text-2xl">{{ contestants }}</span>

      בשלנים חובבים שאוהבים לארח ואוהבים לנצח <br />
    </p>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    contestants: Number,
  },
  data() {
    return {
      totalSessions: 4,
    }
  },
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
