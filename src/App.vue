<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import loading from '@/components/loading.vue';
import home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    loading,
    home
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
*{padding:0;margin: 0;box-sizing: border-box}


</style>
