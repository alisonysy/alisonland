<template>
  <div class="postCard-wrapper">
    <div class="legends">
      <img src="../assets/pot.png" alt="pot">
    </div>
    <h1 class="f-monad">{{this.blog.title}}</h1>
    <h3>{{this.blog.subTitle}}</h3>
    <div class="abs">{{this.blog.abstract}}</div>
    <div class="createdAt">{{this.blog.createdAt}}</div>
  </div>
</template>

<script>
export default {
  name:'post-card',
  props:['blog'],
  data:function(){
    return {
      
    }
  },
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
