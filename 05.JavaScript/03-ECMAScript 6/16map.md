# Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键” 的范围**不限于字符串**，各种类型的值（包括对象）都可以当作键。Map 也实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属 性和方法：

1.  size 返回 Map 的元素个数
2. set 增加一个新元素，返回当前 Map
3. get 返回键名对象的键值
4. has 检测 Map 中是否包含某个元素，返回 boolean 值
5. clear 清空集合，返回 undefined

```
    let m = new Map()
    m.set('msg', 'hello world')
    m.set('fun1', function () {
      console.log(this)
    })
    let key = {
      type: 'type'
    }
    m.set(key, ['number', 'string', 'boolean'])
    console.log(m);
    console.log(m.size)//3


    //获取
    console.log(m.get('msg'))
    console.log(m);
    console.log(m.get('fun1')())


    // 删除
    // m.delete('msg')
    // console.log(m)

    //清空
    // m.clear()
    // console.log(m)

    //遍历
    for (let v of m) {
      console.log(v)
      console.log(v instanceof Array)
    }
```

