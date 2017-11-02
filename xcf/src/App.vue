<template>
  <div id="app">
    <!-- 话题列表的导航 -->
    <my-header></my-header>
    <!-- 用户信息登录的导航 -->
    <router-view></router-view>
  </div>
</template>

<script>
  // 引入头部
  import myHeader from '@/components/my-header/my-header'
  export default {
    components: {
      myHeader
    },
    created () {
      // console.log(this.$route)
    }
  }
</script>
<style>
  /* 引入CSS文件 */
  @import './assets/css/reset.css';

</style>
