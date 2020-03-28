ES6提出了let和constant，以及代码块，在代码块里声明的变量只能在代码块里获得，在同一个代码块或全局下重复声明会报错。
```js
{
  let msg = 'message';
  function say(){console.log('Hi');}
}
console.log(msg); // msg is not defined
say(); // it executes!!
```
对于if，for，while等，创建在{...}的变量只能在代码块里获取。

## 词法环境 Lexical environment

### 1. 变量
在JS中，每次函数被调用，代码块和里面的脚本会生成一个隐藏的内置的对象——词法环境**Lexical Environment**。
这个词法环境对象包含2部分：
+ Environment Record —— 一个把所有*本地变量*储存为**属性**的对象，该对象还包含其他信息如`this`
+ 指向外部的词法环境outer lexical environment

> 一个变量只是Environment Record这个特殊内部对象的属性，“获取或改变一个变量”意味着“获取或改变该对象的属性”

在全局中，外部的词法环境为`null`。
词法环境对象变化过程：
```js
// execution starts [phrase: <uninitialised>] (outer -> null)
let phrase; // [phrase:undefined]
phrase = 'hello'; // [phrase:'hello']
phrase = 'bye'; //[phrase:'bye']
```
1. 当脚本开始，词法环境对象会预先记录下所有声明的变量，最开始时，他们属于“未初始化”阶段。这是一个特殊的内部状态，引擎知道这些变量的存在但不让他们在`let`声明前被使用。
2. 当变量phrase的声明出现，但未赋值时，值为`undefined`。
3. phrase被赋值
4. phrase的值被改变