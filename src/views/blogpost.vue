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
      postCommonClass:'post-wrapper'
    }
  },
  computed:{
    blogId(){
      return window.location.href.indexOf('/article') !== -1? 
              window.location.href.match(/article-([\w-]+)$/)[1] : this.$route.params.blogid;
    },
    postOwnClass(){
      return this.blogId
    }
  },
  components:{
    blogHeader
  },
  methods:{
    passParams(){
      let href = window.location.href;
      if(href.indexOf('/article') !== -1){
        let cate = href.match(/blogpost\/([\w-]+)\//)[1];
        let blogid = href.match(/article-([\w-]+)$/)[1];
        this.$router.replace(`/blogpost/${cate}/article-${blogid}`)
      }else{
        this.$router.replace(`/blogpost/${this.$route.params.cate}/article-${this.$route.params.blogid}`)
      }
    }
  },
  beforeCreate(){
  },
  beforeMount(){
    this.passParams();
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
