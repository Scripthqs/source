# JS高级知识和ES6+

## JS基础总结深入

### 数据类型

数据类型的分类：

- 基本（值）数据类型
  - String Number Boolean Null Undefined
- 对象（引用）数据类型
  - Object

Function：特殊的对象，可以执行。
Array：特殊的对象，数值下标，内部数据有序。

数据类型的判断：

- `typeof` 可以判断数值、字符串、undefined、布尔值，不能判断null
- `instanceof`判断对象的具体类型，`instance`的含义是实例
- `===` 可以判断undefined、null
  
数量类型判断不要使用`==`，因为它有可能会做数据类型转换。

## let和const

- `var`
- `let` 变量
- `const` 常量
