## 使用 GitHub

### 目的
借助github托管代码

### 基本概念

#### 仓库(Repository)
仓库用来存放项目代码，每个项目对应一个仓库，多个开源项目则有多个仓库。

#### 收藏(Star)
收藏项目，方便下次查看。

#### 复制克隆项目(Fork)
复制克隆他人项目，可以添加修改代码，但只会影响自身的仓库。  
注意：**Fork的项目是独立存在的。**

#### 发起请求(Pull Request)
Fork他人项目后，自己添加修改代码，发起请求，项目作者可以选择同意或拒绝请求。

#### 关注(Watch)
关注项目后，可以收到该项目更新的通知消息。

#### 事务卡片(Issue)
发现代码BUG，但是目前没有成型代码，需讨论时用。

#### 3个页面
1. github主页
2. 仓库主页
3. 个人主页

### 注册github账号
官网：github.com

#### 创建项目
一个git库对应一个开源项目，通过git管理git库。新建或者导入文件。

####  修改项目
直接在项目上修改或者本地修改再上传到仓库。

#### 删除项目
设置(setting)往下翻到最下面可以找到删除仓库(repository)。

#### 搜索文件
点击go to file或者按快捷键T。

#### Issue和Pull Request
可以点击Issue来给别人提出问题或建议，别人或自己可以选择关闭或者回答。可以通过新建Issue和Pull Request为开源项目做贡献。

## Git的安装和使用

### 目的
通过git管理托管项目代码。

### 下载和安装
git官网下载：https://git-scm.com/downloads


`![](img/GitInstall.png)默认Markdown不支持指定图片的显示大小，不过可以通过直接插入<img />标签来指定相关属性。<img src="链接" width="宽度" height="高度" alt="图片名称" 
align=center>`  

### Git的工作区域
- 版本库(git Repository)：最终确定的文件保存到仓库，成为一个新的版本，对他人可见。
- 暂存区：暂存已经修改的文件，最后统一提交到Git仓库中。
- 工作区(Working Directory)：添加、编辑、修改文件等动作。
  
### Git基本命令
- `git status` 查看当前状态
- `git add xx` 提交到暂存区
- `git restore --staged READEME.md` 可以撤回提交状态
- `git commit -m "描述"` 提交到仓库
- `git remote add origin 仓库地址`
- `git push -u origin master`
- `git pull` 提交后和开发前，保证本地是最新版本

### Git基础设置
1. 初始化用户名     
   `git config --global user.name 'Scripthqs'`
2. 设置用户名邮箱  
   `git config --global user.email '1941186772@qq.com'`
3. 查看设置(验证是否初始化成功)  
   `git config --list`  

**注意：该设置在GitHub仓库主页显示谁提交了该文件。**

### 初始化一个Git仓库
1. 显示当前位置  
   `pwd`
2. 创建文件夹  
   `mkdir test`
3. 在文件内初始化Git（创建Git仓库）  
   `cd test`  
   `git init`  
文件夹中会出现一个隐藏文件夹`.git`，如图：
![](../material/github/git.png)
- hooks：目录包含客户端或服务端的钩子脚本
- info：包含一个全局性排除文件
- logs：保存日志信息
- objects：目录存储所有数据内容
- refs：目录存储指向数据（分支）的提交对象指针
- config：文件包含项目特有的配置选项
- desciption：用来显示对仓库的描述信息
- HEAD：文件指示目前被检出的分支
- index：文件保存暂存区信息

### 基础的Linux命令
- clear：清除屏幕
- echo 'test content'：往控制台输出消息
- echo >test.txt:可以在当前目录下创建文件
- ll：将当前目录下的子文件&子目录平铺在控制台
- find 目录名：将对应目录下的子孙文件&目录平铺在控制台
- find 目录名 -type f：将对应目录下的文件平铺在控制台
- rm 文件名：删除文件
- mv 源文件 重命名文件：重命名
- cat 文件的url：查看对应目录下的文件内容
- vim 文件的url(在英文模式下):  
  按i进入插入模式，进行文件的编辑  
  按ESC进行命令的执行，然后可以输入以下命令
  ：  
  - :q! 强制退出（不保存）   
  - :wq 保存退出  
  - :set nu 设置行号

### 向仓库中添加文件
- `touch a.md`
- `git status` 查看当前状态
- `git add xx` 提交到暂存区
- `git commit -m "描述"` 提交到仓库

### 修改文件
- `vi a.md` 然后按`i`进入插入编辑模式更改，按ESC然后输入`:wq`退出
- `git status` 查看当前状态
- `git add xx` 提交到暂存区
- `git commit -m "描述"` 提交到仓库

### 删除文件
- `rm a.md` 然后按`i`进入插入编辑模式更改，按ESC然后输入`:wq`退出
- `git status` 查看当前状态
- `git rm xx` 提交到暂存区
- `git commit -m "描述"` 提交到仓库

## Git管理远程仓库

### 目的
备份，实现代码共享集中化管理。

### 将本地仓库同步到远程仓库
- `git push`
  
## Git克隆操作

### 目的
将远程仓库（git对应的项目）复制到本地。

### 复制仓库地址
- `git clone 仓库地址`
 - `git add xx` 提交到暂存区
- `git commit -m "描述"` 提交到仓库
- `git push`
  
### 设置权限
报错：The requested URL returned error:403 Forbidden while accesssing
答案：私有项目，没有权限，输入用户名密码，或者远程地址采用这种类型：
- `vi .git/config`  
将[remote 'origin']  
url = https://github.com/用户名/仓库名.git  
修改为：
[remote 'origin']  
url = https://用户名：密码@github.com/用户名/仓库名.git

## Github Pages 搭建网站

### 个人站点

#### 访问
- `https://用户名.github.io`

#### 搭建步骤
1. 创建个人站点，即新建仓库（注：仓库名必须是【用户名.github.io】）
2. 在仓库下新建`index.html`的文件  
#### 注意：
1. github pages仅支持静态网页
2. 仓库里面只能是.html文件

### Project Pages项目站点

#### 访问
- `https://用户名.github.io/仓库名`

#### 搭建步骤
1. 进入项目主页，点击setting
2. 在setting页面中找到Github pages下面的选择主题(choose a theme)
3. Source下拉框选择main,最后会得到一个网址
4. 生成网页

  





   


