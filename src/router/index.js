import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//用户页面
import login from '@/common/user/login'
import register from '@/common/user/register'

//首页
import index from '@/view/index/index'

//评估
import evaluate from '@/view/evaluate/evaluate'

//匹配
import find from '@/view/find/find'
import findPet from '@/view/find/find-pet'

//数据分析
import menu from '@/view/dataAnalyse/menuMap'

//个人
import basic from '@/view/user/basic'
// import userMenu from '@/view/user/user-menu'

//测试echarts
import echarts from '@/common/echarts/test.vue'

//pet
import selectPet from '@/view/pet/select-pet'
import petInfo from '@/view/pet/published-pets-info'

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
    },
    {
      path : '/evaluate',
      name : 'evaluate',
      component: evaluate
    },
    {
      path : '/find',
      name : 'find',
      component : find
    },
    {
      path : '/menu',
      name : 'menu',
      component : menu
    },
    {
      path : '/echarts',
      name : 'echarts',
      component : echarts
    },
    {
      path : '/basic',
      name : 'basic',
      component : basic
    },
    {
      path : '/findPet',
      name : 'findPet',
      component : findPet
    },
    {
      path : '/selectPet',
      name : 'selectPet',
      component : selectPet
    },
    {
      path : '/pet/:petId',
      name : 'petInfo',
      component : petInfo
    },

  ]
})
