# 商品生成状态

1. 左侧树
2. 右侧一个 tabs 标签页切换栏，两个 tabs 标签页中的结构都一样。
3. 标签页下面一个搜索栏，一个 table 表格，以及页码处理
4. 两个标签页的 table 数据只是传入的参数不一样，第一个 table 传 0，第二个传 1

## 左侧树

这里也是使用了二次封装的 tree，先学会如何使用。

```js
    <div class="left">
      <p>商品分类</p>
      <tree :treeDatas="treeData" :fieldNames="fieldNames" :childNode="childNode" @loadData="getLoadData" @selectTreeNode="selectNode"></tree>
    </div>

    // 定义左边tree树形结构数据
    const treeData = reactive({
      checkedKeys: [],
      expandedKeys: [],
      data: [],
      lazyLoad: true
    });

    // tree数据自定义字段
    const fieldNames: fieldNames = {
      key: 'gbpsPrdCategoryId', //类似id
      title: 'name', //显示的文字
      children: 'children' //子节点，如果是懒加载，需要添加isLeaf：true或者false，判断是否最后一级
    };
    // 懒加载事件： onLoadData 点击过后会将id 传到父组件，父组件将子节点数据传过来childNode
    // 树节点点击事件：selectTreeNode  传递当前节点id
    // 多选框点击事件：handleCheck  点击过后会传递当前选中的id，

    let childNode = ref<any[]>([]); // tree分类子节点，懒加载子节点数据，如果是懒加载，需要添加isLeaf：true或者false
    // 获取子节点数据
    const getLoadData = function (id: number | string) {
      $axios
        .get($api.getClassification, {
          params: { parentId: id },
          showLoading: false
        })
        .then((res: any) => {
          let arr: any[] = [];
          //将请求到数据进行处理，
          res.data.data.forEach((item: any) => {
            arr.push({
              gbpsPrdCategoryId: item.gbpsPrdCategoryId,
              name: item.name,
              isLeaf: item.leaf
            });
          });
          console.log(childNode, 'childNode');
          childNode.value = arr; // 得到子节点所需要的数据;
        });
    };
    // 调用接口,获取tree/规格目录表格
    onMounted(() => {
      getTreeData(0);
    });

    // 使用网络请求获取tree数据
    const getTreeData = (id: string | number) => {
      $axios
        .get($api.getClassification, {
          params: { parentId: id },
          showLoading: false
        })
        .then((res: any) => {
          treeData.data = res.data.data;
          console.log('获取到tree数据', res.data.data);
        });
    };

    // 选择tree叶子节点触发的事件
    const selectNode = (id: string | number) => {
      searchValue.value = '';//选中节点时，让搜索框中的数据重置
      // 保存id
      hqsForm.formValue['categoryId'] = id;
      hqsForm.formValue['type'] = +activeKey.value;
      getTableDate(+activeKey.value, hqsForm.formValue['categoryId']);
    };
    return {
      // 树形结构
      treeData,
      fieldNames,
      childNode,
      getLoadData,
      selectNode
    }
```

## 右侧 tabs 栏

```js
    <div class="right">
      <a-tabs v-model:activeKey="activeKey" @change="tabChange">
        <a-tab-pane :tab="title" v-for="(title, index) in tabsData" :key="index">
          <g-table></g-table>
        </a-tab-pane>
      </a-tabs>
    </div>

    // 标签页tab切换
    const activeKey = ref('0');
    const tabsData = reactive(['分类生产状态设置', '分类生产制前状态设置']);
    const tabChange = () => {
      searchValue.value = '';
      hqsForm.formValue['type'] = +activeKey.value;
      if (hqsForm.formValue['categoryId']) {
        getTableDate(+activeKey.value, hqsForm.formValue['categoryId']);
      }
    };
    return{
      activeKey,
      tabsData,
      tabChange
    }
```

## 搜索栏

这里的搜索栏没有使用 form 表单。这种方法其实并不好，当时是学习别人的写法。

