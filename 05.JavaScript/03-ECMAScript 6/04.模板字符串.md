# 模板字符串

模板字符串（template string）是增强版的字符串，用**反引号**（`）标识（TAB键上面），特点：

1. **字符串中可以出现换行符** 

2) **可以使用 ${xxx} 形式输出变量**

```js
        let s = `我是字符串`
        console.log(s);
        console.log(typeof s);
        //1.字符串中可以出现换行符
        let str = `
        <ul>
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
        </ul>`
        console.log(str);
        //2.拼接变量，使用 ${xxx} 形式输出变量
        let name = '小明'
        let str2 = `姓名：${name}`
        console.log(str2);
```

**当遇到字符串与变量拼接的情况使用模板字符串**

