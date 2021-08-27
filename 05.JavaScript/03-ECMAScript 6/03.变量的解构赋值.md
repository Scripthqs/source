# 变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

## 1.数组的解构赋值

```js
        const A = [1,2,3,4]
        let [a,b,c,d] = A
        let	[m] = A
        console.log(a,b,c,d);//1 2 3 4
		console.log(m);//1
```

## 2.对象的解构赋值

```js
        const Person = {
            name: '小明',
            age: '20',
            fun1: function (name) {
                console.log(this.name);
            },
            fun2: function (age) {
                console.log(this.age);
            }
        }
        let { age, name, fun2 } = Person
        console.log(name, age, fun2);
        let { fun1 } = Person
        console.log(fun1);
        fun1();
        fun2();
```

```js
		const per1 = {
            msg1: 'hello',
            arr1: ['吃饭', '睡觉', '喝水', '倒立']
        };
        let { msg1, arr1 } = per1;
        console.log(msg1, arr1);
```

```js
        //复杂解构
        let per2 = {
            msg2: 'world',
            age: 18,
            arr2: ['吃饭', '睡觉', '喝水', '倒立'],
            arr3: [
                { name: 'aaa' },
                { name: 'bbb' },
                { name: 'ccc' }
            ]
        };
        let { arr2: [one, two, three],
            arr3: [first, second, third] } = per2;
        console.log(one);//'吃饭'
        console.log(first);//{ name: 'aaa' },
```

**频繁使用对象方法、数组元素，就可以使用解构赋值形式**
