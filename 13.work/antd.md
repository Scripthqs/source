# 自定义 antd 样式

```css
.center {
  text-align: center;
}
.btn {
  margin-left: 10px;
}
.mb {
  margin-bottom: 37px;
}
.submit-btn {
  width: 90px;
  height: 40px;
  background: #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #ffffff;
  opacity: 1;
}
.reset-btn {
  width: 90px;
  height: 40px;
  border: 1px solid #6671fa;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #6671fa;
  opacity: 1;
}

:deep(.search-form .ant-form-item-label label) {
  height: 44px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #263948;
  opacity: 1;
}

:deep(.search-form .ant-form-item .ant-input) {
  height: 44px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-picker) {
  width: 200px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-select-selector) {
  width: 200px;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e5e5ea;
  opacity: 1;
  border-radius: 4px;
}

:deep(.search-form .ant-form-item .ant-select-selection-placeholder) {
  line-height: 44px;
}

:deep(.search-form .ant-form-item .ant-select-selection-item) {
  line-height: 44px;
}
:global(.user-table .ant-table-thead > tr > th) {
  /* width: 1500px; */
  height: 50px;
  background: #f7f7f7;
  opacity: 1;
  border-radius: 5px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 600;
  line-height: 23px;
  color: #263238;
}

:global(.user-table .ant-table-container) {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  line-height: 23px;
  color: #5a686f;
  opacity: 1;
}
```
