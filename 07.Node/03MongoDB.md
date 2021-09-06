# 增删改查

## 1.添加

向集合中添加文档数据：

```bash
# 添加单条文档数据
db.表名/集合名.insertOne({ key: value , key: value...})

# 添加多条文档数据
db.表名/集合名.insertMany([{}, {}, {}])

# 可以添加单条也可以多条数据
db.表名/集合名.insert( {} )
db.表名/集合名.insert([{}, {} ])
```

例如

```bash
# 使用`insertOne`添加单个数据到`shop`库的`members`集合
db.members.insertOne({id:1,name: 'zhangsan'})

# 使用`insertMany`添加2个数据到`shop`库的`members`集合
db.members.insertMany([{id:1,name: 'zhangsan'}, {id:2,name: 'lisi'}])

# 使用`insert`添加2个数据到`shop`库的`members`集合
db.members.insert([{id:1,name: 'zhangsan'}, {id:2,name: 'lisi'}])
```

> 实际使用的比较多的是：insertOne()、insert({})，插入多个的形式仅作了解。

## 2.查询

### 2.1查询所有的数据

```
db.表名/集合名.find();    # 获取全部
db.表名/集合名.find({});  # 获取全部
```

> `{ }`用于条件限制，当没条件的时候，上述两个用法效果一致

> 关于`_id`
>
> ***{ "_id" : ObjectId("5c0fa4758878caa23d36c0fb"), "name" : "zhangsan" }***
>
> objectID类型
> ObjectId对象对象数据组成：时间戳 |机器码|PID|计数器   **系统自动生成**
> _id的键值我们可以自己输入，但是不能重复，因此为了避免工作的复杂建议不要人为的去干预_id的是很工程

### 2.2带条件查询

> 此处允许使用多个条件，如果有就在"{}"中多写几个，**默认是“且”条件关系**。

```bash
db.表名/集合名.find({key:value})
```

### 2.3字段显示控制

```bash
db.表名/集合名.find(条件,{字段名:0或1,....})
# 0：不显示
# 1：显示
# _id字段，由于其是系统产生的，默认情况下是显示的
```

### 2.4逻辑运算

- `$gt` >
- `$gte`>=
- `$lt`<
- `$lte`<=
- `$ne`!=
- `$in:[1,2,3]` 集合，符合1或2或3的数据
- `默认,分割的各种条件就是且关系`
- `$or:[{条件1},{条件2}]` 集合，符合1或2或3的数据

```bash
### 条件表达式
# 年龄大于5的
db.表名/集合名.find({age:{$gt:5}});  #age > 5（great than）
# 年龄大于等于5的
db.表名/集合名.find({age:{$gte:5}}); #age >= 5 （great than & equal）
# 年龄小于5的
db.表名/集合名.find({age:{$lt:5}}); #age < 5  （less than）
# 年龄小于等于5的
db.表名/集合名.find({age:{$lte:5}}); #age <= 5
# 年龄不等于5的
db.表名/集合名.find({age:{$ne:5}}); #age != 5   （not equal）
# 在一个指定的数值中查询  $in    年龄在不在这几个指定数值当中
db.表名/集合名.find({age:{$in:[1,2,3]})  ## where xxx in '集合'

## 且关系  and
db.表名/集合名.find({age:{$lt:5},username:"user11"})
## where age < 5 & username = 'user11'

## 或关系 or（有点绕）
db.表名/集合名.find({$or:[{条件1},{条件2}]})
## 例如
db.表名/集合名.find({$or:[{age:{$ne:5}},{username: "user11"}]});

需求：查询出年龄小于30或者id>3的数据
db.members.find({$or:[{age:{$lt:30}},{id:{$gt:3}}]})
```

### 2.5模糊查询

```bash
#正则
db.表名/集合名.find({字段名:/正则/i})
# i 不区分大小写
# `不能加引号`，否则就成了字符串，成了字符串就成了精确匹配
```

### 2.6统计

计数操作：数记录的数量

```bash
#统计总记录数
db.表名/集合名.count();		// 统计所有的记录的总数
db.表名/集合名.find({}).count();	// 统计符合条件的结果的记录总数
```

> 注意点：find()顺序是否可以与count()颠倒。
>
> count不能与find的顺序交换

### 2.7排序

```bash
# 排序
# 1 升序   -1 降序     字段
# 以age字段来升序
db.表名/集合名.find().sort({age:1})
# 以age字段来降序
db.表名/集合名.find().sort({age:-1})
```

### 2.8分页（实用）

```bash
# 指定获取几条  skip/limit   分页
db.表名/集合名.find().limit(3);
db.表名/集合名.find().skip(1).limit(3);

## skip表示起始位置，也就是从第几个开始
## limit表示获取的记录的个数（长度）
## skip与limit的顺序先后无所谓
```

## 3.更新

根据条件修改已存在集合中的文档数据：

```bash
# 更新是要有条件的，没有条件在数据库层面来讲是可以更新的，但是实际是没有对应的业务需求

# 只修改单条文档
db.表名/集合名.updateOne({key:value},{$set:{key:value}})
# 修改符合条件所有文档数据
db.表名/集合名.updateMany({key:value},{$set:{key:value}})
## 如果上述两个方法的条件一致，并且有多个符合条件的，那么：
# updateOne，不管有多少个符合条件的只修改第一个
# updateMany，有多少改多少

# 字段的值的`自增和自减`
db.表名/集合名.updateOne({key:value},{$inc:{key:1}})		// increments，自增
db.表名/集合名.updateMany({key:value},{$inc:{key:1}})
db.表名/集合名.updateOne({key:value},{$inc:{key:-1}})		// decrements
db.表名/集合名.updateMany({key:value},{$inc:{key:-1}})
# 自增是整数，自减是负数
# 更新和删除操作允许不写条件，但是不能不写
```

## 4.删除（了解）

删除在实际开发的时候一般不用，**正常做程序开发的时候所使用的删除实际上是修改**。

删除分为：真删除（物理删除）、假删除（逻辑删除）。

删除集合中已存在的文档数据： 

~~~shell
# 删除单条文档
db.表名/集合名.deleteOne({ key: value })
# 删除符合条件多条文档
db.表名/集合名.deleteMany({key: value})
# 删除全部数据（慎用）
db.表名/集合名.deleteMany({})
~~~

