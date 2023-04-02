# 工作记录

## 入职流程

- 体检、办工资卡
- 填入职的各种表格，
- 公司发的台式机，自己装
- 安装各种软件，配置环境
- 熟悉环境，了解下同事
- 公司项目领导给了 4 个链接
- 禅道的账号密码，可以分配任务
- 蓝湖的地址（里面是 ui 设计图之类的）
- WPS 在线任务文档地址
- 云效链接（里面有代码仓库），使用 git 下载提交代码
- 领导发了项目的原型图和 ui 图，根据这个图使用 vue3+ts 构建开发后台管理系统项目页面，好在已经做了一部分，可以看之前别人怎么写的

## 项目介绍

技术栈： Ant Design Vue + Vue3 + TypeScript
项目介绍：后台管理系统

## 关于 axios 传参

之前对于 axios 的 4 种请求方式，传参的区别没有很清楚

### get

需要使用`params：{参数名:参数值,key:value,...}`的方式

```js
const getRateTable = function(id: string | number) {
  $axios.get($api.H_rateAttr, { params: { prdCategoryId: id }, showLoading: false }).then((res: any) => {
    rateData.value = res.data.data;
  });
};
```

### post

直接使用`{参数名:参数值,key:value,...}`传递一个对象的方式

```js
const getTableDate = function(type: number, id: string | number) {
  $axios.post($api.H_queryByPage, { type: type, categoryId: id }).then((res: any) => {
    specData.value = res.data.data;
  });
};
```

### put

和 post 一样，直接传一个`{参数名:参数值,key:value,...}`对象的方式

```js
(setDom.value as any).validate().then(() => {
  $axios.put($api.H_editSkuAttr + '/' + params['skuAttrId'], params).then((res: any) => {
    if (res.status === 200) {
      setModalVisible.value = false;
      $message.success('编辑商品属性成功');
    }
    getTableDate({});
  });
});
```

### delete

和 get 一样，需要使用`params：{参数名:参数值,key:value,...}`的方式

```js
const delData = function(data: any) {
  $axios.delete($api.deleteData, params: { id: params['categoryId'] } ).then((res: any) => {
    if (res.data.success) {
      $message.success('删除成功');
      getTableData(categoryId.value);
    } else {
      $message.warn(res.errMessage);
    }
  });
};
```

### params/data

把参数存放在 url 或 data 中

- 使用 params 传参类似于 get 请求，是将参数拼接在 url 上
- 使用 data 传参类似于 post 请求，是将参数放在 body 上。

```js
//params参传
axios
  .delete(url, {
    params: {
      userId: '007'
    }
  })
  .then(res => {
    console.log(res);
  });
//data传参
axios
  .delete(url, {
    data: {
      userId: '007'
    }
  })
  .then(res => {
    console.log(res);
  });
```
