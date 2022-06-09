import Vue from 'vue'
import App from './App2.vue'
//导入路由模块
import router from '@/router/index.js'

// 导入 bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //在Vue项目中要用路由，需要把路由实例对象通过下面方式进行挂载
    //router:路由的实例对象，
    //router: router，可以简写
    router
}).$mount('#app')