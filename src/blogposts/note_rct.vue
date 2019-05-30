<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          react
        </h2>
        <h1 class="postTitle">
          React.js And React Native Notes
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
        <div class="postAbstract">
          My little notebook for React.js.
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
  name:'rct-notes',
  data:function(){
    return {
      postTags:['react','react-native','entry-level','notes']
    }
  },
  components:{
    blogHeader
  },
  computed:{
    postUpdatedAt(){
      return false;
    }
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
