'use strict';
import ROLE_MAP from '../lib/role'

//不作为Main组件的子页面展示的页面单独写，如下
export const login = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login')
};
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('@/views/error/error-page-404.vue')
};
export const page403 = {
  path: '/403',
  meta: {
    title: '403-权限不足'
  },
  name: 'error-403',
  component: () => import('@/views/error/error-page-403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error-500',
  component: () => import('@/views/error/error-page-500.vue')
};

//作为admin-home组件的子页面展示并且在左侧菜单显示的路由写在adminRouter里
export const adminRouter = {
  path: '/a-hom',
  redirect: '/a-home/index',
  name: 'aHome',
  component: () => import('@/views/admin/admin-home'),
  children: [
    {
      path: 'index',
      name: 'a-index',
      component: () => import('@/views/admin/index'),
      meta: {
        auth: true,
        role: [ROLE_MAP['1']]
      }
    }
  ]
};

//作为admin-home组件的子页面展示但是不在左侧菜单显示的路由写在otherAdminRouter里
export const otherAdminRouter = [
  {
    path: ''
  }
];


//user路由配置
export const userRouter = {
  path: '/',
  redirect: '/home',
  name: 'uHome',
  component: () => import('@/views/user/user-home'),
  children: [
    {
      path: 'home',
      name: 'user-home',
      meta: {
        title: '红绿蓝众创空间',
        active: 0
      },
      component: () => import('@/views/user/tabComponts/home.vue')
    },
    {
      path: 'news',
      name: 'user-news',
      meta: {
        title: '发现',
        active: 1
      },
      component: () => import('@/views/user/tabComponts/news.vue')
    },
    {
      path: 'user',
      name: 'user-user',
      meta: {
        title: '我的',
        active: 2
      },
      component: () => import('@/views/user/tabComponts/user.vue'),
      beforeEnter: (to, from, next) => {
        // 如果用户未登陆且不是跳转登陆页
        if (sessionStorage.phoneNumber === undefined && to.path !== '/') {
          // 跳转登陆页
          alert('您还未登陆，不可查看个人信息，请登陆')
          next('/login')
        } else {
          next()
        }
      }
    }
  ],
};

export const otherUserRouter = [
  {
    path: '/enterApply',
    name: 'enter',
    component: () => import('@/views/user/homeJump/enterApply.vue')
  },
  {
    path: '/applySchedule',
    name: 'apply-schedule',
    component: () => import('@/views/user/homeJump/applySchedule.vue')
  },
  {
    path: '/ApplySucceed',
    name: 'Apply-Succeed',
    component: () => import('@/views/user/Componts/ApplySucceed.vue')
  },
  {
    path: '/ApplyInquire',
    name: 'Apply-Inquire',
    component: () => import('@/views/user/Apply/ApplyInquire.vue')
  },
  {
    path: '/MyApply',
    name: 'My-Apply',
    component: () => import('@/views/user/Apply/MyApply.vue')
  },
  {
    path: '/PlaceApply',
    name: 'Place-Apply',
    component: () => import('@/views/user/homeJump/PlaceApply.vue'),
    beforeEnter: (to, from, next) => {
        // 如果用户未登陆且不是跳转登陆页
        if (sessionStorage.phoneNumber === undefined && to.path !== '/') {
          // 跳转登陆页
          alert('您还未登陆，不可进行场地申请，请登陆')
          next('/login')
        } else {
          next()
        }
    }
  },
  {
    path: '/ApplyPublicity',
    name: 'Apply-Publicity',
    component: () => import('@/views/user/homeJump/ApplyPublicity.vue'),

  }

]

// 所有上面定义的路由都要写在下面的ROUTERS里,注意：404必须写最后面才能匹配没有的路由
export const ROUTERS = [
  login,
  adminRouter,
  userRouter,
  ...otherUserRouter,
  ...otherAdminRouter,
  page500,
  page403,
  page404
];
