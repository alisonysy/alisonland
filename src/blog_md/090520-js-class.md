`class User{...}`实际上做了2件事：
1. 创建一个名为`User`的函数，作为类声明的结果。函数体就是类里`constructor`的方法
2. 把类的方法，保存在`User.prototype`里

使用类和函数创建构造函数的区别：
1. 由`class`创建的函数有一个特殊的内部属性`[[FunctionKind]]:"classConstructor"`，使用的时候必须通过`new`调用，否则会报错
2. 类方法是不能枚举的，但函数原型上的方法可以通过`for...in`枚举

## `extends`关键词
使用`extends`让一个类A继承另一个类B，类A的`prototype`属性的原型是类B，即`A.prototype.[[Prototype]]`等于`B.prototype`，即当在`A.prototype`上找补到方法的时候，会从`B.prototype`上找。
```js
B[constructor] ->(prototype) B.prototype[constructor:B;method1:function;method2:function...]
    | [[Prototype]]               | [[Prototype]]
A[constructor] ->(prototype) B.prototpe[constructor:A;method3:function]
                                  | [[Prototype]]
                              new A[params]
```
注：`A extends B`会有两处`[[Prototype]]`的引用创建，1处是`A`函数继承`B`函数，体现在`B`类的静态方法可在`A`上获取，2处是`A.prototype`继承`B.prototype`，体现在由`A`创建的实例可以使用`B`的实例方法。

### `super`关键词
1. `super.method(...args)`调用父类的方法
2. `super(...args)`只能在`constructor`里调用，调用父类的`constructor`

注：和`this`一样，在箭头函数里没有`super`，所以在类的方法中使用`setTimeout(()=> super.method(), delay)`可以正常调用父类的方法，但若使用`setTimeout(function(){super.method()},delay)`将会报错－*unexpected super*

## 类的静态方法和静态属性
静态方法用于应用于整个类的功能，而不针对某一个实例，如*对比两个实例*，有别于正常创建实例的*工厂函数*；同理，静态属性用于储存应用于整个类的数据。
继承父类的子类也能继承静态方法，如`A extends B`可通过`A.staticMethod`获取`B.staticMethod`。

### 继承built-in class
在继承内置类时，若内置的被继承的方法返回新对象，内部执行会以**子类**的`constructor`创建该对象，因此新返回的对象仍然是子类的实例，可以使用子类的方法。
```js
class Array1 extends Array{
    isEmpty(){
        return this.length === 0;
    }
}

let arr1Inst = new Array1(2,3,5,10,12);
arr1Inst.isEmpty(); // false -> arr1Inst.constructor === Array1

let filteredArr1Inst = arr1Inst.filter(i => i > 10);
console.log(filteredArr1Inst); // 12
filteredArr1Inst.isEmpty(); // false -> method 'isEmpty()' still works since the returned filteredArr1Inst is still an instance of Array1
```

+ 通过静态getter `Symbol.species`改变返回的新对象。在子类中设置`Symbol.species`静态方法，它返回的对象将被用于内置方法中创建新对象时的*构造原型*。
```js
class Array1 extends Array{
    isEmpty(){...}
    // built-in methods will use this as the constructor
    static get [Symbol.species](){
        return Array;
    }
}

let arr1Inst_1 = new Array1(2,1,4,45);
arr1Inst_1.isEmpty(); // false -> arr1Inst_1.constructor === Array1

let filteredArr1Inst_1 = arr1Inst_1.filter( i => i > 10);
filteredArr1Inst_1.isEmpty(); // Error: filteredArr1Inst_1.isEmpty is not a function
```

+ 内置类中不能继承**静态方法**。如`Array`和`Date`都继承自`Object`，他们的实例都拥有`Object.prototype`的方法，但`Array.[[Prototype]]`没有引用`Object`，因此没有`Array.keys()`等静态方法。
```js
Object[defineProperty, keys] ->(prototype) Object.prototype[constructor:Object;toString:function;hasOwnProperty:function]
                                                    | [[Prototype]]
Date[now, parse] ->(prototype) Date.prototype[constructor:Date;toString:function;getDate:function]
                                                    | [[Prototype]]
                                                new Date()
```

### 类检查`instanceof`
`instanceof`检查实例的原型链上是否有对应的类。也可以通过`Symbol.hasInstance`来定制相关的逻辑。
`obj instanceof Class`的内在逻辑是：
1. 如果类有静态方法`Symbol.hasInstance`，就会调用`Class[Symbol.hasInstance](obj)`，此方法应该返回true/false
```js
class Animal {
  static [Symbol.hasInstance](obj) {
    // if an object has a 'canEat' method, it IS an instance of Class Animal
    if (obj.canEat) return true;
  }
}
```
2. 大多数的类没有`Symbol.hasInstance`方法，此时会去检查`Class.prototype`是否出现在`obj`的原型链上
```js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
```
注：
+ `Class.prototype.isPrototypeOf(obj)`和`obj instanceof Class`用法相同
+ `Class`的constructor不参与类检查的过程，只有`Class.prototype`起作用

### 类和`toString`
`Object.prototype.toString.call(xx)`常用于检查某对象的构造类型，通过返回`[object Object/Function...]`等得到xx的构造函数名字。而`Symbol.toStringTag`则可用于定制`toString`的返回值。
```js
// set on individual object
let user = {
    [Symbol.toStringTag]:"User"
};
Object.prototype.toString.call(user);// [object User]

// set on class prototype
class Animal {}
let rabbit = new Animal();
Object.prototype.toString.call(rabbit);// [object Object]

Animal.prototype[Symbol.toStringTag] = "Animal";
Object.prototype.toString.call(rabbit);// [object Animal]
```

## Mixins
在JS中，类只能继承*一个*类/对象，`mixin`可以让类/对象拥有其他对象的方法，而无需继承其他对象。
实际上，`mixin`通过拷贝方法，把对象的方法拷贝到另一个对象/类上，如`Object.assign(User.prototype,sayHiMixin)`，即在`User.prototype`上得到从`sayHiMixin`上拷贝的方法。

`mixin`也能继承自另一个`mixin`，如：
```js
let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (or we could use Object.create to set the prototype here)

  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // 'super' here calls the method in the prototype of the mixin, i.e. sayMixin, not the prototype of the class
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // 
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```