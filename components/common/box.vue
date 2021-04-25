<template>
  <div class="box w-3/6">
    <h4 class="pb-2">{{ title }}</h4>
    <hr />
    <div class="number text-5xl mt-2">
      {{ number }}
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    title: String,
    number: Number,
  },
}
</script>

<style></style>
