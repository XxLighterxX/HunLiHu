import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/WorkPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'index',
        component: () => import("../views/login.vue"),
    },
    {
        path: '/ApiTest',
        name: 'ApiTest',
        component: () => import("../views/ApiTestView.vue"),
    },
    {
        path: '/indexTest',
        name: 'indexTest',
        component: () => import("../views/indexTest.vue"),
    },
    {
        path: '/WorkPage',
        name: 'WorkPage',
        component: () => import("../views/WorkPage.vue"),
    },
    {
        path: '/index',
        name: 'index',
        component: index
    },
]

// router.beforeEach((to, from, next) => {
//     let isLogin = window.sessionStorage.getItem('userName');
//     if (isLogin) {
//       next()
//     } else {
//       if (to.path === '/login') {
//         next()
//       } else {
//         next('/login')
//       }
//     }
//   })

const router = new VueRouter({
    routes
})

export default router
