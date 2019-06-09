<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          CSS
        </h2>
        <h1 class="postTitle">
          Visual Formatting Model 视觉格式化模型 <span class="postSubTitle">How Each Element And Its Correspondent Box(es) Are Generated?</span>
        </h1>
        <div class="postTime">
          <div class="postCreated"></div>
          <div class="postUpdated" v-if="postUpdatedAt"></div>
        </div>
        <div class="postTags">{{ postTags }}</div>
        <div class="postAbstract">
          CSS的盒模型(box model)把元素当成一个个长方形盒子渲染，每个盒子包括内容(content)、内边距(padding)、边框(border)、外边距(margin)4个部分。而当一个页面有很多这样的盒子时，这些盒子的具体位置和最终渲染的布局则由视觉格式化模型(visual formatting model)决定。
        </div>
      </div>
      <div class="postBody markdown-body">
        
      </div>
    </article>
  </main>
</template>

<script>
import blogHeader from '@/components/header.vue'
export default {
  name:'css-visual-formatting-model',
  data:function(){
    return {
      postTags:['css','box model','entry-level','basic concept','block box','block container box','block-level box','notes']
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
