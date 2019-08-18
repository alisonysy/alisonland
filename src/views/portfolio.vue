<template>
  <div class="portfolio-wrapper">
    <nav class="dspFlex posiRela">
      <div class="upperC">alison w.</div>
      <!-- dropdown / whole-screen menu -->
      <fullScreenMenu :items="tabObj" @menu-closed="openMenu = false" :onMenu="openMenu"/>
    </nav>
    <main>
      <div class="bg"></div>
      <div class="ptCard">
        <div class="ptCard-top">
          <div>Description:</div>
          <div>Source Code:</div>
          <div>Techniques:</div>
          <div>References:</div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
    <!-- menuSlider for categories -->
  </div>
</template>

<script>
import fullScreenMenu from '@/components/menus/fullScreenMenu.vue';

export default {
  name:'portfolio',
  data:function(){
    return {
      tabObj:{
        tab1:{
          name:'Home',
          rt:'/'
        },
        tab2:{
          name:'Favourites',
          rt:'/favsite'
        },
        tab3:{
          name:'Blogs',
          rt:'/blogs'
        },
        tab4:{
          name:'About Me',
          rt:'/about-me'
        }
      },
      openMenu:false
    }
  },
  components:{
    fullScreenMenu
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
$color:#fff;

.portfolio-wrapper{
  color:$color;
}

nav{
  justify-content: space-between;
  background: #04244a;
  & div, & span{
    font-family: 'monad','calmer',monospace;
  }
}
</style>