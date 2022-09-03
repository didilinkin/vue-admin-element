<template>
  <el-header class="container__header">
    <Tabs />
  </el-header>
  <el-main class="container__main">
    标签内容！
    <icon-camera theme="outline" size="32" fill="#000000" />
  </el-main>
  <el-footer>
    <a>vue-admin-element</a>
  </el-footer>
</template>

<script lang="ts">
// setup
// import { Camera } from "@icon-park/vue-next"

import Tabs from "./Tabs.vue"

export default {
  components: {
    // Camera,
    Tabs,
  },
}
</script>

<style lang="stylus">
.el-header {
  height: auto;
  ox-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  padding: 0 15px;
  background-color: #FFF;
  border-bottom: 1px solid #f6f6f6;
}

.container__header {
  padding: 0 24px;
  background-color: #f0f2f5;
  border: none;
  height: 40px;
  margin-top: 15px;
}

.el-main {
  box-sizing: border-box;
  // padding: 10px 13px;
  margin: 0 24px;
  // margin-bottom: 0;
  overflow-x: hidden;
  background-color: #FFF;
}

.el-footer {
  height: 55px;
}
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  // border-top: 1px solid #e4e7ed;
  a {
    font-size: 14px;
    color: #858585;
    text-decoration: none;
    letter-spacing: .5px;
  }
}

// .el-main,
// footer {
//   background: #f0f2f5;
// }
</style>
