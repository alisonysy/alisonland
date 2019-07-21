<template>
  <div class="slider-wrapper">
    <ul class="dspFlex">
      <li v-for="item in slideItems" @click="$emit('name-clicked',item)">
          <span>{{item}}</span>
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
ul{
  flex-flow: row nowrap;
  overflow-x: auto;
  width:24vw;
}
li{
  display: inline-block;
  margin:.5em;
}
span{
  white-space: nowrap;
}
ul::-webkit-scrollbar{
  height:3px;
  display: none;
}
ul:hover::-webkit-scrollbar-track{
  background-color: transparent;
}
ul:hover::-webkit-scrollbar-thumb{
  background-color: #8ac4d0;
}
</style>
