<template>
  <main class="home posiRela">
    <div class="otherLinks dspFlex fs20 deepBlue">{{homeDate | dateFormate}}</div>
    <div class="nameBg posiAbso">
      <div class="name">
        <span class="initialLetter">A</span><span class="letters">lison</span>
      </div>
    </div>
    <div class="profileImg-wrapp">
      <img src="../assets/home-profile-1-origin.png" alt="Alison" class="profileImgUp posiAbso">
    </div>
    <navigation/>
  </main>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'
  import navigation from '@/components/navigation'

  export default {
    name:'home',
    data:()=>{
      return {
        
      }
    },
    computed:{
      homeDate:()=>{
        return new Date();
      }
    },
    components: {
      navigation
    }
  }
</script>

<style scoped>
.home{
  height: 100vh;
  min-width:100vw;
  background-image: 
    linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.65)),
    url('../assets/bg/home-bg-lines-gap-min.png');
  background-repeat:  repeat-x;
  background-size: cover;
  font-family: 'monad', monospace;
}

/* name part */
.nameBg{
  width:12%;
  min-width: 10em;
  height: 75%;
  background: #04244a;
  left: 10%;
  top:0;
}

.name{
  margin:20% 0 0 36%;
  font-size: 8em;
}

.initialLetter{
  color:#fff;
}

.letters{
  color:#04244a;
}


/* date | calendar */
.otherLinks{
  width:10%;
  height: 12%;
  font-size: 1.428em;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid #2aa1b7;
  padding-bottom: .5em;
}

/* profile img */
.profileImgUp{
  width:16%;
  top:10%;
  right:25%;
  transform: rotate(-10deg);
}



/* navigation */
#navigation-wrapper{
  position:fixed;
  bottom:0;
}
</style>
