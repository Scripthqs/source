# 迭代器Iterator

## 1.Iterator简介

迭代器（Iterator），也称遍历器，是一种机制。它是一种接口，为各种不同的数据结构提 供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成**遍历操作**

## 2.Iterator作用

1. ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费（**in返回键值，of返回键值**）
2. 原生具备 iterator 接口的数据(可用 for of 遍历)
   - Array 
   -  Arguments
   - Set
   - Map
   - String
   - TypedArray
   - NodeList

## 3.Iterator工作原理

1. 创建一个指针对象，指向当前数据结构的起始位置
2. 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
3. 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
4. 每调用 next 方法返回一个包含 value 和 done 属性的对象

```
        let arr = [7, 2, 3]
        for (let v of arr) {
            console.log(v);
        }
        console.log(arr);//Symbol.iterator方法在原型
        let i = arr[Symbol.iterator]()
        console.log(i.next())//指向第一个成员,{done=false,value=7}
        console.log(i.next())//指向指向后一个成员 ,{done=false,value=2}
       	console.log(i.next())//指向指向最后一个成员 ,{done=false,value=3}
       	console.log(i.next()//{done=true,value=undefined}
```

**需要自定义遍历数据的时候，要想到迭代器。**

## 4.Iterator的应用

```js
        let obj = {
            name: '幼儿园',
            students: ['小明', '小红', '小刚', '小李'],
            [Symbol.iterator]() {
                let i = 0
                return {//1.iterator返回一个对象
                    next: () => {//2.调用next方法，返回一个包含 value 和 done 属性的对象
                        if (i < this.students.length) {
                            const res = {
                                value: this.students[i], done: false
                            }
                            //下标自增
                            i++
                            //返回结果
                            return res
                        } else {
                            return {
                                value: undefined, done: true
                            }
                        }
                    }
                }
            }
        }
        console.log(obj);

        for (let v of obj) {
            console.log(v);
        }
```

