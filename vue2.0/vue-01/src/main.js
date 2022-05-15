//导入vue包，得到Vue构造函数
import Vue from 'vue'
//导入App.vue这个根组件，将来要把App.vue中的模板结构渲染到HTML页面中
//import App from './App.vue'
import test from './test.vue'
Vue.config.productionTip = false
    //创建Vue实例对象
new Vue({
    //把app里的UI结构渲染到指定的区域
    //el: '#app',
    //把render函数指定的组件，渲染到html页面中，指定要渲染app
    render: h => h(test),
}).$mount('#app')