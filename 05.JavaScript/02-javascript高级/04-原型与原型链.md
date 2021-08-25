# 原型与原型链

## 1、构造函数

- 构造函数习惯**首字母大写**

- 构造函数内部使用**this对象**，来指向将要**生成的对象实例**。

- **使用new操作符来调用构造函数，并返回对象实例**

```js
	//构造函数和普通函数的创建方式一样，为了区分，首字母大写
	function Person(){
    //使用this对象，来指向将要生成的对象实例。
        this.name = 'Tom';
     }
	//构造函数需要使用new关键字调用，此时确定Person是构造函数
     var per = new Person();
	//创建的对象称该构造函数的实例
     console.log(per.name);    //'Tom'
	//per是Person类的实例,所以this指向per
     console.log(this.name);    //'Tom'
```

## 2.`prototype`

- 每一个**构造函数**都有一个**prototype**属性，这个属性就是对象实例的**原型对象**。

```
	Person.prototype是new Person的原型对象
	console.log(Person.prototype)
```

- 原型对象中有一个属性constructor，指向构造函数

```js
  console.log(Person.prototype.constructor === Person);
```

- 原型对象是一个属于其所在函数的空对象,可以通过它给函数添加属性和方法。

```js
        Person.prototype.test = 'hello world'
        Person.prototype.fun = function(){
            console.log('hello world');
        }
        console.log(per.test);
        per.fun()
```

**原型对象的作用，就是定义所有对象实例所共享的属性和方法。**

## 3.`__proto__`

每一个**构造函数**都有一个**prototype**属性，称为显式原型属性。

```js
	console.log(Person.prototype)
```

每一个**实例对象**都有一个`__proto__`属性，称为隐式原型属性。

```
	console.log(per.__proto__)
```

构造函数的显式原型的值 **===** 实例对象的隐式原型的值

```js
    Person.prototype === per.__proto__
```

所以

```js
    per.__proto__.test2 = 'aaa'
    console.log(per.test2);//'aaa'
```

原理：

创建Person函数时，

```
	function Person(){
		//相当于内部执行语句：this.prototype = {}
	}
```

调用构造函数时，

```js
	var per = new Person()
	相当于内部语句：this.__proto__ = Person.prototype
```

所以

```js
	Person.prototype === per.__proto__
```

![显示原型和隐式原型](D:\user\Desktop\scripthqs\note\material\js\显示原型和隐式原型.png)

## 4.原型链

为什么实例对象fn可以访问到构造函数Fun定义到原型对象的方法？

1. 访问一个对象的属性，先在自身寻找，找到返回

2. 找不到沿着`__proto__`这条链找，找到返回

3. 最终没找到，**返回undefined**

所以**原型链是隐式原型链**，作用：查找对象属性（方法）

<img src="D:\user\Desktop\scripthqs\note\material\js\原型链.png" alt="原型链" style="zoom:80%;" />

1. **构造函数的显示原型的值===实例对象的隐式原型的值**

```js
    Foo.prototype === f1.__proto__
    Objcet.prototype === o1.__proto__
```

2. 所有**原型对象和实例对象**都是**Object**的实例(**除Object的原型对象外，它是指向null**)

```js
	Function.prototype.__proto__ === o1.__proto__ === f1.__proto__.__proto__ === Object.prototype
	Function.prototype.__proto__ === Object.prototype
	Foo.prototype.__proto__ === Object.prototype//所有原型对象都是Object的实例对象
	Object.prototype.__proto__  === null//Object函数的原型对象是原型链的尽头
```

3. **所有的函数都是Function的实例**

```
	c.prototype === Function.__proto__//Function是new Function()产生的
    Function.prototype === Object.__proto__//Object也是new Function()产生的
    Function.prototype === Foo.__proto__//所有函数都是Function的实例对象
    Function.__proto__ ===  Object.__proto__ === Foo.__proto__ //所有函数的隐式原型的值都相等
    Function的实例对象和原型对象是同一个
```

4. **所有原型对象都有一个constructor属性，指向函数对象。**

