import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  // 将所有的元素都看成组件
  loading: require('@/assets/icons/cate.png'),
  error: require('@/assets/icons/cate.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
