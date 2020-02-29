import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import singer from '@/components/singer'
import song from '@/components/song'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'homePage',
      component: homePage,
    },
    {
      path:'/singer',
      name:'singer',
      component:singer
    },
    {
      path:'/song',
      name:'song',
      component:song
    }
  ]
})
