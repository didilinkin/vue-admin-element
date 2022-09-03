import { createApp } from "vue"
import { createPinia } from "pinia"

// Element
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 如果只想导入css变量
import "element-plus/theme-chalk/dark/css-vars.css"

// icon
import { install } from "@icon-park/vue-next/es/all"
import "@icon-park/vue-next/styles/index.css"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

const app = createApp(App)

// icon

app.use(createPinia())
app.use(router)

app.use(ElementPlus, {
  size: "small",
  zIndex: 3000,
})

app.mount("#app")

// icon
install(app, `icon`) // 默认前缀是 'icon', 例如: 对于`People`这个icon, 组件名字是`icon-people`.
