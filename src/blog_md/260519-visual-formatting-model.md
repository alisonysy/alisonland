> 以下内容摘自MDN：[MDN Visual Formatting Model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)

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
<h4 class="postConcepts">块级元素(block-level element) vs 块级盒(block-level box)</h4>

#### 块级元素(block-level element)
<h5 class="postDefine">当其CSS的`display`属性是block / list-item / table时，该元素即为块级元素。块级元素在页面中是垂直堆叠。</h5>
每个块级元素至少生成1个块级盒(block-level box)，被称为主块级盒(principal block-level box)，有些诸如list-item会生成更多的块级盒子，用于处理列表的点(bullet)。每个块级盒子都参与块级格式化上下文(block formatting context, aka BFC)。
这个主块级盒是参与到定位布局中的盒子，它包含后代生成的盒子和内容。
块级盒(block-level box)用于描述它和其父盒子、同级盒子的关系。

#### 块容器盒(block container box)
<h5 class="postDefine">只包含其他块级盒(block-level box)，或只包含内联盒子(inline box，此时会创建行内格式化上下文inline formatting context)。</h5>
块容器盒用于描述它和后代的关系。
<h4 class="postConclusion">
  块级元素会生成1个或多个块级盒。块级盒和块容器盒并无直接联系，块级盒可以是也可以不是块容器盒，如<span class="postEg">当元素为table时，这个元素便不是块容器盒，因为它不能包含其他的级块盒或内联盒子</span>；反之也成立，<span class="postEg">如不可替代的行内盒子(non-replaced inline block)和不可替代的表格单元格(non-replaced table cell)</span>，它们只是块容器盒，但不是块级盒。
  一个既是块级盒又是块容器盒的盒子成为块盒(block box)。
</h4>
> block-level box &amp;&amp; block container box === block box

<h4 class="postConcepts">块盒(block box)</h4>
