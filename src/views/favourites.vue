<template>
  <div class="favourites">
    <favHeader/>
    <div class="desc"></div>
    <ul class="siteContent whiteFont dspFlex">
      <li v-for="site in dataAllsites" v-bind:key="site.id" class="siteLi">
        <siteItem :item="site"/>
      </li>
    </ul>
  </div>
</template>

<script>
import favHeader from "@/components/header.vue";
import siteItem from "@/components/siteItem.vue";
export default {
  data: () => {
    return {
      dataAllsites: [],
      dataSite: {
        id: "",
        title: "",
        category: "",
        series: false,
        abstract: "",
        recom: 0,
        related_blogs: null,
        url: "",
        tag: [],
        createdAt: null,
        updatedAt: null
      }
    };
  },
  name: "favourites",
  components: {
    favHeader,
    siteItem
  },
  methods: {
    fetchLeanCloudData() {
      var fetchLeanCloudData_favSites = require("../js/favouriteSites.js")
        .default; //this returns a promise
      return fetchLeanCloudData_favSites.then(
        res => {
          res.forEach(element => {
            let siteEl = {};
            let attr = [
              "id",
              "title",
              "category",
              "series",
              "abstract",
              "recom",
              "related_blogs",
              "url",
              "tag",
              "createdAt",
              "updatedAt"
            ];
            attr.forEach(i => {
              if (element[i]) {
                siteEl[i] = element[i];
              } else if (i === "series") {
                siteEl[i] = element.attributes[i];
              } else if (element.attributes[i]) {
                siteEl[i] = element.attributes[i];
              }
            });
            this.dataAllsites.push(siteEl);
          });
          console.log(this.dataAllsites);
        },
        err => {
          console.error(err);
        }
      );
    },
  },
  mounted() {
  },
  beforeMount() {
    this.fetchLeanCloudData();
  },
  updated() {
  }
};
</script>

<style scoped>
.desc {
  height: 50vh;
}
.siteContent {
  background: #04244a;
  width:100vw;
  flex-flow: row wrap;
}
.siteLi {
  display: inline-block;
  width: 50%;
}
</style>

