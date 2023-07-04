<template>
  <div class="my-container">
    <!-- 已登录状态 -->
    <van-cell-group v-if="tokens" class="my-info">
      <van-cell
        class="base-info"
        center
        :border="false">
        <van-image
          slot="icon"
          class="avatar"
          width="30"
          height="30"
          fit="cover"
          round
          :src="currentUser.photo"
        />
        <div class="name" slot="title">{{currentUser.name}}</div>
        <van-button
          class="update-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <van-grid  :border="false">
        <!-- <van-grid-item>
          <div slot="icon">123</div>
          <div slot="text">文字</div>
        </van-grid-item> -->
        <van-grid-item text="头条">
          <div slot="icon">{{currentUser.art_count}}</div>
        </van-grid-item>
        <van-grid-item text="关注">
          <div slot="icon">{{currentUser.follow_count}}</div>
        </van-grid-item>
        <van-grid-item text="粉丝">
          <div slot="icon">{{currentUser.fans_count}}</div>
        </van-grid-item>
        <van-grid-item text="获赞">
          <div slot="icon">{{currentUser.like_count}}</div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 未登录状态 -->
    <div v-else class="not-login">
      <div @click="$router.push('/login')">
        <img class="mobile" src="@/assets/images/mobile.png">
      </div>
      <div class="text">登录</div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="收藏" />
      <van-grid-item icon="browsing-history-o" text="历史" />
    </van-grid>
    <van-cell title="消息通知" is-link to="/" />
    <van-cell title="小智同学" is-link to="/" />
    <van-cell title="退出登录" v-if="tokens" @click="onLogout"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '@/api/user'
export default {
  name: 'my',
  data () {
    return {
      // 当前登录用户信息
      currentUser: {}
    }
  },
  created () {
    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_BASE_API, 'ceshi')
    this.loadCurrentUser()
  },
  computed: {
    // 将容器中的数据映射到本地
    ...mapState('user', ['tokens'])
  },
  methods: {
    onLogout () {
      // 提示用户是否退出
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      }).then(() => {
        // 清除用户登录状态
        this.$store.commit('user/SET_USER', null)
      }).catch(() => {
        // on cancel
      })
    },
    async loadCurrentUser () {
      const { data } = await getCurrentUser()
      this.currentUser = data.data
      console.log('currentUser: ', this.currentUser)
    }
  }
}
</script>

<style scoped lang="scss">
.my-info{
  background: url("@/assets/images/banner.png");
  background-size: cover;
  .base-info{
    background-color: unset;
    // .avatar{

    // }
    // .update-btn{

    // }
  }
  ::v-deep .van-grid-item__content{
    background-color: unset;
  }
}
.not-login{
  height: 288px;
  background: url("@/assets/images/banner.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .mobile{
    width: 132px;
    height: 132px;
  }
  .text{
    font-size: 28px;
    color: #fff;
  }
}
</style>
