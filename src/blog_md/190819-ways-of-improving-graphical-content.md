## 5种优化图片提升浏览器加载性能的方法：

+ 剪裁图片
+ 设置最佳的格式
+ 降低图片清晰度
+ 压缩
+ 去除metadata

建议：
+ 源文件储存无损格式图片，通过构建工具或压缩软件把压缩过的图片在网页上最终呈现

## 优化位图
每个像素(pixel)储存**RGBA**值：R - red channel, G - green channel, B - blue channel, A - alpha channel。
浏览器为每个通道各分配256个值(色阶)，相当于每个通道有8位(2^8=256)，而每个像素需要4字节(4 channels x 8 bits = 32 bits = 4 bytes)，因此一个100px x 100px大的图像需要：

100 x 100 = 10,000像素

10,000 x 4 bytes = 40,000 bytes

40,000 / 1024 = 39KB

减少图像大小的一个简单策略是——减少*位深*，从每个通道8位，即一共256 x 256 x 256 = 16,777,216种颜色，裁剪到更少的颜色。

> 当x表示“位每像素”时，x位/像素的图像能表示**2^x**种颜色；当x表示“位每通道”时，x位/通道的图像能表示**2^(3*x)**种颜色


## 图片优化清单
+ 优先选择矢量图格式
+ 压缩SVG
+ 选择适合的位图格式
+ 尝试不同的位图质量
+ 清除不必要的metadata
+ 尽量使图片资源大小等于网页展示的图片大小

### JPEG压缩模式
1. 顺序JPEG(baseline JPEG) - 从上到下加载
2. 渐进式JPEG(progressive JPEG) - 从模糊到清晰加载

PJPEG优势：更好的用户体验，节省用户流量
PJPEG劣势：更长的解压时间(3倍)，消耗CPU，对于小图像文件更大

### 色度采样 - chroma subsampling
色度采样对视觉影像较小，以A:B:C的形式，分别表示：
+ A - 行像素数
+ B - 第一行的颜色数
+ C - 第二行的颜色数

4:4:4 没有压缩，颜色和亮度完整加载；适用于屏幕截图、横幅和按钮
4:2:2 水平采样一半，垂直全采样
4:2:0 对第一行像素的一半进行颜色采样，并忽略第二行；适用于照片
避免用于含字体的图像

### WebP图片格式
对于**有损**压缩，相对JPEG文件小25-34%；而低质量图片，WebP比JPEG更有优势因为它能模糊掉块状伪影(blockiness artifacts)？通常`-m 4 -q 75`是默认的平衡设置；需要更高质量的话，WebP的优势会不明显。对于性能要求大于质量要求的，推荐使用WebP。
对于**无损**压缩，WebP无损文件比PNG小26%，无损加载时间相对PNG降低3%。
WebP有无损的8位的**透明度**通道，比PNG只多了22%的字节大小，同时作为WebP独有的，它支持有损的RGB透明度。

可以通过`imagemin`插件把图片压缩并转换成WebP格式：
```js
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['images/*.{jpg,png}'], 'build/images', {
    use: [
        imageminWebp({quality:75,lossless: true})
    ]
}).then(() => {
    console.log('Images optimized');
});
```

用`<picture>`在Chrome上显示WebP，而在Firefox上显示其他格式：
```html
<picture>
    <source srcset='paul_irish.jxr' type='image/vnd.ms-photo'>
    <source srcset='paul_irish.jp2' type='image/jp2'>
    <source srcset='paul_irish.webp' type='image/webp'>
    <img src='paul_irish.jpg' alt='paul'>
</picture>
```

### 动态GIF应该转换为视频格式
同一个文件，`.mp4`格式比`.gif`格式能削减80%的大小，且更快的加载时间。因为GIF以*无损*方式保存每帧(我们平常看到的低质量是由于GIF有限的256种颜色)，而MP4是以有损JPEG保存每帧

### 减少无用的图像解码和调整大小的成本
当浏览器抓取图像时，需要先从原来的格式解码成位图，保存在内存里；之后通常会涉及对图像大小进行调整，两者都会延迟显示图像的时间。

### 颜色管理

#### 颜色模型
颜色模型是从基础颜色生成完整的颜色范围的系统。不同的色彩空间(color spaces)通过不同的参数去控制色彩。
1. 加色法色彩模型(additive color models) - 用光显示颜色，如RGB，用于电子显示
2. 减色法色彩模型(subtractive color models) - 通过把光消除显示颜色，如CMYK，用于印刷

#### 色彩空间
色彩空间是图片能够展示的特定的一系列色彩。**sRGB**是建立在RGB基础上一个用于网页的标准色彩空间。sRGB比Adobe RGB和ProPhoto RGB小，能表示的颜色少。

[色彩空间对比](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/images/color-wheel_hazsbk.jpg)

大于sRGB的色彩空间被称为宽色域(wide-gamut)