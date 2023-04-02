# 商品查询页面

## 搜索栏

该部分包括两个输入框，一个级联选择框，搜索重置两个按钮。

### 级联选择框

```js
<a-cascader v-model:value="value" :options="options" :load-data="loadData" placeholder="请选择" change-on-select />

import type { CascaderProps } from 'ant-design-vue';
const value = ref([]);
const options = ref<CascaderProps['options']>();
```

- 使用 v-model:value 双向绑定级联选择框的值
- options 绑定级联选择框的相关数据

需要弄清楚级联选择框的数据结构

```js
interface Option {
  value: string | number;
  label?: any;
  disabled?: boolean;
  children?: Option[];
}
```

将后端返回的数据结构进行处理，后端的数据是多个数组，根据里面的 leaf 属性判断是否有下一级

```js
/* 查询一级商品分类 */
    const queryOnesType = (id: any) => {
      $axios.get($api.getClassification, { params: { parentId: id } }).then((res: any) => {
        // console.log(res, '里面的leaf属性');
        res.data.data.forEach((item: any) => {
          item.value = item.gbpsPrdCategoryId;
          item.label = item.name;
          item.isLeaf = item.leaf;
        });
        options.value = res.data.data;
      });
    };

    const loadData: CascaderProps['loadData'] = selectedOptions => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      searchForm.formValue['categoryCode'] = targetOption.gbpsPrdCategoryId;
      $axios.get($api.getClassification, { params: { parentId: targetOption.gbpsPrdCategoryId } }).then((res: any) => {
        console.log(res);
        targetOption.loading = false;
        res.data.data.forEach((item: any) => {
          item.value = item.gbpsPrdCategoryId;
          item.label = item.name;
          item.isLeaf = item.leaf;
        });
        targetOption.children = res.data.data;
      });
    };
```

### 搜索重置功能

关于表单组件 Form 和 Form-item 的说明：

```js
<template>
  <div>
    <a-form ref="formRef" name="advanced_search" :model="formState" @finish="onFinish">
      <a-row :gutter="24">
        <a-col :span="6">
          <a-form-item name="name1" label="表1">
            <a-input v-model:value="formState['name1']" placeholder="placeholder"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item name="name2" label="表2">
            <a-input v-model:value="formState['name2']" placeholder="placeholder"></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-button type="primary" html-type="submit">搜索</a-button>
          <a-button style="margin: 0 8px" @click="reset">重置</a-button>
        </a-col>
        <a-col :span="6">
          <a-form-item name="name3" label="分类">
            <a-cascader v-model:value="formState['name3']" :options="options" :load-data="loadData" placeholder="请选择" change-on-select />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import useGlobal from '@/utils/hooks/useGlobal';

import type { CascaderProps } from 'ant-design-vue';

export default defineComponent({
  components: {},
  setup() {
    const { $axios, $api, $message } = useGlobal();
    const formRef = ref();
    const formState = reactive({});
    const options = ref<CascaderProps['options']>([]);
    const queryOnesType = (id: any) => {
      $axios.get($api.getClassification, { params: { parentId: id } }).then((res: any) => {
        // console.log(res, '里面的isLeaf属性');
        res.data.data.forEach((item: any) => {
          item.value = item.gbpsPrdCategoryId;
          item.label = item.name;
          item.isLeaf = item.leaf;
        });
        options.value = res.data.data;
      });
    };
    const loadData: CascaderProps['loadData'] = selectedOptions => {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;
      $axios.get($api.getClassification, { params: { parentId: targetOption.gbpsPrdCategoryId } }).then((res: any) => {
        console.log(res);
        targetOption.loading = false;
        res.data.data.forEach((item: any) => {
          item.value = item.gbpsPrdCategoryId;
          item.label = item.name;
          item.isLeaf = item.leaf;
        });
        targetOption.children = res.data.data;
      });
    };
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
      console.log('formState: ', formState);
    };
    const reset = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      formState,
      onFinish,
      reset,
      options,
      loadData
    };
  }
});
</script>
<style></style>
```

**Form**:

- `:model` 是表单的数据对象
- `:rules` 是表单的验证规则，可以自定义验证规则
- `layout="inline"`可以让一个 item 不独占一行。

**form-item**:

- `name`在使用 validate、resetFields 方法的情况下需要填写
- `label`属性，表单标签的文本

**搜索功能**：

对于表单提交，不一定要在提交按钮上写@click 事件，可以在 form 上写@finish="onFinish"事件

**重置功能**：

给 form 一个 `ref=formRef`，调用`formRef.value.resetFields();`即可重置表单。再发送一次初始的网络请求即可实现重置功能。

## table 表格栏

对 talbe 进行了二次封装，这里先学会如何使用

```js
    <GTable :column="column" :data="data" :pagination="page" @pageChange="pageChange" :rowSelection="{ toKey: 'gbpsPcbmId' }">
       /* 表格数据 */
    const state = reactive({
      column: [
        { title: '商品分类', dataIndex: 'categoryName', width: 100, show: true },
        {
          title: '供应商',
          dataIndex: 'merchantName',
          width: 50,
          show: true
        },
        {
          title: '物料编码',
          dataIndex: 'materialNo',
          width: 50,
          show: true
        },
        {
          title: '物料名称，规格描述',
          dataIndex: 'spec',
          width: 200,
          show: true
        },
        { title: '上架时间', dataIndex: 'createTime', width: 50, show: true }
      ],
      data: [] as any[],
      page: {
        total: 0, //数据总条数
        current: 0, //当前页码
        pageSize: 0, //每页条数
        size: 'default', //分页大小 default | middle | small
        pageSizeOptions: ['10', '20', '20', '40'] //每页可以显示多少条
      }
    });
    return{
      ...toRefs(state)
    }
```

