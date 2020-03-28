`Function.prototype.call()`，`Function.prototype.apply()`和`Function.prototype.bind()`一直是初学者的难点，在查阅了MDN文档之后，这里记下几个好用的小技巧。

## Function.prototype.apply()

1. 类似于`concat()`，用于把一个数组添加到另一个数组后面
与`concat()`不同的是，`concat()`会返回新的数组，`apply()`会修改原来数组(是因为push()会修改原数组)
```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

2. 可使某些内置的函数接收数组，如`Math.max/Math.min`
```js
let nums = [2,34,56,7,90];

let max = Math.max.apply(null,nums); 
//这样可以避免把所有nums里的数字再一次写上，否则
// Math.max(2,34,56,7,90)

//也不需要用for...loop
/* max = -Infinity, min = +Infinity;
*
*  for (var i = 0; i < numbers.length; i++) {
*   if (numbers[i] > max) {
*     max = numbers[i];
*   }
*   if (numbers[i] < min) {
*     min = numbers[i];
*   }
*  }
*/
```

3. 当arguments长度很大时，可用apply()把arguments分为几大块

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i+QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```