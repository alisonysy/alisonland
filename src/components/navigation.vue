<template>
  <nav id="navigation-wrapper">
    <div class="tab active"></div>
    <div class="tab"></div>
    <div class="tab"></div>
    <div class="tab"></div>
  </nav>
</template>

<script>
export default {
  name:'navigation'
}
</script>

<style scoped>
#navigation-wrapper{
  display:flex;
  height: 15%;
  width:100%;
  padding:0 15%;
  will-change: transform;
}

.tab{
  width:25%;
  height:100%;
  margin:0 2%;
  background:linear-gradient(to top,rgba(255,255,255,0.3) ,rgba(255,255,255,0.3)),
             #2aa1b7;
}

.tab:hover{
  cursor: pointer;
  transform:translate(0,-20%);
  height:150%;
}


</style>
