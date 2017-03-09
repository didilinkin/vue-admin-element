import  * as types      from    './mutation-types'

export default {
    [types.SET_BREADCRUMB_LEVEL] ( state, res_breadcrumbLevel ) {
        state.breadcrumbLevel = []                                  
        state.breadcrumbLevel = res_breadcrumbLevel.attrObj         
    },
    // 保存侧导航栏 导航列表
    [types.SET_SIDE_BAR_LIST] ( state, res_sideBarList ) {
        state.sideBarList = []                                      
        let resArr = res_sideBarList.getSideBarList                 
        for( let i=0; i<resArr.length; i++ ) {                      
            state.sideBarList.push( resArr[i] )
        }
    }
}
