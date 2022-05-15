<template>
  <div class="test-box">
    <h3>自定义的{{ username }}</h3>
    <button @click="changeName">修改用户名</button>
  </div>
</template>

<script>
//默认到处，这时固定写法
export default {
  //data数据源，vue组件里面的data不能像之前一样指向对象，必须是一个函数
  data() {
    //这个函数中要return出去一个数据对象，里面包含数据，这个return出去的{}中可以定义数据
    return {
      username: "zs",
    };
  },
  methods: {
    changeName() {
      this.username = "哇哈哈";
      //this指向的是当前组件的实例对象
      //这个username就是这个实例对象的属性，方法
    },
  },
  watch: {}, //当前组件的侦听器
  computed: {}, //当前组件中的计算属性
  filters: {}, //当前组件中的过滤器
};
</script>

<style lang='less'>
.test-box {
  background-color: pink;
  h3 {
    color: red;
  }
}
</style>