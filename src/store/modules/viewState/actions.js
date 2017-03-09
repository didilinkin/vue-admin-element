import  * as viewAPI    from    './api'
import  * as types      from    './mutation-types'

export default{
    // 获取导航栏 '导航列表'
    getSideBarList: ({ commit }) => {
        // 传入一个函数作为参数 -> 将返回结果发给 commit -> 执行types事件
        viewAPI.getAPISideBarList(
            getSideBarList => { 
                // console.log(' 回调成功! ')
                commit( types.SET_SIDE_BAR_LIST, { getSideBarList } )
            }
        )
    },
    // 改变面包屑
    setBreadcrumbLevel: ( { commit }, breadcrumbLevelObj ) => {
        commit( types.SET_BREADCRUMB_LEVEL, breadcrumbLevelObj )
    }
}
