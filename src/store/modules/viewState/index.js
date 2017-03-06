import * as types from './mutation-types'

// 该模块的初始状态
const state = {
    // cart: []
    // 面包屑( 层级状态 ) - length计算层级数; levelName当前层级名称
    breadcrumbLevel: [
        {
            levelName: '收费管理'
        }
    ],
    testState: 'AAAAA'
}

export default {
    state
}