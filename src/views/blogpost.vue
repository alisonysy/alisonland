<template>
  <main>
    <blogHeader />
    {{blog}}
    <router-view/>
  </main>
</template>

<script>
import blogHeader from '@/components/postHeader.vue'
export default {
  name:'blogarticle',
  props:["blogcont"],
  data: function() {
    return {
      blog:this.$route.params.blogid
    }
  },
  components:{
    blogHeader
  },
  beforeCreate(){
    this.$router.replace(`/blogpost/:cate/article-${this.$route.params.blogid}`)
  },
  beforeMount(){
    console.log(this.blogcont)
    
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
