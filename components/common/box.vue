<template>
  <div class="box flex-grow">
    <h4 class="pb-2 text-xl">{{ title }}</h4>
    <svg-hr />
    <div class="number text-5xl mt-2">
      <span v-if="number">{{ number }}</span>
      <client-only>
        <slot></slot>
      </client-only>
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
