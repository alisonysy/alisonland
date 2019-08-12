<template>
  <div class="ddPanel posiRela" @click="toggleDd">
    <div class="defaultTxt">{{defaultItem}}</div>
    <ul class="dropdown posiAbso">
      <li v-for="option in optionArr" @click="selectFil(option)"> 
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
        dropdown.slideDown(300)
      }else{
        dropdown.slideUp(300)
      }
    },
    selectFil:function(option){
      this.$emit('select-filter',option);
      this.defaultItem = option.val;
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
  height: 2em;
  min-width:9em;
  padding-left:1em;
  line-height: 2em;
  border:1px solid rgba(138, 196, 208,0.5);
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
  margin-right: 1em;
}
.defaultTxt, .dropdown{cursor:pointer;}
.dropdown{
  top:100%;
  left:0;
  display: none;
  width:100%;
  background: #fff;
  border:1px solid rgba(138, 196, 208,0.3);
}
.dropdown li{
  border-bottom: 1px dashed rgba(138, 196, 208,0.3);
  padding: 0 1em;
}
</style>
