# list 转 tree

## 方法 1

```js
// 转换成树形结构;
const setTreeData = (source: any) => {
  let cloneData = JSON.parse(JSON.stringify(source)); // 对源数据深度克隆
  return cloneData.filter((father: any) => {
    // 循环所有项，并添加children属性
    let branchArr = cloneData.filter((child: any) => father.departmentId == child.parentId); // 返回每一项的子级数组
    // console.log(branchArr)
    branchArr.length > 0 ? (father.children = branchArr) : ''; //给父级添加一个children属性，并赋值
    return father.parentId == '0'; //返回第一层
  });
};
```

## 方法 2

```js
const toTree = (data: any) => {
  //没有父节点的数据
  let parents = data.filter((val: any) => {
    return val.parentId == '0';
  }); //有父节点的数据
  let children = data.filter((val: any) => {
    return val.parentId > '0';
  }); //定义方法
  const translator = (parents: any, children: any) => {
    //遍历父节点数据
    parents.forEach((item: any) => {
      //遍历子节点数据
      children.forEach((current: any, index: number) => {
        //此时找到父节点下的子节点
        if (current.parentId == item.departmentId) {
          let temp: any = JSON.parse(JSON.stringify(children)); //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
          temp.splice(index, 1); //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
          translator([current], temp); //把找到子节点放入父节点的children属性中
          typeof item.children !== 'undefined' ? item.children.push(current) : (item.children = [current]);
        }
      });
    });
  };
  translator(parents, children);
  return parents;
};
```
