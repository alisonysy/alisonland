<template>
  <main class="blogPage">
    <blogHeader/>
    <div class="up-wrapper dspFlex">
      <div class="cate-wrapper">
        <menuSlider :lis="categoryArr()" @name-clicked=" curCate = $event " class="slider"/>
        <h1 class="currentCate">{{ curCate }}</h1>
      </div>
      <div class="txt-wrapper"></div>
    </div>
    <div class="down-wrapper">
      <div class="dspFlex tagSlider-wrapper">
        <menuSlider :lis="tagArr(curCate)" @name-clicked=" clickedTag = $event " class="tagSlider fs16" />
        <dropdownPanel :dataArr="[{name:'bytime',val:'By created time'},{name:'bylen',val:'By tag length'}]" defaultOpt="Default" @select-filter="selectFil"/>
      </div>
      <ul class="dspFlex" id="postItem">
        <li v-for="blog in selectedTag">
          <router-link
            :to="{ path:`/blogpost/${blog.category}/${blog.id}`}"
          ><postCard :blog="blog"/></router-link>
        </li>
      </ul>
      
    </div>
  </main>
</template>

<script>
import blogHeader from "@/components/header.vue";
import menuSlider from '@/components/menuSlider.vue';
import postCard from '@/components/postCard.vue';
import {categoryGetter,tagGetter,postsForTagGetter,sortByCreatedAt,sortByTagLength} from './../js/menuSlider.js';
import { constants } from 'crypto';
import dropdownPanel from '@/components/dropdownPanel.vue';

export default {
  name: "blogs",
  data: function() {
    return {
      blogCate: [],
      curCate:this.categoryArr()[0],
      clickedTag:this.curTag,
      filtered:false
    };
  },
  components: {
    blogHeader,
    menuSlider,
    postCard,
    dropdownPanel
  },
  methods: {
    categoryArr: () => {
      return categoryGetter();
    },
    tagArr: (cate) => {
      return tagGetter(cate);
    },
    triggerTagClick:()=>{
      let allTags = document.querySelectorAll('.tagSlider-wrapper ul li');
      let firstTag = allTags[0];
      firstTag.dispatchEvent(new Event('click'));
    },
    cateClicked:function(){
      let postItem = document.getElementById('postItem');
      let posts = postItem.querySelector('li');
      if(!posts){
        this.triggerTagClick();
      }
    },
    selectFil:function(i){
      if(i.name==='bytime'){
        this.filtered = 'bytime';
      }else if(i.name==='bylen'){
        this.filtered = 'bylen';
      }
    }
  },
  computed:{
    selectedTag:function(){
      if(!this.filtered){
        return postsForTagGetter(this.curCate,this.clickedTag);
      }else if(this.filtered==='bytime'){
        return sortByCreatedAt(postsForTagGetter(this.curCate,this.clickedTag));
      }else if(this.filtered==='bylen'){
        return sortByTagLength(postsForTagGetter(this.curCate,this.clickedTag));
      }
    },
    curTag:function(){ // to set setter
      let cate = this.curCate
      return this.tagArr(cate)[0]
    }
  },
  beforeMount() {
    this.categoryArr();
  },
  mounted(){
    this.triggerTagClick();
  },
  updated(){
    this.cateClicked();
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
  width:100%;
  padding:1em 1em 1em 3.8em;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
}
.tagSlider{
  margin-right: 3em;
}
ul{
  margin-bottom: 3em;
  padding-top: 1em;
  padding-bottom: 1em;
  overflow-x: scroll;
}
ul::-webkit-scrollbar{
  height:8px;
}
ul:hover::-webkit-scrollbar-track{
  background-color: transparent;
}
ul:hover::-webkit-scrollbar-thumb{
  background-color: #8ac4d0;
}
</style>

