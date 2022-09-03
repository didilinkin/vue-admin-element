<template>
  <!-- 新增按钮 -->
  <!--
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button>
    </div>
  -->

  <!-- 标签 -->
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="container--tabs"
    :stretch="true"
    @tab-remove="removeTab"
  >
    <!-- :closable="item.closable" -->
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="item.closable"
    >
      <!-- {{ item.content }} -->
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue"

let tabIndex = 2
const editableTabsValue = ref("2")
const editableTabs = ref([
  {
    title: "首页",
    name: "1",
    closable: false,
    content: "Tab 1 content",
  },
  {
    title: "Tab 2",
    name: "2",
    closable: true,
    content: "Tab 2 content",
  },
])

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: "New Tab",
    name: newTabName,
    closable: true,
    content: "New Tab content",
  })
  editableTabsValue.value = newTabName
}
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>

<style lang="stylus">
/* .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
} */
.container--tabs {
  // background-color: #fff;
  .el-tabs__header {
    margin: 0;
    .el-tabs__nav {
      border: none;
      border-radius: 10px 10px 0 0;
      background-color: #FFF;
    }
  }
}
</style>
