## 原型继承

### `[[Prototype]]`
JS中对象有个隐藏的属性`[[Prototype]]`，此属性指向`null`或者其他对象，这个被指向的对象就称为*原型*。这个`[[Prototype]]`属性是内部拥有并且是隐藏的，但可以通过**1)**`__proto__`或**2)**`Object.getPrototypeOf/Object.setPrototypeOf`获取和设置。

+ `__proto__`是历史遗留的`[[Prototype]]`的getter/setter，文档规定`__proto__`只能由浏览器支持，但实际上很多环境包括服务端也支持。

+ 原型的值只能是指向`null`或者其他对象，其他类型会被忽略。
+ 每个对象只能指向**一个**原型，不能继承自多个对象

**for...in loop**会循环原型上的属性，如果要排除继承的属性，可以通过`obj.hasOwnProperty(key)`来过滤。