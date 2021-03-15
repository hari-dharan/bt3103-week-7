//{}
<template>
  <div>
    <h1>Menu:</h1>
    <ul>
      <li v-for="item in itemsSelected" :key="item.name">
        <p>{{ item[0] }} x {{ item[1] }}</p>
      </li>
    </ul>
    <button v-on:click="findTotal(); sendOrder();">Add Order</button>
    <p v-show="show">Sub Total: ${{ subTotal }}</p>
    <p v-show="show">Grand Total: ${{ grandTotal }}</p>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
  name: "Basket",
  data() {
    return {
      subTotal: 0,
      show: false,
    };
  },
  computed: {
    grandTotal: function () {
      return (this.subTotal * 1.07).toFixed(2);
    },
  },
  methods: {
    findTotal: function () {
      for (let i = 0; i < this.itemsSelected.length; i++) {
        this.subTotal += this.itemsSelected[i][1] * this.itemsSelected[i][2];
      }
      this.subTotal = this.subTotal.toFixed(2);
      this.show = true;
    },
    sendOrder: function() { 
      var quantities = {
        prawn: 0,
        dry: 0,
        sambal: 0,
        pork: 0,
        mapo: 0,
        cereal: 0
      }
      
      for (let i = 0; i < this.itemsSelected.length; i++) {
        if (this.itemsSelected[i][0] == "Prawn omelette") {
          quantities.prawn = this.itemsSelected[i][1];
        } else if (this.itemsSelected[i][0] == "Dry Beef Hor Fun") {
          quantities.dry = this.itemsSelected[i][1];
        } else if (this.itemsSelected[i][0] == "Sambal Kangkung") {
          quantities.sambal = this.itemsSelected[i][1];
        } else if (this.itemsSelected[i][0] == "Pork Fried Rice") {
          quantities.pork = this.itemsSelected[i][1];
        } else if (this.itemsSelected[i][0] == "Mapo Tofu") {
          quantities.mapo = this.itemsSelected[i][1];
        } else if (this.itemsSelected[i][0] == "Cereal Prawn") {
          quantities.cereal = this.itemsSelected[i][1];
        }
      }

      database.collection('orders').add(quantities).then(() => {location.reload();});

    },

    //sendOrder: function() {
    //  for (let i = 0; i < this.itemsSelected.length; i++) {
    //    database.collection('orders').add(
    //      {name: this.itemsSelected[i][0],
    //      quantity: this.itemsSelected[i][1],
    //      price: this.itemsSelected[i][2]}
    //    ).then(() => {
    //      location.reload();
    //    });
    //  }
    //},

  },
  props: {
    itemsSelected: {
      type: Array,
    },
  },
};
</script>

<style scoped>
p {
  font-size: 24px;
}

button {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;  
        text-align: center;
        color: black;
        background-color: #d424a2a8;
        display: inline;
        font-size: 20px;
        padding: 16px;
        border-radius: 8px;
}
</style>