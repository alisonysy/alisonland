Babel是个编译器，用于将源码转换为输出代码。流程有3个阶段：解析，转换，生成和输出。
Babel本身只是解析源码和生成与原本一样的代码，再输出，真正转换的靠插件去完成。

### 
插件用于把高级的语法转换成低级的语法，babel提供一系列的插件－preset，而无需一个个添加。在NPM上的插件可以通过
```json
{
  "plugins":["babel-plugin-myPlugin"]
}
```
来指定。
插件比*预设*先执行，插件的执行顺序是从左到右，从前往后，而预设的正好相反。
可以通过`module.exports`导出对象来创建预设
```js
module.exports = () => {
  presets:[ // preset can contain other presets
    require("@babel/preset-env"),
  ],
  plugins:[
    [require("@babel/plugin-proposal-class-properties"),{loose:true}],
    require("@babel/plugin-proposal-object-rest-spread")
  ]
}
```

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