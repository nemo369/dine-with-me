<template>
  <section class="section mb-28 mt-16">
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box title="הופעת אורח בפרק שבו ההורים שלהם השתתפו">
        <div class="flex items-center flex-wrap">
          <div class="number">1</div>
          <common-sticker
            id="oren.id"
            :name="oren.name"
            :src="oren.avatar"
            width="120"
          />
        </div>
      </common-box>
      <common-box title="רצו בבחירות לכנסת וקיבלו 0.06% מהקולות">
        <div class="flex items-center flex-wrap">
          <div class="number">1</div>
          <common-sticker
            id="oren.id"
            :name="oren.name"
            :src="oren.avatar"
            width="120"
          />
        </div>
      </common-box>
      <common-box title="צילמו סלפי עם דונלד טרמפ">
        <div class="flex items-center flex-wrap">
          <div class="number">1</div>
          <common-sticker
            :id="oren.id"
            :name="oren.name"
            :src="oren.avatar"
            width="120"
          />
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants', 'entities'],
  computed: {
    oren() {
      return this.entities['6077fe568905dcba4d5a294c']
    },
  },
}
</script>

<style></style>
