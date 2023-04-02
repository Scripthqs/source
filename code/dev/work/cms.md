```js
// 表单数据验证
let vali_num = async (_rule: RuleObject, value: string | number) => {
  if (value === '') {
    return Promise.reject('必填项');
  } else if (!(value >= 1 && value <= 126)) {
    return Promise.reject('请输入1-126的整数');
  } else {
    return Promise.resolve();
  }
};

// 弹出框里面的表单数据
let vali_num = async (_rule: RuleObject, value: string | number) => {
  console.log('value的类型', typeof value);
  if (value === '' || value === undefined) {
    return Promise.reject('必填项');
  } else if (Number.isFinite(+value)) {
    return Promise.resolve();
  } else {
    return Promise.reject('请输入数字');
  }
};
```
