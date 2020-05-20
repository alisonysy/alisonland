## viewport的2种概念
`layout viewport`是布局视口，与网页原本的大小一致，而`visual viewport`是实际的视口。
CSS布局是根据布局视口而言的，会比实际视口宽很多。因此`<html>`以布局视口的宽度，解析CSS。

**`document.documentElement.clientWidth/clientHeight`**用来衡量*布局*视口的大小，单位是CSS像素。
**`window.innerWidth/innerHeight`**衡量*实际*视口的大小，单位是CSS像素。因此，在页面缩放的时候，`window.innerWidth`会随着缩放而减增。
缩放的比例公式：`screen.width/window.innerWidth`
**`document.documentElement.offsetWidth/offsetHeight`**衡量整个`<html>`元素的大小，单位是CSS像素。

使用*媒体查询*时，`device-width`是以屏幕尺寸为依据，但某些旧版浏览器可能无法报告设备宽度，而以浏览器标准的视口宽度报告屏幕尺寸，造成CSS样式大小不正确；而且当浏览器窗口大小改变时，内容无法适应调整，因为该查询时基于设备的实际大小。而`width`以浏览器窗口尺寸为依据。

### 像素：物理像素和逻辑像素
物理像素是设备本身的分辨率，是人眼能识别的电子屏幕展示的最小的物理单元。而**逻辑像素**是*物理像素/设备像素比(DPR)*，即一个逻辑像素包含物理像素的个数。一部DPR为2的设备意味着，1个逻辑像素包含4(2x2)个物理像素。以MacBook Pro 13.3Inch的为例，设备的物理像素是2560，DPR是2，则逻辑像素为1280，1280应为屏幕像素。对于大多数设备来说，屏幕像素默认地会称为视口宽度，但MacBook Pro 13.3将`1440X900`设置为默认的屏幕像素，称为**scaled resolution**。

[视口大小和设备像素一览](https://docs.adobe.com/content/help/en/target/using/experiences/vec/mobile-viewports.html)