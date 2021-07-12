<template>
  <section class="section mb-28 mt-16">
    <div class="md:flex justify-between gap-x-8 mb-12">
      <common-box title="שמות חיבה">
        <ul
          class="
            mb-8
            grid grid-cols-1
            md:grid-cols-3
            items-center
            justify-center
            gap-y-10
          "
        >
          <li
            v-for="c in nickes"
            :key="c.id"
            class="mx-auto pb-8 pt-1 h-full flex-col flex justify-between"
          >
            <common-sticker
              :id="c.id"
              :name="getC(c.id).name"
              :src="getC(c.id).avatar"
              width="120"
            />
            <div class="mt-7">
              <div v-if="c.detail" class="text-sm text">*{{ c.detail }}</div>

              <div
                class="
                  mt-1
                  bg-brand-700
                  px-4
                  py-2
                  text-center text-2xl
                  rounded
                  shadow
                "
              >
                {{ c.desc }}
              </div>
            </div>
          </li>
        </ul>
      </common-box>
    </div>
  </section>
</template>

<script>
export default {
  props: ['contestants', 'entities'],
  data() {
    return {
      nickes: [
        {
          id: '60b88fc3ccc85f85822661bc',
          desc: 'באני',
        },
        {
          id: '60b88fc3ccc85f85822661bd',
          desc: 'בייבי',
        },
        {
          id: '60b88f1accc85f85822661b1',
          desc: 'נמייה',
          detail: `רייצ׳ל לורד`,
        },
        {
          id: '60b88fc3ccc85f85822661c4',
          desc: 'שוש',
        },
        {
          id: '60b885e81653cc67f9aa7155',
          desc: 'ברבי וצעצוע',
        },

        {
          id: '60b88fc3ccc85f85822661c7',
          desc: 'אוזה ובאבא',
        },
        {
          id: '60b88f1accc85f85822661ad',
          desc: 'חן וחנוני',
          detail: 'למשתתפים חן וענר',
        },
        {
          id: '60b88f1accc85f85822661af',
          desc: 'פיצה ודובית',
          detail: '',
        },
        {
          id: '60b8867b1653cc67f9aa7174',
          desc: 'מאמי',
          detail: '',
        },
        {
          id: '60b8867b1653cc67f9aa7176',
          desc: 'כריסי',
          detail: 'יחיאל למתחרה כריסטי',
        },
        {
          id: '60b88f1accc85f85822661b6',
          desc: 'ארנונילי',
          detail: '',
        },
        {
          id: '60b88f1accc85f85822661b5',
          desc: 'יוגב ושרית',
          detail: 'מכנה את המתמודדים קובי ולנה',
        },
        {
          id: '60b8867b1653cc67f9aa7180',
          desc: 'נש',
          detail: '',
        },
      ],
    }
  },
  methods: {
    getC(id) {
      return this.entities[id]
    },
  },
}
</script>

<style></style>
