<template>
  <main>
    <blogHeader />
    {{ blog.title }}
  </main>
</template>

<script>
import blogHeader from '@/components/postHeader.vue'
export default {
  name:'blogarticle',
  props:["blogcont","cate",'blogid'],
  data: function() {
    return {
      blog:this.blogcont
    }
  },
  components:{
    blogHeader
  },
  beforeMount(){
    console.log(this.blog)
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
