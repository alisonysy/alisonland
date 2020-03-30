(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bddd7"],{"2e8f":function(l,e,o){"use strict";o.r(e);var t=function(){var l=this,e=l.$createElement;l._self._c;return l._m(0)},n=[function(){var l=this,e=l.$createElement,o=l._self._c||e;return o("section",[o("blockquote",[o("p",[l._v("以下内容摘自MDN："),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model"}},[l._v("MDN Visual Formatting Model")])])]),o("h2",[l._v("什么是视觉格式化模型")]),o("p",[l._v("视觉格式化模型是处理文档和在视觉媒体上呈现该文档的一套机制。")]),o("p",[l._v("CSS元素每个盒子的布局(layout)是由以下的因素决定的：")]),o("ul",[o("li",[l._v("盒子的维度，是固定(有限制)的，还是相反")]),o("li",[l._v("盒子的类型，inline / inline-level / block")]),o("li",[l._v("盒子的定位类型，是在正常的文档流，还是浮动，还是绝对定位等等")]),o("li",[l._v("盒子与子元素、同级其他元素的关系")]),o("li",[l._v("视窗(viewport)的大小和位置")]),o("li",[l._v("若盒子内包含图像，图像原本的维度")]),o("li",[l._v("其他外部信息")])]),o("h2",[l._v("视觉格式化模型对HTML元素的处理")]),o("h3",[l._v("Part 1 - 盒子的诞生")]),o("p",[l._v("该模型为页面上的元素生成盒子，盒子的类型是由CSS的"),o("code",{pre:!0},[l._v("display")]),l._v("属性决定，同时盒子的类型会影响视觉布局。\n众所周知，盒子的类型大致有块级和内联。但我们常看见"),o("code",{pre:!0},[l._v("block-level element")]),l._v(", "),o("code",{pre:!0},[l._v("block container box")]),l._v(", "),o("code",{pre:!0},[l._v("block box")]),l._v("等等的术语时，会困惑，这些指的确切是什么？")]),o("h4",{staticClass:"postConcepts"},[l._v("块级元素(block-level element) vs 块级盒(block-level box)")]),o("h4",[l._v("块级元素(block-level element)")]),o("h5",{staticClass:"postDefine"},[l._v("当其CSS的`display`属性是block / list-item / table时，该元素即为块级元素。块级元素在页面中是垂直堆叠。")]),l._v("\n每个块级元素至少生成1个块级盒(block-level box)，被称为主块级盒(principal block-level box)，有些诸如list-item会生成更多的块级盒子，用于处理列表的点(bullet)。每个块级盒子都参与块级格式化上下文(block formatting context, aka BFC)。\n这个主块级盒是参与到定位布局中的盒子，它包含后代生成的盒子和内容。\n块级盒(block-level box)用于描述它和其父盒子、同级盒子的关系。\n"),o("h4",[l._v("块容器盒(block container box)")]),o("h5",{staticClass:"postDefine"},[l._v("只包含其他块级盒(block-level box)，或只包含内联盒子(inline box，此时会创建行内格式化上下文inline formatting context)。")]),l._v("\n块容器盒用于描述它和后代的关系。\n"),o("h4",{staticClass:"postConclusion"},[l._v("\n  块级元素会生成1个或多个块级盒。块级盒和块容器盒并无直接联系，块级盒可以是也可以不是块容器盒，如"),o("span",{staticClass:"postEg"},[l._v("当元素为table时，这个元素便不是块容器盒，因为它不能包含其他的级块盒或内联盒子")]),l._v("；反之也成立，"),o("span",{staticClass:"postEg"},[l._v("如不可替代的行内盒子(non-replaced inline block)和不可替代的表格单元格(non-replaced table cell)")]),l._v("，它们只是块容器盒，但不是块级盒。\n  一个既是块级盒又是块容器盒的盒子成为块盒(block box)。\n")]),o("blockquote",[o("p",[l._v("block-level box && block container box === block box")])]),o("h4",{staticClass:"postConcepts"},[l._v("块盒(block box)")])])}],c=o("2877"),i={},s=Object(c["a"])(i,t,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0bddd7.64ead9b7.js.map