// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue          from 'vue'
import App          from './App'
import router       from './router'
import ElementUI    from 'element-ui'               // ElementUI模块
import 'element-ui/lib/theme-default/index.css'     // ElementUI样式

Vue.config.productionTip = false
Vue.use( ElementUI )

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
