import { getStore, setStore } from '@/utils/storage'
// removeStore

// 将token的key值存储到变量里，防止写错名字
const TOKEN_KEY = 'userTokens'

export default ({
  namespaced: true,
  state: {
    tokens: getStore(TOKEN_KEY)
  },
  getters: {
  },
  mutations: {
    SET_USER (state, value) {
      console.log('tokens: ', value)
      state.tokens = value
      // 存储token到本地存储localStorage，防止刷新丢失数据
      setStore(TOKEN_KEY, state.tokens)
    }
  },
  actions: {
  }
})
