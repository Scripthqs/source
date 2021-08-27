# 变量、内存、数据

## 1、变量

变量：程序向内存申请的一块可以存储数据的空间

- JS中，所有的变量都保存在**栈内存**中的。
- 变量需要的声明和赋值
- 变量名：查找对应的内存
- 变量值：内存中保存的数据

## 2、内存

内存：内存条通电后产生的可存储数据的临时空间

- 内存分为栈内存和堆内存
- 基本数据类型的值，直接保存在**栈内存**中。
- 对象数据类型的值保存在**堆内存**中的，而对象的引用（即变量）是保存在**栈内存中**的。

内存的产生和死亡：

- 内存条是电子元器件组成的电路板
- 内存的产生：内存条->通电->产生内存空间—>存储数据->处理数据
- 内存的死亡：断电->内存空间消失，数据同时消失

内存是**临时存储**空间，硬盘是永久存储空间。内存速度快，硬盘慢。

## 3、数据

数据：存储在内存中的信息，本质是010101····

- 在计算机中，不同的数据所需的存储空间不同，为了充分利用存储空间，就定义了不同的数据类型
- JS将数据分为**基本数据类型和引用（对象）数据类型**两大类
- 数据可传递、可运算

## 4、栈内存和堆内存

**JS中，所有的变量都保存在栈内存中的**。

### 4.1、基本数据类型

基本数据类型的值，直接保存在**栈内存**中。值和值相互独立，修改一个变量不会影响其他变量。

### 4.2、引用数据类型

对象是保存在**堆内存**中的，每创建一个新的对象，就会在堆内存中开辟一个新的空间；而变量保存了对象的内存地址（对象的引用），保存在栈内存中。如果两个变量保存了同一对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。

- **对象的值是保存在堆内存中的，而对象的引用（即变量）是保存在栈内存中的**。

## 5、联系

### 5.1、对象是变量吗？

当然不是，对象是数据类型，变量是内存的标识，通过变量才可以使用内存，不可以直接说对象是变量。

### 5.2、obj.name

`obj.name`其中的`.`的含义是沿着地址找到内容，只有地址数据才能`.`

### 5.3、var a = xxx

- xxx是基本数据类型，保存的就是这个数据
- xxx是引用数据类型，保存的就是对象的地址值
- xxx是变量，保存的是xxx的内存内容，可能是基本数据，也可能是地址值。

**总结：简单类型赋值是 传值 ， 复杂类型赋值是 传址。**

## 6、赋值、浅拷贝和深拷贝

### 6.1.赋值

赋值是将某一数值或对象赋给某个变量的过程

- 基本数据类型：赋值，赋值之后两个变量互不影响
- 引用数据类型：赋**址**，两个变量具有相同的引用，指向同一个对象，相互之间有影响
- 改变变量 obj2 之后会影响到变量 obj1

```js
        let obj1 = {
            name: 'a',
            fun: function () {
                this.name = 'c'
            }
        }
        let obj2 = obj1
        obj2.name = 'b'
        obj2.fun()
        console.log(obj1.name);//'c'
        console.log(obj2.name);//'c'
        console.log(obj1 === obj2);//true
```

### 6.2 浅拷贝

1. 一个对象obj1有基本类型属性a和引用类型属性f
2. 创建一个新对象obj2，这个浅拷贝对象obj2的基本类型a,b和obj1是不同属性，互不影响。
3. 浅拷贝obj2引用类型 f和obj1.f仍然是同一个，改变之后会对另一个对象产生影响。

**(1) 用for...in 实现浅拷贝**

```js
        const obj1 = {
            a: 1,
            b: '2',
            f: {
                name: 'hello'
            }
        };
        var obj2 = {};
        for (let key in obj1) {
            obj2[key] = obj1[key];
        }
        console.log(obj1);
        console.log(obj2);
        console.log(obj1 === obj2);//false，
        obj1.f.name = 'world'
```

在 obj2 中， a 和 b 这两个属性会单独存放在新的内存地址中，和 obj1 没有关系，但是 obj2.f 属性还是和 obj1.f 指向同一个堆内存地址，修改一个会影响另一个。

**(2).Object.assign() 方法(推荐)**

Object.assgin()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```js
	Object.assign(target, ...sources)
	Object.assign(目标对象, 源对象1, 源对象2...)
```

如果多个源对象里的属性名相同，会被覆盖

```js
        const obj3 = Object.assign({}, obj1)
        console.log(obj3);
        const obj4 = Object.assign({}, obj1)
        console.log(obj3 === obj4)//false
        const obj51 = {};
        const obj52 = Object.assign(obj51, obj1);
        console.log(obj51 === obj52)//true
```

**(3)展开语法**

```js
        let obj6 = { ...obj1 }
        console.log(obj6);
```

实际效果和 `Object.assign()` 是一样的

### 6.3.深拷贝

1. 一个对象obj1有基本类型属性a和引用类型属性f
2. 创建一个新对象obj2，这个深拷贝对象obj2的所有基本属性和引用属性都一样
3. 两个对象相互不会影响

深拷贝其实就是将浅拷贝进行递归。

**（1）用 for in 递归实现深拷贝**

````js
        function deepCopy(newObj, oldObj) {
            for (let key in oldObj) {
                if (oldObj[key] instanceof Array) {
                    newObj[key] = [];
                    deepCopy(newObj[key], oldObj[key]);
                } else if (oldObj[key] instanceof Object) {
                    newObj[key] = {};
                    deepCopy(newObj[key], oldObj[key]);
                } else {
                    newObj[key] = oldObj[key];
                }
            }
        }
````

**（2）JSON.parse(  JSON.stringify()  )** 

先将需要拷贝的对象进行JSON字符串化，然后再paser解析出来，赋给另一个变量，实现深拷贝。

1、会忽略 `undefined`

2、会忽略 `symbol`

3、不能序列化函数

4、不能解决循环引用的对象

5、不能正确处理`new Date()`

6、不能处理正则
