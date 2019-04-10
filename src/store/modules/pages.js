import {findElem} from '../../fn/_fn'
//基本一级页面配置 顶部导航及左侧可显示菜单
//name，url不要重复
/*
* title标题
* name routername
* icon 图标class
* url  路径
* */

let list = [
  {
    title: "平台",
    url: '/platform',
    name: 'Platform',
    sons: [
      {
        title: '平台概况',
        sons: [
          {
            title: "平台概况",
            url: '/platform/overview',
            name: 'Overview',
            icon:''
          }
        ]
      },
      {
        title: '会员管理',
        sons: [
          {
            title: "会员管理",
            url: '/platform/vip',
            name: 'Vip',
            icon:'icon-member1'
          },
          {
            title: "代理商列表",
            url: '/platform/agent',
            name: 'Agent',
            icon:'icon-agent'
          }
        ]
      },
      {
        title: '内容管理',
        sons: [
          {
            title: "广告位管理",
            url: '/platform/advertising',
            name: 'Advertising',
            icon:'icon-ad1'
          },
          {
            title: "文章管理",
            url: '/platform/article',
            name: 'Article',
            icon:'icon-article'
          },
          {
            title: "消息推送",
            url: '/platform/message',
            name: 'Message',
            icon:'icon-notification\n'
          }
        ]
      }
    ]
  },
  {
    title: "商城",
    url: '/store',
    name: 'Store',
    sons: [
      {
        title: '商品管理',
        sons: [
          {
            title: "商品列表",
            url: '/store/product-list',
            name: 'ProductList',
            icon:"",
          },
          {
            title: "商品分类",
            url: '/store/classify',
            name: 'Classify',
            icon:"",
          },
          {
            title: "评论管理",
            url: '/store/comment',
            name: 'Comment',
            icon:"",
          },
          {
            title: "品牌管理",
            url: '/store/brand',
            name: 'Brand',
            icon:"",
          },
          {
            title: "属性管理",
            url: '/store/attribute',
            name: 'Attribute',
            icon:"",
          },
          {
            title: "商品分组",
            url: '/store/group',
            name: 'Group',
            icon:"",
          },
          {
            title: "物流管理",
            url: '/store/logistics',
            name: 'Logistics',
            icon:"",
          }
        ]
      },
      {
        title: "订单管理",
        sons: [
          {
            title: "订单列表",
            url: '/store/order-list',
            name: 'OrderList',
            icon:"",
          },
          {
            title: "营销活动订单",
            url: '/store/marketing-order-list',
            name: 'MarketingOrderList',
            icon:"",
          },
          {
            title: "交易记录",
            url: '/store/record',
            name: 'Record',
            icon:"",
          }
        ]
      },
      {
        title: "店铺管理",
        sons: [
          {
            title: "店铺列表",
            url: '/store/store-list',
            name: 'StoreList',
            icon:"",
          },
          {
            title: "补助设置",
            url: '/store/subsidy',
            name: 'Subsidy',
            icon:"",
          }
        ]
      },
      {
        title: "供应商管理",
        sons: [
          {
            title: "供应商列表",
            url: '/store/supplier-list',
            name: 'SupplierList',
            icon:"",
          },
          {
            title: "供应商统计",
            url: '/store/statistics',
            name: 'Statistics',
            icon:"",
          },
          {
            title: "供应商商品",
            url: '/store/supplier-product',
            name: 'SupplierProduct',
            icon:"",
          },
          {
            title: "合同管理",
            url: '/store/compact',
            name: 'Compact',
            icon:"",
          },
          {
            title: "资质管控",
            url: '/store/quality',
            name: 'Quality',
            icon:"",
          },
        ]
      }
    ]
  },


  {
    title: "营销",
    url: '/',
    sons: [
      {
        title: "营销管理",
        sons: [
          {
            title: "营销中心",
            url: '/'
          },
          {
            title: "优币营销",
            url: '/'
          },
          {
            title: "拼团活动",
            url: '/'
          },
          {
            title: "优惠券营销",
            url: '/'
          },
          {
            title: "充值营销",
            url: '/'
          },
        ]
      },
    ]
  },
  {
    title: "财务",
    url: '/'
  },
  {
    title: "统计",
    url: '/'
  },
  {
    title: "系统",
    url: '/'
  }
];
//扩展页面配置【配置跳转页面选中相应name】
let extend = [
  //平台
  {
    name: 'Overview',
    list: ['/platform/overview']
  },
  {
    name: 'Vip',
    list: ['/platform/vip']
  },
  {
    name: 'Agent',
    list: ['/platform/agent']
  },
  {
    name: 'Advertising',
    list: ['/platform/advertising']
  },
  {
    name: 'Article',
    list: ['/platform/article']
  },
  {
    name: 'Message',
    list: ['/platform/message']
  },
  //商城
  {
    name: 'ProductList',
    list: ['/store/product-list', '/store/product-add']
  },
  {
    name: 'Classify',
    list: ['/store/classify']
  },
  {
    name: 'Comment',
    list: ['/store/comment']
  },
  {
    name: 'Brand',
    list: ['/store/brand']
  },
  {
    name: 'Attribute',
    list: ['/store/attribute']
  },
  {
    name: 'Group',
    list: ['/store/group']
  },
  {
    name: 'Logistics',
    list: ['/store/logistics']
  },
  {
    name: 'OrderList',
    list: ['/store/order-list']
  },
  {
    name: 'MarketingOrderList',
    list: ['/store/marketing-order-list']
  },
  {
    name: 'Record',
    list: ['/store/record']
  },
  {
    name: 'StoreList',
    list: ['/store/store-list']
  },
  {
    name: 'Subsidy',
    list: ['/store/subsidy']
  },
  {
    name: 'SupplierList',
    list: ['/store/supplier-list']
  },
  {
    name: 'Statistics',
    list: ['/store/statistics']
  },
  {
    name: 'SupplierProduct',
    list: ['/store/supplier-product']
  },
  {
    name: 'Compact',
    list: ['/store/compact']
  },
  {
    name: 'Quality',
    list: ['/store/quality']
  },
  //营销
];

const pages = {
  state: {
    pagesList: list,
    extendPageList: extend,
    navBarActive: '',
    sons: [],
    sonsBarActive: '',
  },

  mutations: {
    SET_NAVBAR_AVTIVE: (state, name) => {
      state.navBarActive = name
    },
    SET_SONS: (state, urlArr) => {
      state.sons = urlArr
    },
    SET_SONS_NAVBAR_AVTIVE: (state, name) => {
      state.sonsBarActive = name
    },
  },

  actions: {
    setNavbar({commit, state}, url) {
      let pagesList = state.pagesList;
      let index = findElem(pagesList, 'url', url)
      commit('SET_NAVBAR_AVTIVE', pagesList[index].name)
      commit('SET_SONS', pagesList[index].sons)
      commit('SET_SONS_NAVBAR_AVTIVE', pagesList[index].sons[0].sons[0].name)
    },
    setSonsNavbarActive({commit, state}, url) {
      for (let v of state.extendPageList) {
        if (v.list.includes(url)) {
          commit('SET_SONS_NAVBAR_AVTIVE', v.name)
        }
      }
    }

  }
}

export default pages