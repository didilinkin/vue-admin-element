import actions      from './actions'
import mutations    from './mutations'
import * as types   from './mutation-types'

// 该模块的初始状态
const state = {
    // 面包屑( 层级状态 ) - length计算层级数; levelName当前层级名称
    breadcrumbLevel: [
        {
            levelName: '收费管理'
        }, {
            levelName: '租金管理'
        }, {
            levelName: '应收查询'
        }
    ],
    // 从后台动态获取的侧导航栏信息( 当用户登录之后, 触发交互事件 -> 获取当前用户权限允许访问的导航列表 -> 将导航列表数据存放到此处 )
    sideBarList: []
}

export default {
    state,
    actions,
    mutations
}
