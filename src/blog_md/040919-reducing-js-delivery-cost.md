JavaScript是影响页面TTI的重要因素之一，JS的解析编译和执行时间会延迟页面的交互。

# 减少网络传递JavaScript的成本


### 只传送用户需要的代码

+ 拆包
+ 懒加载

### 简化代码

### 压缩代码

### 删除无用代码

+ 使用`babel-preset-env`和browserlist防止编译浏览器已有的功能
+ 对于裁剪代码(code stripping)，[tree shaking](https://webpack.js.org/guides/tree-shaking/)

### 使用缓存

+ HTTP缓存
+ Service worker


**无需占用**主线程的操作：
+ 解析HTML，CSS
+ 解析和编译JS(某些)
+ JS的垃圾回收
+ 解析和像素化图片
+ GPU加速的动画和过渡效果
+ 主文档的滑动(假设没有正在执行的触摸监听)

**必须占用**主线程的操作：
+ JS的执行
+ DOM的构建
+ 布局
+ 处理用户输入(包括有触摸监听的触屏事件)

![必须占用主线程的操作](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_ec0wEKKVl7iQidBks3oDKg.png)


*按路由分包*和*PRPL*是两种常用的加快JS加载的方法：

## PRPL (Push, Render, Pre-cache, Lazyload)

+ Push critical resources for the initial route.
+ Render initial route.
+ Pre-cache remaining routes.
+ Lazy-load and create remaining routes on demand.

![PRPL模式](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/images/1_VgdNbnl08gcetpqE1t9P9w.png)

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/#other_costs

[PRPL](https://polymer-library.polymer-project.org/2.0/docs/apps/prpl)