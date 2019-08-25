<template>
  <div class="swiper-wrapper posiRela">
    <ul class="dspFlex">
      <li v-for="item in items" :key="item.id" class="dspFlex ">
        <div class="card dspFlex">
          <div class="ptCard-top">
            <div>Description:&nbsp;
              {{item.description}}
            </div>
            <div>Source Code:&nbsp;
              <a :href="item.codeUrl" target="_blank">
                {{item.codeUrl}}
              </a>
            </div>
            <div>Techniques:&nbsp;
              {{item.techniques}}
            </div>
            <div>References:&nbsp;
              {{item.references}}
            </div>
          </div>
          <div class="ptCard-bottom dspFlex">
            <div class="fs20">{{ item.name }}</div>
            <a :href="item.demoUrl" target="_blank" class="posiRela"></a>
            <!-- <div class="posiRela"></div> -->
          </div>
        </div>
      </li>
    </ul>
    <div id="arrowLf" class="arrows posiAbso"></div>
    <div id="arrowRt" class="arrows posiAbso"></div>
  </div>
</template>

<script>
import {swiperInit} from '@/js/swiperInit.js';

export default {
  name:'workSwiper',
  props:['works'],
  data:function(){
    return {
      items:this.works.works
    }
  },
  mounted:function(){
    swiperInit();
  }
}
</script>

<style lang="scss" scoped>
$color:#fff;
%dspFlexC{
  justify-content: center;
  align-items: center;
}

.swiper-wrapper{
  height:100%;
  width:100%;
  overflow: hidden;
}

ul{
  height:35vw;
  width:100%;

  & li{
    @extend %dspFlexC;

    width:100%;
    height:100%;
    flex-shrink: 0;
  }
}

.card{
  @extend %dspFlexC;
  flex-flow: column wrap;
  color:rgba(255,255,255,0.8);
  width:65vw;
  border:1px solid $color;
}

.arrows{
  width:1.5em;
  height:1.5em;
  border:1.5em solid transparent;
  top:50%;
  transform: translateY(-50%);
  opacity:.3;

  &:hover{
    opacity:1;
    cursor: pointer;
  }

  &:first-of-type{
    border-right: 1.5em solid $color;
    left:2em;
  }

  &:nth-last-of-type(1){
    border-left: 1.5em solid $color;
    right:2em;
  }
}

.ptCard-top{
  & div{
    margin:1em;
  }

  & div:nth-of-type(2){
    & a{
      text-decoration: underline;
      &:hover{
        opacity: .8;
        color:#fa557c;
      }
    }
  }
}

.ptCard-bottom{
  padding:1em;
  width:100%;

  & div:first-child{
    width:85%;
    padding-left: .6em;
  }
  & a{
    width:15%;
    cursor: pointer;
    display: block;
    &::before{
      content:'';
      width:5em;
      border-bottom:1px solid $color;
      position:absolute;
      right:1em;
      top:50%;
      transform: translateY(-50%);
    }
    &::after{
      content:'';
      width:1.6em;
      border-bottom:1px solid $color;
      position:absolute;
      right:.7em;
      top:0.4em;
      transform: rotate(45deg);
    }
  }
}
</style>