# call、apply、bind

## 1.call()

call()是函数对象的方法，需要通过函数对象来调用。

函数调用call()时，函数会立即**执行**

```js
	func.call(参数1[, 参数2[, 参数3[, ...]]])
```

- 可以用来改变函数的this对象的指向。

- 第一个参数都是this要指向的对象（函数执行时，this将指向这个对象）
- 后续参数用来传实参

**显式绑定this**

JS提供的绝大多数函数以及我们自己创建的所有函数，都可以使用call()方法。

- 第一个参数是一个对象。因为你可以直接指定 this 绑定的对象，因此我们称之为显式绑定。

```
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    // 将 this 指向 obj
    foo.apply(obj); //打印结果：2
```

**第一个参数的传递**

1、参数1不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。

2、传递一个别的函数名时，函数中的this将指向这个**函数的引用**。

3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。

4、传递一个对象时，函数中的this则指向传递的这个对象。

## 2.apply()

call()方法的作用和 apply() 方法类似，区别就是`call()`方法接受的是**参数列表**，而`apply()`方法接受的是**一个参数数组**。

语法：

```
	func.apply(参数1, [参数2,参数3,参数n])
```

call()和 apply() 都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个**数组**中统一传递（即使只有实参只有一个，也要放到数组中）。

**call()和apply()的作用**

- 改变this的指向
- 实现继承。Father.call(this)

## 3.bind()

- 都能改变this的指向
- call()/apply()是**立即调用函数**
- bind()是将函数返回，因此后面还需要加`()`才能调用。

bind()传参的方式与call()相同。

```
	func.bind(参数1[, 参数2[, 参数3[, ...]]])
```

## 4.区别

```js
    const per1 = {
      name: 'hello',
      age: 20,
      fun(...args) {
        console.log(`姓名:${this.name},年龄:${this.age},参数:${args}`);
      }
    }
    const per2 = {
      name: 'world',
      age: 21
    }
    per1.fun()
    per1.fun.call(per2, 1, 2, 3, 'call')
    per1.fun.apply(per2, [1, 2, 3, 'apply'])//参数只能是数组
    per1.fun.bind(per2, 1, 2, 3, 'bind')()//是函数，需要调用
```

- call() 第一个参数：借用方法的对象  ，可以传递多个参数
- apply() 第一个参数：借用方法的对象  ，允许传递第二参数必须是数组
- bind()  第一个参数：借用方法的对象  ，可以传递多个参数，但是返回值是函数必须调用

## 5.应用

**1.将伪数组转换成真数组**

伪数组：具备length属性，但是不能使用真数组的方法。

常见的伪数组：

- document.querySelectorAll
- document.getElementsByClassName
- document.getElementsByTagName

- arguments

```js
    function fun() {
      console.log(arguments);
      // arguments.push('a')报错
      arguments = Array.prototype.slice.call(arguments, 0)
      console.log(arguments);
      arguments.push('a')//可以成功添加
      console.log(arguments);
    }
    fun(1, 2, 3)
```

**2.无侵入无序数组求最大值**

```js
    const arr = [1, 23, 4, 3, 254, 45, 125, 6, 123]
    let res1 = Math.max.apply(null, arr)
    let res2 = Math.max.call(null, ...arr)
    console.log(res1);
    console.log(res2);
```

**3.实现继承**

```js
    function Father(name, age) {
      this.name = name
      this.age = age
    }
    function Son(name, age, height) {
      Father.call(this, name, age)//相当于：this.Father(name,age)
      this.height = height
    }
    var s = new Son('hello', 20, 1.81)
    console.log(s.name, s.age, s.height);
```

## 6.手写

call()的手写：

```js
    Function.prototype.myCall = function (obj, ...args) {
      // 判断 context 是否传入，如果未传入则设置为 window
      obj = obj || window
      //新建一个唯一的Symbol变量避免重复,作为obj的属性
      const key = Symbol()
      // this是调用myCall的函数，将this赋值成obj对象的方法
      obj[key] = this
      //以对象调用形式调用这个方法
      obj[key](...args)
      //删除该方法，不然会对传入对象造成污染（添加该方法）
      delete obj[key]
    }
```

apply的手写：

```js
 Function.prototype.myApply = function (obj, args = []) {
      // 判断 context 是否传入，如果未传入则设置为 window
      obj = obj || window
      //新建一个唯一的Symbol变量避免重复,作为obj的属性
      const key = Symbol()
      // this是调用myCall的函数，将this赋值成obj对象的方法
      obj[key] = this
      //判断传入的参数是否是数组
      if (!Array.isArray(args)) {
        console.error('第二个参数必须传数组');
      } else {
        obj[key](...args)
      }
      //删除该方法，不然会对传入对象造成污染（添加该方法）
      delete obj[key]
    }
```

bind的手写：

```js
    Function.prototype.myBind = function (obj, ...args) {
      let _this = this
      return function () {
        let newArgs = args.concat(...arguments)
        _this.myCall(obj, newArgs)//手写myCall的基础上
      }
    }
```

