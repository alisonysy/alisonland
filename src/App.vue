<template>
  <div id="app">
    <home/>
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
}
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
/* general color settings */
.deepBlue{
  color:#04244a;
}


/* import fonts */
@font-face {
  font-family: "monad";
  src: url("assets/fonts/Monad.otf") format("opentype");
}
</style>
