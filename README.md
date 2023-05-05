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
## 网址：
1.黑马头条移动端-接口文档：https://toutiao.m.lipengzhou.com/api.html#
2.头条移动端：https://www.yuque.com/lipengzhou/toutiao-mobile-vue
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
1.Vue2 项目，安装 Vant2：```npm i vant@latest-v2 -S```

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
# 五、使用Vant自带的图标组件，并配置路由页面
## 标签栏路由模式遇到的问题
使用Vant2的Tabbar标签栏，按照下方代码，会出现<span style="color:red">标签栏第一个图标始终高亮，且点击无法切换到第一个标签页</span>的状态。
错误代码：
```html
<van-tabbar v-model="active" route>
  <van-tabbar-item icon="home-o" to="/" @click="handleClick">首页</van-tabbar-item>
  <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
  <van-tabbar-item icon="tv-o" to="/tv">视频</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
```
解决方法一：把 route 改成 routes
```html
<van-tabbar v-model="active" routes>
  <van-tabbar-item icon="home-o" to="/" @click="handleClick">首页</van-tabbar-item>
  <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
  <van-tabbar-item icon="tv-o" to="/tv">视频</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
```
解决方法二：更改标签的to属性
```html
<van-tabbar v-model="active" route>
  <van-tabbar-item icon="home-o" :to="{ name:'home' }" @click="handleClick">首页</van-tabbar-item>
  <van-tabbar-item icon="comment-o" :to="{ name:'qa' }">问答</van-tabbar-item>
  <van-tabbar-item icon="tv-o" :to="{ name:'tv' }">视频</van-tabbar-item>
  <van-tabbar-item icon="manager-o" :to="{ name:'my' }">我的</van-tabbar-item>
</van-tabbar>
```
# 六、封装请求模块axios
1.npm i axios
2.在utils文件夹下新建request.js
```js
// request.js
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
  //备用路径： http://toutiao.itheima.net/
})

// 请求拦截器

// 响应拦截器

// 导出
export default request
```
# 七、登录页面
1.基本样式vant，注意调整main.js中的引入顺序，在引入Vant之后引入全局样式，可覆盖Vant原有样式，自定义更加方便，不需要加"!important"

2.接口实现api、async/await、try/catch

3.状态提示Toast

4.表单验证rules-可以自定义验证规则及样式(标红或提示)

5.验证码：
校验手机号-验证通过-请求发送验证码-用户收到短信-输入验证码-请求登录
请求发送验证码-隐藏发送按钮-显示倒计时-倒计时结束-隐藏倒计时-显示发送按钮

# 八、存储token
在mutations中将token放入state中，一旦刷新，数据就会丢失，所以还要将token放在本地存储localStorage,将localStorage的方法封装起来，方便使用。