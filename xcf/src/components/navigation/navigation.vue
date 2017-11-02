<template>
  <main id="site-body">
    <!-- 菜品开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">热门菜品</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ homeCooking.name + '/' + homeCooking.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (1).jpg" alt="">
          </div>
          <div class="taxon">{{ homeCooking.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ privateKitchens.name + '/' + privateKitchens.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (2).jpg" alt="">
          </div>
          <div class="taxon">{{ privateKitchens.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ hotFood.name + '/' + hotFood.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (3).jpg" alt="">
          </div>
          <div class="taxon">{{ hotFood.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ coldDish.name + '/' + coldDish.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (4).jpg" alt="">
          </div>
          <div class="taxon">{{ coldDish.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ vegetarianDishes.name + '/' + vegetarianDishes.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (5).jpg" alt="">
          </div>
          <div class="taxon">{{ vegetarianDishes.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ wellQuicklyDish.name + '/' + wellQuicklyDish.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (6).jpg" alt="">
          </div>
          <div class="taxon">{{ wellQuicklyDish.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ underTheFood.name + '/' + underTheFood.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (7).jpg" alt="">
          </div>
          <div class="taxon">{{ underTheFood.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ farmStyle.name + '/' + farmStyle.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (8).jpg" alt="">
          </div>
          <div class="taxon">{{ farmStyle.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 菜品结束 -->

     <!-- 菜系开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">八大菜系</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ siChuan.name + '/' + siChuan.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (1).jpg" alt="">
          </div>
          <div class="taxon">{{ siChuan.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ huNan.name + '/' + huNan.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (2).jpg" alt="">
          </div>
          <div class="taxon">{{ huNan.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ guangDong.name + '/' + guangDong.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (3).jpg" alt="">
          </div>
          <div class="taxon">{{ guangDong.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ fuJian.name + '/' + fuJian.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (4).jpg" alt="">
          </div>
          <div class="taxon">{{ fuJian.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ zheJiang.name + '/' + zheJiang.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (5).jpg" alt="">
          </div>
          <div class="taxon">{{ zheJiang.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ shanDong.name + '/' + shanDong.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (6).jpg" alt="">
          </div>
          <div class="taxon">{{ shanDong.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ jiangSu.name + '/' + jiangSu.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (7).png" alt="">
          </div>
          <div class="taxon">{{ jiangSu.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ anHui.name + '/' + anHui.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (8).png" alt="">
          </div>
          <div class="taxon">{{ anHui.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 菜系结束 -->

    <!-- 主食开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">热门主食</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ rice.name + '/' + rice.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (1).png" alt="">
          </div>
          <div class="taxon">{{ rice.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ friedRice.name + '/' + friedRice.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (2).png" alt="">
          </div>
          <div class="taxon">{{ friedRice.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ baozi.name + '/' + baozi.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (3).jpg" alt="">
          </div>
          <div class="taxon">{{ baozi.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ soupRice.name + '/' + soupRice.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (4).jpg" alt="">
          </div>
          <div class="taxon">{{ soupRice.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ face.name + '/' + face.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (5).jpg" alt="">
          </div>
          <div class="taxon">{{ face.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ chowMein.name + '/' + chowMein.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (6).jpg" alt="">
          </div>
          <div class="taxon">{{ chowMein.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ dumpling.name + '/' + dumpling.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (7).jpg" alt="">
          </div>
          <div class="taxon">{{ dumpling.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ congee.name + '/' + congee.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (8).jpg" alt="">
          </div>
          <div class="taxon">{{ congee.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 主食结束 -->

    <!-- 功效开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">热门功效</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ loseWeight.name + '/' + loseWeight.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (1).png" alt="">
          </div>
          <div class="taxon">{{ loseWeight.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ lhairdressing.name + '/' + lhairdressing.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (2).jpg" alt="">
          </div>
          <div class="taxon">{{ lhairdressing.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ skinWhitening.name + '/' + skinWhitening.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (3).jpg" alt="">
          </div>
          <div class="taxon">{{ skinWhitening.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ detox.name + '/' + detox.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (4).jpg" alt="">
          </div>
          <div class="taxon">{{ detox.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ miscarriage.name + '/' + miscarriage.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (5).jpg" alt="">
          </div>
          <div class="taxon">{{ miscarriage.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ refreshOneself.name + '/' + refreshOneself.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (6).jpg" alt="">
          </div>
          <div class="taxon">{{ refreshOneself.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ clearingHeat.name + '/' + clearingHeat.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (7).jpg" alt="">
          </div>
          <div class="taxon">{{ clearingHeat.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ enrichBlood.name + '/' + enrichBlood.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/effect (8).jpg" alt="">
          </div>
          <div class="taxon">{{ enrichBlood.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 功效结束 -->

    <!-- 人群开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">热门人群</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ pregnantWoman.name + '/' + pregnantWoman.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (1).jpg" alt="">
          </div>
          <div class="taxon">{{ pregnantWoman.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ puerpera.name + '/' + puerpera.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (2).jpg" alt="">
          </div>
          <div class="taxon">{{ puerpera.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ infant.name + '/' + infant.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (3).jpg" alt="">
          </div>
          <div class="taxon">{{ infant.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ children.name + '/' + children.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (4).jpg" alt="">
          </div>
          <div class="taxon">{{ children.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ student.name + '/' + student.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (5).jpg" alt="">
          </div>
          <div class="taxon">{{ student.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ examinee.name + '/' + examinee.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (6).jpg" alt="">
          </div>
          <div class="taxon">{{ examinee.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ masculinity.name + '/' + masculinity.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (7).jpg" alt="">
          </div>
          <div class="taxon">{{ masculinity.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ woman.name + '/' + woman.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/crowd (8).jpg" alt="">
          </div>
          <div class="taxon">{{ woman.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 人群结束 -->

    <!-- 疾病开始 -->
    <section>
      <!-- 分类标题开始 -->
      <h3 class="category-section-title">热门疾病</h3>
      <!-- 分类标题结束 -->

      <!-- 分类详解开始 -->
      <section class="category-section">
       <router-link :to="'/navigation-greens/'+ diabetesMellitus.name + '/' + diabetesMellitus.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/disease (1).jpg" alt="">
          </div>
          <div class="taxon">{{ diabetesMellitus.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ highDloodPressure.name + '/' + highDloodPressure.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/disease (2).jpg" alt="">
          </div>
          <div class="taxon">{{ highDloodPressure.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ obesity.name + '/' + obesity.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/staple (5).jpg" alt="">
          </div>
          <div class="taxon">{{ obesity.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ palaceCold.name + '/' + palaceCold.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/disease (3).jpg" alt="">
          </div>
          <div class="taxon">{{ palaceCold.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ qiDeficiency.name + '/' + qiDeficiency.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/greens (5).jpg" alt="">
          </div>
          <div class="taxon">{{ qiDeficiency.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ dysmenorrhea.name + '/' + dysmenorrhea.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/disease (4).jpg" alt="">
          </div>
          <div class="taxon">{{ dysmenorrhea.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ lowBloodSugar.name + '/' + lowBloodSugar.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (5).jpg" alt="">
          </div>
          <div class="taxon">{{ lowBloodSugar.name }}</div>
        </router-link>
        <router-link :to="'/navigation-greens/'+ theStomachCold.name + '/' + theStomachCold.classid" class="tile-link">
          <div class="cover">
            <img src="static/images/series (2).jpg" alt="">
          </div>
          <div class="taxon">{{ theStomachCold.name }}</div>
        </router-link>
      </section>
      <!-- 分类详解结束 -->
    </section>
    <!-- 疾病结束 -->
    <div style="margin-top: 1.0rem;margin-bottom: 2.0rem;text-align: center;color: #aaa;font-size: 0.8rem;">已到底部</div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        siChuan: {
          name: '川菜',
          classid: 224
        },
        huNan: {
          name: '湘菜',
          classid: 225
        },
        guangDong: {
          name: '粤菜',
          classid: 226
        },
        fuJian: {
          name: '闽菜',
          classid: 227
        },
        zheJiang: {
          name: '浙菜',
          classid: 228
        },
        shanDong: {
          name: '鲁菜',
          classid: 229
        },
        jiangSu: {
          name: '苏菜',
          classid: 230
        },
        anHui: {
          name: '徽菜',
          classid: 231
        },
        loseWeight: {
          name: '减肥',
          classid: 2
        },
        lhairdressing: {
          name: '美容',
          classid: 6
        },
        skinWhitening: {
          name: '美白',
          classid: 8
        },
        detox: {
          name: '排毒',
          classid: 10
        },
        miscarriage: {
          name: '安胎',
          classid: 20
        },
        refreshOneself: {
          name: '提神',
          classid: 35
        },
        clearingHeat: {
          name: '去火',
          classid: 40
        },
        enrichBlood: {
          name: '补血',
          classid: 49
        },
        pregnantWoman: {
          name: '孕妇',
          classid: 114
        },
        puerpera: {
          name: '产妇',
          classid: 114
        },
        infant: {
          name: '宝宝',
          classid: 124
        },
        children: {
          name: '老年人',
          classid: 136
        },
        student: {
          name: '学生',
          classid: 129
        },
        examinee: {
          name: '考生',
          classid: 132
        },
        masculinity: {
          name: '男性',
          classid: 141
        },
        woman: {
          name: '女性',
          classid: 142
        },
        diabetesMellitus: {
          name: '口腔溃疡',
          classid: 163
        },
        highDloodPressure: {
          name: '咳嗽',
          classid: 167
        },
        obesity: {
          name: '肥胖',
          classid: 152
        },
        palaceCold: {
          name: '宫寒',
          classid: 153
        },
        qiDeficiency: {
          name: '气虚',
          classid: 154
        },
        dysmenorrhea: {
          name: '痛经',
          classid: 155
        },
        lowBloodSugar: {
          name: '低血糖',
          classid: 159
        },
        theStomachCold: {
          name: '胃寒',
          classid: 182
        },
        homeCooking: {
          name: '药膳',
          classid: 313
        },
        privateKitchens: {
          name: '私房菜',
          classid: 303
        },
        wellQuicklyDish: {
          name: '快手菜',
          classid: 304
        },
        hotFood: {
          name: '热菜',
          classid: 305
        },
        coldDish: {
          name: '凉菜',
          classid: 306
        },
        vegetarianDishes: {
          name: '素菜',
          classid: 307
        },
        underTheFood: {
          name: '下饭菜',
          classid: 310
        },
        farmStyle: {
          name: '农家菜',
          classid: 317
        },
        rice: {
          name: '饭',
          classid: 320
        },
        friedRice: {
          name: '炒饭',
          classid: 321
        },
        baozi: {
          name: '包子',
          classid: 336
        },
        soupRice: {
          name: '煲仔饭',
          classid: 323
        },
        congee: {
          name: '粉',
          classid: 328
        },
        face: {
          name: '面',
          classid: 326
        },
        chowMein: {
          name: '炒面',
          classid: 327
        },
        dumpling: {
          name: '饺子',
          classid: 335
        }
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
  /*主页主体开始*/
  #site-body {
    margin-top: 3.6rem;
    position: relative;
    z-index: 1;
    /*padding: 0 1rem;*/
  }
  /*分类标题开始*/
  .category-section-title {
    margin: 1.0rem 1.0rem 10px;
    font-size: 0.85rem;
  }
  /*分类标题开始*/
  .category-section-title {
    margin: 1.0rem 1.0rem 10px;
    font-size: 0.85rem;
  }
  /*分类标题结束*/

  /*分类详解开始*/
  .category-section {
    overflow: hidden;
    padding: 0 0 0 1.0rem;
  }
  .category-section  .tile-link {
    float: left;
    width: 21%;
    height: 0;
    overflow: hidden;
    padding-bottom: 21%;
    position: relative;
    margin-bottom: 3%;
    margin-right: 3%;
    background: #fff;
    border-radius: 3px;
  }
  .category-section  .tile-link > .cover {
    width: 100%;
    /*border-radius: 40px;*/
    overflow: hidden;
    /*background:#000;*/
    position: absolute;
  }
  .category-section  .tile-link > .taxon {
    position: absolute;
    bottom: 0.5rem;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }
  /*分类详解结束*/
  /*主页主体结束*/
</style>