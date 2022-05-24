<template>
  <div class="app-container">
    <!-- Header头部区域 -->
    <Header title="购物车案例"></Header>

    <!-- 循环渲染每一个商品信息 -->
    <Goods
      v-for="item in list"
      :id="item.id"
      :key="item.id"
      :title="item.goods_name"
      :pic="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :count="item.goods_count"
      @state-change="getNewState"
    ></Goods>

    <Footer
      :isfull="fullState"
      :amount="amt"
      :all="total"
      @full-change="getFullState"
    ></Footer>
    <h1>App 根组件</h1>
  </div>
</template>

<script>
//导入axios库拿数据
import axios from "axios";

//导入需要的组件
import Header from "@/components/Header/Header.vue";
import Goods from "@/components/Goods/Goods.vue";
import Footer from "@/components/Footer/Footer.vue";

import bus from "@/components/eventBus.js";
export default {
  data() {
    return {
      //用来存储购物车的列表数据，默认为空数组
      list: [],
    };
  },
  //计算属性
  computed: {
    //动态计算出全选状态是true还是false
    fullState() {
      //可以把===true省略，表示如果每一项的state都是true返回true
      return this.list.every((item) => item.goods_state === true);
    },

    //计算已勾选商品的总价格，然后传给子组件
    amt() {
      //1.先filter过滤
      //2.再reduce累加
      //最后return出去
      return this.list
        .filter((item) => item.goods_state)
        .reduce((total, item) => {
          return (total += item.goods_price * item.goods_count);
          //{}和return可以省略掉
        }, 0);
    },
    //动态计算已勾选商品的总数量
    total() {
      return this.list
        .filter((item) => item.goods_state)
        .reduce((tt, item) => {
          return (tt += item.goods_count);
        }, 0);
    },
  },
  //注册组件
  components: {
    Header,
    Goods,
    Footer,
  },
  //created和methods只能用一个节点，否则后面会把前面的覆盖掉
  methods: {
    //在App中拿到全选按钮的状态
    getFullState(e) {
      console.log(e);
      this.list.forEach((item) => (item.goods_state = e));
    },
    //这个vue组件实例有这里面的一些方法
    //封装请求列表数据的方法
    async initCartList() {
      //调用axios的get方法，请求列表数据
      //axios拿到的不是真实的数据，需要进行解构拿到data里面的真实数据，data改名字为str
      const { data: res } = await axios.get("https://www.escook.cn/api/cart");
      console.log(res);
      //只要请求回来的数据在页面渲染期间要用到，那么就必须转存到data中
      if (res.status === 200) {
        this.list = res.list;
      }
    },
    //接收子组件传递来的数据,e的格式是{id: '',value: '',}
    getNewState(e) {
      this.list.some((item) => {
        if (item.id === e.id) {
          item.goods_state = e.value;
          return true; //终止后续循环
        }
      });
    },
  },
  created() {
    //调用请求数据的方法
    this.initCartList();
    //
    bus.$on("share", (val) => {
      console.log("接收", val);
      this.list.some((item) => {
        if (item.id === val.id) {
          item.goods_count = val.value;
          return true;
        }
      });
    });
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
