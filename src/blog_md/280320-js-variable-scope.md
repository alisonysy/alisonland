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
+ 指向**定义时**外部的词法环境outer lexical environment

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

### 2. 函数声明
当一个词法环境创建后，函数声明是立即完成*初始化*，注意函数表达式并不能立即完成初始化。若函数声明在一个代码块内，若不是`use strict`模式，代码块外也能获取该函数。

### 3. 内部和外部词法环境
当一个函数被调用时，一个新的词法环境会自动被创建用于储存调用的本地变量和参数。当需要获取一个变量时，内部的词法环境会先被查找是否含有需要的变量，若找不到，则到其指向的外部环境中找，以此类推。

### 4. 返回一个函数
所有的函数能记住他们被创建时的词法环境。所有函数都有隐藏的属性`[[environment]]`，这保留这创建时对外部词法环境的指向。`[[environment]]`只需在函数创建时设置一次。因此当函数被调用时，他能获取到外部词法环境的变量，也能*改变*外部变量的值，这就是*闭包*。


## 垃圾回收
在一般情况下，当函数调用完毕，词法环境及其内部的变量会被回收，但若该函数的内部函数(nested function)仍然能被获取，这个函数的词法环境就不会被回收，因为他正在被引用。