```js
  <div class="top">
    <div class="name">名称：</div>
    <a-input v-model:value="searchValue" class="my-input" />
    <div class="btn-box">
      <a-button type="primary" @click="searchClass">查询</a-button>
      <a-button @click="reset">重置</a-button>
    </div>
  </div>

  // 搜索框数据
  const searchValue = ref('');
  const searchClass = () => {
    const info = {
      type: +activeKey.value,//0-tabs1的数据，1-tabs2的数据
      categoryId: hqsForm.formValue['categoryId'],
      name: searchValue.value
    };
    getClassData(info);
  };
  const reset = () => {
  const info = {
    type: +activeKey.value,
    categoryId: hqsForm.formValue['categoryId']
  };
  getClassData(info);
  searchValue.value = '';
};
//scss样式
  .right {
    .top {
      display: flex;
      align-items: center;
      .name {
        margin-right: 2px;
      }
      .my-input {
        width: 150px;
      }
      .btn-box {
        width: 140px;
        margin-left: 50px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
```

## table 表格

```js
<g-table :column="formulaColumn" :data="specData" :scrollY="650" @tableReload="refTable" :rowSelection="{ toKey: 'categoryStockupStateId' }"></g-table>

// 设置表格数据
  const formulaColumn = reactive([
    {
      title: '名称',
      dataIndex: 'name',
      width: 150,
      minWidth: 150,
      show: true
    },
    {
      title: '排序',
      dataIndex: 'sort',
      width: 150,
      minWidth: 150,
      show: true
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 150,
      minWidth: 150,
      show: true
    },
    {
      title: '操作',
      dataIndex: 'operation',
      width: 150,
      minWidth: 150,
      show: true
    }
  ]);

    // 查询表格数据的网络请求
    const getTableDate = function (type: number, id: string | number) {
      $axios.post($api.H_queryByPage, { type: type, categoryId: id }).then((res: any) => {
        specData.value = res.data.data;
      });
    };
  // 设置数据
  let specData = ref([]);
  return {
    formulaColumn,
    specData
  }
```

- 上一次是将表格的 Column,data,page 定义在 state 一个 reactive 的 state 对象中，并使用`...toRefs(state)`的方式进行返回
- 这一个将 Column,data,page 分开定义，感觉还是上一次的方式更好
- 上一次使用`state.data = res.data.data`保存网络请求返回的数据
- 这次需要使用`specData.value = res.data.data`保存网络请求相关数据

需要在哪些时候**发送 table 的网络请求**：

1. 点击树 tree 的节点时

   ```js
   const selectNode = (id: string | number) => {
     searchValue.value = ''; //清空搜索数据
     hqsForm.formValue['categoryId'] = id; //保存id
     hqsForm.formValue['type'] = +activeKey.value; //保存tabs的值
     console.log('选择节点type值', activeKey.value);
     // getTableDate(1, id);
     getTableDate(+activeKey.value, hqsForm.formValue['categoryId']);
   };
   ```

2. 点击标签栏 tabs 时

   ```js
   const tabChange = () => {
     searchValue.value = '';
     hqsForm.formValue['type'] = +activeKey.value;
     if (hqsForm.formValue['categoryId']) {
       getTableDate(+activeKey.value, hqsForm.formValue['categoryId']);
     }
   };
   ```

3. 点击搜索按钮时

   ```js
   const searchClass = () => {
     const info = {
       type: +activeKey.value,
       categoryId: hqsForm.formValue['categoryId'],
       name: searchValue.value
     };
     console.log(info);
     getClassData(info);
   };
   ```

## modal 弹窗

```js
    <a-modal v-model:visible="modalVisible" @ok="modalHandleOk" :title="modalTitle">
      <a-form v-bind="modalLayout" :model="hqsForm.formValue" :rules="hqsForm.rules" ref="brandDom">
        <a-form-item v-for="(item, index) in hqsForm.formItem" :key="index" :name="item.name" :label="item.label">
          <a-input v-model:value="hqsForm.formValue[item.name]" :placeholder="item.placeholder ? item.placeholder : '请输入'" :readOnly="item.readOnly ? item.readOnly : false" />
        </a-form-item>
        <div v-if="modalType === '2'">
          <a-form-item label="创建人">
            <span class="ant-form-text">
              {{ hqsForm.formValue['createUser'] }}
            </span>
          </a-form-item>
          <a-form-item label="创建时间">
            <span class="ant-form-text">
              {{ $fn.dateFormat(new Date(hqsForm.formValue['createTime']), 'yyyy-MM-dd') }}
            </span>
          </a-form-item>
        </div>
      </a-form>
    </a-modal>
```
