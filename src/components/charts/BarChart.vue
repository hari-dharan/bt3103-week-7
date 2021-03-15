<template>
  <div>
    <h1 id="heading">Bar Chart</h1>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "./BarChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>

#heading {
  font-size: 60px;
  color: white;
  background-color: rgb(43, 143, 183);
  text-align: center;
  padding: 20px;
  border: solid;
}

</style>