<template>
  <main class="blogPage">
    <blogHeader/>
    <router-link to="/blogs/xcode-01">xcode</router-link>
    <test class="test"/>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
import test from '@/blogposts/test.md'
export default {
  name:'blogs',
  components:{
    blogHeader,
    test
  }
}
</script>

<style>
.test > *{
  font-family: 'Space Mono', sans-serif;
}
</style>
