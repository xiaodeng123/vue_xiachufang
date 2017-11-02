import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Navigation from '@/components/navigation/navigation'
import NavigationGreens from '@/components/navigation-greens/navigation-greens'
import NavigationSearch from '@/components/navigation-search/navigation-search'
import NavigationDetails from '@/components/navigation-details/navigation-details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Navigation
    },
    {
      path: '/navigation-greens/:name/:id',
      component: NavigationGreens
    },
    {
      path: '/navigation-search/:name',
      component: NavigationSearch
    },
    {
      path: '/navigation-details/:id',
      component: NavigationDetails
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})
