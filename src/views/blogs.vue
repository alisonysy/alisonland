<template>
  <main class="blogPage">
    <blogHeader/>
    <ul>
      <li v-for="blog in blogArr">
        <router-link
          :to="{ path:`/blogpost/${blog.category}/${blog.id}`}"
        >{{ blog.title }}</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import blogHeader from "@/components/header.vue";
import blogJSON from "@/blog_md.json";
export default {
  name: "blogs",
  data: function() {
    return {
      blogArr: [],
      blogCate: []
    };
  },
  components: {
    blogHeader
  },
  methods: {
    blogRouteArr: function() {
      let blogCate = Object.keys(blogJSON);
      this.blogCate = blogCate;
      let arr = [];
      for (let i = 0; i < blogCate.length; i++) {
        let cate = blogCate[i];
        let cateArr = blogJSON[cate];
        cateArr.map(item => {
          let temp = {};
          temp.category = cate;
          Object.assign(temp, item);
          arr.push(temp);
        });
      }
      this.blogArr = arr;
    }
  },
  beforeMount() {
    this.blogRouteArr(blogJSON);
    console.log(this.blogArr);
  }
};
</script>

<style>
.test > * {
  font-family: "Space Mono", sans-serif;
}
</style>
