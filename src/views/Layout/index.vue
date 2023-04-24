<template>
  <div>
    <!-- 子路由出口 -->
    <router-view />
    <!-- 底部导航栏 -->
    <!-- Tabbar标签栏支持路由模式 -->
    <!-- 解决方法一：把 route 改成 routes -->
    <van-tabbar v-model="active" routes>
      <van-tabbar-item icon="home-o" to="/" @click="handleClick">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="tv-o" to="/tv">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 解决方法二：更改标签的to属性 -->
    <!-- <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" :to="{ name:'home' }" @click="handleClick">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" :to="{ name:'qa' }">问答</van-tabbar-item>
      <van-tabbar-item icon="tv-o" :to="{ name:'tv' }">视频</van-tabbar-item>
      <van-tabbar-item icon="manager-o" :to="{ name:'my' }">我的</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleClick () {
      console.log(this.active)
    }
  }
}
</script>

<style>

</style>
