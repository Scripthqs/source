# 数据类型检测

JavaScript有很多方法可以确定值到底是什么类型。

- typeof 运算符
- instanceof 运算符
- Object.prototype.toString 方法

## 1、typeof 运算符

`typepf`运算符可以返回一个值的数据类型。它会将该值的类型以字符串的形式返回。

````js
// 写法1
typeof 变量;

// 写法2
typeof(变量);
````

- 数值返回 `'number'`
- 字符串返回 `'string'`
- 布尔值返回 `'boolean'`
- 函数返回 `'function'`
- undefined返回 `'undefined'`
- null返回 `'object'` 特殊，因为在1995年时，没有考虑null，把null当作object的特殊值。

`typeof`可以用来检查一个没有声明的变量，而不报错。

````js
v
// ReferenceError: v is not defined
typeof v
// "undefined"
````

变量v没有用var命令声明，直接使用就会报错。但是，放在typeof后面，就不报错了，而是返回undefined。

**总结：**

- 可以判断数值、字符串、undefined、布尔值、function
- 不能判断null和object
- 不能判断object和array
- 使用typeof检查`array`会返回`object`而不是`array`
- 检查数组必须使用`instanceof`

## 2、instanceof 运算符

`instanceof`判断对象的具体类型，`instance`的含义是实例。

- A instanceof B
- 如果B函数的显式原型对象在A对象的原型链上，返回true，否则返回false。

## 3、===

`===` 可以判断undefined、null

数量类型判断不要使用`==`，因为它有可能会做数据类型转换。

