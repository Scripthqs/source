# Symbol

## 1.Symbol的基本使用

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。

Symbol 特点

1. Symbol 的值是唯一的，用来解决命名冲突的问题 
2.  Symbol 值不能与其他数据进行运算 
3.  Symbol 定义的对象属性不能使用 for…in 循环遍历 ，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

```js
	    //创建Symbol   
		let s = Symbol()
        console.log(s);//Symbol()
        console.log(typeof s);//Symbol

		//添加标签的Symbol
        let s1 = Symbol('描述字符串')
        let s2 = Symbol('描述字符串')
        console.log(s1);
        console.log(s2);
        console.log(s1 === s2);//false

		//使用Symbo for定义
        let s3 = Symbol.for("哈哈")
        let s4 = Symbol.for("哈哈")
        console.log(s3 === s4);//true

```

**遇到唯一性的场景时要想到 Symbol**

## 2.Symbol的作用

Symbol表示独一无二的值，给对象添加属性和方法。

```js
        let obj = {
            up: 'up',
            down: 'down'
        }
        let m = {
            up: Symbol(),
            down: Symbol()
        }
        obj[m.up] = () => {
            console.log("向上")
        }
        obj[m.down] = () => {
            console.log("向下")
        }
        obj[Symbol()] = function () {
            console.log('hello');
        }
        obj[Symbol('msg')] = function () {
            console.log('world');
        }
        console.log(obj)
```

## 3.Symbol 内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值(Symbol的属性)，指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

- Symbol.hasInstance

```js
        class Person {
            static [Symbol.hasInstance](x) {
                console.log(x)
                console.log("asdfas")
                return true
            }
        }
        let o = 123
        console.log(o instanceof Person)
```

可以自己指定instanceof返回的结果

- Symbol.isConcatSpreadable

```js
        const arr1 = [1, 2, 3]
        const arr2 = [4, 5, 6]
        arr2[Symbol.isConcatSpreadable] = false
        console.log(arr1.concat(arr2))//[1,2,3,[4,5,6]]
```

可以控制数组concat()时，是否可以展开

