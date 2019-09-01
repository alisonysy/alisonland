<template>
  <div class="portfolio-wrapper">
    <nav class="dspFlex posiRela">
      <div class="upperC fs20 dspFlex">alison w.</div>
      <!-- dropdown / whole-screen menu -->
      <fullScreenMenu :items="tabObj" @menu-closed="openMenu = false" :onMenu="openMenu"/>
    </nav>
    <main class="dspFlex posiRela">
      <div class="bg posiAbso" ></div>
      <div class="ptCard dspFlex">
        <workSwiper :works="works()" @li-change="curWorkTags"/>
      </div>
    </main>
    <!-- menuSlider for categories -->
  </div>
</template>

<script>
import fullScreenMenu from '@/components/menus/fullScreenMenu.vue';
import workSwiper from '@/components/workSwiper.vue';
import works from '@/js/getPortfolio.js';

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
      openMenu:false,
      curTags:this.works().works[0].tags
    }
  },
  components:{
    fullScreenMenu,
    workSwiper
  },
  computed:{
    
  },
  methods:{
    works:()=>{
      return works;
    },
    curWorkTags:function(res){
      this.curTags = this.works().works[res].tags;
    },
    
  },
  beforeMount:function(){
    this.works();
    // this.curWorkTags();
  },
  mounted:function(){
    console.log(this.curTags);
  }
}
</script>

<style lang="scss" scoped>
$color:#fff;
$scrnWid:100vw;
$scrnHei:100%;
%dspFlexC{
  justify-content: center;
  align-items: center;
}

.portfolio-wrapper{
  color:$color;
  background: #04244a;
  width:$scrnWid;
  height: $scrnHei;
}

nav{
  justify-content: space-between;
  border-bottom: 1px solid $color;
  & div, & span{
    font-family: 'monad','calmer',monospace;
  }
  & div{
    align-items: center;
    padding-left: 1.5em;
    letter-spacing: .3em;
  }
}

main{
  @extend %dspFlexC;
  height: 90%;
}

.ptCard{
  @extend %dspFlexC;
  width:$scrnWid;
  height:auto;
}

.bg{
  width:100%;
  height: $scrnHei;
  overflow:hidden;
}
</style>