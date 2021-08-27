# 对象的简写

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这 样的书写更加简洁。

```js
        let msg = 'hello'
        let fun = function () {
            console.log("函数fun");
        }
        const obj = {
            msg: msg,//ES5写法
            fun,//ES6简写
            fun1: function () {
                console.log("对象中的函数fun1");//ES5写法
            },
            fun2() {
                console.log("对象中的函数fun2,简写形式");//ES6写法
            }
        }
```

**注意：对象简写形式简化了代码，所以以后用简写就对了**

