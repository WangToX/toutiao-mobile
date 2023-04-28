<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="sms"
        name="验证码"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      sms: ''
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
