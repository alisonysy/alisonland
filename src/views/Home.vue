<template>
  <main class="home">
    <navigation/>
  </main>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import navigation from '@/components/navigation'

  export default {
    name:'home',
    components: {
      navigation
    }
  }
</script>

<style scoped>
.home{
  height: 100vh;
  min-width:100vw;
  background-image: 
    linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.65)),
    url('../assets/home-bg-lines-gap.png');
  background-repeat:  repeat-x;
  background-size: cover;
}

#navigation-wrapper{
  position:fixed;
  bottom:0;
}
</style>
