## 懒加载JS：`scrollTop`，`IntersectionObserver`和新的`loading`属性

(CSS Tricks - Complete guide on lazyload yet missing the new loading attr)[https://css-tricks.com/the-complete-guide-to-lazy-loading-images/]

# 懒加载之避免重排(reflow)


## 在图片未加载前有的placeholder

通过`<picture>`作为一个wrapper，设置`padding-top`和`background`作为placeholder；

wrapper有不同的class控制不同的`padding-top`百分比，由此获得不同的图片比例；

而里面的图像为*绝对定位*，若`width`和`height`都为100%，则图片随wrapper比例压缩，若`height`设置为auto，则需在wrapper上添加`overflow:hidden`才能维持原比例显示

## 渐进式图片加载——方法1

1. 创建一个用于包裹图片的`<div>`，通过设置`padding-top`或`padding-bottom`设置要显示的高宽比，并设置`overflow:hidden`，以避免在抓取图片后可能出现的reflow (Note: 可能无法完整显示图片，如底下的部分被裁剪)
2. 先加载一个大小在几百字节的缩略图，需直接通过`<img>`标签直接写在HTML中，以便浏览器解析的时候直接抓取
3. JS创建新的`<img>`，使`src`等于真实图片的地址，将其append到&lt;div>里，监听`onload`事件，使其在加载完成后才显示`opacity:1`

[Medium处理渐进式图片例子](https://jmperezperez.com/medium-image-progressive-loading-placeholder/)

## 渐进式图片加载——方法2

直接通过JS来创建`<img>`，把缩略图和真实图片的`src`保存在一个对象里，遍历数组的每个image对象，先使`src`等于对象的缩略图地址，之后通过`setTimeout`异步加载原图