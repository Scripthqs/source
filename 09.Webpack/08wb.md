# webpack配置别名

## 1.webpack配置别名

建议使用@符号表示src源代码目录，从外往里找，不要使用../从里往外找。

```js
 resolve:{
      extensions: ['.js','.css','.vue'],//配置这个参数后，导入文件时，可以省略后缀
      alias: {
        '@': path.join(__dirname,'./src/')//用@符号代替src文件夹
        '@': path.resolve('src')//用@符号代替src文件夹
    }
```

注意：起别名后，通过import引入的路径别名可以直接生效，src引入的路径使用别名需要加`~`。

## 2.path.join()

__dirname表示当前文件的完整路径，在node的全局对象中

```
const path = require('path');//引入node的路径模块
// 此时存在__dirname，返回当前文件所在的绝对路径
const path1 = path.join(__dirname, '/foo');
const path2 = path.join(__dirname, './foo/bar');
const path3 = path.join('/foo', 'bar', '/baz/apple', 'aaa', '..');
const path4 = path.join('foo', 'bar', 'baz');

/Users/xiao/work/test/foo
/Users/xiao/work/test/foo/bar
/foo/bar/baz/apple
foo/bar/baz
```

## 3.path.resolve()

path.resolve:方法会把一个路径或路径片段的序列解析为一个**绝对路径**

```
const path = require('path');

const path1 = path.resolve('/a/b', '/c/d');
// 结果： /c/d
const path2 = path.resolve('/a/b', 'c/d');
// 输出： /a/b/c/d
const path3 = path.resolve('/a/b', '../c/d');
// 输出： /a/c/d
const path4 = path.resolve('a', 'b');
// 输出： /Users/xiao/work/test/a/b
```

- **esolve把`／`当成根目录**

- resolve操作相当于进行了一系列的cd操作，
- 但是和cd不一样，resolve()方法不会利用底层的文件系统判断路径是否存在，而只是进行路径字符串操作

## 4.区别

1、join是把各个path片段连接在一起， resolve把‘／’当成根目录

```
path.join('/a', '/b'); 
// /a/b
path.resolve('/a', '/b');
// /b
```

2、resolve在传入非/路径时，会自动加上当前目录形成一个绝对路径，而join仅仅用于路径拼接

```js
// 当前路径为
/Users/xiao/work/test
path.join('a', 'b', '..', 'd');
// a/d
path.resolve('a', 'b', '..', 'd');
// /Users/xiao/work/test/a/d
```

可以看出resolve在传入的第一参数为非根路径时，会返回一个带当前目录路径的绝对路径。

