## 装饰器 - decorator
装饰器是一个接收另一个函数并改变他原函数行为的封装函数。

**装饰器的优势**：
+ 可重复利用
+ 逻辑是独立的，与接收到的函数互不影响
+ 可以组合其他装饰器一起使用

**装饰器的不足**：
+ 若原函数有自身的属性，装饰器返回的封装函数将不会有这些属性，但可以通过创建一个`Proxy`对象把属性包含进去


e.g. 缓存装饰器
```js
function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}
```
他返回的是一个缓存的封装函数，以便各种函数都可以使用。

当原函数为一个*对象里的方法*，并且有使用`this`时，装饰器返回的wrapper function里调用原函数时需要用到`func.call(context[,arg[0],arg[1],...arg[n]])`或`func.apply(context,args)`。
e.g.
```js
let o = {
  method(arg1,arg2){
    return arg1 + arg2;
  }
}

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // 当原函数接收多个参数时，设置缓存key可以是这些参数的集合
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // 或是func.apply(this, arguments)；此处直接使用this是因为函数调用时的this指向o对象

    cache.set(key, result);
    return result;
  };
}

function hash(args) { // arguments是一个数组或类数组
  return [].join.call(args); //[].join.call()是把一个数组中的join方法通过call应用到另一个对象上，该对象必须有0, 1, 2, ...n的属性，以及length
}

worker.slow = cachingDecorator(worker.slow, hash);
```

### 其他例子

#### spy decorator
保存每次调用的函数的参数，可用于单元测试
```js
function spy(func) {
  const inner = function(){
    let args = [];
    for(let n=0;n<arguments.length;n++){
      args.push(arguments[n]);
    }
    inner.calls.push(args);
    
    return func.apply(this,arguments);
  }
  inner.calls = []; // 初始化函数inner的属性，该属性应设置在返回的函数身上
  return inner;
}

function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
```