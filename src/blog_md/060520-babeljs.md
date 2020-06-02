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

## Babel的使用
默认的`Browserslist`是`> 0.5%, last 2 versions, Firefox ESR, not dead` 
> *Firefox ESR(Extended Support Release)*是官方为了如高校、企业等大型机构开发的，以满足大规模建立和维护Firefox的需求，Firefox ESR没有最新的特性，但有最新的安全稳定性能修复。

+ 单独使用
- `@babel/cli`安装核心的babel逻辑和babel命令
- `@babel/preset-env`告诉babel要转译什么和怎样转译

+ 与webpack一起使用
- `webpack`是核心Webpack代码，而`webpack-cli`用于安装webpakc命令
- `@babel/core`是核心Babel代码，`babel-loader`是它的peer dependency
- `babel/loader`告诉Webpack如何使用Babel转译文件
- `@babel/preset-env`帮助Babel知道需要转译什么和怎么转译

除了`.babelrc`，还需要配置`webpack.config.js`：
```js
module.exports = {
  //... other config
  module:{
    rules:[{
      test:/\.js$/,
      exclude: /\/node_modules\//,
      use:{
        loader:'babel-loader'
      }
    }]
  }
}
```