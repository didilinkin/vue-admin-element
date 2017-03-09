<template>
<!-- 侧栏导航 -->
<div id="sidebar">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :unique-opened="true" >
        <!--
        // 济南云适配
        <el-submenu v-for="(menuGroup, key) in menuList" :index="menuGroup.name" :key="key">
            <template slot="title">
                <i :class="menuGroup.icon" class="fa"></i>
                {{menuGroup.name}}
            </template>
            <el-menu-item v-for="(subMenu, subKey) in menuGroup.subMenu" :index="subMenu.path" :key="subKey">
                {{subMenu.name}}
            </el-menu-item>
        </el-submenu>
        -->

        <!-- 1级目录 -->
        <el-submenu v-for=" ( item, key ) in dataSidebarList " v-bind:index=" item.titleName " v-bind:key="key" >

            <template slot="title">
                <i class="material-icons"> {{ item.iconClass }} </i>
                {{ item.titleName }}
            </template>
            <!-- 2级目录 -->
            <el-submenu v-for=" ( itemMiddle, keyMiddle ) in item.middle " v-bind:index=" itemMiddle.titleName " v-bind:key=" keyMiddle ">
                {{ itemMiddle.titleName }}
                <!-- 3级目录  -->
            </el-submenu>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'

export default {
    data() {
        return {
            dataSidebarList: []
        }
    },
    mounted: function() {
        this.testLog()
    },
    methods: {
        // 测试this 是否接收到 props
        testLog() {
            console.log( this.dataSidebarList )
        },
        handleOpen( key, keyPath ) {
            // console.log( key, keyPath )
            // console.log('打开' + key + keyPath)
        },
        handleClose( key, keyPath ) {
            // console.log( key, keyPath )
            // console.log('关闭' + key + keyPath)
        },
        // 目的: 改变面包屑层级状态( 缺省参数 )
        setBreadcrumbLevel() {
            let argumentsLength = arguments.length,                         // 参数个数
                argumentsArr    = []                                        // 存放参数对象( 作为参数: 触发actions事件 )

            for( let i=0; i<argumentsLength; i++ ) {
                let argumentsObj    = new Object
                argumentsObj['levelName'] = arguments[i]
                argumentsArr.push( argumentsObj )
            }
            // 派发任务( 将argumentsObj对象发给actions )
            this.$store.dispatch({
                type    : 'setBreadcrumbLevel',
                attrObj : argumentsArr
            })
        },
        // 目的: 跳转url, 渲染相应的路由组件
        toPageUrl( linkUrl ) {
            location.href='#/' + linkUrl
        }
    },
    computed: mapGetters({
        get_sideBarList     : 'get_sideBarList'
    }),
    watch: {
        // 监听: 返回用户侧导航栏列表
        get_sideBarList: function() {
            this.$data.dataSidebarList = this.$store.state.viewState.sideBarList
            // console.log( this.$data.data_sidebarList )
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
