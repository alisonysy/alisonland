ES6语法新增了`import`和`export`的新特性，用于实现模块化。
无论是否在js中明确标明，导入和导出的模块都是"use strict"严格模式下的。

## `import`用于动态导入模块
使用动态导入时，返回的是promise对象，并且支持`await`语法。
*Syntax:*
```JavaScript
import('/modules/my-module.js')
  .then((module) => {
    // Do something with the module.
  });

// await:
let module = await import('/modules/my-module.js');
```


在使用的时候，有以下坑需要注意以下：
### 报错：`SyntaxError: Unexpected identifier`
![Error in Browser](https://ibb.co/2YNDQGf "浏览器端的报错")
![Error in Node.js](https://ibb.co/rfC0CNh "运行Node.js的报错")
当使用`import`和`export`时，无论是直接在浏览器端运行，还是在Node.js上运行，都有`unexpected identifier`的报错，而这种情况<span class="postRelated" related-url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">MDN</span>上是有说明的：
> The import statement cannot be used in embedded scripts unless such script has a `type="module"`.

就是说如果要在页面引入的&lt;script>使用`import`语法，必须在&lt;script>上添加`type="module"`：
```
<script type="module" src="./main.js"></script>
```
