<template>
  <section class="section mb-28 mt-16">
    <h3 class="subtitle tac my-6 flex justify-center text-xl font-light">
      <span class="py-1 px-6 bg-brand-100 rounded shadow text-brand-900"
        >👨‍🍳</span
      >
    </h3>
    <recycle :contestants="contestants" />
    <div class="md:flex justify-center gap-x-10 mt-10">
      <cook-at :contestants="contestants" />
      <dishes :contestants="contestants" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants'],
}
</script>

<style></style>
