# 箭头函数

## 1.箭头函数的用法

ES6 允许使用「箭头」（=>）定义函数。

```js
        var fn = function (arg1, arg2, arg3) {
            return arg1 + arg2 + arg3;
        }//ES5写法
        let fn1 = (arg1, arg2, arg3) => {
            return arg1 + arg2 + arg3;
        }//1.箭头函数通用写法
        console.log(fn(1, 2, 3))
        console.log(fn1(1, 2, 3));
```

箭头函数的注意点: 

1) 如果形参只有一个，则小括号可以省略
2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的 执行结果 
3) 箭头函数 **this 指向声明时所在作用域下 this 的值** (**静态的**)
4) 箭头函数**不能作为构造函数**实例化 
5) **不能使用 arguments**

```js
        //2. 省略小括号的情况
        let fn2 = num => {
            return num * 10;
        }
        console.log(fn2(10));

		//3. 省略花括号的情况
		let fn3 = score => score * 20;
```

## 2.箭头函数的this

注意：箭头函数不会更改 this 指向

```js
        window.msg = 'hello'
        const obj = {
            msg: 'world'
        }
        function fun1() {
            console.log(this.msg);
        }
        let fun2 = () => {
            console.log(this.msg);
        }
        fun1()//hello
        fun2()//hello
        fun1.call(obj)//world
        fun2.call(obj)//hello
```

箭头函数的this是静态的，用来**指定回调函数**会非常合适

```js
        ad.onclick = function () {
            	_this = this
            setTimeout(function () {
                console.log(this);//this指向window
                _this.style.background = "blue"
            }, 1000)
        }

        ad.onclick = function () {
            setTimeout(() => {
                console.log(this);//this指向ad
                this.style.background = "blue"
            }, 1000)
        }
```

箭头函数 **this 指向声明时所在作用域下 this 的值**

## 3.箭头函数场景

```js
        const arr = [1, 2, 3, 4, 5]
        const res = arr.filter(function (item) {
            return (item % 2 == 0)
        })
        console.log(res);
        const res1 = arr.filter(item => item % 2)
        console.log(res);
```

箭头函数**适合**与this无关的回调，**定时器，数组的方法回调**

箭头函数**不适合**与this有关的回调，**事件回调，对象的方法**

