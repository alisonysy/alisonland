### 定义
canvas元素允许**动态脚本渲染**2D、3D图形和位图图像。
默认画布大小是300px x 150px。

canvas元素只有`width`和`height`2个属性。元素可被CSS定义大小，但渲染时图像会根据布局大小相应缩放，若CSS控制的画布大小与原比例有出入，图像会被扭曲。

提供fallback内容时，只需把内容直接写入canvas标签内，如可在标签内放置静态图像。

### 获取渲染上下文
可以通过检测浏览器是否有`canvas.getContext`方法来检测是否支持canvas。
canvas元素的`getContext('2d')`方法获取`CanvasRenderingContext2D`。
接下来使用`getContext('2d')`方法返回的ctx进行绘制。

### 画布栅格/坐标空间
画布左上方为(0,0)，往左为x坐标，往下为y坐标。

### 绘制
canvas只支持2种原始图形：矩形和路径(由线链接的一系列点)。

#### 矩形
`fillRect(x,y,width,height)`绘制一个实心矩形
`strokeRect(x,y,width,height)`绘制空心矩形
`clearRect(x,y,width,height)`清除指定区域的矩形，使其完全透明

#### 路径
1. 创建路径`beginPath()`。路径会被保存为子路径的列表，所有的子路径组成一个图形。每当`beginPath()`被调用，这个列表会被重置，我们可以重新画图形。当当前路径为空，如调用了`beginPath()`之后，无论第一个路径绘制指令是什么，都会被当作是`moveTo()`。
2. 通过绘制指令绘制
3. 当路径创建完成，勾勒`stroke()`或填充`fill()`路径来渲染。调用`closePath()`会从当前点画直线到子路径的起始点。使用`fill()`时会默认`closePath()`，但`stroke()`需要手动调用`closePath()`。

### 基本API
移动到某个坐标：`moveTo(x,y)`
从当前位置画直线到点(x,y)：`lineTo(x,y)`
指定圆心和半径画弧：`arc(centeredX, centeredY, radius, startAngle, endAngle, anticlockwise)`开始角度和结束角度都是以x轴为基准，同时以radian为单位，非degree，转换公式为`radians = (Math.PI/180)*degrees`。
指定控制点和半径画弧：`arcTo(x1,y1,x2,y2,radius)`，此方法使用直线链接结束点和起始点。
指定1个控制点画二次曲线：`quadraticCurveTo(cp1x,cp1y,x,y)`
指定2个控制点画贝塞尔曲线：`bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y)`
在当前未闭合的路径上添加矩形：`rect(x, y, width, height)`

### Path2D对象
Path2D对象允许缓存或记录这些绘制指令，使其可复用，可接收1个其他path对象或svg path字符串作为参数。
```js
new Path2D();     // empty path object
new Path2D(path); // copy from another Path2D object
new Path2D(d);    // path from SVG path data
```
创建对象后，所有路径的方法都能在对象实例上使用，并保存下来。并可通过`Path2D.addPath(path[, transform])`把不同的path组合成一个对象。