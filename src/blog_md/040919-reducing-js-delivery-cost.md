JavaScript是影响页面TTI的重要因素之一，JS的解析编译和执行时间会延迟页面的交互。

*按路由分包*和*PRPL*是两种常用的加快JS加载的方法：

## PRPL (Push, Render, Pre-cache, Lazyload)

+ Push critical resources for the initial route.
+ Render initial route.
+ Pre-cache remaining routes.
+ Lazy-load and create remaining routes on demand.


https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/#other_costs

[PRPL](https://polymer-library.polymer-project.org/2.0/docs/apps/prpl)