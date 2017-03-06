import  * as types      from    './mutation-types'

// 输出模块
export default {
    [types.SET_BREADCRUMB_LEVEL] ( state, res ) {
        // console.dir( res )
        
        // 获取级别数量( 2级 / 3级 )
        let resAttrArr  = Object.keys( res.attrObj ),
            resLength   = Object.keys( res.attrObj ).length
        // console.log( resLength )
        console.log( resAttrArr )

        // 首先清空 $store的面包屑数组数据
        state.breadcrumbLevel = []

        let levelObj = new Object       // 声明一个空对象

        // push

        console.log( res.attrObj )

        for( let i=0; i<resLength; i++ ) {
            // levelObj['levelName'] = res.attrObj
        }

    }
}