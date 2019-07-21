<template>
  <div class="postCard-wrapper">
    <div class="legends">
      <img src="../assets/pot.png" alt="pot">
    </div>
    <h1 class="f-monad">{{title}}</h1>
    <h3>{{subTitle}}</h3>
    <div class="abs">{{abstract}}</div>
    <div class="createdAt">{{createdAt}}</div>
  </div>
</template>

<script>
export default {
  name:'post-card',
  data:function(){
    return {
      title:'ITCSS - Concept Explanation',
      subTitle:'Inverted Triangle CSS',
      abstract:'Aka Inverted Triangle CSS, a concept developed by Harry Roberts and consists of 7 parts',
      createdAt:'12 Jul 2019'
    }
  }
}
</script>

<style scoped>
.postCard-wrapper{
  width:25em;
  height:15em;
  border:1px solid blue;
  margin: 0 3em;
  padding:1em;
}
h1{
}
h3{
  margin-top: .5em;
}
h3::before{
  content:'—— ';
}
.abs{
  margin-top: 1em;
}
.createdAt{
  margin-top: 1em;
}
.legends{
  float:right;
}
.legends img{
  max-width: 3em;
}
</style>
