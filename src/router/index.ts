import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home',
    },
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login',
    },
    component: () => import('../views/login'),
  },
  {
    path: '/square',
    name: 'square',
    meta: {
      type: 'square',
    },
    component: () => import('../views/square/index.vue'),
  },
  {
    path: '/resume-template',
    name: 'resume-template',
    meta: {
      type: 'resume-template',
    },
    component: () => import('../views/resume-template/index.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      type: 'mine',
    },
    component: () => import('../views/mine'),
  },
  {
    path: '/editor',
    name: 'editor',
    meta: {
      type: 'editor',
    },
    component: () => import('../views/editor'),
  },
  {
    path: '/:pathMatch(.*)*', // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
    name: '404',
    component: () => import('../views/404'),
  },
]

// 此处由【new VueRouter】的方式修改为【createRouter】的方式 其余无变化
const router = createRouter({
  history: createWebHashHistory(), //路由模式的配置采用API调用的方式 不再是之前的字符串 此处采用的hash路由
  routes,
})

// router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//   // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
//   const user = localStorage.getItem('user')
//   // 路由守卫判断
//   if (to.meta.type === 'login' && user) {
//     next({ name: 'home' })
//     return
//   }

//   if (to.meta.type === 'home' && !user) {
//     next({ name: 'login' })
//     return
//   }
//   next()
// })

export default router
