### `@babel/runtime`
`@babel/runtime`是一个包含Babel模块运行时辅助函数和`regenerator-runtime`版本的库，它以模块的形式实现对应的函数。它的作用是把Babel注入的相同的代码提取出来复用，例如对类`class Circle{}`的转码中，Babel会将其转换成：
```js
function _classCallCheck(instance,constructor){
  //...
}

var Circle = function Circle(){
  _classCallCheck(this,Circle);
}
```
如此一来，每个使用到ES6的类的文件都会有`_classCallCheck`函数，此时`@babel/runtime`和`@babel/plugin-transform-runtime`就会把每个文件重复的部分，改为对重复函数的引用，如：`var _classCallCheck = require("@babel/runtime/helpers/classCallCheck");`。
`@babel/runtime`作为运行时依赖，与`@babel/plugin-transform-runtime`一起使用。