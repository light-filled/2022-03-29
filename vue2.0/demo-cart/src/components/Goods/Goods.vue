<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'cb' + id"
          :checked="state"
          @change="stateChange"
        />
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src="pic" alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ title }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">{{ price }}</span>
        <!-- 商品的数量 -->
        <Counter :c="count" :id="id"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter/Counter.vue";
export default {
  props: {
    count: {
      default: 1,
      type: Number,
    },
    //要渲染的商品的标题
    title: {
      default: "",
      type: String,
    },
    //要渲染的商品的图片
    pic: {
      default: "",
      type: String,
    },
    //要渲染的商品的单价
    price: {
      default: 0,
      type: Number,
    },
    //商品勾选状态
    state: {
      default: true,
      type: Boolean,
    },
    //传商品id的原因：复选框选中状态的修改是子组件的数据，要把数据传递到父组件中，令父组件根据对应商品的id修改state属性值，然后再传给子组件进行子组件的重新渲染
    id: {
      required: true, //规定id为必填项，不给id传值就会报错
      type: Number,
    },
  },
  methods: {
    //只要复选框的状态发生变化，就会调用这个事件处理函数
    stateChange(e) {
      //console.log(e);//输出的是这个事件对象

      const newState = e.target.checked; //勾选状态改变后，拿到这个事件对象的标签的checked属性
      //触发自定义事件、、、、、、、7
      this.$emit("state-change", { id: this.id, value: newState }); //向父组件传递一个对象，value是最新的勾选状态
    },
  },
  components: {
    Counter,
  },
};
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
