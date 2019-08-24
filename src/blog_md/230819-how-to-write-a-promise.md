在控制台打印一个Promise对象，返回如下结果：

成功时: ![resolved](https://cdn1.imggmi.com/uploads/2019/8/23/dce20ebba793abee9cb8c2f5f97abadd-full.png) 
失败时: ![rejected](https://cdn1.imggmi.com/uploads/2019/8/23/7454c730759e9c81336686126017f519-full.png) 

从图中可以看到，Promise实例返回的对象有`[[PromiseStatus]]`和`[[PromiseValue]]`两个属性

```js
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(){
    //每个新promise创建时状态都会是PENDING
    this._status = PENDING;
    this._value = null;
  }
}
```

Promise接受一个*函数*作为参数，该函数接受2个*函数*参数——`resolve`和`reject`；
```js
class MyPromise {
  constructor (handle){
    if(typeof handle !== 'function'){
      throw new Error('MyPromise must accept a function as a parameter')
    }

    // call the handle when initialising the class
    try{ 
      //resolve和reject函数都可以接受不限类型的参数，作为成功和失败时返回的数据
      //传入两个函数时不执行，需要用bind绑定正确的this
      handle(this._resolve.bind(this),this._reject.bind(this));
    }catch (err){
      this._reject(err);
    }
  }

  _resolve(val){
    //当用户在handle中调用时，表明promise状态已更改为成功，同时把用户传入的值作为成功时返回的数据
    if(this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }

  _reject(err){
    if(this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = val;
  }
}
```

### `then`方法
到这里已经实现了Promise的基本结构、状态和值，接下来到核心的`then`方法

`then`方法特性：
+ 接受两个参数，*成功*时调用的函数和*失败*时调用的函数
+ 返回的还是一个promise
+ 参数为函数时，函数接受来自Promise实例的成功时/失败时返回的数据，若有返回值，再把返回值传给到下一个`then`
+ 同一个promise可以多次调用`then`，并且调用的顺序按照`then`的注册顺序
+ `then`的触发条件是上一个的promise状态为fulfilled，i.e. 若Promise实例抛出错误，之后由then中的error function处理后，下一个then中被触发的是*成功*时调用的函数

#### 根据`then`方法特性作出修改
1. `then`接受*成功*时调用的函数和*失败*时调用的函数，并在promise状态改变时对应触发他们
2. 链式调用`then`需返回另一个promise
3. 参数为函数时，函数接受来自Promise实例的成功时/失败时返回的数据，若有返回值，再把返回值传给到下一个`then`
```js
  then(onFulfilled,onRejected){
    const {_status, _value} = this;
    return new MyPromise(function(resolve,reject){
      //若_status为FULFILLED
      let fulfilled = (value) => {
        try{
          let res = onFulfilled(value);
          resolve(res);
        }catch (err){
          reject(err);
        }
      }
      
      //若_status为REJECTED
      let rejected = (error) => {
        try{
          let res = onRejected(error);
          resolve(res);
        }catch (err){
          reject(err);
        }
      }

      //根据_status的值执行不同的onFulfilled或onRejected
      switch (_status) {
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          rejected(_value);
          break;
      }
    })
  }
```

4. 同一个promise可以多次调用`then`，并且调用的顺序按照`then`的注册顺序 ——> 需要有一个记录各个`then`的数组，然后依次调用
```js
  constructor(handle){
    // ... codes
    //新增两个数组，分别用于记录成功时和失败时调用的数组
    this._fulfilledQueues = [];
    this._rejectedQueues = [];
  }

  _resolve(val){
    if(this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
    while(this._fulfilledQueues.length > 0){
      this._fulfilledQueues.shift()(val)
    }
  }

  _reject(val){
    if(this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = val;
    while(this._rejectedQueues.length > 0){
      this._rejectedQueues.shift()(val)
    }
  }

  then(onFulfilled,onRejected){
    const {_status, _value} = this;
    return new MyPromise(function(resolve,reject){
      //若_status为FULFILLED
      let fulfilled = (value) => {
        try{
          let res = onFulfilled(value);
          //此处的resolve函数执行的时候要按then注册的onFulfilled顺序执行，因此在_resolve函数修改↑
          resolve(res);
        }catch (err){
          reject(err);
        }
      }
      
      //若_status为REJECTED
      let rejected = (error) => {
        try{
          let res = onRejected(error);
          resolve(res);
        }catch (err){
          reject(err);
        }
      }

      //根据_status的值执行不同的onFulfilled或onRejected
      switch (_status) {
        //在PENDING的时候就把then方法分别push到成功时和失败时要执行的函数
        case PENDING:
          this._fulfilledQueues.push(onFulfilled);
          this._rejectedQueues.push(onRejected);
          break;
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          rejected(_value);
          break;
      }
    })
  }
```


以上的实现是建立在以下假设上的：
+ `then`方法的`onFulfilled`和`onRejected`接受的参数为**函数**
> [MDN Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Return_value)中表明：若`then`接受的参数并不是函数，`then`没有了handler但不会报错。当调用`then`的promise状态改变后，会返回一个新的Promise实例，而这个promise同样没有handler，只会采用调用`then`的原始promise的状态。
+ `then`方法的回调函数返回一个新的Promise实例，则需等待新的promise状态改变后再继续执行回调
+ `_resolve`和`_reject`接受的参数为**非**promise，若参数为另一个promise A，即需等待promise A的状态变化后，再更改此promise的状态

```js
  then(onFulfilled,onRejected){
    const { _value, _status } = this;

    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      let fulfilled = value => {
        try{
          //当onFulfilled不是函数时，新的promise的状态和返回值也跟原promise一样
          if(typeof onFulfilled !== 'function'){
            onFulfilledNext(value);
          }else{
            let res = onFulfilled(value);
            if(res instanceof MyPromise){
              //此处在res代表的新的promise状态改变后再调用then方法，并传入原来的handlers，用新的promise返回的数据再执行一遍then
              res.then(onFulfilledNext,onRejectedNext)
            }else{
              onFulfilledNext(value);
            }
          }
        } catch (err){
          onRejectedNext(err)
        }
      }
    }
  }
```

### 相关知识点

> 构造方法(constructor method): 用于创建和初始化一个类的对象 <br>
> 静态方法(static method): 静态方法无需创建实例就可以直接调用，且**不能**通过*实例*调用

## Source code
```js
// 判断变量否为function
const isFunction = variable => typeof variable === 'function'
// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class MyPromise {
  constructor (handle) { // - 构造函数接受一个函数作为参数
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加返回的数据
    this._value = undefined
    // 添加成功回调函数队列
    this._fulfilledQueues = []
    // 添加失败回调函数队列
    this._rejectedQueues = []
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }
  // 添加resovle时执行的函数
  _resolve (val) {
    const run = () => {
      if (this._status !== PENDING) return
      // 依次执行成功队列中的函数，并清空队列
      const runFulfilled = (value) => {
        let cb;
        while (cb = this._fulfilledQueues.shift()) {
          cb(value)
        }
      }
      // 依次执行失败队列中的函数，并清空队列
      // - why rejected needs to be run?
      const runRejected = (error) => {
        let cb;
        while (cb = this._rejectedQueues.shift()) {
          cb(error)
        }
      }
      /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
        当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
      */
      if (val instanceof MyPromise) {
        val.then(value => {
          this._value = value
          this._status = FULFILLED
          runFulfilled(value)
        }, err => {
          this._value = err
          this._status = REJECTED
          runRejected(err)
        })
      } else {
        this._value = val
        this._status = FULFILLED
        runFulfilled(val)
      }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加reject时执行的函数
  _reject (err) { 
    if (this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    const run = () => {
      this._status = REJECTED
      this._value = err
      let cb;
      while (cb = this._rejectedQueues.shift()) {
        cb(err)
      }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加then方法
  then (onFulfilled, onRejected) {
    const { _value, _status } = this
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => { // - onFulfilledNext === resolve
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res =  onFulfilled(value); 
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      // 封装一个失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
              let res = onRejected(error);
              if (res instanceof MyPromise) {
                // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                res.then(onFulfilledNext, onRejectedNext)
              } else {
                //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                onFulfilledNext(res)
              }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      switch (_status) {
        // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled)
          this._rejectedQueues.push(rejected)
          break
        // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }
    })
  }
  // 添加catch方法
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }

  // 添加静态resolve方法
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
  // 添加静态reject方法
  static reject (value) {
    return new MyPromise((resolve ,reject) => reject(value))
  }
  // 添加静态all方法
  static all (list) {
    return new MyPromise((resolve, reject) => {
      /**
       * 返回值的集合
       */
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
  // 添加静态race方法
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
  finally (cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    );
  }
}
```