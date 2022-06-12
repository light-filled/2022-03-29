//工具性的模块 放到 utils 文件夹里面
import axios from 'axios'

const request = axios.create({
    //创建出来的 小axios 的根路径,指定请求的根路径
    baseURL: 'http://www.esbook.cn'
})
export default request
//后续想通过axios发请求时，就可以导入request.js这个模块，使用request实例，发送请求方式与先前axios相同，就是添加了一个根路径而已
//如果不这样，，axios基础用法实在main.js里面引入axios，但是这样在每一个组件使用axios发送请求的时候都需要this.$http.get(参数)