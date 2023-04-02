# antd 表单验证

## 验证非空及字段长度

```js
// 必填，非空字符，10字以内
name: [
  { required: true, message: '必填项', whitespace: true },
  { max: 10, message: '请在1-10个字之间' }
],
```

## 验证数字

### 验证整数

```js
sort: [
  { required: true, message: "必填项" },
  { type: "integer", min: 1, max: 126, message: "请输入1到126的整数" },
];
```

### 0-1000 的 3 位数，小数最多两位

```js
let floatRule = async (_rule: RuleObject, value: any) => {
  let flag = /^\d+$|(?=(\.\d{1,2}$))/.test(value + "");
  if (!value) {
    return Promise.reject("必填项!");
  } else if (!flag) {
    return Promise.reject("小数长度最多2位!");
  } else {
    return Promise.resolve();
  }
};
const stateForm = reactive({
  setFormData: {},
  formRules: {
    weight: [
      { required: true, validator: floatRule },
      { type: "number", min: 1, max: 1000, message: "请输入1到1000的数据" },
    ],
  },
});
```
