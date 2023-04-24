# toutiao-mobile

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# 步骤：
## 一、vue-cli创建项目，调整初始目录结构
1、删除并修改初始化的默认文件；

2、新增调整我们需要的目录结构：
①src/api 目录，存储接口封装
②src/utils 目录，存储一些工具模块
③src/styles 目录，存储样式资源，创建index.less 文件，存储全局样式，并在 main.js 中加载全局样式 ```import './styles/index.less'```
## 二、选择移动端UI组件库
awesome-vue vue官方收藏的资源链接——提供推荐的移动端UI组件库资源：
https://github.com/vuejs/awesome-vue#mobile
## 三、选择Vant
vant2官网：
https://vant-contrib.gitee.io/vant/v2/#/zh-CN/home

导入Vant组件库：
1.Vue 2 项目，安装 Vant 2：
npm i vant@latest-v2 -S
2.在main.js文件中一次性导入所有组件
```js
// main.js
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```
## 四、移动端rem适配
如果需要使用 rem 单位进行适配，推荐使用以下两个工具：
①postcss-pxtorem 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
②lib-flexible 用于设置 rem 基准值

1.npm i -S amfe-flexible
2.在main.js文件中
```js
// main.js
// 自动设置rem基准值（html标签字体大小）
import 'amfe-flexible'
```
3.npm install postcss postcss-pxtorem --save-dev
4.在根目录下创建postcss.config.js文件（PostCSS的配置文件）
```js
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
    },
  },
};
```
browserslist：https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist
