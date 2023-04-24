import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/') // 路由懒加载
  },
  {
    path: '/',
    component: () => import('@/views/Layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/')
      }, {
        path: '/qa', // 默认子路由
        name: 'qa',
        component: () => import('@/views/qa/')
      }, {
        path: '/tv', // 默认子路由
        name: 'tv',
        component: () => import('@/views/tv/')
      }, {
        path: '/my', // 默认子路由
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
