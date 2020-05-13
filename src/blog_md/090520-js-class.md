`class User{...}`实际上做了2件事：
1. 创建一个名为`User`的函数，作为类声明的结果。函数体就是类里`constructor`的方法
2. 把类的方法，保存在`User.prototype`里

使用类和函数创建构造函数的区别：
1. 由`class`创建的函数有一个特殊的内部属性`[[FunctionKind]]:"classConstructor"`，使用的时候必须通过`new`调用，否则会报错
2. 类方法是不能枚举的，但函数原型上的方法可以通过`for...in`枚举

### `extends`关键词
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

### 类的静态方法和静态属性
静态方法用于应用于整个类的功能，而不针对某一个实例，如*对比两个实例*，有别于正常创建实例的*工厂函数*；同理，静态属性用于储存应用于整个类的数据。
继承父类的子类也能继承静态方法，如`A extends B`可通过`A.staticMethod`获取`B.staticMethod`。
