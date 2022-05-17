<!--
 * @Author: J_in
 * @Date: 2022-05-17 10:40:49
 * @LastEditors: J_in
 * @LastEditTime: 2022-05-17 14:59:55
 * @FilePath: /jubilant-eureka/src/App.vue
-->
<template>
  <div id="app">
    <el-button type="primary">HTML篇</el-button>
    <el-button type="success">CSS篇</el-button>
    <el-button type="warning">JS篇</el-button>
    <el-button type="danger">Vue篇</el-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
