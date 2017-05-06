import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Select from '@/components/Select'
import Point from '@/components/Point'
import Video from '@/components/vidoe'
import User from '@/components/user'
import Live from '@/components/live'
import Author from '@/components/Author'
import Hot from '@/components/hot'
import Other from '@/components/other'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // 路由配置
  routes: [
    {
      path: '/',
      name: 'nav',
      component: Nav,
      children: [
        {
          path: '/select',
          component: Select
        }, {
          path: '/point',
          component: Point
        }, {
          path: '/author',
          component: Author
        },{
          path: '/hot',
          component: Hot
        },{
          path: '/other',
          component: Other
        },{
         path:'/',
         component:Select
        }
      ]

    }, {
      path: '/video',
      component: Video
    }, {
      path: '/live',
      component: Live
    }, {
      path: '/user',
      component: User
    }
  ]
})
