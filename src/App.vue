<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item,index) in carList" :key="item.index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.price }}</p>
        <button @click="addCart(index)">添加购物车我修改了东西</button>
      </li>
    </ul>
    <my-cart :title="title"></my-cart>
    <FormElement></FormElement>
  </div>
</template>
<script>
import myCart from "./components/Cart";
import FormElement from "./components/FormElement";
export default {
  name: "app",
  components: {
    myCart,
    FormElement
  },
  data() {
    return {
      carList: [],
      title: "购物车"
    }
  },
  methods: {
    addCart(index) {
      const good = this.carList[index]
      this.$bus.$emit('addCart',good)
    }
  },
  async created() {
    // this.$http.get('/api/cartList').then(res=>{
    //   console.log(res)
    //   this.carList = res.data.datd
    // }).catch(err=>{
    //   console.log('error')
    // })
    try {
      const res = await this.$http.get("/api/cartList");
      this.carList = res.data.datd;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style>
</style>
