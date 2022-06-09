<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr>
    <button @click="toM1">导航到--电影1页面</button>

    <router-link to="/main">访问后台主页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toM1() {
      //通过编程式导航API跳转到指定页面
      //this.$router.push('/movie/1')
      this.$router.replace('/movie/1')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
