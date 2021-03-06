# 位运算符(Bitwise operators)
作为底层运算的位运算符比普通运算**更快**。
ECMAScript规定所有数字都以64位的形式储存，但位运算符不直接作用于64位的数字。此时，64位数字先转换成32位的整数，然后与位运算符操作，之后再转换回64位。
**带符号位的整数**(signed integers)使用前31位去表达整数的数值，第32位表达整数的符号：0为正，1为负。要注意的是，有符号数在表示同一数值但不同符号的整数时，采用的是**补码**(two's complement)的方式：

1. 计算出*绝对*数值的二进制表示
2. 找出每个数字的补数，即所有的0转为1，所有的1转为0
3. 整个数+1

Note: ECMAScript在输出负号的二进制数时，返回的是带有负号的绝对值的二进制表达式。

而**无符号位的整数**(unsigned integers)中，因为它们都是正数，第32位不代表符号，因此无符号位整数能表示更大一些的数字。

Note: 在与位运算符操作中，NaN和Infinity都被当做是**0**。

### Not (~)
返回一个数的反码，相当于：一个数的相反数-1

### And (&)
操作两个数字，根据真值表返回：
| 第一个数字的位 | 第二个数字的位 | 结果 |
| ------------- | ------------- | ---- |
| 1 | 1 | 1 |
| 1 | 0 | 0 |
| 0 | 0 | 0 |
| 0 | 0 | 0 |

例子：
```js
var re = 25 & 3;
console.log(re) //1

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001
// 3 = 0000 0000 0000 0000 0000 0000 0000 0011
// ---------------------------------------------
// AND = 0000 0000 0000 0000 0000 0000 0000 0001
```

### Or (|)
只要有1个数字为1时，结果即为1

### XOr (^)
两个数字同为1或同为0时结果为0，两个数字不同时结果为1

