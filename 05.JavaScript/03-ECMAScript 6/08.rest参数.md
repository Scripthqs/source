# rest 参数

ES6 引入 rest 参数，

- 用于获取函数的实参，用来**代替 arguments**

- rest 参数**必须是最后一个形参**

```js
       //1.代替 arguments	
		function date() {
            console.log(arguments);//对象，伪数组
        }
        date('a', 'b', 'c')

        function d(...args) {
            console.log(args);//数组
        }
        d(1, 2, 3)
		//2.rest 参数必须是最后一个形参	
		function minus(a, b, ...args) {
            console.log(a, b, args);
        }
        minus(100, 1, 2, 3, 4, 5, 19);
```

注意：**rest 参数非常适合不定个数参数函数的场景**

