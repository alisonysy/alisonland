<template>
  <div class="siteItem dspFlex" :data-id="site.id">
    <div class="left fs20">
      <h1 class="siteTitle ">{{site.title}} + {{titleLength}}</h1>
      <ul class="siteTags">
        <li v-for="tag in site.tag">{{tag}}</li>
      </ul>
      <div class="siteAbstract">{{site.abstract}}</div>
    </div>
    <div class="right">{{site.category}}</div>
  </div>
</template>

<script>
export default {
  name: "siteItem",
  props: ["item"],
  data: function() {
    return {
      site: this.item
    };
  },
  computed:{
    titleLength:function(){
      return this.site.title.length;
    }
  },
  mounted() {
    console.log(this.site);
  }
};
</script>

<style scoped>
.siteItem {
  width: 100%;
  height: 20em;
  border: 1px solid red;
}
.left {
  width: 90%;
  border: 1px solid gold;
}
.siteTitle{
  font-size: 2em;
}
.right {
  width: 10%;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -.5em;
  font-family: 'Space mono',monospace;
}
</style>
