<template>
  <div class="swiper-wrapper posiRela">
    <ul class="dspFlex">
      <li v-for="item in items" :key="item.id" class="dspFlex">
        <div class="card dspFlex">
          <div class="ptCard-top" v-if="!item.hasImage">
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
          <div class="ptCard-top" v-else-if="item.id === '300320-gsap-gallery'">
            <div>Description:&nbsp;
              {{item.description}}
            </div>
            <div class="gallery dspFlex">
              <div>
                <img src="@/assets/exploded-view.gif" alt="">
              </div>
              <div>
                <img src="@/assets/horizontal-scroll.gif" alt="">
              </div>
              <div>
                <img src="@/assets/juice.gif" alt="">
              </div>
              <div>
                <img src="@/assets/mount-qi.gif" alt="">
              </div>
            </div>
          </div>
          <div class="ptCard-bottom dspFlex">
            <div class="fs20 fw700">{{ item.name }}</div>
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
      items:this.works.works,
      liId:0,
      obs:{}
    }
  },
  mounted:function(){
    swiperInit();
    this.setId();
    this.obs = this.liListener();
    console.log(this.items);
  },
  methods:{
    liListener:function(){
      const vm = this;
      const tgNd = $('.swiper-wrapper ul')[0];
      const config = {attributes:true,childList:false,subtree:true};
      const cb = function(mutationsList, observer) {
        for(let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class' && Array.from(mutation.target.classList).includes('active')) {
            let id = $(mutation.target).attr('data-id');
            vm.$emit('li-change',id);
          }
        }
      };
      const observer = new MutationObserver(cb);
      observer.observe(tgNd,config);
      return observer;
    },
    setId:function(){
      const lis = $('.swiper-wrapper ul').find('li');
      let id=0;
      lis.each(function(i){
        $(this).attr('data-id',id++)
      })
    }
  },
  beforeDestroy:function(){
    this.obs.disconnect();
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
  height:auto;
  width:100%;
  align-items: center;

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
  width: 100%;
  & div{
    margin:1em;
    line-height: 1.5em;
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

  & .gallery{
    flex-flow: row wrap;
    & div{
      width:45%;
    }
    & img{
      max-width:100%;
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