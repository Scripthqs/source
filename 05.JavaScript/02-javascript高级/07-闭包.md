# 闭包

## 1.闭包是什么

闭包可以是一种函数，闭包也是一种现象。

1. 函数：**闭包是指有权访问另一个函数作用域中变量的函数**

2. 现象：**一个内层函数中访问到其外层函数的作用域，就会产生闭包。**

闭包产生的条件：

- 函数嵌套
- 内部函数引用了外部函数的数据（变量/函数）
- **执行了外部函数，return或者调用内部函数**

通过chrome调试工具可以查看闭包

## 2. 常见的闭包

1. 将一个函数作为另一个函数的返回值

```js
        function fn1() {
            var a = 2
            function fn2() {
                a++
                console.log(a);
            }
            return fn2
        }
        var f = fn1()
        f()
```

2. 将函数作为实参传递给另一个函数

```js
        function showDelay(msg, time) {
            setTimeout(() => {
                alert(msg)
            }, time);
        }
        showDelay('hello world', 1000)
```

## 3.闭包的作用

闭包有两个常用的用途

1. 函数执行完后，延长变量的生命周期

2. 通过闭包让函数外部操作内部的数据变量

问题1：函数执行完后，内部声明的局部变量还存在吗？

- 在函数执行完后，函数内部的局部变量一般不会存在，除了闭包中的变量。

问题2：函数外部能直接访问函数内部的变量吗？

- 函数外部不能访问函数内部的局部变量，但可以通过闭包让外部来操作内部的局部变量。

## 4.闭包的产生和死亡

- 在嵌套内部函数时就产生了（不是调用？），不过我打开控制台事件觉得是**return或者调用内部函数**
- 在嵌套的内部函数成为垃圾对象时死亡 

```js
        function fn1() {
            var a = 2
            function fn2() {
                a++
                console.log(a);
            }
            return fn2//闭包产生
        }
        var f = fn1()
        f()
        f = null//闭包死亡
```

## 5.闭包的应用

定义JS模块

- 具有特定功能的JS文件
- 将所有数据和功能都封装到一个函数内部（私有的）
- 只向外暴露一个包含n个方法的对象和函数
- 模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能

如何向外暴露方法：通过return 或者在函数内部添加window的方法

方法1.**通过return **

```js
    function hqs(){
        var msg ='abcdeXYZ'
        function fn1() {
            console.log(msg.toUpperCase());
        }
        function fn2() {
            console.log(msg.toLowerCase());
        }
        return {
            fn1:fn1,
            fn2:fn2
        }
    }
//其他文件引入<script src="./module.js"></script>
        var hqs = hqs()
        hqs.fn1()
        hqs.fn2()
```

方法2：**添加为window的方法**

```js
	(function(w){
        var msg ='abcdeXYZ'
        function fn1() {
            console.log(msg.toUpperCase());
        }
        function fn2() {
            console.log(msg.toLowerCase());
        }
        w.hqs = {
            fn1:fn1,
            fn2:fn2
        }
    })(window)
//其他文件引入<script src="./module.js"></script>
        hqs.fn1()
        hqs.fn2()
```



## 5.闭包的的缺点

- 函数执行完后，函数内的局部变量没有释放，占用内存时间会变长。
- 要即使释放

```js
	f = null
```

## 6.内存溢出和内存泄漏

内存溢出：

- 当程序运行所需的内存超过了剩余的内存，就会抛出内存溢出错误

内存泄漏：

- 内存泄露指用不到（访问不到）的变量，依然占据这内存空间，不能被再次利用。
- 占用的内存没有及时释放
- 内存泄漏过多就会导致内存溢出

常见的内存泄漏：

1.**意外的全局变量：** 由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

```
	function fn(){
		a = 3//没有使用var/let/const定义变量，意外的全局变量
		console.log(a)
	}
	fn()
```

2.**被遗忘的计时器或回调函数：** 设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。

```
	var intervalId = setInterval(function() {
		console.log('------')
	},1000)
	//clearInterval(intervalId)
	//忘记取消定时器
```

3.**脱离 DOM 的引用：** 获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。

4.**闭包：** 不合理的使用闭包，从而导致某些变量一直被留在内存当中。

```
	function fn1(){
		var a = 4
		function fn2(){
			console.log(++a)
		}
		return fn2
	}
	var f = fn1()
	f()
	//f = null
	//如果不让f=null,则a会一直留在内存中
```

## 7.考察闭包

问题1：

```js
        var name = "the window"
        var object = {
            name: "my object",
            getNameFun: function () {
                return function () {
                    return this.name
                }
            }
        }
        alert(object.getNameFun()())//the window
```

分析：object.getNameFun是一个函数，object.getNameFun()调用这个函数，返回值也是一个函数，最后这个返回值（函数）直接调用，即这个函数直接调用。**这个getNameFun函数并没有闭包**

问题2：

```js
        var name = "the window"
        var object = {
            name: "my object",
            getNameFun: function () {
                that = this
                return function () {
                    return that.name
                }
            }
        }
        alert(object.getNameFun()())//my object
```

分析：**这个getNameFun函数中存在闭包，因为内部函数使用了that**

问题3：

```js
        function fun(n, o) {
            //var n=undefined
            //var o=undefined
            //1.n=0 (n=1 o=0) (n=2 o=0) (n=3 o=0)
            //2.n=0 (n=1 o=0) (n=2 o=0) (n=3 o=2)
            //3.n=0 (n=1,o=0) (n=2 o=1) (n=3 o=1)
            console.log(o);//1.undefined 0 0 0
            				//2.undefined 0 1 2
            				//3.undefined 0 1 
            return {
                fun: function (m) {
                    var m = undefined
                    //1.m=1 m=2 m=3
                    //2.m=1 m=2 m=3
                    //3.m=1 m=2 m=3
                    return fun(m, n);//1.fun(1,0) fun(2,0) fun(3,0)
                    				//2.fun(1,0) fun(2,1) fun(3,2)
                }					//3.fun(1,0) fun(2,1) fun(3,1)
            };
        }
        var a = fun(0); a.fun(1); a.fun(2); a.fun(3)//undefined 0 0 0
        var b = fun(0).fun(1).fun(2).fun(3);//undefined 0 1 2
        var c = fun(0).fun(1); c.fun(2); c.fun(3)//undefined 0 1 1
```

