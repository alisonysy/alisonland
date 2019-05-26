<template>
  <main class="post-wrapper">
    <blogHeader/>
    <article class="post">
      <div class="postHeader">
        <h2 class="postCategory">
          css
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
        > 以下内容翻译自MDN：[MDN Visual Formatting Model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)

        ## 什么是视觉格式化模型
        视觉格式化模型是处理文档和在视觉媒体上呈现该文档的一套机制。

        CSS元素每个盒子的布局(layout)是由以下的因素决定的：
        + 盒子的维度，是固定(有限制)的，还是相反
        + 盒子的类型，inline / inline-level / block
        + 盒子的定位类型，是在正常的文档流，还是浮动，还是绝对定位等等
        + 盒子与子元素、同级其他元素的关系
        + 视窗(viewport)的大小和位置
        + 若盒子内包含图像，图像原本的维度
        + 其他外部信息

        ## 视觉格式化模型对HTML元素的处理
        ### Part 1 - 盒子的诞生
        该模型为页面上的元素生成盒子，盒子的类型是由CSS的`display`属性决定，同时盒子的类型会影响视觉布局。
        众所周知，盒子的类型大致有块级和内联。但我们常看见`block-level element`, `block container box`, `block box`等等的术语时，会困惑，这些指的确切是什么？
        <span class="concepts">块级元素(block-level element) vs 块级盒子(block box)</span>

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
