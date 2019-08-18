<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import loading from "@/components/loading.vue";
import home from "@/views/Home.vue";
import VueMarkdown from 'vue-markdown';

export default {
  name: "App",
  components: {
    loading,
    home,
    VueMarkdown
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
  font-family: "calmer", 'Microsoft Yahei';
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
/* general color settings */
.deepBlue{
  color:#04244a;
}

.whiteFont{
  color:#fff;
}

.f-monad{
  font-family: 'monad','Microsoft Yahei', sans-serif;
}

/* import fonts */
@font-face {
  font-family: "monad";
  src: url("assets/fonts/Monad.otf") format("opentype");
}
@font-face {
  font-family: "airSpace";
  src: url("assets/fonts/AirSpace.otf") format("opentype");
}
@font-face{
  font-family: 'el-sans-serif';
  src:url('assets/fonts/el-sans-serif.ttf') format('truetype');
}
@font-face{
  font-family: 'el-sig';
  src:url('assets/fonts/el-sig.ttf') format('truetype');
}
@font-face {
  font-family: 'calmer';
  src: url('assets/fonts/calmer.ttf') format('truetype');
}

@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap');

/* general markdown settings */
/* post concept */
.postConcepts{
  position: relative;
  left:2em;
}
.postConcepts::before{
  content:'';
  background:#F4D160;
  width:2em;
  height:2em;
  border-radius: 50%;
  position: absolute;
  left:-2em;
  top: 50%;
  transform: translateY(-50%);
}
.postConcepts::after{
  content:'';
  background:#fff;
  width:1.4em;
  height:1.4em;
  border-radius: 50%;
  position: absolute;
  left:-1.3em;
  top: 50%;
  transform: translateY(-50%);
}
/* post related */
.postRelated{
  position:relative;
  border-bottom: 2px dotted #fa557c;
}
.postRelated:hover::before{
  content:'Reference: ' attr(related-url);
  position:absolute;
  background:#F4D160;
  border-radius: 10px;
  top:1.5em;
  padding:.5em;
  font-size: .8em;
  width:50vw;
}

/*---------------post-----------------*/

/* title part */
.postHeader {
  display: flex;
  flex-flow: column wrap;
  color: #fff;
  background-color: #04244a;
  align-items: center;
  position: relative;
}

.postCategory {
  font-family: "el-sig";
  font-size: 20em;
  color: rgba(255, 255, 255, 0.25);
  white-space: nowrap;
}

.postTitle {
  position: absolute;
  top: 50%;
  font-size: 3em;
  text-align: center;
  padding: 0 1.3em;
  line-height: 1.5em;
  transform: translateY(-50%);
}

.postCreated{margin:1em;}

.postTags li,
.postAbstract {
  font-family: 'calmer',monospace;
}

.postTags{
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
}

.postTags li {
  display: inline-block;
  margin: 1em;
}

.postAbstract {
  margin: 1em 5em 5em;
}


/* postbody */
.postBody-wrapper{
  width:100%;
  background: linear-gradient(to bottom, #04244a, transparent 15%);
  padding-top: 1px;
}
.postBody {
  width: 65%;
  margin: 15em auto;
}

</style>
