<template lang="pug">
// 侧栏导航
#sidebar
    el-menu.el-menu-vertical-demo( default-active="2" @open="handleOpen" @close="handleClose" theme="dark" v-bind:unique-opened= "true"  )
        // 1级导航
        el-submenu( v-for="( item, key ) in dataSidebarList" v-bind:index="item.titleName" v-bind:key="key" )
            template( slot="title" )
                i.material-icons {{ item.iconClass }}
                span {{ item.titleName }}
            // 2级导航( 3级点击 )
            el-submenu(  v-for="( itemMiddleSubMenu, keyMiddleSubMenu ) in item.middleSubMenu"  v-bind:index="itemMiddleSubMenu.titleName" v-bind:key="keyMiddleSubMenu" )
                template( slot="title" ) {{ itemMiddleSubMenu.titleName }}
                el-menu-item( v-for="( itemBottom, keyBottom ) in itemMiddleSubMenu.bottom" v-bind:index="itemBottom.titleName" v-bind:key="keyBottom" @click="clickSidebar( itemBottom.breadcrumb, itemBottom.url )" ) {{ itemBottom.titleName }}
            // 2级导航( 2级点击 )
            el-menu-item-group( v-for="( itemMiddleLink, keyMiddleLink ) in item.middleLink" v-bind:index="itemMiddleLink.titleName" v-bind:key="keyMiddleLink" )
                el-menu-item( v-bind:index="itemMiddleLink.titleName" @click="clickSidebar( itemMiddleLink.breadcrumb, itemMiddleLink.url )" ) {{ itemMiddleLink.titleName }}
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'

export default {
    data() {
        return {
            dataSidebarList: []
        }
    },
    methods: {
        handleOpen( key, keyPath ) {
            // console.log( key, keyPath )
        },
        handleClose( key, keyPath ) {
            // console.log( key, keyPath )
        },
        // 目的: 跳转url, 渲染相应的路由组件
        toPageUrl( linkUrl ) {
            location.href='#/' + linkUrl
        },
        // 目的: 处理动态导航点击事件( 更改面包屑状态 + 跳转url )
        clickSidebar( breadcrumbArr, toUrl ) {
            // events 1: 更新面包屑状态
            let argsLength      = breadcrumbArr.length,
                argumentsArr    = []                        // 存放参数对象( 作为参数: 触发actions事件 )
            for( let i=0; i<argsLength; i++ ) {
                let argumentsObj = new Object
                    argumentsObj['levelName'] = breadcrumbArr[i]
                    argumentsArr.push( argumentsObj )
            }
            // 派发任务( 将argumentsObj对象发给actions )
            this.$store.dispatch({
                type    : 'setBreadcrumbLevel',
                attrObj : argumentsArr
            })
            // events 2: 跳转url, 渲染相应的路由组件
            this.toPageUrl( toUrl )
        }
    },
    computed: mapGetters({
        get_sideBarList     : 'get_sideBarList'
    }),
    watch: {
        // 监听: 返回用户侧导航栏列表
        get_sideBarList: function() {
            this.$data.dataSidebarList = this.$store.state.viewState.sideBarList
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#sidebar
    height: inherit
    +bC( $C-theme-D )
    // 侧面导航继承main高度
    .el-menu
        height: 90%
        // 侧栏导航 - 图标 位置居中
        .material-icons
            +text-VA( middle )
        span
            @extend .material-icons
            +mL( $F-info )
            +fS( $F-info )
    // 版权信息
    .copyright
        +flexCenter
        +fS( $F-text )
        color: rgba( $F, .4 )

</style>
