# .gitignore和.gitkeep

## 1、git忽略清单

将不需要被git管理的文件名字添加到此文件中，在执行git命令时，git就会忽略这些文件。

- `.gitignore` git忽略清单文件名称
- 在这个文件中添加需要忽略的文件夹和文件

**忽略指定名称的文件**

- ```
  test.txt 忽略test.txt文件 
  ```

**忽略指定后缀的文件**

- ```
  *.txt 忽略后缀为.txt的文件 
  ```

**忽略文件夹**

- ```
  mydir 忽略mydir文件夹 
  ```

## 2、git占位文件

git不会将空文件夹上传到服务器，添加.gitkeep文件即可使用git命令将空文件夹上传到服务器.

.gitkeep是一个占位文件。

**注意：.gitkeep并不是Git的特性。Git没有对占位文件名有要求，你可以放一个README也行。**

## 3、README.MD

该文件可以向仓库添加详细的说明，使用markdown文档语法。
