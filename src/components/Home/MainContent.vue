<template lang="pug">
#mainContent
    // 左侧栏
    .main--sidebar
        Sidebar

    // 右内容路由模版( 面包屑 + 路由内容 )
    .main--container
        Breadcrumb
</template>

<script>
import Sidebar                  from '@/components/Home/MainContent/Sidebar'
import Breadcrumb               from '@/components/Home/MainContent/Breadcrumb'
const components = { Sidebar, Breadcrumb }

export default {
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
