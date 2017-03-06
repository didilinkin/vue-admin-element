import actions      from './actions'
import mutations    from './mutations'
import * as types   from './mutation-types'

// 该模块的初始状态
const state = {
    // cart: []
    // 面包屑( 层级状态 ) - length计算层级数; levelName当前层级名称
    breadcrumbLevel: [
        {
            levelName: '收费管理'
        },
        {
            levelName: '租金管理'
        },
        {
            levelName: '应收查询'
        }
    ]
}

// 临时将actions 放置在模块内部
// actions
// const actions = {
//     setBreadcrumbLevel: ( { commit }, obj ) => {
//         // commit(types.SET_BREADCRUMB_LEVEL, obj)
//         console.log( Obj )
//     }
// }

// 临时将mutations 放置在模块内部
// 相关的 mutations

export default {
    state,
    actions,
    mutations
}
