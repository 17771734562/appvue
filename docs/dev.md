<h1>开发文档</h1>

> &copy;武汉珞珈新图科技有限公司 2019

## 1. 框架

- JS: Vue2.x
- UI: MUI

## 2. 版本控制

### 2.1. 软件及版本
Git v2.15+

### 2.2. 相关工具

- Git bash
- IDE自带git功能
- SourceTree

### 2.3. Git提交规范

参见[Git简易提交规范][1]

## 3. 目录结构
在vue的cli（3.0版）初始化目录基础上新增了部分目录，这里予以说明

```js
app
  |_ docs //自定义目录，存放项目相关文档
    |_ dev.md //开发文档（当前阅读的文档）
  |_ node_modules //依赖包文件夹，git忽略
  |_ public //公共资源文件夹，类似cli2.0目录结构中的static文件夹
    |_ img //其它一些静态的图片，打包时会打包到dist/img目录
    |_ index.html //应用主页 SPA的入口
    |_ favicon.ico //应用的ico图标
    ... //其它静态文件（夹）
  |_ src //主要开发工作所在文件夹
    |_ assets //存放一些图片、字体等
    |_ components //通用组件文件夹
    |_ views //页面组件文件夹
  |_ APP.vue //顶级（应用）组件
  |_ main.js //js入口文件
  |_ router.js //路由定义主文件 cli添加router插件时自动加入到这里的，这里予以保留
  |_ store.js //状态主文件 添加vuex插件自动生成该文件
  |_ .gitignore //git忽略文件（夹）配置
  |_ package.json
  |_ README.md
  |_ READMEVUE.md //脚手架自建readme，予以保留
```

## 4. 开发步骤

1. cd进项目目录 例如：`cd /d d:\www\hiking\app`
2. 安装依赖 `npm i`
3. 启动服务 `npm run serve` 类似旧版`npm run dev`
4. 编写业务组件
5. 浏览器查看效果
6. 重复4，5步
7. 按照规范提交代码

## 5. 开发规范

1. vue页面代码缩进为2个空格
2. vue文件名采用驼峰命名法，首字母大写
3. 文件夹名全部小写

## 6. 开发者
*无先后关系*
- Dicl
- 别傻了
- 阔活洵信


[1]: http://note.youdao.com/noteshare?id=537194bf6f5e1953ba9aa33dcd8c70f6&sub=592CE660D724476D9267BAED1E14597E 'Git提交规范'

***

***Edited by Dicl on Jun. 2019***