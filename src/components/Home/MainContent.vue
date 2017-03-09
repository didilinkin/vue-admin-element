<template lang="pug">
#mainContent
    // 左侧栏
    .main--sidebar
        // 将返回值通过props传递给 侧导航栏组件
        Sidebar

    // 右内容路由模版( 面包屑 + 路由内容 )
    .main--container
        Breadcrumb
        router-view( name="ContainerView" )
</template>

<script>
import  { mapGetters }  from    'vuex'

import Sidebar                  from '@/components/Home/MainContent/Sidebar'
import Breadcrumb               from '@/components/Home/MainContent/Breadcrumb'
const components = { Sidebar, Breadcrumb }

export default {
    mounted: function() {
        this.getSideBarList()
    },
    methods: {
        // 目的: 触发一个交互, 从后台获取侧导航列表
        getSideBarList() {
            this.$store.dispatch({
                type    : 'getSideBarList'
                // ,attrObj : argumentsArr      // 需要带上session验证账户权限信息; 测试无参数
            })
        }
    },
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

#mainContent
    position: fixed
    +w-h( 100%, inherit )
    +mT( 60px )
    .main--sidebar
        +floatL
        +w-h( $D-sidebarWidth, 100% )
        +bC( $C-theme )
    .main--container
        padding: $D-mainContainerPadding
        +mL( $D-sidebarWidth )
        min-width: 760px
        height: inherit
        +bC( $C-base )
</style>
