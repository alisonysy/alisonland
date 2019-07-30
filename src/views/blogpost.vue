<template>
  <main :class="[postCommonClass,postOwnClass]">
    <blogHeader />
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">{{thisBlog.category}}</h2>
        <h1 class="postTitle">
          {{thisBlog.title}}
          <h6 class="postSubTitle" v-if="thisBlog.subTitle !== ''">{{thisBlog.subTitle}}</h6>
        </h1>
        <div class="postTime">
          <div class="postCreated">{{ thisBlog.createdAt}}</div>
        </div>
        <ul class="postTags">
          <li v-for="tag in thisBlog.tag">{{ tag }}</li>
        </ul>
        <div class="postAbstract">{{thisBlog.abstract}}</div>
      </div>
      <div class="postBody-wrapper">
        <div class="postBody markdown-body">
          <!-- <vue-markdown>:D</vue-markdown> -->
          <router-view/>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/postHeader.vue';
import blogJSON from '@/blog_md.json';
import VueMarkdown from 'vue-markdown';

export default {
  name:'blogarticle',
  props:[],
  data: function() {
    return {
      postCommonClass:'post-wrapper',
      thisBlog:{},
    }
  },
  computed:{
    blogId(){
      return window.location.href.indexOf('/article') !== -1? 
              window.location.href.match(/article-([\w-]+)$/)[1] : this.$route.params.blogid;
    },
    category(){
      return window.location.href.indexOf('/article') !== -1?
              window.location.href.match(/blogpost\/([\w\d-]+)\//)[1] : this.$route.params.cate;
    },
    postOwnClass(){
      return this.blogId
    }
  },
  components:{
    blogHeader,
    VueMarkdown
  },
  methods:{
    passParams(){
      let href = window.location.href;
      if(href.indexOf('/article') !== -1){
        let cate = href.match(/blogpost\/([\w\d-]+)\//)[1];
        let blogid = href.match(/article-([\w\d-]+)$/)[1];
        this.$router.replace(`/blogpost/${cate}/article-${blogid}`)
      }else{
        this.$router.replace(`/blogpost/${this.$route.params.cate}/article-${this.$route.params.blogid}`)
      }
    },
    fetchBlogCont(){
      let blogs = typeof blogJSON === 'object'? blogJSON : JSON.parse(blogJSON);
      blogs[this.category].map( entry => {
        if(entry.id === this.blogId){
          Object.assign(this.thisBlog,{},entry);
          this.thisBlog["category"] = this.category;
        }
      })
      console.log(this.thisBlog)
    }
  },
  created(){
    this.fetchBlogCont()
  },
  beforeCreate(){
  },
  beforeMount(){
    // this.fetchBlogCont();
    this.passParams();
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
