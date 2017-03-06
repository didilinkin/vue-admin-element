import  * as types      from    './mutation-types'

// 输出模块
export default{
    setBreadcrumbLevel: ( { commit }, Obj ) => {
        commit(types.SET_BREADCRUMB_LEVEL, Obj)
        // console.dir( Obj )
    }
}