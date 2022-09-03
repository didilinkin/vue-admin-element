<template>
  <div class="home__aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>一级导航</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="2-1">选项A</el-menu-item>
        </el-menu-item-group>

        <el-sub-menu index="2-2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>2级导航</span>
          </template>
          <el-menu-item index="2-2-1">选项B</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>

    <div class="menu-control" :collapse="isCollapse">
      <!-- 收起菜单 -->
      <icon-menu-unfold-one
        @click="handleMenu"
        v-show="!isCollapse"
        size="25"
      />
      <!-- 展开菜单 -->
      <icon-menu-fold-one @click="handleMenu" v-show="isCollapse" size="25" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { Menu as IconMenu, Location, HomeFilled } from "@element-plus/icons-vue"

let isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleMenu = () => (isCollapse.value = !isCollapse.value)
</script>

<style lang="stylus">
.home__aside {
  // height: 100vh;
  height: 100%
  background-color: #FFF
  .el-menu {
    border-right: none
  }
  .el-menu-item.is-active {
    background-color: #e6f7ff
    border-right: 3px solid #1890ff
  }
  // 底部控制
  .menu-control {
    position: absolute
    bottom: 0
    height: 55px
    width: 100%
    border-top: 1px solid rgba(0,0,0,.06)
    padding-top: 12px
    padding-left: 20px
    >span {
      cursor: pointer
      color: rgba(0, 0, 0, .8)
      &:hover {
        color: rgba(24, 144, 255, .8)
      }
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px
  min-height: 400px
}
</style>
