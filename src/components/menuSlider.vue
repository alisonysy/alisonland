<template>
  <div class="slider-wrapper">
    <ul>
      <li v-for="item in slideItems" @click="$emit('name-clicked',item)">
          {{item}}
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
  },
  computed:{
    
  },
  methods:{
    click:()=>{

    }
  }
}
</script>

<style scoped>

</style>
