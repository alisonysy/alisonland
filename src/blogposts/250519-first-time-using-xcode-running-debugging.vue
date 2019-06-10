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
import blogHeader from "@/components/postHeader.vue";
import thisBlog from "@/blog_md/250519-first-time-using-xcode-running-debugging.md";
export default {
  name: "xcode-01",
  data: function() {
    return {
      postHead:{
        postTitle:'First Time Running and Archiving Existing Project with XCode',
        postCategory:'XCode',
        postSubtitle:'Debugging Records',
        postCreated:'May 25 2019',
        postAbstract:'This is for those who get to use XCode to archive an existing app for the VERY FIRST time.'
      },
      postCommonClass: "post-wrapper",
      postTags: ["xcode", "debug", "entry-level","archive"],
    };
  },
  components: {
    blogHeader,
    thisBlog
  },
  computed: {
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
};
</script>

<style>
@import url("../assets/github-markdown.css");

/* this post markdown - own */

.xcode-01 .markdown-body h2 {
  margin-top: 0;
  margin-bottom: 5em;
}
.xcode-01 .markdown-body h2::before {
  content: "Conclusion: ";
  font-size: 0.6em;
  background: #2aa1b7;
  color: #fff;
  margin-right: 0.2em;
  vertical-align: middle;
  padding: 0.2em 0;
}
</style>
