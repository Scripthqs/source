# 数值扩展

## 1 js最小精度

Number.EPSILON是js表示的最小精度

```js
console.log(Number.EPSILON)//2.220446049250313e-16
```

当两个数的差值小于Number.EPSILON，就认为这两个数是相等的

```js
if(a - b < Number.EPSILON) return true
```

## 2 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。

```js
    console.log(0b100)//4
    console.log(0o10)//8
    console.log(0xff)//255
```

## 3 Number.isFinite() 

Number.isFinite() 用来检查一个数值是否为有限的

```js
    console.log(Number.isFinite(100))//true
    console.log(Number.isFinite(NaN))//false
    console.log(Number.isFinite(Infinity))//false
    console.log(Number.isFinite(100/0))//false
```

## 4 Number.isNaN()

Number.isNaN() 用来检查一个值是否为 NaN

```js
    console.log(Number.isNaN(100))//false
    console.log(Number.isNaN(NaN))//true
```

## 5 Number.parseInt() 

Number.parseInt() 将字符串转整数

```
Number.parseInt('100px') 
```

## 6 Number.parseFloat()

Number.parseFloat()将字符串转小数

```
Number.parseInt('100.2m') 
```

## 7 Number.isInteger

Number.isInteger() 用来判断一个数值是否为整数

## 8 Math.trunc

Math.trunc用于去除一个数的小数部分，返回整数部分

```
Math.trunc(100.5446)
```

## 9 Math.sign

Math.sign判断一个数是整数 负数还是零

```
    console.log(Math.sign(100))//1
    console.log(Math.sign(0))//0
    console.log(Math.sign(-100))//-1
    console.log(Math.sign(-0))//-0
    console.log(Math.sign(+0))//0
    console.log(Math.sign(NaN))//NaN
```

