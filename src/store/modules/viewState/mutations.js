import  * as types      from    './mutation-types'

export default {
    [types.SET_BREADCRUMB_LEVEL] ( state, breadcrumbLevel ) {
        state.breadcrumbLevel = []                          // 首先清空 $store的面包屑数组数据
        state.breadcrumbLevel = breadcrumbLevel.attrObj     // 将参数数组赋值到 $store当中
    }
}
