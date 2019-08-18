<template>
  <div class="portfolio-wrapper">
    <nav>
      <div>alison w.</div>
      <!-- dropdown / whole-screen menu -->
    </nav>
    <main>
      <div class="bg"></div>
      <div class="ptCard">
        <div class="ptCard-top">
          <div>Description:</div>
          <div>Source Code:</div>
          <div>Techniques:</div>
          <div>References:</div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
    <!-- menuSlider for categories -->
  </div>
</template>

<script>
export default {
  name:'portfolio',
  data:function(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
$color:blue;

.portfolio-wrapper{
  color:$color;
}
</style>