```js
	Function.prototype.constructor = Function
	Object.prototype.constructor = Object
	Foo.prototype.constructor = Foo
```

- 由图可知，只要在Object原型对象添加方法，所有的构造函数和实例对象都能够访问。

```js
    	 function Person() {
            this.name = 'Tom';
        }
        var per = new Person();   
		Object.prototype.hqs = function(){
            console.log('原型链真简单');
        }
        per.hqs()
        Person.hqs()
        Function.hqs()
        Object.hqs()
```

## 5.原型继承

构造函数的实例对象自动拥有构造函数原型对象的属性（方法）。

- 原理：原型链

## 6.instanceof

- A instanceof B
- instance是实例的意思，判断A是否是B的实例，返回true，否则返回false。
- 如果B.prototype在A的原型链上，返回true，否则返回false。

手写instanceof

```js
        function myInstanceof(left, right) {
            let proto = Object.getPrototypeOf(left)
            let prototype = right.prototype
            while (true) {
                if (proto === null) {
                    return false
                }
                if (proto === prototype) {
                    return true
                }
                proto = Object.getPrototypeOf(proto)
            }
        }
```

`Object.getPrototypeOf()` 方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

**[语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/GetPrototypeOf#语法)**

```
Object.getPrototypeOf(object)
```

**参数**

- obj，要返回其原型的对象。

**返回值**

- 给定对象的原型。如果没有继承属性，则返回 [`null`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)

## 7.constructor

实例对象中会存在一个 constructor 属性，这个属性指向创造它的构造函数(沿着原型链找到的)，原型对象中也有一个constructor 属性，指向函数对象。

```js
    p1.constructor == Person;  // true，沿着原型链的
    p2.constructor == Person;  // true，实例对象上本身没有
	P1.__proto__.constructor === Person
	Person.prototype.constructor = Person
```

**constructor记录该对象引用了哪个构造函数**

很多时候，需要手动使用constructor属性指回原来的构造函数

```js
    //将原型对象赋值为一个对象，则需要手动设置constructor
	Person.prototype = {
        constructor: Person,//使用constructor属性指回原来的构造函数
        fun1: function () {
        	console.log('fun1');
        },
        fun2: function () {
        	console.log('fun2');
        }
    }
    console.log(Person.prototype.constructor);//Person
    console.log(Person.prototype.constructor);//如果不使用constructor属性，指向Object
```

`constructor`有两个作用

1. 判断数据的类型，

2. 对象实例通过 `constrcutor` 对象访问它的构造函数。

```js
    console.log((2).constructor === Number); // true
    console.log((true).constructor === Boolean); // true
    console.log(('str').constructor === String); // true
    console.log(([]).constructor === Array); // true
    console.log((function() {}).constructor === Function); // true
    console.log(({}).constructor === Object); // true
```

需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了

```js
    function Fn(){};
    Fn.prototype = new Array();
    var f = new Fn();
    console.log(f.constructor===Fn);    // false
    console.log(f.constructor===Array); // true
```

## 8.Object.prototype.toString.call()

`Object.prototype.toString.call()` 使用 Object 对象的原型方法 toString 来判断数据类型：

```js
    var a = Object.prototype.toString;

    console.log(a.call(2));//[object Number]
    console.log(a.call(true));//[object Boolean]
    console.log(a.call('str'));//[object String]
    console.log(a.call([]));//[object Array]
    console.log(a.call(function(){}));//[object Function]
    console.log(a.call({}));//[object Object]
    console.log(a.call(undefined));//[object Undefined]
    console.log(a.call(null));//[object Null]
  	console.log(a.call(/\d/));//[object RegExp]
```

RegExp、Array、function等**类型作为Object的实例，都重写了toString方法**

## 9.hasOwnProperty()

使用`hasOwnProperty()`方法来判断属性是否属于原型链的属性：

```
function iterate(obj){
   var res=[];
   for(var key in obj){
        if(obj.hasOwnProperty(key))
           res.push(key+': '+obj[key]);
   }
   return res;
} 
```

