<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <Test info="你好" v-if="flag"></Test>
    <button @click="flag = !flag">销毁组件</button>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- 3.以标签形式，使用注册号的组件 -->
      <Left></Left>
      <Right></Right>
    </div>
  </div>
</template>

<script>
//1.导入需要使用的vue组件
//import xxx from "@/components/Left.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Test from "@/components/Test.vue";

export default {
  data() {
    return {
      flag: true,
    };
  },
  methods: {},
  components: {
    //2.注册组件
    Left, //完整写法：'Left': Left  前面是组件名称，后面是要注册的组件，对象里面键和值一样可以简写为Left
    Right,
    Test,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
