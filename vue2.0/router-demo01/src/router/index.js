//src/router/index.js 就是当前的路由模块

//1.导入Vue和VueRouter包
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/tabs/Login.vue'
import Main from '@/components/tabs/Main.vue'



//2.安装Vue-Router为插件，使用Vue的use()函数
Vue.use(VueRouter)

//3.导入模块就相当于一个构造函数，new一个构造函数，就得到一个路由实例
//里面可以传递配置选项，是个对象

//创建路由的实例对象
const router = new VueRouter({
    //routes是一个数组，作用是定义 “hash地址”和“组件” 之间的对应关系
    routes: [
        //{path: '/home',component: '要展示的组件'}
        //路由规则——哈希地址和下面选项匹配的过程
        //重定向的路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        //为当前这条路由规则开启props传参
        { path: '/movie/:mid', component: Movie, props: true, },
        {
            path: '/about',
            //默认显示Tab1
            // redirect: '/about/Tab1',
            component: About,
            children: [
                //子路由规则
                //如果是子路由，path不用/开头
                { path: 'tab1', component: Tab1 },
                { path: '', component: Tab2 },

            ]
        },
        { path: '/login', component: Login },
        { path: '/main', component: Main },


    ]
})

//调用实例对象的beforeEach方法，为router路由实例对象声明全局前置导航守卫
//每次发生路由导航跳转时，都会自动触发fn这个“回调函数”
//router.beforeEach(function(){})
router.beforeEach(function(to, from, next) {

    //1.要拿到用户将要访问的hash地址
    //2.判断hash地址是否等于/main 
    //2.1 如果等于/main，证明需要登录之后才能访问成功
    //2.2 如果不等于/main，则不需要登录直接放行next()
    //3.如果访问的地址是/main，则需要读取localStorage中的token值
    //3.1如果有token，则放行
    //3.2如果没有token，则强制跳转/login登录页
    if (to.path === '/main') {
        //要访问后台主页，需要判断是否有token
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



//4.把路由实例共享出去
export default router