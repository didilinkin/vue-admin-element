<script lang="ts">
// setup
import { defineComponent } from "vue"
import Header from "./Header.vue"
import Aside from "./Aside.vue"
import Container from "./Container.vue"

export default {
  components: {
    Header,
    Aside,
    Container,
  },
  setup() {},
}
</script>

<template>
  <el-header class="header">
    <Header />
  </el-header>
  <el-container class="main">
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container class="is-vertical">
      <Container />
    </el-container>
  </el-container>
</template>

<style lang="stylus">
.el-container {
  display: flex;
  width: 100%;
  min-width: 970px;
  .el-aside {
    width: auto;
    overflow: inherit;
  }
  >.el-container {
    background: #f0f2f5;
  }
}
.header {
  box-sizing: border-box;
  height: 55px;
  border-bottom: 1px solid #282a35;
  box-shadow: 2px 0 6px #00152959;
  background-color: #001529;
}
.main {
  height: calc(100vh - 55px);
}
</style>
