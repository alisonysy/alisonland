<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          bugs
        </h2>
        <h1 class="postTitle">
          First Time Building Existing Project with XCode <span class="postSubTitle">Debugging Records</span>
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
      </div>
      <div class="postBody">
        As the title suggests, a few days ago I had to run an existing `react-native` project on device and build it with XCode.
        First time to use a Mac and first time to work with XCode which I didn't even know before.
        The project was already run before, but the app might need modifications on styles and debugging. What I received is a zip file with a structure like this:

        > | MyProject
        >   |- Android
        >   |- ios
        >     |- _MACOSX
        >     |- ios
        >     |- podfile
        >     |- **(other files not listed)**
        >   |- package.json
        >   |- package-lock.json
        >   |- **(other files not listed)**

        ## Lesson 1 - Structure Your Project
        I tried to drag the outer  `ios` folder to XCode, but it said no `.xcproject` or `.xcworkspace` detected. I realised that given the `_MACOSX` folder and the embeded `ios` folder, I need to restructure the unzipped project as presumably targets and files paths may not match the current structure. I didn't remove the `_MACOSX` folder but moved all files from the inner `ios` folder to the outer `ios` folder.

        ### Bug 1 - 'RCTxxx.h' not found
        ## Lesson 2 - Use `.xcworkspace` instead of `.xcproject`

      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
export default {
  name:'xcode-01',
  data:function(){
    return {
      postTags:['xcode','debug','entry-level']
    }
  },
  components:{
    blogHeader
  },
  computed:{
    postUpdatedAt(){
      return false;
    }
  }
}
</script>

<style scoped>

</style>
