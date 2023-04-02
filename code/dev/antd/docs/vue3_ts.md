# 在 vue3 中使用 ts

## 使用 ts 定义 ref 数组

```ts
const fileName = ref([]);//此时数组push会报错，必须定义类型
const fileName = ref([] as string[]);
const fileName = ref<string[]>([]);
const fileName: any = ref([]);

fileName.value.push(res.name); //第一种定义方式，push报错
```
