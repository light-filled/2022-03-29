<template>
  <div
    class="number-container d-flex justify-content-center align-items-center"
  >
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ c }}</span>
    <!-- 加 1 的按钮  -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventBus.js";
export default {
  props: {
    //接收的数量值
    c: {
      default: 1,
      type: Number,
    },
    //接收商品的id，将来使用EventBus把变化后的数量传给App.vue时通知App组件更新哪个商品的数量
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    //点击按钮，数值加一，没有修改props的值，直接发送加一后的值
    add() {
      const obj = { id: this.id, value: this.c + 1 };
      //console.log(obj);
      bus.$emit("share", obj);
    },
    sub() {
      if (this.c - 1 === 0) return;
      const obj = { id: this.id, value: this.c - 1 };
      bus.$emit("share", obj);
    },
  },
};
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
