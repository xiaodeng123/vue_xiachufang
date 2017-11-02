<template>
  <div>
    <div class="loading" v-show="!navSearch.length">
        <img src="static/images/3d4273f082025aafe2e1f7d7f8edab64024f1aa8.jpg" alt="">
    </div>
    <!-- 主体开始 -->
    <main id="site-list">
      <!-- 头部开始 -->
      <header id="detailsHeader">
        <!-- 箭头开始 -->
        <div id="goback" @click="returnback">
          <img src="static/images/e992f21e86250f3478ee7e650ef5a958.png" alt="">
        </div>
        <!-- 箭头结束 -->
        <div id="detailsName">
          <span style="color: #86cedc;">列</span>
          <span style="color: #ea3421;">表</span>
          <span style="color: #ff8c5c;">页</span>
        </div>
      </header>
      <!-- 头部结束 -->
      <!-- 类名开始 -->
      <section class="site-list-taxon" v-show="navSearch.length">
        <h2>{{ getName }}</h2>
        <ul>
          <li>
            <span  class="light-gray-font">最受欢迎</span>
          </li>
          <li>
            <span>最近流行</span>
          </li>
        </ul>
      </section>
      <!-- 类名结束 -->

      <!-- 内容开始 -->
      <section class="site-list-content">
        <!-- 菜名开始 -->
        <div id="add-more-container">
          <div v-for="item in navSearch">
            <router-link :to="'/navigation-details/' + item.id">
              <div>
                <aside>
                  <img :src="item.pic">
                </aside>
                <div class="add-more-container-right">
                  <header class="greensname">{{ item.name }}</header>
                  <div>{{ item.tag }}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- 菜名结束 -->
        <!-- 更多开始 -->
        <div id="add-more-button" v-show="navSearch.length">
          <router-link to="/">搜索更多</router-link>
        </div>
        <!-- 更多结束 -->
      </section>
      <!-- 内容结束 --> 
    </main>
    <!-- 主体结束 -->
    <!-- 尾部开始 -->
    <footer id="site-footer">
      <router-link to="/">主页</router-link>
      <div @click="returnback">返回</div>
    </footer>
    <!-- 尾部结束 -->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        navSearch: [],
        getName: ''
      }
    },
    created () {
      this._getGreens()
    },
    methods: {
      returnback () {
        this.$router.back()
      },
      // 自定义的规则
      _getGreens () {
        // 请求的url地址
        let url = 'https://bird.ioliu.cn/v2?url=https://way.jd.com/jisuapi/search'
        this.getName = this.$route.params.name
        // Promise 语法结构
        axios.get(url, {
          // 参数
          params: {
            appkey: 'dbd75fbdbd139423e76f354b9270b5c1',
            keyword: this.getName,
            num: 20
          }
          // 请求头信息
        }).then((res) => {
          if (res.status === 200) {
            console.log(res.data.result.result.list)
            // console.log(res)
            this.navSearch = res.data.result.result.list
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  .loading {
    width: 293px;
    height: 220px;
    margin: 0 auto;
    margin-top: 3.6rem;
    /*background: #000;*/
  }
  #detailsHeader {
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0.55rem 1.0rem;
    border-bottom: 0;
    background-color: #fff;
    z-index: 555;
  }
  /*箭头开始*/
  #goback{
    width: 1.0rem;
    height: 1.0rem;
    float: left;
    position: relative;
    top: 0.4rem;
    margin-left: -0.25rem;
    display: block
  }
  /*箭头结束*/
  /*字开始*/
  #detailsName {
    height: 1.65rem;
    text-align: center;
    font-size: 1.4rem;
    margin-left: -0.75rem;
    line-height: 1.65rem;
    font-weight: 500;
  }
  /*字结束*/
  /*列表页主体开始*/
  /*类名开始*/
  #site-list {
    margin-top: 3.2rem;
    margin-bottom: 2.0rem;
  }
  .site-list-taxon {
    width: 100%;
    height: auto;
    padding: 1.0rem;
    text-align: center;
    overflow: hidden; 
  }
  .site-list-taxon > h2 {
    font-size: 1.15rem;
    font-weight: bold;
  }
  /*类名结束*/

  /*内容开始*/
  /*菜名开始*/
  #add-more-container {
   margin: 1.0rem 0;
   overflow: hidden;
  }
  #add-more-container a {
    padding: 0 0 0.75rem;
    color: #383835;
    margin: 0 1.0rem;
    display: block;
  }
  #add-more-container a > div {
    width: 100%;
    height: 4.75rem;
  }
  #add-more-container a aside {
    width: 7.0rem;
    height: 4.75rem;
    float: left;
    /*background: #00f;*/
    overflow: hidden;
  }
  .add-more-container-right {
    float: left;
    line-height: 0.8rem;
    width: 8.0rem;
    /*background: #0f0;*/
    padding-left: 0.6rem;
  }
  .greensname {
    width: 1px;
    min-width: 100%;
    font-size: 0.9rem;
    padding: 0.1rem 0 0.5rem;
    line-height: 1.1rem;
  }
  .add-more-container-right > div {
    color: #777;
    font-size: 0.6rem;
    line-height: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .site-list-taxon > h2 {
  font-size: 1.15rem;
  font-weight: bold;
  float: left;
  }
  .site-list-taxon > ul {
    float: right;
  }
  .site-list-taxon > ul > li {
    display: inline-block;
    margin-left: 0.75rem;
    line-height: 1.6rem; 
    font-size: 0.75rem;
  }
  .site-list-taxon > ul > li > span {
    color: #b3b3b1;
  }
  .site-list-taxon > ul > li > .light-gray-font {
    color: #fa6650;
  }
  /*菜名结束*/

  /*更多开始*/
  #add-more-button {
    margin: 1.0rem 0;
    padding: 0 1.0rem;
  }
  #add-more-button > a {
    text-align: center;
    border: 1px solid #fa6650;
    display: block;
    height: 2.4rem;
    font-size: 0.85rem;
    color: #fa6650;
    line-height: 2.3rem;
  }
  /*更多结束*/
  /*列表页主体结束*/
</style>
