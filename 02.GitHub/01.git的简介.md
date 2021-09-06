# Git的简介

## 1、git是什么

git是一个版本控制管理系统（VCS,version control system），可以在任何时间点，将文档的状态记录作为更新记录保存起来，也可以在任何时间点，将更新记录恢复出来。

## 2、使用git的目的

通过git管理托管项目代码。

## 3、下载和安装git

git官网下载：<https://git-scm.com/downloads>

- 安装完后打开git bash命令行窗口
- `git --version` 可以使用这条命令查看当前git版本

# 4、git的初始配置

git安装后需要先配置，使用git可以多人协作，可以做到责任分工。

1. 初始化用户名
   `git config --global user.name 'Scripthqs'`
2. 设置用户名邮箱  
   `git config --global user.email '1941186772@qq.com'`
3. 查看设置(验证是否初始化成功)  
   `git config --list`  
4. 如果配置需要修改配置信息
   - 再重复上述的命令可以修改配置信息
   - 也可以找到`C盘-用户文件夹-.gitconfig`中的文件，该文件中修改修改配置信息

**注意：此操作只需要执行一次，该设置在GitHub仓库主页显示谁提交了该文件。**

## 5、git初始化仓库

**前5步的作用主要通过命令行创建文件夹和文件，熟悉命令行**，也可以手动创建文件夹

1. 显示当前位置  
   `pwd`
2. 创建名为`test`的文件夹  
   `mkdir test`
3. 进入名为`test`文件夹  
   `cd test`
4. 返回上一级目录  
   `cd ..`
5. 创建名为`index.html`的文件  
   `touch index.html`
6. 在文件内初始化Git（创建Git仓库）  
   `git init`  
   文件夹中会出现一个隐藏文件夹`.git`，如图：
   ![.git](D:\user\Desktop\Script\note\material\github\git.png)
   - hooks：目录包含客户端或服务端的钩子脚本
   - info：包含一个全局性排除文件
   - logs：保存日志信息
   - objects：目录存储所有数据内容
   - refs：目录存储指向数据（分支）的提交对象指针
   - config：文件包含项目特有的配置选项
   - desciption：用来显示对仓库的描述信息
   - HEAD：文件指示目前被检出的分支
   - index：文件保存暂存区信息



