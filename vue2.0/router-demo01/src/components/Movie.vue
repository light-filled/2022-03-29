<template>
  <div class="movie-container">
    <h3>Movie 组件 ---{{mid}}</h3>
    <button @click="showThis">打印this</button>
    <!-- click方法里面只有一行代码就可以写作行内代码 -->
    <button @click="$router.back()">后退</button>
    <button @click="$router.forward()">前进</button>

  </div>
</template>

<script>
export default {
  name: 'Movie',
  methods: {
    showThis() {
      console.log(this)
    },
    goBack() {
      this.$router.go(-2)
    }
  },
  props: ['mid']
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
