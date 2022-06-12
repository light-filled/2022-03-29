<template>
  <div class="home-container">
    <!-- 头部区域 -->
    <!-- 或者写:fixed="true" -->
    <van-nav-bar title="黑马头条" fixed />

  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'Home',
  data() {
    return {
      //页码值
      page: 1,
      //每页显示多少条数据
      limit: 10
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    //封装获取文章列表数据的方法
    async initArticleList() {
      //发起GET请求，获取文章的列表数据
      const { data: res } = await request.get('/articles', {
        //请求参数
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;

  .van-nav-bar {
    background-color: pink;
  }

  //不加deep：只有 .van-nav-bar 头部区域有data-v属性，有类名，所以可以直接修改背景颜色；但是“黑马头条”文本没有data-v属性，修改不了文本字体颜色
  //加了deep：“黑马头条”文本的选择器改变为 .home-container[data-v-xxx] .van-xxx_title ，就可以控制文本颜色了

  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>