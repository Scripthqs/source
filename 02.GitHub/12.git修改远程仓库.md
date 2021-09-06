## git修改远程仓库地址

方法1：

删除再添加你的远程仓库

```
git remote rm origin
git remote add origin 你的新远程仓库地址
git push --set-upstream origin master
```

方法2 :

直接修改你本地的.git文件

这里需要注意的问题是需要进入你的项目目录中
例如：你的项目名为test，那么你就进入test文件夹。

**.git文件是隐藏文件你需要显示隐藏文件才能看见**

