<template>
  <main class="fav-header">
    <div class="headerLeft">
      <div class="otherLinks dspFlex fs20 deepBlue">{{homeDate | dateFormate}}</div>
      <div class="nameBg">
        <router-link to="/">
          <span class="initialLetter whiteFont fs20">A</span>
        </router-link>
      </div>
    </div>
    <div class="functions headerRight">
      <div class="filterBy"></div>
      <div class="sortBy"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "site-header",
  computed: {
    homeDate: () => {
      return new Date();
    }
  }
};
</script>

<style scoped>
.fav-header {
  display: flex;
  width: 100%;
  height: 4vw;
}
.headerLeft,
.headerRight {
  display: flex;
}
.headerLeft {
  width: 35%;
}
.headerRight {
  width: 65%;
}
/* date | calendar */
.otherLinks {
  width: 20%;
  height: 100%;
  font-size: 1.428em;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid #2aa1b7;
  padding-bottom: .5em;
}
.nameBg {
  width: 4vw;
  background: #04244a;
  text-align: center;
  line-height: 4vw;
}
.initialLetter {
  font-size: 2.2em;
  line-height: 4vw;
}

.headerRight {
  background: #04244a;
}
</style>
