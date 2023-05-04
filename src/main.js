import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 Vant 组件库
import Vant from 'vant'
// 加载 Vant 组件库样式
import 'vant/lib/index.css'
// 自动设置rem基准值（html标签字体大小）
import 'amfe-flexible'
// 引入全局样式，在引入Vant之后引入全局样式，可覆盖原有样式，自定义更加方便，不需要加"!important"
import '@/styles/index.scss'

// 全局注册 Vant 中的组件
Vue.use(Vant)
Vue.config.productionTip = false

// 创建 Vue 根实例，将 router、store 配置到根实例中
// 把 App 根组件渲染到 #app 节点
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
