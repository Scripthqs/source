# 通过git命令给github网站设置代理

由于github是国外网站，正常访问速度可能非常慢，使用ss/ssr/v2rayN配置的网络能够轻松快速的访问google和github，但是，使用`git clone`克隆github上仓库代码时，发现克隆的速度仍然非常慢。

## 1、全局代理（不推荐）

1. 确定打开了ss/ssr/v2rayN代理
2. 设置全局代理

- `git config --global http.proxy http://127.0.0.1:1080`
- `git config --global https.proxy https://127.0.0.1:1080`

注意：需要打开代理查看设置，确认后面的端口是不是1080，确认是http还是socks5代理，如果是socks5则使用以下命令

- `git config --global http.proxy socks5://127.0.0.1:1080`
- `git config --global https.proxy socks5://127.0.0.1:1080`

比如，我的代理端口是10808，而不是1080，我的代理协议（ss/ssr/v2rayN）都是使用socks5，而不是http。

此时，使用`git clone`下载的速度是代理网络的速度了，但是只对https协议的仓库地址有效，对SSH协议的仓库地址依然无效。

如需取消全局代理，使用：

- `git config --global --unset http.proxy`
- `git config --global --unset https.proxy`

通过`git config --list`可以检查代理网络，按键盘`q`可以退出列表

## 2、只对github网站进行代理（推荐）

使用全局代理，会对国内的仓库造成影响，所有只对github网站进行代理，**确认端口和协议后**，开始配置代理。

http代理协议：

- `git config --global http.https://github.com.proxy https://127.0.0.1:1080`
- `git config --global https.https://github.com.proxy https://127.0.0.1:1080`

socks5代理协议：

- `git config --global http.https://github.com.proxy socks5://127.0.0.1:1080`
- `git config --global https.https://github.com.proxy socks5://127.0.0.1:1080`

如果在输入以上命令之前，已经设置了全局代理，先使用以下命令取消：

- `git config --global --unset http.proxy`
- `git config --global --unset https.proxy`

取消全局代理的命令并不能取消github网站的代理，如需取消，则要使用以下命令：

- `git config --global --unset http.https://github.com.proxy`
- `git config --global --unset https.https://github.com.proxy`

可以通过以下命令检查设置的代理是否成功，

- `git config --list`（按键盘`q`可以退出列表）

比如我的config list中可以看到设置的代码，我的代理端口是10808，我的代理协议使用socks5

````cmd
http.https://github.com.proxy=socks5://127.0.0.1:10808
https.https://github.com.proxy=socks5://127.0.0.1:10808
````

## 3、使用镜像网站替换（尝试了一次好像没成功）

- 将原本仓库地址的`github.com`替换成`github.com.cnpmjs.org`
- `www.github.com/后面为代码库`替换成`www.github.com.cnpmjs.org/后面为代码库`

## 4、要针对SSH协议的仓库地址

- 找到存储SSH密钥的地方`系统-用户-.ssh 文件夹`
- 新建config（注意文件类型，没有后缀名，不是txt）
- 在文件中根据http或者socks5，输入以下两条之一，
  - `ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p`
  - `ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p`

说明：

- `-S` 指 socks 代理，默认是 socks5
- `-H` 指 HTTP 代理
- 后面的 `%h` `%p` 意思是 Host 和 Port，必须写上

以上命令针对全局，如果只针对某个网站，使用

````linux
Host github.com 
ProxyCommand "git的安装路径" -S 127.0.0.1:1080 %h %p
````

或者

````cmd
Host github.com 
ProxyCommand "git的安装路径" -H 127.0.0.1:1080 %h %p
````

## 5、注册国内的仓库

- 注册码云
- 通过码云 导入github中已有的项目
- git clone 码云中的项目
