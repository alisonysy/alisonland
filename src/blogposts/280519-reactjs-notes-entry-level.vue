<template>
  <main :class="[postCommonClass,postOwnClass]">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">{{postHead.postCategory}}</h2>
        <h1 class="postTitle">
          {{postHead.postTitle}}
          <span class="postSubTitle">{{postHead.postSubtitle}}</span>
        </h1>
        <div class="postTime">
          <div class="postCreated">{{ postHead.postCreated}}</div>
        </div>
        <ul class="postTags">
          <li v-for="tag in postTags">{{ tag }}</li>
        </ul>
        <div
          class="postAbstract"
        >{{postHead.postAbstract}}</div>
      </div>
      <div class="postBody-wrapper">
        <div class="postBody markdown-body">
          <thisBlog/>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/postHeader.vue'
import thisBlog from '@/blog_md/280519-reactjs-notes-entry-level.md'
export default {
  name:'rct-notes',
  data:function(){
    return {
      postHead:{
        postTitle:'React.js Notes - Entry Level',
        postCategory:'React',
        postSubtitle:'',
        postCreated:'May 26 2019',
        postAbstract:'My little notebook for React.js.'
      },
      postCommonClass: "post-wrapper",
      postTags:["react","entry-level","notes"]
    }
  },
  components:{
    blogHeader,
    thisBlog
  },
  computed:{
    postOwnClass() {
      return this.$options.name;
    }
  },
  methods: {
      getTitle() {
      let title = $(".postTitle");
      title = title.text().trim();
    }
  },
  mounted() {
    this.getTitle();
  }
}
</script>

<style>
@import url('../assets/github-markdown.css');
</style>
