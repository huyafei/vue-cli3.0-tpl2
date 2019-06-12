import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import(/* webpackChunkName: "register" */ '../pages/register.vue')
    },
    {
      path: '/center',
      name: 'Center',
      component: () => import(/* webpackChunkName: "center" */ '../pages/layout/layout.vue'),
      redirect: '/center/index',
      children: [
        {
          path: 'index',
          name: 'CenterIndex',
          component: () => import(/* webpackChunkName: "center" */ '../pages/center/index/index.vue')
        },
        {
          path: 'user-list',
          name: 'UserList',
          component: () => import(/* webpackChunkName: "center" */ '../pages/center/user/list.vue')
        },
        {
          path: 'family-list',
          name: 'FamilyList',
          component: () => import(/* webpackChunkName: "center" */ '../pages/center/family/list.vue')
        },
      ]

    },


  ]
})
