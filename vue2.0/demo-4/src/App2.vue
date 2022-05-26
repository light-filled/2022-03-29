<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- <a href="#/home"></a> -->
    <!-- 在网页中会被渲染成a，本质上就是个a链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电压</router-link>
    <router-link to="/about">关于</router-link>

    <hr>

    <!-- 只要在项目中安装、配置了vue-router，就可以使用router-view这个组件了 -->
    <!-- router-view作用：路由地址变化时，组件变化 -->
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
