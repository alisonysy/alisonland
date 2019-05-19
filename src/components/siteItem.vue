<template>
  <div class="siteItem dspFlex" :data-id="site.id">
    <div class="left">
      <div class="siteAbstract spMono">{{site.abstract}}</div>
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
    siteItemHeight(){
      let item = $('.siteItem');
      for(let i=0;i<item.length;i++){
        console.log('height is')
        console.log(item.eq(i)[0].scrollHeight)
      }
    }
  },
  mounted() {
    this.siteItemHeight();
  },
  updated(){
    
  }
};
</script>

<style scoped>
.siteItem {
  width: 100%;
  padding: 3em 1em;
    border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;

}
.left {
  width: 33%;
  padding-right: 1.5em;
}
.siteAbstract {
  font-size: .8em;
  line-height: 2em;
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
  height: 100%;
  padding-right: 1em;
}
</style>
