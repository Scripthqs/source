# vuePress

### 1.安装初始化

- 全局安装

  ```bash
  $ npm install -g vuepress
  ```

- 创建个文件夹作为目录

  ```bash
  $ mkdir vuepress-blog
  # 该目录作为整本书的项目目录
  ```

- 项目初始化

  ```bash
  $ cd vuepress-blog
  $ npm init -y
  ```

  初始化后会生成一个`package.json`文件

- 在当前目录中创建一个`docs`目录

  ```bash
  $ mkdir docs
  # 主要存放博客书籍内容
  ```

- 首页内容书写(默认主题提供)

```js
        ---
        home: true
        heroImage: /hero.png
        heroText: Hero 标题
        tagline: Hero 副标题
        actionText: 快速上手 →
        actionLink: /zh/guide/
        features:
        - title: 简洁至上
          details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
        - title: Vue驱动
          details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
        - title: 高性能
          details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
        footer: MIT Licensed | Copyright © 2018-present Evan You
        ---
```

