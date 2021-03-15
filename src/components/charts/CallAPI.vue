<template>
  <div>
    <h1 id='heading'>Line Chart</h1>
    <Chart></Chart>
  </div>
</template>

<script>
import Chart from "./CallAPI.js";
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