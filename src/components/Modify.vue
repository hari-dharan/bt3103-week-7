<!--{}-->
<template>
  <div>
    <ul>
      <li v-for="order in orders" :key="order.id">
        <p>Prawn omelette: {{ order[1].prawn }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
      <li>
        <p>Dry Beef Hor Fun: {{ order[1].dry }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
      <li>
        <p>Sambal Kangkung: {{ order[1].sambal }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
      <li>
        <p>Pork Fried Rice: {{ order[1].pork }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
      <li>
        <p>Mapo Tofu: {{ order[1].mapo }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
      <li>
        <p>Cereal Prawn: {{ order[1].cereal }}</p>
        <input id='order.id' type="number" placeholder=0 min="0">
      </li>
    </ul>
    <button>Update Order</button>
  </div>
</template>

<script>

import database from '../firebase.js'

export default {
  data() {
    return {
      orders: [],
    };
  },

  methods: {
    fetchItems:function(){
        console.log(this.$route.params.id);
        database.collection('orders').doc(this.$route.params.id).get().then((doc)=>{
        let order = doc.data()
        let order_id = doc.id
        order.show = false
        this.orders.push([order_id,order])
        })
    
    },  
  },

  created(){
      this.fetchItems()    
    },

};
</script>

<style scoped>

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}

</style>