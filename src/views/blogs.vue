<template>
  <main class="blogPage">
    <blogHeader/>
    <div class="up-wrapper">
      <div class="cate-wrapper">
        <menuSlider :lis="categoryArr" />
        <h1 class="currentCate"></h1>
      </div>
      <div class="txt-wrapper"></div>
    </div>
    <div class="down-wrapper">
      <div>
        
      </div>
    </div>
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
import menuSlider from '@/components/menuSlider.vue';
import blogJSON from "@/blog_md.json";
import {categoryGetter,tagGetter,postsForTagGetter,sortByCreatedAt,sortByTagLength} from './../js/menuSlider.js';

export default {
  name: "blogs",
  data: function() {
    return {
      blogArr: [],
      blogCate: []
    };
  },
  components: {
    blogHeader,
    menuSlider
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
  computed:{
    categoryArr: () => {
      return categoryGetter();
    }
  },
  beforeMount() {
    this.blogRouteArr(blogJSON);
    sortByTagLength(postsForTagGetter("react"));
    console.log(this.blogArr);
  }
};
</script>

<style scoped>

</style>

