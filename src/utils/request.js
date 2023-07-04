/* 请求模块 */
import axios from 'axios'
// 在非组件模块中获取 store 必须通过这种方式
// 这里单独加载 store，和在组件中 this.$store 一个东西
import store from '@/store/index'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // 基础路径
  // http://toutiao.itheima.net/v1_0/authorizations // 原始路径，不能用了
  // 项目接口地址由原来的 http://ttapi.research.itcast.cn/
  // 变更为 http://api-toutiao-web.itheima.net
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求前做一些事
  // 判断用户目前的状态，如果用户已登录，统一给接口设置token信息
  // console.log(process.env)
  if (store.state.user.tokens) {
    config.headers.Authorization = `Bearer ${store.state.user.tokens.token}`
  }
  // 一定要返回config，否则请求会停在这里
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// 导出
export default request
