# ES6语法

## ECMAScript简介

ES全称ECMAScript是JS语言的标准，ES6是 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。之后每一年发布一个标准。2020年已经是ES11版了。

1. ES6具有里程碑意义，版本变动内容最多
2. ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等

## Let和const

var的设计可以看作成JavaScript语言设计的缺陷。使用let替代var可以解决没有块级作用域的问题

### let声明变量

- let变量不能重复声明
- 有块级作用域，块级作用域`{}`里面声明的变量不会被外面访问
- 不存在变量提升
- 不影响作用域链

### const声明常量

- 一定要赋初值
- 常量的值不能修改
- 一般常量使用大写
- 块级作用域里面声明的变量不会被外面访问
- 对于数组和对象中的元素修改，不算对常量的修改，不会报错
- 使用const声明数组和对象比较稳妥，考虑优先使用

## 变量结构赋值

解构赋值：ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值。

- `let[a,b,c] = [1,2,3]`
- 数组的解构
- 对象的解构

## 模板字符串

ES6引入新的声明字符串的方式，使用反引号

- 内容中可以出现换行符
- 变量拼接`${变量}`

## ES6对象简化写法

ES6允许在大括号里面，直接填入变量和函数，作为对象的属性和方法。

## 箭头函数

ES6允许使用=>代替关键字function来定义函数

- `let fun = function(a,b){}`
- `let fun = (a,b) =>{}`

1. 箭头函数中，this是静态的，始终指向函数声明时所在作用域下的this值
2. 不能作为构造函数实例化对象
3. 不能使用arguments
4. 箭头函数的简写
   - 省略小括号，当形参有且只有一个参数时
   - 省略花括号，当代码体只有一条语句时，此时return必须省略，并且语句执行的结果就是返回值

### 箭头函数的应用

- 箭头函数适合与this无关的回调，定时器，数组的方法回调
- 不适合于this有关的回调，事件回调，对象的方法。
- 将一个函数作为参数传入另一个函数时，箭头函数使用最多
- 箭头函数中的this引用的是最近作用域中的this

## ES6函数参数的默认值

ES6允许给函数参数赋值初始值

- 设置形参的初始值，具有默认值的参数，一般位置要靠后
- 可以于解构赋值结合

## rest参数

- ES6引入rest参数，用于获取函数的实参，用于代替arguments
- arguments返回对象，rest返回数组
- rest参数必须放在参数最后

## 扩展运算符

- `...`扩展运算符能将数组转换成逗号分隔的参数序列
- 可以放在函数实参的位置，放在形参的位置是rest参数
- 可以用作数组的合并
- 可变参数`fun(...num)`此时可以传多个num值
- 拷贝数组，是浅拷贝
- 将伪数组转化成真正的数组
- `...argument = rest`

## Symbol

- `let s = Symbol()`可以传入一个字符串作为标志
- `let s = Symbol.for()`
- ES6中引入一种新的原始数据类型，表示独一无二的值，是第7中数据类型，类似于字符串的数据类型

特点：

- Symbol的值是唯一的，用来解决命名冲突的问题
- Symbol的值不能与其他数据进行运算
- Symbol定义的对象属性不能使用for...in 循环遍历，但是可以用`Reflect.ownKeys`俩获取对象所有的键名

### 对象添加属性和方法

- `obj[methods.up] = function(){}`
- `[Symbol('a')]: function(){}`

### Symbol的内置属性

除了定义自己使用的Symbol值外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。

- Symbol这个对象有11个内置属性，这个整体再作为对象的属性

## 迭代器

### 迭代器的介绍

迭代器(iterator)是一种接口，为各种不同的数据结构提供统一的访问机制，任何数据只有部署了iterator接口就可以完成遍历操作。

- iterator接口就是对象的一个属性，Symbol.iterator
- ES6创建了一种新的遍历的命令for...of循环(保存键值)，部署了iterator接口就可以使用
- 原生具备iterator接口的数据有：
  - Array
  - Arguments
  - Set
  - Map
  - String
  - TypedArray
  - NodeList

原理：

- 创建一个指针对象，指向当前数据结构的起始位置
- 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
- 接下来每调用一次next方法，指针就会向后移动，直到指向最后一个成员
- 每调用next方法返回一个包含value和done属性的对象

需要自定义遍历数据的时候，想到迭代器。

### 迭代器的应用

````js
[Symbol.iterator](){
                let index = 0
                // let _this = this;
                return {
                    next: () =>{
                        if(index < this.s.length){
                            const result = { value: this.s[index],done: false}
                            index++
                            return result
                        }else{
                            return {value: undefined, done:true}
                        }
                    }
                }
            }
````

## 生成器

生成器函数是ES6提供的一种异步编程方案，语法行为与传统函数完全不同。

这个函数的目的是为了实现异步编程

之前实现异步编程都是使用纯回调函数

- 定于生成器函数
  - `function * gen(){}`
- 执行函数
  - `gen().next()`
- `yield '迭代器的value值'`

### 生成器函数的参数传递

## promise

promise是ES6引入的异步编程的新解决方案。

- async：异步
- sync：同步

### 异步事件的应用场景

一个很常用的场景就是网络请求，封装一个网络请求函数，因为不能立即拿到结果，所以我们往往会传入另一个函数，在数据请求成功时，将数据通过传入的函数调回去。一个简单的网络请求时，这方案问题不大，当网络请求复杂时，就会出现回调地狱。

有异步操作时，使用promise对异步操作进行包装。

在new Promise()时，会传入两个参数，resolve和reject，resovle和reject本身也是函数。

### Promise的三种状态

异步操作之后会出现3中状态：

- pending：等待状态，比如正在进行网络请求，或者定时器没有到时间
- fulfill：满足状态，当我们主动回调resolve时，就处于该状态，并且会回调.then()
- reject：拒绝状态，当我们主动回调reject时，就处于该状态，并且会回调.catch()

- `async->promise->pending->fulfill/reject->then()/catch()`
- .then(函数1,函数2)，可以传两个参数，一个成功一个失败

### Promise链式调用

new Promise((resolve() =>{resolve(data)}))可以简写成Promise.resolve(data)可以简写为return data

### Promise的all方法

- `Promise.all([promise1, promise2, promise3]).then().catch()`

## Object.defineProperty方法

Object.defineProperty(对象,'属性age',{各种属性})，可传的常用属性有：

- `value: 18`
- `enumerable: true`//控制属性是否可以被枚举，默认值是false
- `writable: true,`//控制属性是否可以被修改，默认值是false
- `configurable: true`//控制属性是否可以被删除，默认值是false
- `get()`：当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值
- `set(value)`：当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值

枚举对象中属性的方法：

- `console.log(Object.keys(person));`
- `for(let key in person){console.log(person[key]);}`
