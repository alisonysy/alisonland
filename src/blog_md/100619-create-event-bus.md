Event bus采用的是发布/订阅模式，常用于小到中型app里组件的解耦(decoupling)。下面是用JavaScript手写一个event bus的例子。

既然是**发布/订阅**模式，即有：订阅者(subscriber)、发布者(publisher)和事件(events)三大块。

### 把不同类型的事件和对应要执行的callback放到一个对象里
```js
const subscriptions = {}
```
一开始的对象为空，当有事件被订阅时，会在此对象上添加，同时应该对对象里每个订阅事件的函数赋予ID，用于unsubscribe，最后理想的`subscriptions`对象是：
```js
subscriptions ={
  eventType1:{
    id1: func1,
    id2: func2,
    ...
  },
  eventType2:{
    id1: func1,
    id2: func2,
    ...
  }
}
```

### 订阅函数——指明要订阅的事件和callback
订阅函数需要对初次注册的callback赋予ID，同时返回`unsubscribe`方法。
**ID生成函数**：
```js
function idGenerator(){
  let lastIndex = 0;
  return function getIndex(){ //闭包用于记录上一次的lastIndex
    lastIndex += 1;
    return lastIndex
  }
}
// or use generator to create unique id
function *idGenerator(){
  let i=0;
  while(true){
    yield i++;
  }
}
const getIndex = idGenerator()
```
```js
function subscribe(eventType, fn){
  const id = getIndex(); //调用的是idGenerator()返回的函数，调用并不会执行`let lastIndex = 0;`，同时getIndex()包含之前的lastIndex的信息

  if(!subscriptions[eventType]){
    subscriptions[eventType] = {}
  }
  subscriptions[eventType][id] = fn

  return {
    unsubscribe: function(){
      delete subscriptions[eventType][id]
      //当一个事件类型没有订阅者时，删除该事件类型
      if(!Object.keys(subscriptions[eventType])){
        delete subscriptions[eventType]
      }
    }
  }
}
```

### 发布函数——指明发布的事件和输出的参数
```js
function publish(eventType, data){
  if(!subscriptions[eventType]){
    return
  }

  Object.keys(subscriptions[eventType]).map((entry)=>{
    subscriptions[eventType][entry].call(undefined,data)
  })
}
```

### 完整模块输出代码
```js
const subscriptions = {};
const getIndex = idGenerator();

function idGenerator(){
  let lastIndex = 0;
  return function getIndex(){ //闭包用于记录上一次的lastIndex
    lastIndex += 1;
    return lastIndex
  }
}

function subscribe(eventType, fn){
  const id = getIndex(); //调用的是idGenerator()返回的函数，调用并不会执行`let lastIndex = 0;`，同时getIndex()包含之前的lastIndex的信息

  if(!subscriptions[eventType]){
    subscriptions[eventType] = {}
  }
  subscriptions[eventType][id] = fn

  return {
    unsubscribe: function(){
      delete subscriptions[eventType][id]
      //当一个事件类型没有订阅者时，删除该事件类型
      if(!Object.keys(subscriptions[eventType])){
        delete subscriptions[eventType]
      }
    }
  }
}

function publish(eventType, data){
  if(!subscriptions[eventType]){
    return
  }

  Object.keys(subscriptions[eventType]).map((entry)=>{
    subscriptions[eventType][entry].call(undefined,data)
  })
}

export {subscriptions,publish,subscribe} 
```

### 使用
import的时候，可作为单个方法引入，也可设置namespace。

+ 单个方法引入：
```js
import {subscribe, publish, subscriptions} from './main1.js'

let a = subscribe("loaded",function(args){
  console.log('doc is loaded, here is the args:'+args)
});

//some other codes

publish("loaded","I'm the arg.")

console.log(subscriptions["loaded"]["1"]); //打印出注册的函数

a.unsubscribe();

console.log(subscriptions["loaded"]["1"]); //undefined
```

+ 用eventBus作为命名空间：
```JavaScript
import * as eventBus from './main1.js'

let a = eventBus.subscribe("loaded",function(args){
  console.log('doc is loaded, here is the args:'+args)
});

console.log('subscribed')

//some other codes
eventBus.publish("loaded","I'm the arg.")

console.log(eventBus.subscriptions["loaded"]["1"]);

a.unsubscribe();

console.log(eventBus.subscriptions["loaded"]["1"]);
```

+ 把eventBus用作mixin
```js
let eventMixin = {
  on(event,handler){
    if(!this._eventHandlers) this._eventHandlers = {};
    if(!this._eventHandlers[event]){
      this._eventHandlers[event] = [];
    }
    this._eventHandlers[event].push(handler);
  }

  off(event,handler){
    let handlers = this._eventHandlers? this._eventHandlers[event] ? this._eventHandlers[event] : undefined : undefined;
    if(!handlers) return;
    for(let i=0;i<handlers.length;i++){
      if(handlers[i] === handler){
        handlers.splice(i--,1); // notice that 'i--' here enables the loop to examine the next item of the newly deleted one
      }
    }
  }

  trigger(event,...args){
    if(!this._eventHandlers || !this._eventHandlers[event]){
      return;
    }

    this._eventHandlers[event].forEach(handler => handler.apply(this,args));
  }
}

// using eventMixin
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", value => alert(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");
```