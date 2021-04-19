<template>
  <h1 class="logo">
    <div class="flex">
      <div class="text-4xl mr-4">בואו</div>
      <div class="lines-up w-16"></div>
    </div>
    <div class="text-5xl eat">לאכול</div>
    <div class="flex">
      <div class="lines-down w-16"></div>
      <div class="text-4xl">איתי</div>
    </div>
  </h1>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  margin: auto;
  color: #ffd26c;
  font-size: 50px;
  line-height: 1;
  width: fit-content;
}
.lines-up {
  border-bottom: 3px solid #ffd26c;
  position: relative;
  margin-bottom: 10px;
}
.lines-up::before {
  content: '';
  position: absolute;
  height: 8px;
  background-color: #ffd26c;
  width: 100%;
  bottom: 3px;
  right: 0;
}
.lines-down {
  border-top: 8px solid #ffd26c;
  position: relative;
  margin-top: 10px;
}
.lines-down::before {
  content: '';
  position: absolute;
  height: 3px;
  background-color: #ffd26c;
  width: 100%;
  top: 3px;
  right: 0;
}
.eat {
  transform: scale(1.6);
}
</style>
