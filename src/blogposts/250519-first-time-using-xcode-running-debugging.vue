<template>
  <main :class="[postCommonClass,postOwnClass]">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">XCode</h2>
        <h1 class="postTitle">
          First Time Running and Archiving Existing Project with XCode
          <span class="postSubTitle">Debugging Records</span>
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <ul class="postTags">
          <li v-for="tag in postTags">{{ tag }}</li>
        </ul>
        <div
          class="postAbstract"
        >This is for those who get to use XCode to archive an existing app for the VERY FIRST time.</div>
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
import blogHeader from "@/components/header.vue";
import thisBlog from "@/blog_md/250519-first-time-using-xcode-running-debugging.md";
export default {
  name: "xcode-01",
  data: function() {
    return {
      postCommonClass: "post-wrapper",
      postTags: ["xcode", "debug", "entry-level"],
      relatedSites: {
        architecture:
          "https://docs.elementscompiler.com/Platforms/Cocoa/CpuArchitectures/"
      }
    };
  },
  components: {
    blogHeader,
    thisBlog
  },
  computed: {
    postUpdatedAt() {
      return false;
    },
    postOwnClass() {
      return this.$options.name;
    }
  },
  methods: {
    relatedSite(url) {
      window.location.href = url;
    },
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

/* post header */
.xcode-01 .all-header .headerLeft {
  background-color: #04244a;
}

.xcode-01 .all-header .otherLinks {
  color: #fff;
  border-bottom: none;
}

.xcode-01 .all-header .headerRight {
  background-color: transparent;
}

/* title part */
.postHeader {
  display: flex;
  flex-flow: column wrap;
  color: #fff;
  background-color: #04244a;
  align-items: center;
  position: relative;
}

.postCategory {
  font-family: "el-sig";
  font-size: 20em;
  color: rgba(255, 255, 255, 0.25);
}

.postTitle {
  position: absolute;
  top: 50%;
  font-size: 3em;
  text-align: center;
  padding: 0 1.3em;
  line-height: 1.5em;
  transform: translateY(-50%);
}

.postTags li,
.postAbstract {
  font-family: monospace;
}

.postTags li {
  display: inline-block;
  margin: 1em;
}

.postAbstract {
  margin: 1em 2em 5em;
}

/* this post markdown - own */
.postBody-wrapper{
  width:100%;
  background: linear-gradient(to bottom, #04244a, transparent 15%);
  padding-top: 1px;
}
.postBody {
  width: 65%;
  margin: 15em auto;
}
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
