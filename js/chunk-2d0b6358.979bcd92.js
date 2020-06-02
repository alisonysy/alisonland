(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6358"],{"1bd5":function(e,t,n){"use strict";n.r(t);var v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("viewport的2种概念")]),n("p",[n("code",{pre:!0},[e._v("layout viewport")]),e._v("是布局视口，与网页原本的大小一致，而"),n("code",{pre:!0},[e._v("visual viewport")]),e._v("是实际的视口。\nCSS布局是根据布局视口而言的，会比实际视口宽很多。因此"),n("code",{pre:!0},[e._v("<html>")]),e._v("以布局视口的宽度，解析CSS。")]),n("p",[e._v("**"),n("code",{pre:!0},[e._v("document.documentElement.clientWidth/clientHeight")]),e._v("**用来衡量"),n("em",[e._v("布局")]),e._v("视口的大小，单位是CSS像素。\n**"),n("code",{pre:!0},[e._v("window.innerWidth/innerHeight")]),e._v("**衡量"),n("em",[e._v("实际")]),e._v("视口的大小，单位是CSS像素。因此，在页面缩放的时候，"),n("code",{pre:!0},[e._v("window.innerWidth")]),e._v("会随着缩放而减增。\n缩放的比例公式："),n("code",{pre:!0},[e._v("screen.width/window.innerWidth")]),e._v("\n**"),n("code",{pre:!0},[e._v("document.documentElement.offsetWidth/offsetHeight")]),e._v("**衡量整个"),n("code",{pre:!0},[e._v("<html>")]),e._v("元素的大小，单位是CSS像素。")]),n("p",[e._v("使用"),n("em",[e._v("媒体查询")]),e._v("时，"),n("code",{pre:!0},[e._v("device-width")]),e._v("是以屏幕尺寸为依据，但某些旧版浏览器可能无法报告设备宽度，而以浏览器标准的视口宽度报告屏幕尺寸，造成CSS样式大小不正确；而且当浏览器窗口大小改变时，内容无法适应调整，因为该查询时基于设备的实际大小。而"),n("code",{pre:!0},[e._v("width")]),e._v("以浏览器窗口尺寸为依据。")]),n("h3",[e._v("像素：物理像素和逻辑像素")]),n("p",[e._v("物理像素是设备本身的分辨率，是人眼能识别的电子屏幕展示的最小的物理单元。而"),n("strong",[e._v("逻辑像素")]),e._v("是"),n("em",[e._v("物理像素/设备像素比(DPR)")]),e._v("，即一个逻辑像素包含物理像素的个数。一部DPR为2的设备意味着，1个逻辑像素包含4(2x2)个物理像素。以MacBook Pro 13.3Inch的为例，设备的物理像素是2560，DPR是2，则逻辑像素为1280，1280应为屏幕像素。对于大多数设备来说，屏幕像素默认地会称为视口宽度，但MacBook Pro 13.3将"),n("code",{pre:!0},[e._v("1440X900")]),e._v("设置为默认的屏幕像素，称为"),n("strong",[e._v("scaled resolution")]),e._v("。")]),n("p",[n("a",{attrs:{href:"https://docs.adobe.com/content/help/en/target/using/experiences/vec/mobile-viewports.html"}},[e._v("视口大小和设备像素一览")])])])}],_=n("2877"),c={},r=Object(_["a"])(c,v,o,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0b6358.979bcd92.js.map