<template>
  <div>
    wangjj--20210207修改数据
    <h2>{{ title }}</h2>
    <table border="1">
      <tr>
        <th>#</th>
        <th>课程</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(item, index) in cart" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.active" />
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="substract(index)">-</button>
          {{ item.count }}
          <button @click="add(index)">+</button>
        </td>

        <td>￥{{ item.count * item.price }}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{ activeCount }}/{{ count }}</td>
        <td colspan="2">￥{{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "caet",
  props: ["title"],
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || []
    };
  },
  created() {
    this.$bus.$on("addCart", good => {
      const ret = this.cart.find(v => v.id === good.id);
      if(!ret){
          this.cart.push(good)
      }else{
          ret.count +=1
      }
    });
  },
  computed: {
    count() {
      return this.cart.length;
    },
    activeCount() {
      if (this.cart != null) {
        return this.cart.filter(v => v.active).length;
      }
    },
    total() {
      let sum = 0;
      return this.cart.reduce((sum, c) => {
        if (c.active) {
          sum += c.price * c.count;
        }
        return sum;
      }, 0);
    }
  },
  methods: {
    remove(index) {
      if (window.confirm("确定是否要删除此数据？")) {
        this.cart.splice(index, 1);
      }
    },
    add(index) {
      this.cart[index].count++;
    },
    substract(index) {
      let count = this.cart[index].count;
      count > 1 ? (this.cart[index].count -= 1) : this.remove(index);
    },
    setLocalData(n){
        localStorage.setItem('cart',JSON.stringify(n))
    }
  },
  watch:{
      cart:{
          handler(n,o){
              this.setLocalData(n)
          },
          deep:true
      }
  }
};
</script>

<style  scoped>
</style>