<template>
  <section
    class="
      text-center
      bg-brand-700
      py-10
      rounded
      flex flex-col
      align-center
      justify-center
      border-yellow border
      shadow
    "
  >
    <logo />
    <h2 class="text-5xl NuxtLogo my-3">עונת הסטטיסטיקות</h2>
    <p class="max text-lg max-w-md mx-auto">
      הקינוח האמיתי של תוכנית הקאלט בגרסתה הישראלית
      <br />
      כולל <strong> סטטיסטיקות ועובדות מורכבות </strong> לאורך
      <br />
      <span class="text-brand-100-700 font-extralight text-2xl">{{
        totalSessions
      }}</span>
      עונות בכיכובם של
      <span class="text-brand-100-700 font-extralight text-2xl">{{
        contestants
      }}</span>

      בשלנים וזוגות חובבים<br />
      שאוהבים לארח ואוהבים לנצח <br />
    </p>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
  props: ['contestants'],
  data() {
    return {
      totalSessions: 4,
    }
  },
  methods: {},
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
