import request from '@/utils/request'
// import store from '@/store/index'
// 登录
export const login = (data) => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

// 获取验证码
export function getCodes (mobile) {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}

// 获取用户自己的信息
export function getCurrentUser () {
  return request({
    method: 'GET',
    url: '/v1_0/user'
    // headers: {
    //   // 注意：该接口需要授权才能访问，token的数据格式：Bearer token数据
    //   Authorization: `Bearer ${store.state.user.tokens.token}`
    // }
  })
}
