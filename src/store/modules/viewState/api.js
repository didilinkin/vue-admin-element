import  Vue             from    'vue'
import  axios           from    'axios'
import  * as types      from    './mutation-types'
const   qs = require('qs')

// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// API获取侧导航列表
export const getAPISideBarList = ( cbFunction ) => {
    axios.get('./static/api/viewAPI.json', {})
    .then(function( response ) {
        let getSideBarList = response.data.resultData
        cbFunction( getSideBarList )        // callback()
    })
    .catch(function( error ) {
        console.log(error)
    })
}

