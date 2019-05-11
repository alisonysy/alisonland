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
      console.log(addedWidth)
      let siteContent = document.querySelector(".siteContent");
      let siteDiv = document.createElement("div");
      siteDiv.classList.add("site");
      siteDiv.style.height = "20em";
      siteDiv.style.width = `${minWidth + addedWidth}%`;

      siteDiv.style.border = "1px solid red";
      siteContent.insertAdjacentElement("afterbegin", siteDiv);
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
