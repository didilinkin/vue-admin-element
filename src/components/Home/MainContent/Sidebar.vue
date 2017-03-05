<template lang="pug">
// 侧栏导航
#sidebar
    el-menu.el-menu-vertical-demo( default-active="2" @open="handleOpen" @close="handleClose" theme="dark" v-bind:unique-opened="true" )
        // 一级导航 - 收费管理
        el-submenu( index="1" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons attach_money
                span 收费管理
            // 二级导航
            el-submenu( index="1-1" )
                template( slot="title" ) 租金管理
                el-menu-item( index="1-1-1" ) 应收查询
                el-menu-item( index="1-1-2" ) 租金记录

            el-submenu( index="1-2" )
                template( slot="title" ) 物业收费
                el-menu-item( index="1-2-1" ) 物业费查询
                el-menu-item( index="1-2-2" ) 物业费记录

            el-submenu( index="1-3" )
                template( slot="title" ) 抄表电费
                el-menu-item( index="1-3-1" ) 电费查询
                el-menu-item( index="1-3-2" ) 电费记录
                el-menu-item( index="1-3-3" ) 电费录入
                el-menu-item( index="1-3-4" ) 峰平谷录入

            el-submenu( index="1-4" )
                template( slot="title" ) 抄表水费
                el-menu-item( index="1-4-1" ) 水费查询
                el-menu-item( index="1-4-2" ) 水费记录
                el-menu-item( index="1-4-3" ) 水表录入

        // 一级导航 -客户管理
        el-submenu( index="2" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons person
                span 客户管理
            // 二级导航
            el-menu-item-group
                el-menu-item( index="2-1" ) 客户资料

            el-menu-item-group
                el-menu-item( index="2-2" ) 合同管理

            el-menu-item-group
                el-menu-item( index="2-3" ) 保证金管理

            el-submenu( index="2-4" )
                template( slot="title" ) 门禁卡管理
                el-menu-item( index="2-4-1" ) 门禁卡登记
                el-menu-item( index="2-4-2" ) 门禁卡押金

        // 一级导航 - 房产管理
        el-submenu( index="3" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons business
                span 房产管理
            // 二级导航
            el-submenu( index="3-1" )
                template( slot="title" ) 房间查询
                el-menu-item( index="3-1-1" ) 状态图示
                el-menu-item( index="3-1-2" ) 注册信息

            el-submenu( index="3-2" )
                template( slot="title" ) 房间管理
                el-menu-item( index="3-1-1" ) 房间管理
                el-menu-item( index="3-1-2" ) 楼宇管理

        // 一级导航 - 财务管理
        el-submenu( index="4" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons poll
                span 财务管理
            // 二级导航
            el-submenu( index="4-1" )
                template( slot="title" ) 统计报表
                el-menu-item( index="4-1-1" ) 租金
                el-menu-item( index="4-1-2" ) 物业费
                el-menu-item( index="4-1-3" ) 抄表电费
                el-menu-item( index="4-1-4" ) 抄表水费

            el-submenu( index="4-2" )
                template( slot="title" ) 租赁审核
                el-menu-item( index="4-2-1" ) 租金审核
                el-menu-item( index="4-2-2" ) 租金审核记录
                el-menu-item( index="4-2-3" ) 保证金审核

            el-submenu( index="4-3" )
                template( slot="title" ) 物业审核
                el-menu-item( index="4-3-1" ) 电费审核
                el-menu-item( index="4-3-2" ) 水费审核
                el-menu-item( index="4-3-3" ) 物业费审核
                el-menu-item( index="4-3-4" ) 保证金审核

            el-submenu( index="4-4" )
                template( slot="title" ) 财务设置
                el-menu-item( index="4-4-1" ) 收费设置
                el-menu-item( index="4-4-2" ) 开票信息

        // 一级导航 - 系统设置
        el-submenu( index="5" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons settings_applications
                span 系统设置
            // 二级导航
            el-submenu( index="5-1" )
                template( slot="title" ) 权限管理
                el-menu-item( index="5-1-1" ) 角色管理
                el-menu-item( index="5-1-2" ) 部门管理

            el-menu-item-group
                el-menu-item( index="5-2" ) 登录帐号

            el-menu-item-group
                el-menu-item( index="5-3" ) 数据字典

            el-menu-item-group
                el-menu-item( index="5-4" ) 登录帐号
    // 技术支持
    .copyright 青岛上朝科技
</template>

<script>
export default {
    methods: {
        handleOpen( key, keyPath ) {
            console.log( key, keyPath )
        },
        handleClose( key, keyPath ) {
            console.log( key, keyPath )
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
