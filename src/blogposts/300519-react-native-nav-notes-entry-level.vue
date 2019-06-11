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
import thisBlog from '@/blog_md/300519-react-native-nav-notes-entry-level.md'
export default {
  name:'react-native-nav-entry',
  data:function(){
    return {
      postHead:{
        postTitle:'React-Native Navigation Notes - Entry Level',
        postCategory:'React',
        postSubtitle:'',
        postCreated:'May 30 2019',
        postAbstract:'My little notebook for React-Native Navigation.'
      },
      postCommonClass: "post-wrapper",
      postTags:["react","react-native","entry-level","react-native-navigation","notes"]
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
