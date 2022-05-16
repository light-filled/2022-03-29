<template>
  <div>
    <h5>Count组件</h5>
    <p>Count值是{{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.init, //this指向的是这个Vue实例对象，过程就是其他组件中先:init传过来一个值，init属性接收，然后再转存给count，所以上面也是count+1
    };
  },
  //props是自定义属性，允许使用者通过自定义属性为当前组件指定初始值
  //props里面的数据和data里面的数据一样，都可以直接在模板结构中被使用
  //props: ["init"],
  props: {
    //自定义属性A： {配置选项}
    init: {
      //如果外界使用Count组件的适合，没有传递init属性，则默认值生效
      default: 0,
      //init的值类型必须时数字
      type: Number,
      //必填项校验，
      required: true,
    },
  },
};
</script>

<style lang="less">
</style>