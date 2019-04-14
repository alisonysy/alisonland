<template>
  <div id="app">
    <loading/>
  </div>
</template>

<script>
import loading from '@/components/loading.vue';

export default{
  name:'home',
  components:{
    loading,
  }
}
</script>

<style>
*{box-sizing: border-box;padding: 0;margin: 0;}
</style>
