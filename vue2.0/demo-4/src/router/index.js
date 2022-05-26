//src/router/index.js 就是当前的路由模块

//1.导入Vue和VueRouter包
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

//2.安装Vue-Router为插件，使用Vue的use()函数
Vue.use(VueRouter)

//3.导入模块就相当于一个构造函数，new一个构造函数，就得到一个路由实例
//里面可以传递配置选项，是个对象
const router = new VueRouter({
    //routes是一个数组，作用是定义 “hash地址”和“组件” 之间的对应关系
    routes: [
        //{path: '/home',component: '要展示的组件'}
        //路由规则——哈希地址和下面选项匹配的过程
        //重定向的路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/movie', component: Movie },
        { path: '/about', component: About }


    ]
})

//4.把路由实例共享出去
export default router