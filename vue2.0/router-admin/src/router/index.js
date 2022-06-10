import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'




Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        //重定向路由规则
        { path: '/', redirect: '/login' },
        //登录的路由规则
        { path: '/login', component: Login },
        //后台主页的路由规则
        {

            path: '/mangguo',
            component: Home,
            redirect: '/mangguo/users',
            children: [
                { path: 'users', component: Users },
                { path: 'rights', component: Rights },
                { path: 'goods', component: Goods },
                { path: 'orders', component: Orders },
                { path: 'settings', component: Settings },
                //用户详情页的路由规则
                { path: 'userdetail/:id', component: UserDetail, props: true },


            ]
        },


    ]
})

router.beforeEach(function(to, from, next) {
    if (to.path === '/mangguo') {
        const token = localStorage.getItem('token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router