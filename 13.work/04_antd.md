# 公开资料页面

table 表格，提交按钮

## table

## modal

一个 modal 中包括 form 表单，1 行 3 个 form-item，考虑使用网格布局。

## 上传文件

使用 a-upload 组件配合阿里云 oss，实现文件上传功能。阿里云的 oss 文件权限服务，上传文件包括私有和公有。

[阿里云 oss](https://help.aliyun.com/document_detail/31886.html)

后端返回了两个接口：

- 一个接口用于获取 oss 的临时凭证，对于公有权限，该接口可以直接获取 url 路径。
- 一个接口用于二次获取 url，对于私有权限，需要二次调用该接口

```js
  /**
   * @description 文件上传
   * @param {file}  上传文件
   * @param {folder} 上传服务器对应文件夹(如：系统管理：systemManage；人力行政管理：hrManage)
   * @param {type} 设置文件权限：0(私有)/1(公有)--默认公有
   * @returns  返回上传文件后服务器响应
   * @tips  $fn.uploadFile(e.file,"systemManage").then((res:any)=>{console.log(res);})
   */
  uploadFile: function (file: any, folder: string, type = 1): any {
    //设置文件权限
    const jurisdiction = {
      0: 'private', //私有
      1: 'public-read-write', //公共读写
      2: 'public-read', //公共读
      3: 'default' //继承Bucket--文件遵循存储空间的访问权限。
    };
    //定义上传路径：权限文件夹+模块文件夹
    folder = jurisdiction[type] + '/' + folder;
    return new Promise((resolve, reject) => {
      $axios
        .post($api.getOss + '?path=' + folder)
        .then((res: any) => {
          if (res.data.success) {
            const fileName = file.name.lastIndexOf('.'); //取到文件名开始到最后一个点的长度
            const fileNameLength = file.name.length; //取到文件名长度
            const fileFormat = file.name.substring(fileName, fileNameLength); //截
            const name = res.data.data.basePath + '/' + new Date().getTime() + fileFormat;
            const client = new OSS({
              endpoint: res.data.data.endPoint,
              region: res.data.data.region,
              secure: true,
              accessKeyId: res.data.data.accessKeyId,
              accessKeySecret: res.data.data.accessKeySecret,
              bucket: res.data.data.bucket,
              stsToken: res.data.data.securityToken
            });
            (async () => {
              //上传文件
              const ret = await client.multipartUpload(name, file, {});
              //设置文件权限
              await client.putACL(name, jurisdiction[type]);
              //查看文件权限
              //const result = await client.getACL(name);
              //console.log(result.acl);
              resolve(ret);
            })();
          } else {
            reject(res);
          }
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  },
```

自定义上传方式：

```js
    <a-upload :customRequest="uploadFile" :file-list="fileList" :remove="removeUpload" style="width: 200px">
      <a-button type="link"> 上传电子档 </a-button>
    </a-upload>

    interface FileItem {
      uid: string; // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
      name?: string; // 文件名
      status?: string; // 状态有：uploading done error removed
      response?: string; // 服务端响应内容
      url?: string;
      temUrl?: string;
    }
    const fileList = ref<FileItem[]>([]);

    //保存上传文件的私有路径
    let uploadFile = (e: any): void => {
      $fn.uploadFile(e.file, 'hrManage', 0).then((res1: any) => {
        //根据私有路径遍历获取整体url
        $axios.get($api.getOssUrl, { params: { objectName: res1.name } }).then((res2: any) => {
          fileList.value.push({
            uid: $fn.uniqueId(),
            name: e.file.name,
            url: res2.data.data,
            status: 'done',
            temUrl: res1.name //保存临时的路径
          });
        });
      });
    };
    //自定义删除文件方法，注意有可能是':remove'而并不是'@romove'
    const removeUpload = (file: any) => {
      fileList.value.forEach((val: any, i: any) => {
        if (val.uid == file.uid) {
          fileList.value.splice(i, 1);
        }
      });
    };
```

生成唯一序列号：

```js
  /**
   * @description 生成唯一序列号
   * @return {number}
   */
  uniqueId: function (): number {
    const a: any = Math.random;
    const b: any = parseInt;
    return Number(Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a()));
  },

```

## 回显文件

```js
const openModal = async (record?: any) => {
  console.log(record, 'record');
  modalTitle.value = '文案文件归档';
  modalVisible.value = true;
  stateForm.formState = {};
  fileList.value = [];
  if (record.hrAdminDataId) {
    stateForm.formState = record;
    stateForm.formState['intoFileDate'] = $fn.dateFormat(new Date(record.intoFileDate), 'yyyy-MM-dd');
    if (record.electronicFileAddress) {
      fileList.value = JSON.parse(record.electronicFileAddress);
      fileList.value.forEach((item: any) => {
        $axios.get($api.getOssUrl, { params: { objectName: item.temUrl } }).then((res: any) => {
          item.url = res.data.data;
        });
      });
    }
    return;
  }
  await nextTick();
  (formDom.value as any).resetFields();
};

const modalHandleOk = () => {
  console.log(stateForm.formState);
  stateForm.formState['grade'] = 0;
  // const postData = Object.assign([], toRaw(fileList.value));
  fileList.value.forEach((item: any) => {
    delete item.url;
  });
  stateForm.formState['electronicFileAddress'] = JSON.stringify(fileList.value);
  (formDom.value as any).validate().then(() => {
    if (stateForm.formState['hrAdminDataId']) {
      delete stateForm.formState['key'];
      $axios.put($api.hr_editHrAdminData, stateForm.formState).then((res: any) => {
        if (res.status === 200) {
          modalVisible.value = false;
          $message.success('修改公共资料成功！');
        }
        getTableDate({
          grade: 0
        });
      });
      return;
    }
    $axios.post($api.hr_addHrAdminData, stateForm.formState).then((res: any) => {
      if (res.status === 200) {
        modalVisible.value = false;
        $message.success('添加公共资料成功！');
      }
      getTableDate({
        grade: 0
      });
    });
  });
};
```

## vue3+ts 定义响应式数组

```ts
const fileName = ref([]);
const fileName = ref([] as string[]);
const fileName = ref<string[]>([]);
const fileName: any = ref([]);

fileName.value.push(res.name); //push报错
```
