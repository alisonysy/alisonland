<template>
  <main class="home posiRela">
    <div class="otherLinks dspFlex fs20 deepBlue f-monad">{{homeDate | dateFormat}}</div>
    <div class="nameBg posiAbso">
      <div class="name">
        <span class="initialLetter whiteFont f-monad">A</span>
        <span class="letters deepBlue f-monad">lison</span>
      </div>
    </div>
    <div class="announcement">
      <p>Welcome to my journey of being a web developer. Hope you enjoy and plz feel free to leave a message for any further discussion :)</p>
      <p>欢迎同道的你，也欢迎随时留言探讨~</p>
    </div>
    <!-- <div class="profileImg-wrapper posiAbso">
      <img
        :src="profileImg(profileImgName)"
        @mouseover="changeProfileImg()"
        @mouseout="changeProfileImg()"
        alt="Alison"
        class="profileImgUp"
      >
    </div> -->
    <navigation/>
  </main>
</template>

<script>
//import HelloWorld from '../components/HelloWorld'
import navigation from "@/components/navigation";

export default {
  name: "home",
  data: () => {
    return {
      profileImgName: "home-profile-1-origin"
    };
  },
  computed: {
    homeDate: () => {
      return new Date();
    }
  },
  methods: {
    profileImg(name) {
      let images = require.context("../assets/", false, /\.png$/);
      return images("./" + name + ".png");
    },
    changeProfileImg() {
      let img = document.querySelector(".profileImg-wrapper > img");
      if (this.profileImgName === "home-profile-1-origin") {
        this.profileImgName = "home-profile-2-origin";
        img.style.transform = "rotate(5deg)";
      } else {
        this.profileImgName = "home-profile-1-origin";
        img.style.transform = "rotate(-5deg)"
      }
    }
  },
  components: {
    navigation
  }
};
</script>

<style scoped>
.home {
  height: 100vh;
  min-width: 100vw;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.65)
    ),
    url("../assets/bg/home-bg-lines-gap-min.png");
  background-repeat: repeat-x;
  background-size: cover;
  overflow: hidden;
}

/* name part */
.nameBg {
  width: 12%;
  min-width: 10em;
  height: 75%;
  background: #04244a;
  left: 10%;
  top: 0;
}

.name {
  margin: 20% 0 0 36%;
  font-size: 8em;
}


/* date | calendar */
.otherLinks {
  width: 10%;
  height: 12%;
  font-size: 1.428em;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid #2aa1b7;
  padding-bottom: 0.5em;
}

/* announcement */
.announcement{
  width:35%;
  line-height: 1.5em;
  margin:12% auto auto 27%;
}

.announcement p{
  font-family: 'Space Mono',monospace;
}

/* profile img */
.profileImg-wrapper{
  top: 10%;
  right: 20%;
  width: 16%;
  will-change: transform;
}
.profileImgUp {
  max-width: 100%;
  will-change: transform;
  transform: rotate(-5deg);
}

/* navigation */
#navigation-wrapper {
  position: fixed;
  bottom: 0;
}
</style>
