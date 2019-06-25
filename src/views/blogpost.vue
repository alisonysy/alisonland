<template>
  <main :class="[postCommonClass,postOwnClass]">
    <blogHeader />
    <article class="post">
      {{blogId}}
      <router-view/>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/postHeader.vue'
export default {
  name:'blogarticle',
  props:["blogcont"],
  data: function() {
    return {
      blogId:this.$route.params.blogid,
      postCommonClass:'post-wrapper'
    }
  },
  computed:{
    postOwnClass(){
      return this.blogId
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
