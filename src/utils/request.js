/* 请求模块 */
import axios from 'axios'
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 基础路径
  // http://toutiao.itheima.net/v1_0/authorizations // 原始路径，不能用了
})

// 请求拦截器

// 响应拦截器

// 导出
export default request
