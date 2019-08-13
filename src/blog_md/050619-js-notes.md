## Array: 数组相关
`Array.prototype.join()`会把拥有一个元素以上的数组默认用`,`或指定的符号把数组内的元素连接起来，并返回一个**新的字符串**

> `arr.join()` //默认是`,`连接 <br/>
> `arr.join('')` //中间没有连接符 <br/>
`Array.prototype.concat()`用于把两个数组合并，并返回一个**新的数组** <br/>
> `arr1.concat(arr2)`

### 数组解构赋值
利用数组，对**变量**进行赋值——
Syntax:
`let [a,b,c] = varArr;`
假设`varArr`是数组，`a`被赋予`varArr[0]`，`b`则被赋值`varArr[1]`，`c`被赋值`varArr[2]`；`varArr`也可以是一个返回数组的函数
若进行赋值的数组的长度**少于**需要被赋值的数组元素个数，可通过设置**默认值**给没有被赋值的元素：
`[a=3,b=34,c='c',d='d'] = varArr`
**数组解构赋值的应用**：
+ 从返回的数组中获取*所需*的值并把其赋值到对应的变量上

```js
[a,,c] = f() //忽略f()返回的数组的第二个元素
```

+ 把进行赋值的数组的*剩余*的元素，赋值到某个变量上

```js
[a,b, ...c] = f()
console.log(c) //f()剩余的元素会以数组的形式赋值给c
```

+ 交换两个变量的值——*省去中间变量*的需要

```js
let a=1;
let b=2;
[a,b] = [b,a]
```

+ 从RegExp的配对中获取所需的值

```js
function parseProtocol(url) { 
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}
```

## Operators: 操作符

### 一元操作符(Unary operators)

只作用于一个值得操作符称为*一元操作符*。
`Increment / Decrement`操作符有两种使用方式：作为*前缀*和作为*后缀*
在通常情况下，如`variable++;`或`++variable;`，他们的作用是一样的；他们的区别在于：
作为**前缀**时，变量的值在语句执行前变化；作为**后缀**时，变量的值在语句执行后变化，e.g.
```js
var age = 29;
var anotherAge1 = --age + 2; //30
console.log(age); // 28
var anotherAge2 = age-- + 2; //30;
console.log(age); // 27
```

`delete`操作符用于把一个属性从对象中移除
*Syntax:*

> delete object.property
> delete object['property']

## 对象的赋值与编译原理
当连续赋值时，并且赋值涉及引用类型时：

```js
var a = {n:1};
var b = a;
a = {n:2};
a.x = a;
console.log(a); //{n: 2, x: {n:2,x:{n:2,x:{...}}}}
console.log(b); //{n:1}

var a = {n:1};
var b = a;
a.x = a = {n:2};
console.log(a); //{n:2}
console.log(b); //{n:1,x:{n:2}}

//因为
a.x = a = {n:2}
等价于
temp = a
a = {n:2}
temp.x = a
```