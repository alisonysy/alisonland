Generator 生成器用于生成迭代器(Iterator)，根据MDN的定义，生成器是可以中途退出，之后再继续的函数，而其上下文，如绑定的变量会被保留。
一般情况下，任何函数只要一执行，就会执行到return或函数结束，或抛出错误，无法中断，先进行其他操作再重回继续，而生成器提供了这样的可能。

语法：
```js
function *(){ // anonymous generator function
  //... other codes
  yield somethingYouWantToPassToOtherFunctions;
  return optionalValue; // this will end the generator, making it return {done:true}
}
```

*yield*类似return，其返回的是一个迭代器，迭代器的**定义**是一个实现了一个next方法的对象，方法里返回一个对象，**至少**有done和value两个属性，而这些是*迭代器协议*规定的，它定义了一种标准的方式来产生一组有限或无限序列的值。当调用生成器函数时，立即返回的是一个**迭代器**对象(an iterator object)，当调用该iterator的next方法时，生成器函数会执行到第一个yield处停止，返回了一个含有value和done两个属性对象，通过value获取其yield之后的值。

生成器的**重要应用**之一是*async/await与promise*的结合，如果说promise缓解了异步编程中回调地狱的问题，那么生成器可解决它。

## 可迭代协议(Iterator protocol) - 使对象可迭代
要使一个普通对象A可迭代，该对象称为iterable object。
它必须实现`@@iterator`的方法，通过设置`[Symbol.iterator]`函数属性来实现。该**函数**属性应该遵循*迭代器协议*规范，即是返回一个包含next方法的对象，next方法再返回有done和value两个属性的对象。因此，设置`[Symbol.iterator]`函数属性有2种方法：
1. 手动返回迭代器
```js
obj[Symbol.iterator] = function(){ // zero-argument
  // can access the obj's properties via this
  return {
    next(){
      while(this.a<10){ // this here refers to the scope of the returned iterator object
        return {value:this.a++,done:false}
      }
      return {value:undefined,done:true}
    },
    a:0
  }
}
```
2. 设置`[Symbol.iterator]`为一个生成器，自动返回迭代器
```js
obj[Symbol.iterator] = function *(){
  let a = 0;
  while(a<10){
    yield a++;
  }
}
```
当这个对象A需要被迭代时，如用在for...of...loop中，`@@iterator`方法会被调用，方法里的this指向对象A

### 生成器对象既是可迭代对象，也是迭代器
```js
let iterableAndIterator = function *(){
  yield 1;
}();
```
因为iterableAndIterator既有`@@iterator`方法(该方法返回的是自身)，也有`next`方法