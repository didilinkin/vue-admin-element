// import viewAPI          from    './api'
import  * as viewAPI    from    './api'
import  * as types      from    './mutation-types'

export default{
    // 获取导航栏 '导航列表'
    getSideBarList: ( { commit } ) => {
        // console.log(' 触发actions事件成功 ')
        viewAPI.getAPISideBarList()
    },
    // 改变面包屑
    setBreadcrumbLevel: ( { commit }, breadcrumbLevelObj ) => {
        commit( types.SET_BREADCRUMB_LEVEL, breadcrumbLevelObj )
    }
}
