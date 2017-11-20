import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Login from '@/page/login'
import Register from '@/page/register'
import Cart from '@/page/cart'
import User from '@/page/user'



/*
* admin 页面
* */

import AddGood from '@/page/admin/addGood'


/*
* 首页子路由
* */
import Groom from '@/page/index/groom'
import Phone from '@/page/index/phone'
import Intelligence from '@/page/index/intelligence'
import Television from '@/page/index/television'
import Computer from '@/page/index/computer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/groom',
      children: [{
        path: 'groom',
        name: 'Groom',
        component: Groom,
      },{
        path: 'phone',
        name: 'Phone',
        component: Phone,
      },{
        path: 'intelligence',
        name: 'Intelligence',
        component: Intelligence,
      },{
        path: 'television',
        name: 'Television',
        component: Television,
      },{
        path: 'computer',
        name: 'Computer',
        component: Computer,
      }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },{
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },{
      path: '/addGood',
      name: 'AddGood',
      component: AddGood,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
  ]
})
