# JSON

## 1、json简介

JSON(JavaScript Object Notation)JS对象表示法。

- JS中的对象只有JS自己认识，其他语言不认识。
- JSON就是一个特殊格式的字符串，这个字符串可以被任意语言所识别。
- 并且可以转换为任意语言中的对象。
- JSON在开发中主要用来数据的交互。
- JSON和对象的格式一样，不过JSON字符串中的属性名必须加双引号。

## 2、json分类

- 对象{}，不能使函数对象
- 数组[]

JSON中允许的值：

- 字符串
- 数值
- 布尔值
- null
- 对象
- 数组

## 3、json转换

将JSON字符串转换成JS中的对象

- 在JS中提供了一个工具类，叫做JSON。
- 这个对象可以将JSON和JS对象相互转换。
- `JSON.parse()`
  - 可以将JSON字符串转换成JS对象。
  - 需要一个JSON字符串作为参数，会将该JSON字符串装换成对象。
- `JSONstringify()`
  - 可以将一个JS对象转换成JSON字符串。
  - 需要一个JS对象作为参数，会返回一个JSON字符串。