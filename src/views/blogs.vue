<template>
  <main class="blogPage">
    <blogHeader/>
    <div class="up-wrapper dspFlex">
      <div class="cate-wrapper">
        <menuSlider :lis="categoryArr()" @name-clicked=" curCate = $event" class="slider"/>
        <h1 class="currentCate">{{ curCate }}</h1>
      </div>
      <div class="txt-wrapper"></div>
    </div>
    <div class="down-wrapper">
      <div class="dspFlex tagSlider-wrapper">
        <menuSlider :lis="tagArr()" @name-clicked="selectTag" class="slier fs16" />
        <!-- component for filter -->
      </div>
      <!-- component for posts -->
      <ul class="dspFlex">
        <li v-for="blog in blogArr">
          <router-link
            :to="{ path:`/blogpost/${blog.category}/${blog.id}`}"
          ><postCard /></router-link>
        </li>
      </ul>
      
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
import postCard from '@/components/postCard.vue';
import blogJSON from "@/blog_md.json";
import {categoryGetter,tagGetter,postsForTagGetter,sortByCreatedAt,sortByTagLength} from './../js/menuSlider.js';

export default {
  name: "blogs",
  data: function() {
    return {
      blogArr: [],
      blogCate: [],
      curCate:this.categoryArr()[0],
      curTag:this.tagArr()[0],
    };
  },
  components: {
    blogHeader,
    menuSlider,
    postCard
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
    },
    categoryArr: () => {
      return categoryGetter();
    },
    tagArr: () => {
      return tagGetter();
    },
    selectTag: function(val){
      console.log(postsForTagGetter(val));
      return postsForTagGetter(val)
    }
  },
  computed:{
    
  },
  beforeMount() {
    this.blogRouteArr(blogJSON);
    this.categoryArr();
    this.selectTag(this.curTag);
    // sortByTagLength(postsForTagGetter("react"));
    // console.log(this.blogArr);
  }
};
</script>

<style scoped>
.up-wrapper{height:15em;border-bottom: 1px solid #04244a;}
.cate-wrapper{
  width:60%;
  border-right: 1px solid #04244a;
}
.slider{
  width:50%;
  margin:1em 3em;
  font-size: 1.2em;
}
.currentCate{
  font-size: 6em;
  margin: 0 0 .5em .8em;
  color:#2aa1b7;
  font-family: 'monad',Arial,sans-serif;
}
.tagSlider-wrapper{
  width:75%;
  padding:1em;
}
</style>

