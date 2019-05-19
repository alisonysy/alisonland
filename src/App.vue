<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import loading from "@/components/loading.vue";
import home from "@/views/Home.vue";
export default {
  name: "App",
  components: {
    loading,
    home
  },
  data() {
    return {
      //
    };
  },

};
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "monad", "Space Mono",monospace;
}
a{text-decoration: none;color:unset;}
ul,li{list-style: none;padding: 0;margin: 0;}
/* general position and display settings */
.posiRela {
  position: relative;
}
.posiAbso {
  position: absolute;
}
.dspFlex{
  display: flex;
}
/* general fonts settings */
.fs16{
  font-size: 16px;
}
.fs20{
  font-size: 20px;
}
.fs14{
  font-size: 14px;
}
.spMono{
  font-family: 'Space Mono';
}
/* general color settings */
.deepBlue{
  color:#04244a;
}

.whiteFont{
  color:#fff;
}

/* import fonts */
@font-face {
  font-family: "monad";
  src: url("assets/fonts/Monad.otf") format("opentype");
}
@import url('https://fonts.googleapis.com/css?family=Space+Mono');
</style>
