<template>
  <div class="test-container">
    <h3 id="h3">Test.vue组件--{{ books.length }}</h3>
    <p id="p">message值为{{ message }}</p>
    <button @click="message += '-'">按钮</button>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      message: "hello vue.js",
      //定义books数组，存储的是所有图书的列表数据，默认为空数组
      books: [],
    };
  },
  methods: {
    show() {
      console.log("调用了Test组件的show方法");
    },
    //使用Ajax请求图书列表的数据
    initBookList() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        //function函数有自己的作用域，里面的this指向本身调用的函数；
        //箭头函数没有作用域，箭头函数的this指向上一层的this，这里箭头函数this指向的是这个vue组件
        const result = JSON.parse(xhr.responseText); //拿到结果
        console.log(result);
        this.books = result.data;
      });
      xhr.open("GET", "http://www.liulongbin.top:3006/api/getbooks"); //指定要请求的地址
      xhr.send(); //发起请求
    },
  },
  //创建阶段的第一个生命周期函数
  beforeCreate() {
    //   console.log(this.info);
    //   console.log(this.message);
    //   this.show();
  },
  //创建阶段的第二个生命周期函数
  created() {
    console.log(this.info);
    console.log(this.message);
    this.show();
    //created生命周期函数非常有用，常在里面调用methods中的方法，请求服务器的数据，并且把请求到的数据转存到data中，供template模板渲染的时候使用
    this.initBookList();
    //const dom = document.querySelector("#h3");
    //console.log(dom);   //想获取h3标签，结果是个null
  },
  beforeMount() {
    console.log("beforeMount");
    const dom = document.querySelector("#h3");
    console.log(dom); //想获取h3标签，结果是个null
    console.log(this.$el); //结果是undefined，当前this组件没有el属性
  },
  mounted() {
    console.log(this.$el); //获得的是一个真的DOM元素标签
    const dom = document.querySelector("h3");
    console.log(dom);
  },
  beforeUpdate() {
    console.log("beforeUpdate"); //有打印这个字符串，因为Ajax获取数据以后有赋值，赋值后页面数据有变化，所以可以执行这个函数，点按钮也会触发
    console.log(this.message); //点按钮message改变，触发这个函数后，拿到的一直是最新的message数据
    const p = document.querySelector("#p");
    console.log(p.innerHTML); //但是此时的DOM元素内容是旧的，还没有进行页面结构的渲染
  },
  updated() {
    console.log(this.message); //拿到的一直是最新的message数据
    const p = document.querySelector("#p");
    console.log(p.innerHTML); //此时的DOM元素已经渲染完成，可以拿到最新的DOM元素
  },
};
</script>

<style lang="less">
test-container {
  background-color: pink;
  height: 200px;
}
</style>