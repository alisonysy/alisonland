<template>
  <main class="blogPage">
    <blogHeader/>
    <router-link to="/blogs/xcode-01">xcode</router-link>
    <test />
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

<style scoped>

</style>
