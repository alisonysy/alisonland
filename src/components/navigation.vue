<template>
  <nav id="navigation-wrapper">
    <div v-for="val in tabObj" class="tab whiteFont dspFlex fs16">
      <span>{{val}}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name:'navigation',
  data(){
    return {
      tabObj:{
        tab1:'Favourite',
        tab2:'Blogs',
        tab3:'Portfolio',
        tab4:'About Me'
      }
    }
  }
}
</script>

<style scoped>
#navigation-wrapper{
  display:flex;
  height: 15%;
  width:100%;
  padding:0 15%;
  will-change: transform;
}

.tab{
  width:25%;
  height:100%;
  margin:0 2%;
  background:linear-gradient(to top,rgba(255,255,255,0.3) ,rgba(255,255,255,0.3)),
             #2aa1b7;
  justify-content: center;
  align-items: center;
}

.tab:hover{
  cursor: pointer;
  transform:translate(0,-20%);
  height:150%;
}




</style>
