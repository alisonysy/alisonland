<template>
  <div class="favourites">
    <favHeader/>
    <div class="desc"></div>
    <div class="siteContent"></div>
  </div>
</template>

<script>
import favHeader from "@/components/header.vue";
export default {
  data:()=>{
    return {
      
    }
  },
  name: "favourites",
  components: {
    favHeader
  },
  methods: {
    generateRandomBlock() {
      let blockNum = 3,
          minWidth = 25,
          maxDis,
          addedWidth;
      maxDis = 100 - blockNum * minWidth;
      addedWidth = Math.floor(Math.random()*maxDis);
      let siteContent = $('.siteContent');
      let siteDiv = $(document.createElement("div"));
      siteDiv.addClass('site')
      siteDiv.css({
        height:'20em',
        width:`${minWidth+addedWidth}%`,
        border:'1px solid red'
      })
      siteContent.append(siteDiv);
    }
  },
  mounted() {
    this.generateRandomBlock();
  }
};
</script>

<style scoped>
.desc {
  height: 50vh;
  border-bottom: 2px solid #04244a;
}
</style>

