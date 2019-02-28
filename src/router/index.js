import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//用户页面
import login from '@/common/user/login'
import register from '@/common/user/register'

//首页
import index from '@/view/index/index'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
