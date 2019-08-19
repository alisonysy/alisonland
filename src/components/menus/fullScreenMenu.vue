<template>
  <div :class="{fullScreenWrapper:true,extendMode:openMenu,posiAbso:openMenu,dspFlex:openMenu}">
    <div class="upperC fs20">
      <span @click="openMenu = true">menu</span>
      <button class="close upperC" v-show="openMenu" @click="closing()">x</button>
    </div>
    <div class="fullScrn" v-if="openMenu">
      <ul class="dspFlex">
        <li v-for="menuItem in menuLis" :key="menuItem.name" class="fs20">
          <router-link :to="menuItem.rt">
            <span>{{menuItem.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'fullScreenMenu',
  props:['items','onMenu'],
  data:function(){
    return {
      menuLis:this.items,
      openMenu:this.onMenu
    }
  },
  computed:{
  },
  methods:{
    closing:function(){
      this.openMenu = !this.openMenu;
      this.$emit('menu-closed');
    }
  }
}
</script>

<style lang="scss" scoped>
%absoCenter{
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}


.fullScreenWrapper div:first-of-type{
  padding: .5em 1.5em;
  letter-spacing: .6em;
  & span{
    cursor: pointer;
    font-family: 'monad','calmer',monospace,sans-serif;
  }
}

.extendMode{
  transition: all .5s;
  z-index: 99;
  width:100vw;
  height:100vh;
  left:0;
  background: #04244a;
  flex-flow: column wrap;
  & span{
    font-family: 'monad','calmer',monospace,sans-serif;
  }
}

.extendMode div:first-of-type{
  height:10%;
  text-align: right;
  & button{
    padding-right: .3em;
    padding-left: .3em;
    border:1px solid transparent;
    &:hover{
      border:1px solid #fff;
    }
  }
}

.extendMode div{
  width:100%;
}
.fullScrn{
  height: 90%;
  transition: all .5s;

  & ul{
    height:100%;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    & li{
      font-size: 3em;
      line-height: 1.5em;
      & span{
        padding-right: .5em;
        padding-left: .5em;
      }
      &:hover{
        & span{
          font-style: italic;
          transition: all .5s;
        }
      }
    }
  }
}
</style>