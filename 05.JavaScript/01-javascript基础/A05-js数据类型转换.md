# 数据类型转换

使用表单、prompt获取过来的数据默认是字符串类型的，此时就不能直接简单的进行加法运算，而需要转换变量的数据类型。

**通常会实现3种方式的转换**：

- 转换成字符串类型String 
- 转换成数字型Number
- 转换成布尔型Boolean

**转换的方式有2种**：

- 强制的类型转换
- 隐式类型转换

在谷歌浏览器控制台中，不同的数据类型颜色不一样

```js
console.log(18); //数字型是蓝色
console.log('18'); //字符串黑色
console.log(true); //布尔是深蓝
console.log('true'); //字符串黑色
console.log(undefined); // 浅灰
console.log(null);//浅灰
```

## 1、String类型转换

### 1.1、toString()方法

调用被转换数据类型的toString()方法。

- 该方法不会影响原变量，它会将转换的结果返回

- 调用xxx的yyy方法，就是xxx.yyy

- ```css
  	var a = a.toString();
  ```

- 注意：null和undefined两者值没有toString()方法。

### 1.2、String()函数

调用String()函数，并将转换的数据作为参数传递给函数。

- 调用xxx函数，就是xxx();

- ```js
  	var a = String(a);
  ```

- 使用String()函数做强制转换时，对于Number和Boolean实际上就是调用的toString()方法，对于Null和Undefined则是直接转换成"Null"和"Undefined"

### 1.3、隐式转换之’+‘拼接

任意数据类型和String`+`时，结果会变成字符串拼接。

- ```
  var a = a + ''
  ```

- 加上一个空字符串`''`，即可将a转换成字符串，这个方法等价于`var a = String(a);`

## 2、Number类型转换

### 2.1、Number()函数

调用Number()函数，并将转换的数据作为参数传递给函数。

- ```js
  var b = Number(b);
  ```

- 纯数字字符串转换成数字

- 含有非数字内容转换成NaN

- 空串和全空格转换成0

- 布尔值true转换成1，false转换成0

- null转换成0，undefined转换成NaN

### 2.2、parseInt()函数

parseInt()将一个字符串转换成整数，专门处理字符串

- 可以将一个字符串的有效整数取出来

- ```js
  var c = parseInt(c);
  var num = parseInt(120px);
  ```

### 2.3、parseFloat()函数

parseFloat()将一个字符串转换成小数

- 可以将一个字符串的有效小数取出来，专门处理字符串

- ```js
  var c = parseFloat(1.234);
  ```

- parseInt()和parseFloat()会将非字符串会先转换字符串再操作

### 2.4、隐式转换之‘- * /’

任意数据类型和Number`-` 、`*`、`/`都会转换成Number。

```js
var b = b - 0
var b = b * 1
var b = b / 1
```

更简单的写法 

```js
var b = +b
```

## 3、Boolean类型转换

### 3.1、Boolean()函数

使用Boolean()函数，并将转换的数据类型作为参数传递给函数。

- ```js
  var d = Boolean(d);
  ```

- Number类型中，除了0和NaN，其余的都是true

- String中，除了空串`''`，其余的都是true

- null和undefined都会转换成false

- 对象也会转换成true

### 3.2、隐式转换之’!'运算

任意数据类型做两次非运算即可转换成Boolean

```js
var c = !!c
```

以下几个值转换成布尔值时为false，其他都是true

- undefined
- null
- false
- 0
- NaN
- ""或'' 空字符串

注意：空数组（[]）和空对象（{}）对应的布尔值，都是true。

