<template>
  <section class="section mb-28 mt-16">
    <div class="flex justify-between gap-x-8 mb-12">
      <common-box title="הופעת אורח בפרק שבו ההורים שלהם השתתפו">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <common-sticker :name="oren.name" :src="oren.avatr" />
        </div>
      </common-box>
      <common-box title="רצו בבחירות לכנסת וקיבלו 0.06% מהקולות">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <common-sticker :name="oren.name" :src="oren.avatr" />
        </div>
      </common-box>
      <common-box title="צילמו סלפי עם דונלד טרמפ">
        <div class="flex justify-between items-center">
          <div class="number">1</div>
          <common-sticker :name="oren.name" :src="oren.avatr" />
        </div>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants'],
  computed: {
    oren() {
      return this.contestants?.find((c) => c.name?.includes('אורן חזן'))
    },
  },
}
</script>

<style></style>
