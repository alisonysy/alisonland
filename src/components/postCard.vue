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
  margin: 0 3em;
  padding:1em;
  color:#fff;
  background:#04244a;
}
.postCard-wrapper:hover{
  cursor: pointer;
  transform: scale(1.03);
  box-shadow: 1px 2px 8px 2px rgba(0,0,0,0.3);
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
  display: -webkit-box;
  -webkit-line-clamp:3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
