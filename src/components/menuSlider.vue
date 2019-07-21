<template>
  <div class="slider-wrapper">
    <ul class="dspFlex">
      <li v-for="item in slideItems" @click="$emit('name-clicked',item)">
          <span>{{item}}</span>
      </li>
    </ul>
    <span class="arrow lf" @click="clickBack"></span>
    <span class="arrow rt" @click="clickNext"></span>
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
    clickBack:(e)=>{
      let arrLf = e.target;
      let container = arrLf.parentElement;
      let ul = container.querySelector('ul');
      ul.scrollBy({
        top:0,
        left:-60,
        behavior:'smooth'
      })
    },
    clickNext:(e)=>{
      let container = e.target.parentElement;
      let ul = container.querySelector('ul');
      ul.scrollBy({
        top:0,
        left:60,
        behavior:'smooth'
      })
    }
  }
}
</script>

<style scoped>
.slider-wrapper{
  position: relative;
}
ul{
  flex-flow: row nowrap;
  overflow-x: auto;
  width:100%;
}
li{
  display: inline-block;
  margin:.5em .7em;
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
.slider-wrapper .arrow{
  height:1.2em;
  width:1.2em;
  position:absolute;
  top:50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: none;
}
.slider-wrapper:hover .arrow{
  display:inline-block;
}
.arrow.lf{
  left:0;
}
.arrow.lf::before{
  content:'';
  border:8px solid transparent;
  border-right:8px solid #8ac4d0;
  position: absolute;
  right:50%;
}
.arrow.rt{
  right:0;
}
.arrow.rt::before{
  content:'';
  border:8px solid transparent;
  border-left:8px solid #8ac4d0;
  position: absolute;
  left:50%;
}
</style>
