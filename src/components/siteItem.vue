<template>
  <div class="siteItem dspFlex" :data-id="site.id">
    <div class="left">
      <div class="siteAbstract spMono posiRela">
        {{site.abstract}}
        <a class="siteArr" :href="site.url"></a>
      </div>
    </div>
    <div class="middle fs20">
      <h1 class="siteTitle">{{site.title}}</h1>
      <ul class="siteTags">
        <li v-for="tag in site.tag" class="siteTagsLi spMono">{{tag}}</li>
      </ul>
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
  computed: {
    titleLength: function() {
      return this.site.title.length;
    }
  },
  methods:{

  },
  mounted() {

  },
  updated(){
    
  }
};
</script>

<style scoped>
.siteItem {
  width: 100%;
  padding: 8% 3%;
    border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
  height: 100%;
}
.left {
  width: 33%;
  padding-right: 5%;
}
.siteAbstract {
  font-size: .8em;
  line-height: 2em;
}
.siteArr{
  padding-top: 2em;
  content:'';
  width:3.5em;
  height:1px;
  border-bottom:2px solid #fff;
  position: absolute;
  bottom: -2.7em;
  right: 1em;
  border-radius: 2px;

}
.siteArr::before{
  content:'';
  width:1.7em;
  height: 2px;
  background: #fff;
  position: absolute;
  bottom: .5em;
  right:-0.2em;
  transform: rotate(-135deg);
  border-radius: 2px;
}

.middle{
  width:57%;
}
.siteTitle {
  font-size: 2em;
  line-height: 1.3em;
}
.siteTags {
  margin-top: 1em;
}
.siteTagsLi {
  padding: 0.5em;
  font-size: 0.6em;
  display: inline-block;
}
.siteTagsLi:first-of-type {
  padding-left: 0;
}

.right {
  width: 10%;
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: -0.5em;
  font-family: "Space mono", monospace;
  padding-right: 1em;
}
</style>
