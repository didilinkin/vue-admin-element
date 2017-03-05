<template lang="pug">
#main
    // 左侧栏
    .main--sidebar
        Sidebar


    // 右内容路由模版( 面包屑 + 路由内容 )
    .main--container
</template>

<script>
import Sidebar                  from '@/components/Home/MainContent/Sidebar'
const components = { Sidebar }

export default {
    components: components
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

#main
    position: fixed
    height: inherit
    +pT( 60px )
    .main--sidebar
        +floatL
        +w-h( $sidebarWidth, 100% )
        +bC( $C-theme )
</style>
