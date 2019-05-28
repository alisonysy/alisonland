<template>
  <main class="blogPage">
    <blogHeader/>
    <router-link to="/blogs/xcode-01">xcode</router-link>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
export default {
  name:'blogs',
  components:{
    blogHeader,
  }
}
</script>

<style scoped>

</style>
