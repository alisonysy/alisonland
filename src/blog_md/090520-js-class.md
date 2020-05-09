`class User{...}`实际上做了2件事：
1. 创建一个名为`User`的函数，作为类声明的结果。函数体就是类里`constructor`的方法
2. 把类的方法，保存在`User.prototype`里

使用类和函数创建构造函数的区别：
1. 由`class`创建的函数有一个特殊的内部属性`[[FunctionKind]]:"classConstructor"`，使用的时候必须通过`new`调用，否则会报错
2. 类方法是不能枚举的，但函数原型上的方法可以通过`for...in`枚举