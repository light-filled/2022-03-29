import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

//把VueRouter安装为Vue的插件
Vue.use(VueRouter)

//路由规则的数组
const routes = [
        //通过路由展示的组件，要放到 views 文件夹
        //其他的组件放到components文件夹即可

        //定义首页的路由规则
        //定义我的的路由规则
        { path: '/', component: Home, },
        { path: '/user', component: User, },
    ]
    //创建路由的实例对象
const router = new VueRouter({
    routes
})

export default router