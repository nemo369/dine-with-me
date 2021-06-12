<template>
  <div v-if="src" class="sticker flex items-end">
    <cld-image
      :public-id="src.provider_metadata.public_id"
      :width="width"
      :height="width"
      fetch-format="auto"
      quality="auto"
      effect="trim"
      class="z-10 relative"
      :alt="`${alt ? alt : name}`"
    />

    <div
      v-if="name"
      class="
        sticker-text
        z-0
        relative
        text-brand-900
        opacity-90
        bg-brand-100
        py-1
        pl-3
        pr-10
        rounded
        text-base
        transform
        translate-x-9
        -translate-y-3
        sticker__name
        whitespace-nowrap
      "
      v-html="getName(name)"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['name', 'src', 'width', 'alt'],
  methods: {
    getName(name) {
      const [first, last] = name.split(',')
      return `${first} ${last ? '<br>' + last : ''}`
    },
  },
}
</script>

<style></style>