使用`...toRefs(state)`的方法进行返回，因为 reactive 对象取出的所有属性值都是非响应式的，利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性。

- 发送网络请求后，使用 state.data = res.data.data 即可获得数据。

### 页码功能

将返回的数据页码相关信息进行赋值

```js
const getTableDate = function(p: Iparams) {
  $axios.post($api.queryByPage, p).then((res: any) => {
    console.log('分页查询全部商品', res);
    state.data = res.data.data.data;
    // console.log(state.data, '***********');
    state.page.total = res.data.data.totalCount;
    state.page.current = res.data.data.pageIndex;
    state.page.pageSize = res.data.data.pageSize;
  });
};
```

**切换页码**功能：

```js
const pageChange = (pageObj: pagiationType) => {
  // console.log(pageObj, '该参数返回页码相关信息');
  // console.log('当前页码: ' + pageObj.current);
  state.page.current = pageObj.current;
  state.page.pageSize = pageObj.pageSize;
  formState['pageIndex'] = state.page.current;
  formState['pageSize'] = state.page.pageSize;
  // console.log(formState, '切换页码查询传入的参数');
  getTableDate(formState);
};
```

## 导出文件

根据接口文档的描述：

- 导出本页，传入当前页码和 limit=5 参数即可。
- 导出全部，页码传空，limit 传其他数字即可。

```js
/* 导出此页 */
const exportPageOne = () => {
  console.log('导出此页');
  console.log(state.page.current, '该页的页码');
  getExportXlsx(state.page.current, 5);
};

/* 导出全部 */
const exportPageAll = () => {
  console.log('导出全部');
  getExportXlsx('', 1);
};
```

后端返回的是文件流格式的数据，前端使用 axios 需要对接口返回数据进行处理。

1. 前端调用接口时，需要把 axios 的 responseType 改为 `arraybuffer` 或者 `blob`， 不然下载的文件打不开；
2. 如果文件名中有中文，需要进行 URL 解码，使用`decodeURI()`方法
3. 通过 a 标签实现下载文件
4. 还需要处理，返回的数据有没有被 axios 的拦截器拦截

```js
const getExportXlsx = (page: number | string, limit: number) => {
  $axios
    .get($api.exportXlsx, {
      params: { page: page, limit: limit },
      responseType: 'blob'
    })
    .then((res: any) => {
      console.log(res, '导出文件打印res');
      const fileName = `${+new Date()}.xlsx`;
      const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' });
      // console.log(blob, '打印blob');
      if (blob.size <= 0) {
        $message.warn('文件下载错误');
        return;
      }
      if ('download' in document.createElement('a')) {
        //支持a标签download的浏览器
        const link = document.createElement('a'); //创建a标签
        link.download = fileName; //a标签添加属性
        link.style.display = 'none';
        link.href = URL.createObjectURL(blob); //创建url对象
        document.body.appendChild(link);
        link.click(); //执行下载
        URL.revokeObjectURL(link.href); //释放url
        document.body.removeChild(link); //释放标签
      }
    });
};
```

### 下载文件

```js
const mimeMap = {
  xlsx: 'application/vnd.ms-excel',
  zip: 'application/zip'
};
const resolveBlob = (res: any, mimeType: any) => {
  // 创建a标签，并处理二级制数据
  const aLink = document.createElement('a');
  const blob = new Blob([res.data], { type: mimeType });
  // 生成下载链接
  const URL = window.URL || window.webkitURL;
  aLink.href = URL.createObjectURL(blob);
  // 设置下载文件名称
  let fileName = '';
  if (res.headers['content-disposition']) fileName = res.headers['content-disposition'];
  if (res.headers['Content-Disposition']) fileName = res.headers['Content-Disposition'];
  aLink.setAttribute('download', fileName);
  // 下载
  document.body.appendChild(aLink);
  aLink.click();
  // 释放URL对象
  window.URL.revokeObjectURL(aLink.href);
  document.body.removeChild(aLink);
};
```

```js
const mimeMap = {
  xlsx: 'application/vnd.ms-excel',
  zip: 'application/zip'
};
const resolveBlob = (res: any, mimeType: any) => {
  // 创建a标签，并处理二级制数据
  const aLink = document.createElement('a');
  const blob = new Blob([res.data], { type: mimeType });

  // 设置下载文件名称，使用正则取出名称
  const pat = new RegExp('fileName=([^;]+\\.[^\\.;]+)');
  let contentDisposition = '';
  //浏览器问题可能会出现 content-disposition 匹配不到
  if (res.headers['content-disposition']) contentDisposition = res.headers['content-disposition'];
  if (res.headers['Content-Disposition']) contentDisposition = res.headers['Content-Disposition'];
  // console.log(contentDisposition, 'contentDisposition');
  const result = pat.exec(contentDisposition);
  let fileName = result && result[1];

  // 如果Content-Disposition没有暴露，给文件一个默认名字
  if (fileName == null) fileName = '商品查询列表';

  // 生成下载链接
  const URL = window.URL || window.webkitURL;
  aLink.href = URL.createObjectURL(blob);
  aLink.setAttribute('download', fileName);
  // 下载
  document.body.appendChild(aLink);
  aLink.click();
  // 释放URL对象
  window.URL.revokeObjectURL(aLink.href);
  document.body.removeChild(aLink);
};
```
