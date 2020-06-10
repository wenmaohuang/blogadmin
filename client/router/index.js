import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)

// const VueRouterPush = VueRouter.prototype.push 
// VueRouter.prototype.push = function push (to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

const routes = [
    {
        path: '/',
        name: 'admin',
        meta:{cnName:'管理'},
        component: () => import('../views/admin'),
        children: [
            {
                path: '',
                name: 'adminIndex',
                component: () => import('../views/admin/adminIndex'),
            },
            {
                path: '/articleAdd',
                name: 'Add',
                meta:{cnName:'发表文章'},
                component: () => import('../views/admin/article/articleAdd')
            },
            {
                path: '/articleManager',
                name: 'Manager',
                component: () => import('../views/admin/article/Manager')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login')
    }
]
const router = new VueRouter({
    mode:"history",
    routes
})
export default router


