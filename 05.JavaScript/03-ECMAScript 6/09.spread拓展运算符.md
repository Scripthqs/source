# spread 扩展运算符

## 1.扩展运算符...

扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个**数组**转为用逗号分隔的**参数序列**，对数组进行解包。

```js
        const arr = ['a', 'b', 'c', 'd']
        function fn() {
            console.log(arguments);//
        }
        fn(arr)//将数组作为参数
        fn(...arr)//将数组中的每个参数      
```

## 2.扩展运算符的应用

### 2.1.合并数组

```js
        const arr1 = [1, 2, 3]
        const arr2 = ['a', 'b', 'c']
        const arrES5 = arr1.concat(arr2)
        const arrES6 = [...arr1, ...arr2]
        console.log(arrES5);
        console.log(arrES6);
```

### 2.2.浅拷贝

```js
        const obj = {
            msg: 'hello',
            num: 20,
            fun() {
                console.log(this.msg);
            }
        }
        const obj1 = { ...obj }
        console.log(obj1);
```

### 2.3.将伪数组转化成真数组

```js
        function fun() {
            console.log(arguments);//伪数组
            // arguments.push('a')报错
            const args = [...arguments]
            args.push('a')//push成功
            console.log(args);
        }
        fun(1, 2, 3)
```

