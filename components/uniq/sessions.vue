<template>
  <common-box title="ממוצע הציון הסופי">
    <div v-if="avScroe" class="relative">
      <div class="absolute">
        {{ avScroe.allAv }}
        <small class="text-sm -mr-5">כלל העונות</small>
      </div>
      <div class="sessions-cmp">
        <svg
          style="width: 0; height: 0; position: absolute"
          aria-hidden="true"
          focusable="false"
          class="fill-current text-brand-300"
        ></svg>
        <trend-chart
          v-if="avScroe"
          :datasets="[
            { data: avScroe.dataset, fill: true, className: 'curve-btc' },
          ]"
          :labels="labels"
          :min="0"
          :grid="grid"
        />
      </div>
    </div>
  </common-box>
</template>

<script>
export default {
  props: ['contestants'],
  data() {
    return {
      labels: {
        xLabels: ['עונה 1', 'עונה 2', 'עונה 3', 'עונה 4'],
        yLabels: 3,
        yLabelsTextFormatter: (val) => Math.round(val),
      },
      grid: {
        verticalLines: true,
        verticalLinesNumber: 1,
        horizontalLines: true,
        horizontalLinesNumber: 1,
      },
    }
  },
  computed: {
    avScroe() {
      const first = averageAgeBySession(this.contestants, 1)
      const seconed = averageAgeBySession(this.contestants, 2)
      const third = averageAgeBySession(this.contestants, 3)
      const forth = averageAgeBySession(this.contestants, 4)

      const sumedAll = this.contestants?.reduce((acc, item) => {
        return (acc += +item.score)
      }, 0)
      const allAv = Math.round(sumedAll / this.contestants.length)
      // return 0
      return {
        allAv,
        dataset: [first, seconed, third, forth],
      }

      function averageAgeBySession(array, sessionNumber) {
        const getSession = (elem) => elem.session_number === sessionNumber
        const average = (a, b, i, self) => a + b.score / self.length
        return array.filter(getSession).reduce(average, 0)
      }
    },
  },
}
</script>

<style>
.sessions-cmp .vtc {
  height: 200px;
  font-size: 12px;
}

.sessions-cmp .grid line,
.sessions-cmp .labels line {
  stroke: var(--colors-brand-700);
}

.sessions-cmp .curve-btc .stroke {
  stroke: var(--colors-brand-700);
  stroke-width: 2;
}
</style>
