<template>
  <div class="loading-wrapper">
    <div class="loading">
      <svg class="loadingSvg" xmlns="http://www.w3.org/2000/svg">
        <polyline class="brushOne" points="0,60 30,0"></polyline>
        <polyline class="brushTwo" points="30,0 60,60"></polyline>
        <polyline class="brushThree" points="60,60 20,40"></polyline>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
.loading-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadingSvg {
  width: 60px;
  height: 60px;
  stroke-width: 2px;
}

.brushOne {
  stroke: #2aa1b7;
  animation: loading 2s infinite;
}

.brushTwo {
  stroke: #2aa1b7;
  animation: loading 2s 0.6s infinite;
}

.brushThree {
  stroke: #2aa1b7;
  animation: loading 2s 1s infinite;
}

@keyframes loading {
  0% {
    stroke: #8ac4d0;
  }
  50% {
    stroke: #d8d7d8;
  }
  100% {
    stroke: #f4d160;
  }
}
</style>
