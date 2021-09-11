# Vue数据代理

## 1 Object.defineProperty()

`Object.defineProperty()`是用来在一个对象上添加一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

```js
Object.defineProperty(修改的对象,'对象的属性名'，{属性描述对象})
```

**属性描述对象提供6个元属性**

- value 是该属性的属性值，默认为undefined

- writable 控制属性是否可以被删除，默认值是false

- enumerable 控制属性是否可以被枚举，默认值是false

- configurable 控制属性是否可以被删除，默认值是false

- get  表示该属性的取值函数（`getter`），默认为`undefined`。

- set  表示该属性的存值函数（setter），默认为`undefined`。

```
        let num = 18
        let person = {
            name: '张三',
            gender: '男',
        }
        Object.defineProperty(person,'age',{
            // value: 18,
            // enumerable: true,//控制属性是否可以被枚举，默认值是false
            // writable: true,//控制属性是否可以被修改，默认值是false
            // configurable: true,//控制属性是否可以被删除，默认值是false
            get(){//当有人读取age属性时，get函数（getter）会被调用，且返回值就是age的值
                console.log('有人读取了age属性');
                return num
            },
            set(value){//当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值
                console.log('有人修改了age属性，且值是' + value);
            }
        })

        console.log(person);
```

- 当有人读取age属性时，get函数（getter）会被调用，且**返回值就是age**的值
- 当有人修改了age属性时，set函数（setter）会被调用，且会收到修改的具体值

- Object.defineProperty()将num和person绑定在一起，这就是Vue框架中，数据代理的原理

## 2 数据代理

数据代理：通过一个对象代理对另一个对象的属性的操作（读/写）

```js
	let obj1 = { x = 100 }
	let obj2 = { y = 200 }
	Object.defineProperty(obj2,'x',{
		get(){
		  return obj.x
		}
		set(value){//value = obj.x
		  obj.x = value
		}
	})
```

- 通过obj2也可以修改obj1

## 3 Vue数据代理