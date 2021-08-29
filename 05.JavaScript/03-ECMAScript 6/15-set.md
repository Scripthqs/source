# Set

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯 一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进 行遍历，集合的属性和方法：

1.  size 返回集合的元素个数
2. add 增加一个新元素，返回当前集合
3. delete 删除元素，返回 boolean 值
4. has 检测集合中是否包含某个元素，返回 boolean 值
5. clear 清空集合，返回 undefined

```js
	//创建一个空集合
    let s = new Set()
    console.log(s);
    console.log(typeof s);
    //创建一个非空集合
    let s1 = new Set([1, 2, 3, 1, 2, 3])
    console.log(s1);//{1，2，3}
    //集合属性与方法
    //返回集合的元素个数
    console.log(s1.size);
    //添加新元素
    console.log(s1.add(4));
    //删除元素
    console.log(s1.delete(1));
    //检测是否存在某个值
    console.log(s1.has(2));
    //清空集合
    console.log(s1.clear());
```

set的应用

```js
    let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
    //数组去重
    let result = [...new Set(arr)]
    console.log(result);
    //交集
    let arr2 = [4, 5, 6, 5, 6]
    let result2 = [...new Set(arr)].filter(item => new Set(arr2).has(item))
    console.log(result2);
    //并集
    let result3 = [...new Set([...arr, ...arr2])]
    console.log(result3);
    //差集
    let result4 = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
    console.log(result4);
```

