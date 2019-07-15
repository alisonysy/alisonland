<template>
  <div class="slider-wrapper">
    <ul>
      <li v-for="item in slideItems" >
        <router-link>
          {{item}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'menu-slider',
  props:['lis'],
  data:function(){
    return {
      slideItems:this.lis
    }
  }
}
</script>

<style scoped>

</style>
