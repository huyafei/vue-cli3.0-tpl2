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
      path: '/platform',
      name: 'Platform',
      component: () => import(/* webpackChunkName: "platform" */ '../pages/layout/layout.vue'),
      redirect: '/platform/overview',
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/overview/overview.vue')
        },
        {
          path: 'vip',
          name: 'Vip',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/vip/vip.vue')
        },
        {
          path: 'agent',
          name: 'Agent',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/vip/agent.vue')
        },
        {
          path: 'advertising',
          name: 'Advertising',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/content/advertising.vue')
        },
        {
          path: 'article',
          name: 'Article',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/content/article.vue')
        },
        {
          path: 'message',
          name: 'Message',
          component: () => import(/* webpackChunkName: "platform" */ '../pages/platform/content/message.vue')
        },
      ]

    },
    {
      path: '/store',
      name: 'Store',
      component: () => import(/* webpackChunkName: "store" */ '../pages/layout/layout.vue'),
      redirect: '/store/product-list',
      children: [
        {
          path: 'product-list',
          name: 'ProductList',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/list.vue')
        },
        {
          path: 'product-add',
          name: 'ProductAdd',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/add.vue')
        },
        {
          path: 'classify',
          name: 'Classify',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/classify.vue')
        },
        {
          path: 'comment',
          name: 'Comment',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/comment.vue')
        },
        {
          path: 'brand',
          name: 'Brand',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/brand.vue')
        },
        {
          path: 'attribute',
          name: 'Cttribute',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/attribute.vue')
        },
        {
          path: 'group',
          name: 'Group',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/group.vue')
        },
        {
          path: 'logistics',
          name: 'Logistics',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/product/logistics.vue')
        },
        //订单
        {
          path: 'order-list',
          name: 'OrderList',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/order/list.vue')
        },
        {
          path: 'marketing-order-list',
          name: 'MarketingOrderList',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/order/marketing.vue')
        },
        {
          path: 'record',
          name: 'Record',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/order/record.vue')
        },
        //店铺
        {
          path: 'store-list',
          name: 'StoreList',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/store/list.vue')
        },
        {
          path: 'subsidy',
          name: 'Subsidy',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/store/subsidy.vue')
        },
        //供应商
        {
          path: 'supplier-list',
          name: 'SupplierList',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/supplier/list.vue')
        },
        {
          path: 'statistics',
          name: 'Statistics',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/supplier/statistics.vue')
        },
        {
          path: 'supplier-product',
          name: 'SupplierProduct',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/supplier/product.vue')
        },
        {
          path: 'compact',
          name: 'Compact',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/supplier/compact.vue')
        },
        {
          path: 'quality',
          name: 'Quality',
          component: () => import(/* webpackChunkName: "store" */ '../pages/store/supplier/quality.vue')
        },
      ]

    },

  ]
})
