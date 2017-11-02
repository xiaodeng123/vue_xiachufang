<template>
  <div>
    <div class="loading" v-show="!detailsId.content">
      <img src="static/images/3d4273f082025aafe2e1f7d7f8edab64024f1aa8.jpg" alt="">
    </div>
  	<!-- 详情主体开始 -->
    <main id="details">
      <!-- 头部开始 -->
      <header id="detailsHeader">
        <!-- 箭头开始 -->
        <div id="goback" @click="returnback">
          <img src="static/images/e992f21e86250f3478ee7e650ef5a958.png" alt="">
        </div>
        <!-- 箭头结束 -->
        <div id="detailsName">
          <span style="color: #86cedc;">详</span>
          <span style="color: #ea3421;">情</span>
          <span style="color: #ff8c5c;">页</span>
        </div>
      </header>
      <!-- 头部结束 -->
    	<!-- 展示图开始 -->
    	<div class="recipe-cover">
    			<img :src="detailsId.pic" alt="">
    	</div>
    	<!-- 图片展示结束 -->

    	<!-- 详细做法开始 -->
    	<div class="wrapper">
    		<!-- 标题开始 -->
    		<header>
    			<div>
    				<h2>{{ detailsId.name }}</h2>
    			</div>
    		</header>
    		<!-- 标题结束 -->

    		<!-- 菜式描述开始 -->
    		<setion class="describe">
    			<p v-html = "detailsId.content"></p>	
    		</setion>	
    		<!-- 菜式描述结束 -->

    		<!-- 配料开始 -->
    		<setion class="dosing" v-show="detailsId.content">
    			<h2 class="sub-title">用料：</h2>
    			<ul class="plain">
    				<li v-for="item in detailsMaterial">
    					<span class="ingredient">{{ item.mname }}</span>
    					<span class="weight">{{ item.amount }}</span>
    				</li>
    			</ul>
    		</setion>
    		<!-- 配料结束 -->

    		<!-- 步骤开始 -->
    		<setion class="steps">
  				<ul class="plain">
  					<li v-for="(item,index) in detailsProcess">
  							<aside class="sub-title">步骤&#160{{ index + 1 }}</aside>
  							<div>
  								<div class="step-cover">
  									<img :src="item.pic" alt="">
  								</div>
  								<p class="word-wrap" v-html = "item.pcontent"></p>
  							</div>
  					</li>
            <li style="margin-top: 2.0rem;margin-bottom: 2.0rem;text-align: center;color: #aaa;font-size: 0.8rem;">已到底部</li>
  				</ul>
    		</setion>
    		<!-- 步骤结束 -->
    	</div>
    	<!-- 详细做法结束 -->
  		<!-- 详情展示结束 -->
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
        detailsId: [],
        detailsMaterial: [],
        detailsProcess: []
      }
    },
    created () {
      this._getDetails()
    },
    methods: {
      returnback () {
        this.$router.back()
      },
      // 自定义的规则
      _getDetails () {
        // 请求的url地址
        let url = 'https://bird.ioliu.cn/v2?url=https://way.jd.com/jisuapi/detail'
        let getId = this.$route.params.id

        // Promise 语法结构
        axios.get(url, {
          // 参数
          params: {
            appkey: 'dbd75fbdbd139423e76f354b9270b5c1',
            id: getId
          }
          // 请求头信息
        }).then((res) => {
          if (res.status === 200) {
            // console.log(res.data.result.result)
            this.detailsId = res.data.result.result
            this.detailsMaterial = res.data.result.result.material
            this.detailsProcess = res.data.result.result.process
          }
        }).catch(() => {
          this.$router.back()
        })
        // console.log(this.$route.params.id)
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
    z-index: 50;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.08);
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

	/*详情主体开始*/
	/*展示图开始*/
  #details {
    margin-top: 3.2rem;
    margin-bottom: 2.0rem;
  }
	.recipe-cover {
		max-width: 100%;
    height: 14.0rem;
    max-height: 14.0rem;
   /*background: #000;*/
    position: relative;
    overflow: hidden;
	}
	.recipe-cover > img {
		position: absolute;
    top: -499.95rem;
    left: -499.95rem;
    right: -499.95rem;
    bottom: -499.95rem;
    margin: auto;
    width: 100%;
    height: auto;
    display: block;
    min-width: 100%;
    max-width: 100%;
	}
	/*展示图结束*/

	/*详细做法开始*/
	.wrapper {
		margin: 1.0rem;
	}
	/*标题开始*/
	.wrapper > header {
		margin: 1.25rem 0;
    text-align: center;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #f0f0f0;
	}
	.wrapper > header h2 {
		font-size: 1.5rem;
    margin-bottom: 0.25rem;
		margin: 0;
    padding: 0;
    list-style-type: none;
	}
	/*标题结束*/

	/*菜式描述开始*/

	/*菜式描述结束*/
	.describe {
		display: block;
		margin-bottom: 1.5rem;
    text-indent: 2em;
	}
	.describe > p {
		font-size: 17px;
		line-height: 22px;
	}
	/*详细做法结束*/

	/*配料开始*/
	.dosing > .sub-title {
		font-size: 1.0rem;
    font-weight: 800;
    margin: 0 0 0.75rem;
	}
	.dosing > .plain > li {
		border-top: 1px solid #ececea;
		overflow: hidden;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.8rem;
    padding: 0.55rem 0;
    overflow: hidden;
    display: block;
    color: #191919;
	}
	.dosing > .plain > li .ingredient {
		width: 55%;
    padding-right: 0.5rem;
    float: left;
    color: #191919;
	}
	.dosing > .plain > li .weight {
		width: 45%;
		float: left;
    color: #191919;
	} 
	/*配料结束*/

	/*步骤开始*/
	.steps > .plain > li {
		margin-top: 1.0rem;
	  margin-bottom: 1.0rem;
	}
	.sub-title {
		font-size: 20px;
    margin: 0 0 15px;
    font-weight: 400;
    display: block;
	}
	.step-cover {
		max-width: 100%;
		max-height: 220px;
    height: 220px;
    position: relative;
    overflow: hidden;
	}
	.step-cover > img {
		max-width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
	}
	.steps .word-wrap{
		display: block;
		width: 100%;
		font-size: 17px;
    margin-top: 17px;
    line-height: 1.6;
    text-indent: 2em;
	}
	 
	/*/步骤结束*/

	/*详情主体结束*/
</style>

