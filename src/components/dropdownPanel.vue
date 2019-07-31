<template>
  <div class="ddPanel posiRela" @click="toggleDd">
    <div class="defaultTxt">{{defaultItem}}</div>
    <ul class="dropdown posiAbso">
      <li v-for="option in optionArr">
        {{ option.val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'dropdown-panel',
  props:['dataArr','defaultOpt'],
  data:function(){
    return {
      defaultItem:this.defaultOpt,
      optionArr:this.dataArr
    }
  },
  methods:{
    toggleDd:()=>{
      let dropdown = $('.dropdown');
      if(dropdown.is(':hidden')){
        dropdown.slideDown('slow')
      }else{
        dropdown.slideUp('slow')
      }
    }
  },
  beforeMount(){
    console.log(this.optionArr)
  }
}
</script>

<style scoped>
.ddPanel{
  width:20%;
  height: 1.5em;
}
.ddPanel::after{
  position: absolute;
  content:'';
  border:8px solid transparent;
  border-top: 8px solid #8ac4d0;
  right: 0;
  height:1.2em;
  width:1.2em;
  top:65%;
  transform: translateY(-50%);
}
.dropdown{
  top:100%;
  left:0;
  display: none;
}
</style>
