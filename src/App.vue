<!--{}-->
<template>
  <div>
    <h1 id="header">HARI's Kitchen</h1>
    <router-view></router-view>
    <!--<Content></Content>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style scoped>
#header {
  font-size: 60px;
  color: white;
  background-color: rgb(43, 143, 183);
  text-align: center;
  padding: 20px;
  border: solid;
}
</style>
