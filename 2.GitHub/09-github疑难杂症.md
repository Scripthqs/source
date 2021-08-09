# github的疑难杂症

## 1、git 报错处理

git push时报了这个错：fatal: unable to access '<https://github.com/>.......': OpenSSL SSL_read: Connection was reset, errno 10054

一般是这是因为服务器的SSL证书没有经过第三方机构的签署，所以才报错

参考网上解决办法：解除ssl验证后，再次git即可

- `git config --global http.sslVerify "false"`
- `git push`

### 2、github登录不了

1. 在`C:\Windows\System32\drivers\etc`找到hosts文件
2. 访问`http://tool.chinaz.com/dns?type=1&host=github.com&ip=`
3. 找到下面响应的IP
4. 在hosts文件末尾中追加`13.229.188.59 github`(根据查询到的IP为准)

## 3、403 Forbidden错误

报错：The requested URL returned error:403 Forbidden while accesssing
答案：私有项目，没有权限，输入用户名密码，或者远程地址采用这种类型：

```
vi .git/config  
将[remote 'origin']  
`url = <https://github.com/用户名/仓库名.git>`  
修改为：
[remote 'origin']  
`url = <https://用户名：密码@github.com/用户名/仓库名.git>`
```

