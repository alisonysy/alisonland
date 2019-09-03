### 像素密度(pixel density)和屏幕显示

高像素密度的图片是把更多的物理像素塞进同样大的屏幕像素里：

1x 显示屏：1px in CSS = 1px on screen
2x 显示屏：1px in CSS = 2px on screen

1x 图像：1px in CSS = 1px 图像像素
2x 图像：1px in CSS = 2px 图像像素

## `srcset`属性

此属性为浏览器提供了多个可选的图像来源，我们提供一个用`,`分隔的来源清单，由user agent根据具体设备来决定加载哪一个。每个图像需要以下两类信息：

+ 图像资源路径
+ 像素密度或图像宽度

像素密度：
```html
<img src="one.png"
     srcset="two.png 2x, three.png 3x, four.png 4x">
```

图像宽度：单位是像素(px)，只有当使用**图像宽度**时，才能使用`sizes`属性

```html
<img src="one.png"
     srcset="two.png 100w, three.png 500w, four.png 1000w">
```

## `sizes`属性

根据设置的媒体查询设置对应的图片宽度

```html
<img src="one.png"
     srcset="two.png 100w, three.png 500w, four.png 1000w"

     sizes="<media condition> <width>,
            <media condition> <width>,
            <optional default image width>">

<!-- example -->
<img src="one.png"
     srcset="two.png 100w, three.png 500w, four.png 1000w"

     sizes="(min-width: 900px) 1000px,
            (max-width: 900px) and (min-width: 400px) 50em,
            ( not (orientation: portrait) ) 300px,
            ( (orientation: landscape) or (min-width: 1000px) ) 50vw, 
            100vw">
```

即当屏幕宽度大于900px时，图片宽度为1000px，此时user agent会根据`srcset`提供的图片来源，选择最为合适的图片加载，此处即为`four.png 1000w`

Note: 此处应该要与对应图像的真实宽度一样，否则，若**标明的宽度等于图像真实宽度**，则渲染出来的图片宽度等于`sizes`里指定的宽度，若标明的宽度**小于**图像真实宽度，则渲染出来的图片宽度**大于**`sizes`里指定的宽度，反之亦然。
