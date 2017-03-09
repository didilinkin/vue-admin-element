import  Vue             from    'vue'
import  axios           from    'axios'
import  * as types      from    './mutation-types'
const   qs = require('qs')

// 设置ContentType
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// API获取侧导航列表
export const getAPISideBarList = () => {
    // console.log('API交互事件执行') 
    axios.get('./static/api/viewAPI.json', {})
    .then(function( response ) {
        let getSideBarList = response.data.resultData
        // commit( 'saveSideBarList_data', getSideBarList )
        console.dir(getSideBarList)
    })
    .catch(function( error ) {
        console.log(error)
    })
}

