import  * as types      from    './mutation-types'

// 输出模块
export default{
    setBreadcrumbLevel: ( { commit }, breadcrumbLevelObj ) => {
        commit( types.SET_BREADCRUMB_LEVEL, breadcrumbLevelObj )
    }
}
