<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          bugs
        </h2>
        <h1 class="postTitle">
          First Time Running and Archiving Existing Project with XCode <span class="postSubTitle">Debugging Records</span>
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
        <div class="postAbstract">
          This is for those who get to use XCode to archive an existing app for the VERY FIRST time.
        </div>
      </div>
      <div class="postBody markdown-body">
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

        ## Do - Structure your project
        I tried to drag the outer  `ios` folder to XCode, but it said no `.xcproject` or `.xcworkspace` detected. I realised that given the `_MACOSX` folder and the embeded `ios` folder, I need to restructure the unzipped project as presumably targets and files paths may not match the current structure. I didn't remove the `_MACOSX` folder but moved all files from the inner `ios` folder to the outer `ios` folder.
        
        ## Do - Use `.xcworkspace` instead of `.xcproject`
        This is a piece of advice by many on SO to avoid unexpected errors. 

        ### Bug 1 - 'RCTxxx.h' not found or Cannot find protocol declaration
        At first I thought it was due to incorrect header search path as many suggest on SO. 
        ## Do - Make sure header search paths are correct
        I did correct some header search paths. But the errors persisted and there were indeed those `.h` and `.m` files. It shouldn't be the fault of codes inside the files since the app did run properly. Then I noticed a `podfile`.
        After research, I presumed this was due to not having CocoaPods installed.
        BINGO!
        ## Do - Make sure CocoaPods are installed

        ### Bug 2 - 'libxxx.a' not found
        Check whether the file exists, and if not, check package.json and podfile to see if the dependency is installed.
        ## Do - Make sure the dependencies are installed
        
        Until then, I thought it was all good as the app runs under debug mode. But when I switched to the release mode. Another error came up. :)

        ### Bug 3 - Undefined symbols for architecture i386: "xxxx", referenced from


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

<style>
@import url('../assets/github-markdown.css');
</style>
