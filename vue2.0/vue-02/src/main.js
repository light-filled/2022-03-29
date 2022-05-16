import Vue from 'vue'
import App from './App.vue'
//导入需要被全局注册的组件，用一个名字接收
import Count from '@/components/Count.vue'
//参数1：字符串格式，表示组件的“注册名称”（后续做标签使用的那个名字）
//参数2：需要被全局注册的那个组件
Vue.component('MyCount', Count)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')