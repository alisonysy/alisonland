<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          XCode
        </h2>
        <h1 class="postTitle">
          First Time Running and Archiving Existing Project with XCode <span class="postSubTitle">Debugging Records</span>
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
        <div class="postAbstract">
          This is for those who get to use XCode to archive an existing app for the VERY FIRST time.
        </div>
      </div>
      <div class="postBody markdown-body">

      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
export default {
  name:'xcode-01',
  data:function(){
    return {
      postTags:['xcode','debug','entry-level'],
      relatedSites:{
        architecture:'https://docs.elementscompiler.com/Platforms/Cocoa/CpuArchitectures/'
      }
    }
  },
  components:{
    blogHeader
  },
  computed:{
    postUpdatedAt(){
      return false;
    }
  },
  methods:{
    relatedSite(url){
      window.location.href = url;
    },
    getTitle(){
      let title = $('.postTitle');
      title = title.text().trim();
    }
  },
  mounted(){
    this.getTitle();
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
