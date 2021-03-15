//{}
<template>
  <div>
    <button v-on:click="decrement()">-</button>
    <p id="count">{{ count }}</p>
    <button v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
  name: "QuantityCounter",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    decrement: function () {
      if (this.count > 0) this.count--;
      this.$emit("counter", this.item, this.count);
    },
    increment: function () {
      if (this.count >= 10) {
        alert("You cannot buy more than 10 items!");
      } else {
        this.count++;
      }
      this.$emit("counter", this.item, this.count);
    },
  },
};
</script>

<style scoped>
button {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;  
        text-align: center;
        color: black;
        background-color: #d424a2a8;
        display: inline;
        margin: 10px;
        padding: 16px;
        font-size: 32px;
        border-radius: 8px;
    }

    button:active {
        background-color: #af0980a8;
        transform: translateY(1px);
    }

    #count {
        display: inline;
        font-size: 32px;
    }
</style>