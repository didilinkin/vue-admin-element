import  * as types      from    './mutation-types'

export default {
    [types.SET_BREADCRUMB_LEVEL] ( state, res_breadcrumbLevel ) {
        state.breadcrumbLevel = []                                  // 首先清空 $store的面包屑数组数据
        state.breadcrumbLevel = res_breadcrumbLevel.attrObj         // 将参数数组赋值到 $store当中
    },
    // 保存侧导航栏 导航列表
    [types.SET_SIDE_BAR_LIST] ( state, res_sideBarList ) {
        state.sideBarList = []                                      // 首先清空
        let resArr = res_sideBarList.getSideBarList                 // 将结果保存到变量( 提取内部数组 )
        for( let i=0; i<resArr.length; i++ ) {                      // 存入 $store.sideBarList 数组中
            state.sideBarList.push( resArr[i] )
        }
    }
}
