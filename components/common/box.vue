<template>
  <div class="box flex-grow">
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
  props: ['title', 'number'],
}
</script>

<style></style>
