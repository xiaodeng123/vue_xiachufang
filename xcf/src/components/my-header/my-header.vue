<template>
  <div>
  	<!-- 头部开始 -->
  	<header id="site-header">
      <!-- logo开始 -->
      <div id="logo">
        <div>
          <img src="static/images/logo.png" alt="">
        </div>
      </div>
      <!-- logo结束 -->

      <!-- 搜索框开始 -->
      <form action="">
         <router-link :to="'/navigation-search/' + inputText">
          <img src="static/images/search.png" alt="">
        </router-link>
        <input type="text" placeholder="搜索菜谱、食材" v-model="inputText" v-on:keydown.enter="addStar">
      </form>
      <!-- 搜索框结束 -->
  	</header>
    <!-- 头部结束 -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        inputText: ''
      }
    },
    methods: {
      addStar () {
        alert('请点击搜索框搜索按钮')
      }
    }
  }
</script>

<style scoped>
  /*头部开始*/
  #site-header {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.55rem 1.0rem;
    border-bottom: 0;
    background-color: #fff;
    z-index: 50;
    box-shadow: 0 5px 2px -2px rgba(0,0,0,.08);
  }

  /*logo开始*/
  #logo {
    height: 1.65rem;
    float: left;
    margin-top: 3px;
    margin-right: 0.5rem;
    /*background: #00f;*/
  }
  #logo > div {
    display: inline-block;
    height: 1.45rem;
    margin: 0 auto;
    width: 4.3rem;
  }
  /*logo结束*/

  /*搜索框开始*/
  #site-header > form > input {
    display: block;
    float: right;
    font-size: 0.7rem;
    height: 1.45rem;
    margin-top: 3px;
    line-height: 1.45rem;
    padding-left: 1.0rem;
    padding-right: 1.50rem;
    width: 8.0rem;
    box-sizing: border-box;
    border: 1px solid #e8e6e5;
    background-repeat: no-repeat;
    background-size: 1.0rem;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    position: relative;
    z-index: 0;
    margin-right: -0.15rem;
  }
  #site-header > form > a {
    padding: 0;
    float: right;
    position: relative;
    z-index: 2;
    border: none;
    /*outline:none;*/
    margin-left: -1.7rem;
    margin-top: 5px;
    width: 1.2rem;
    height: 1.2rem;
    background: #fff;
  }
  #site-header > form > a > img {
    margin: 0 auto;
    margin-top: 0.1rem;
    width: 1.0rem;
    height: 1.0rem;
  }
  /*搜索框结束*/
  /*头部结束*/
</style>