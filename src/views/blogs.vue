<template>
  <main class="blogPage">
    <blogHeader/>
    <ul>
      <li v-for="blog in blogArr" :key="blogArr.map(i => i.id)">
        <router-link :to="{ name:blog.id, params: { cate:blog.category,blogid:blog.id}}">{{ blog.id }}</router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
import blogJSON from '@/blog_md.json'
import XCodeBlog from '@/blogposts/250519-first-time-using-xcode-running-debugging.vue'
export default {
  name:'blogs',
  data:function(){
    return {
      blogArr:[]
    }
  },
  components:{
    blogHeader,
  },
  methods:{
    blogRouteArr :function(){
      let blogCate = Object.keys(blogJSON);
      let arr = [];
      for(let i=0;i<blogCate.length;i++){
        let temp = {};
        let cate = blogCate[i] 
        let cateArr = blogJSON[cate];
        temp.category = cate;
        cateArr.map((item)=>{
          Object.assign(temp,item);
          arr.push(temp);
        })
      }
      this.blogArr=arr;
      console.log(this.blogArr)
    }
  },
  beforeMount(){
    this.blogRouteArr(blogJSON);
  }
}
</script>

<style>
.test > *{
  font-family: 'Space Mono', sans-serif;
}
</style>
