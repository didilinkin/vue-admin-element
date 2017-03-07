import actions      from './actions'
import mutations    from './mutations'
import * as types   from './mutation-types'

// 该模块的初始状态
const state = {
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

export default {
    state,
    actions,
    mutations
}
