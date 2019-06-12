import {findElem} from '../../utils/fn'
//基本一级页面配置 顶部导航及左侧可显示菜单
//name，url不要重复
/*
* 一级对象：
* title  header标题
* url  父级path路径
* name 父级name
* sons 侧边子路由信息 分块
* 二级对象：
* title 侧边大标题
* sons  具体子路由平级信息例如 列表和列表详情页面
* 可添加icon
* 三级对象：
* title 侧边子路由标题
* url   子路由path路径
* name  子路由name
* icon 图标预设class
*
* */

let list = [
  {
    title: "管理中心",
    url: '/center',
    name: 'Center',
    sons: [
      {
        title: '管理中心',
        sons: [
          {
            title: "管理首页",
            url: '/center/index',
            name: 'CenterIndex',
            icon: ''
          }
        ]
      },
      {
        title: '用户管理',
        sons: [
          {
            title: "用户列表",
            url: '/center/user-list',
            name: 'UserList',
            icon: 'icon-member1'
          },
        ]
      },
      {
        title: '家庭管理',
        sons: [
          {
            title: "家庭列表",
            url: '/center/family-list',
            name: 'FamilyList',
            icon: 'icon-member1'
          },
        ]
      },
    ]
  },


];
/*
*
* 扩展页面配置【配置跳转页面选中相应name】
* name String 为路由中的子路由name
* list Arr 当前子路由平级的子路由path列表
* */

let extend = [
  //管理中心
  {
    name: 'CenterIndex',
    list: ['/center/index']
  },
  {
    name: 'UserList',
    list: ['/center/user-list']
  },
  {
    name: 'FamilyList',
    list: ['/center/family-list']
  },
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
