<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--
      只有表单验证通过才会调用onSubmit
      show-error 是否在校验不通过时标红输入框
      show-error-message 是否在校验不通过时在输入框下方展示错误提示
      validate-first 是否在某一项校验不通过时停止校验
    -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      validate-first
      ref="login-form"
      @submit="onSubmit"
      @failed="onFailed">
      <van-field
        v-model="user.mobile"
        name="mobile"
        label="用户名"
        placeholder="用户名"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        name="code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :rules="formRules.code"
      >
        <template #button>
          <van-button size="small" type="primary" @click.prevent="onSendCode">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { login, getCodes } from '@/api/user'

export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      formRules: {
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请填写验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    async onSubmit (values) {
      console.log('submit', values)
      Toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
      })
      try {
        const res = await login(this.user)
        console.log(res)
        Toast.success('登录成功')
      } catch (error) {
        console.log(error)
        Toast.fail('登录失败')
      }
    },
    onFailed (errorInfo) {
      console.log(errorInfo)
      if (errorInfo.errors[0]) {
        Toast({
          message: errorInfo.errors[0].message,
          position: 'top'
        })
      }
    },
    // 发送验证码
    async onSendCode () {
      try {
        // 校验手机号码
        const loginForm = await this.$refs['login-form'].validate('mobile')
        console.log(loginForm)
        // 验证通过，请求验证码
        const res = await getCodes(this.user.mobile)
        console.log('getCodes: ', res)
      } catch (error) {
        let message = ''
        if (error && error.response && error.response.status === 429) {
          message = '发送验证码太频繁了，请一分钟后再试'
        } else if (error.name === 'mobile') {
          message = error.message
        } else {
          message = '发送验证码失败，请稍后重试'
        }
        console.dir(error)
        Toast({
          message: message,
          position: 'top'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login-btn{
  padding: 26px 16px;
}
</style>
