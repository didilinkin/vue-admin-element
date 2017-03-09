import  Vue             from    'vue'
import  axios           from    'axios'
import  * as types      from    './mutation-types'
const   qs = require('qs')

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default{
    // API获取侧导航列表
    getAPISideBarList() {
        console.log('API交互事件执行')
    }
}

