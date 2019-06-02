<template>
  <main class="blogPage">
    <blogHeader/>
    <XCodeBlog />
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
import XCodeBlog from '@/blogposts/250519-first-time-using-xcode-running-debugging.vue'
export default {
  name:'blogs',
  components:{
    blogHeader,
    XCodeBlog
  }
}
</script>

<style>
.test > *{
  font-family: 'Space Mono', sans-serif;
}
</style>
