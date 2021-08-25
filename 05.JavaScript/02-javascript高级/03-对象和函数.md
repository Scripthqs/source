# 对象和函数

在实际开发中，对象和函数往往是相辅相成的

## 1.对象的简介

对象是属性和方法的结合。对象的属性是函数时，称为方法。

## 2.创建对象

**1.对象字面量**

```js
	const obj1 = {}
	const obj2 = {
		name: 'a',
		age: 20,
		fun1: function(name){
			this.name = name
		}
	}
```

**2.工厂方法创建对象**

```js
	function createPerson(name,age,fun){
		const obj = new Object()
		obj.name = name
		obj.age = age
		obj.fun = function(){
			console.log(this.name)
		}
		return obj
	}
	const obj1 = createPerson('a',20)
	const obj2 = createPerson('b',22)	
```

把这个对象封装起来，每次使用类似的对象都使用这个工厂函数来创建。

**问题：**

1. 工厂模式无法解决对象的识别问题： 不知道对象是什么类型的。
2. 每个对象都是通过工厂造就的全新的对象，浪费内存

```js
    console.log(obj1.fun === obj2.fun)//false
```

**3.使用构造函数**

```js
    function Person (name, age) {
        this.name = name;
        this.age = age;
        this.say = function() {
            console.log(this.age);
        }
    }
    const per1 = new Person('a',20)
    const per2 = new Person('b',22)    
```

1. 没有明显的创建对象的过程： （`new Object()`的过程）
2. 直接将参数赋值给了 this（因为 没有创建明显的对象，就需要用 this 进行赋值）
3. 没有 return 
4. 构造函数的首字母大写

实例对象中会存在一个 constructor 属性，这个属性指向创造它的构造函数(沿着原型链找到的)

```js
    p1.constructor == Person;  // true
    p2.constructor == Person;  // true
```

**存在问题：**

构造函数的问题，浪费内存空间，所有的实例并不能使用同一个函数

```js
    console.log(per1.say === per2.say);//false
```

解决办法：

**使用原型对象来添加公用属性和方法，从而实现代码的复用**

```js
	Person.prototype.fun1 = function(){}
    console.log(per1.fun1 === per2.fun1)//true
```

**存在问题：**

1. 没有办法通过传入参数来初始化值

2. 如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

```js
    Person.prototype.x = []
    console.log(per1.x);
    per1.x.push('a')
    console.log(per1.x);//['a']
    console.log(per2.x);//['a']
```

## 3.函数

 函数也是对象，只有函数是可执行的, 其它类型的数据是不可执行的。

函数需要**数据+算法**才有意义。

1. 没有意义的函数，**没有输入，不会变化**，

```
var test = function( ){
    console.log("HelloWorld");
};
```

2. **通过传参改变数据**------普通的函数

```
var test = function(string){
    console.log(string);
};
test('HelloWorld');
```

3. **改变算法**——回调函数

## 4.创建函数

**1.函数声明**

```
    function fun1(a, b){
    	return a+b;
    }
```

**2.函数表达式**

```
	const fun2 = function(){
		console.log('hello world')
	}
```

**3.以构造函数的方式创建函数**(实际开发不会使用)

```js
	const fun = new Function();
	const fun3 = new Function('console.log(1+1)')
```

**函数的声明提前：**

**使用函数声明创建的函数**`function fun(){}`，会在所有的代码执行之前就被创建，**函数名称和函数体的提前**。

```js
	fn1()
	function fn1() {
		console.log('匿名声明定义的函数可以先调用再声明');
	}
```

## 5.函数的调用

1.   普通函数的调用fun() 
2.  通过构造函数来调用new fun()
3.  通过对象的方法来调用obj.fun()
4.   临时将一个函数作为指定对象的方法调用fun.call/apply(obj)

## 6.函数this

根据函数的**调用的方式不同**，this会指向不同的对象

- fun()	this永远都是window
- new fun()    this就是实例对象
- obj.fun()    this就是obj
- fun.call/apply(obj)  this就是call/apply后括号的obj

- 事件的响应函数，响应函数是给谁绑定的，this就是谁

  ```js
  btn.onclick = function () {
  	console.log(this)
  }
  ```

**this永远指向的是最后调用它的对象**

## 7.回调函数

**1. 什么函数才是回调函数?**

1.  你定义的
2.  你没有直接调用
3.   但最终它执行了(在特定条件或时刻)

**2. 常见的回调函数?**

1.  DOM事件函数
2.  定时器函数
3.  ajax回调函数(后面学)
4.  生命周期回调函数(后面学)

**在直接调用函数A()时，把另一个函数B()作为参数，传入函数A()里面，以此来通过函数A()间接调用函数B()。**

## 8.立即调用函数

全称: Immediately-Invoked Function Expression 立即调用函数表达式

 别名: 匿名函数自调用

```js
    (function () {
    	alert('哈哈')
    })()
```

**2. 作用**

- 隐藏内部实现

- 不污染外部命名空间
- 可以用来编写js模块

```
	window.$ = function(){
		return {
			test: test
		}
	}
```

