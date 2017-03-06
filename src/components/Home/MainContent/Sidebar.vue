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
                el-menu-item( index="1-1-1" @click="setBreadcrumbLevel( '收费管理', '租金管理', '应收查询' )" ) 应收查询
                el-menu-item( index="1-1-2" @click="setBreadcrumbLevel( '收费管理', '租金管理', '租金记录' )" ) 租金记录

            el-submenu( index="1-2" )
                template( slot="title" ) 物业收费
                el-menu-item( index="1-2-1" @click="setBreadcrumbLevel( '收费管理', '物业收费', '物业费查询' )" ) 物业费查询
                el-menu-item( index="1-2-2" @click="setBreadcrumbLevel( '收费管理', '物业收费', '物业费记录' )" ) 物业费记录

            el-submenu( index="1-3" )
                template( slot="title" ) 抄表电费
                el-menu-item( index="1-3-1" @click="setBreadcrumbLevel( '收费管理', '抄表电费', '电费查询' )" ) 电费查询
                el-menu-item( index="1-3-2" @click="setBreadcrumbLevel( '收费管理', '抄表电费', '电费记录' )" ) 电费记录
                el-menu-item( index="1-3-3" @click="setBreadcrumbLevel( '收费管理', '抄表电费', '电费录入' )" ) 电费录入
                el-menu-item( index="1-3-4" @click="setBreadcrumbLevel( '收费管理', '抄表电费', '峰平谷录入' )" ) 峰平谷录入

            el-submenu( index="1-4" )
                template( slot="title" ) 抄表水费
                el-menu-item( index="1-4-1" @click="setBreadcrumbLevel( '收费管理', '抄表水费', '水费查询' )" ) 水费查询
                el-menu-item( index="1-4-2" @click="setBreadcrumbLevel( '收费管理', '抄表水费', '水费记录' )" ) 水费记录
                el-menu-item( index="1-4-3" @click="setBreadcrumbLevel( '收费管理', '抄表水费', '水表录入' )" ) 水表录入

        // 一级导航 - 客户管理
        el-submenu( index="2" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons person
                span 客户管理
            // 二级导航
            el-menu-item-group
                el-menu-item( index="2-1" @click="setBreadcrumbLevel( '客户管理', '客户资料' )" ) 客户资料

            el-menu-item-group
                el-menu-item( index="2-2" @click="setBreadcrumbLevel( '客户管理', '合同管理' )" ) 合同管理

            el-menu-item-group
                el-menu-item( index="2-3" @click="setBreadcrumbLevel( '客户管理', '保证金管理' )" ) 保证金管理

            el-submenu( index="2-4" )
                template( slot="title" ) 门禁卡管理
                el-menu-item( index="2-4-1" @click="setBreadcrumbLevel( '客户管理', '门禁卡管理', '门禁卡登记' )" ) 门禁卡登记
                el-menu-item( index="2-4-2" @click="setBreadcrumbLevel( '客户管理', '门禁卡管理', '门禁卡押金' )" ) 门禁卡押金

        // 一级导航 - 房产管理
        el-submenu( index="3" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons business
                span 房产管理
            // 二级导航
            el-submenu( index="3-1" )
                template( slot="title" ) 房间查询
                el-menu-item( index="3-1-1" @click="setBreadcrumbLevel( '房产管理', '房间查询', '状态图示' )" ) 状态图示
                el-menu-item( index="3-1-2" @click="setBreadcrumbLevel( '房产管理', '房间查询', '注册信息' )" ) 注册信息

            el-submenu( index="3-2" )
                template( slot="title" ) 房间管理
                el-menu-item( index="3-1-1" @click="setBreadcrumbLevel( '房产管理', '房间管理', '房间管理' )" ) 房间管理
                el-menu-item( index="3-1-2" @click="setBreadcrumbLevel( '房产管理', '房间管理', '楼宇管理' )" ) 楼宇管理

        // 一级导航 - 财务管理
        el-submenu( index="4" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons poll
                span 财务管理
            // 二级导航
            el-submenu( index="4-1" )
                template( slot="title" ) 统计报表
                el-menu-item( index="4-1-1" @click="setBreadcrumbLevel( '财务管理', '统计报表', '租金' )" ) 租金
                el-menu-item( index="4-1-2" @click="setBreadcrumbLevel( '财务管理', '统计报表', '物业费' )" ) 物业费
                el-menu-item( index="4-1-3" @click="setBreadcrumbLevel( '财务管理', '统计报表', '抄表电费' )" ) 抄表电费
                el-menu-item( index="4-1-4" @click="setBreadcrumbLevel( '财务管理', '统计报表', '抄表水费' )" ) 抄表水费

            el-submenu( index="4-2" )
                template( slot="title" ) 租赁审核
                el-menu-item( index="4-2-1" @click="setBreadcrumbLevel( '财务管理', '租赁审核', '租金审核' )" ) 租金审核
                el-menu-item( index="4-2-2" @click="setBreadcrumbLevel( '财务管理', '租赁审核', '租金审核记录' )" ) 租金审核记录
                el-menu-item( index="4-2-3" @click="setBreadcrumbLevel( '财务管理', '租赁审核', '保证金审核' )" ) 保证金审核

            el-submenu( index="4-3" )
                template( slot="title" ) 物业审核
                el-menu-item( index="4-3-1" @click="setBreadcrumbLevel( '财务管理', '物业审核', '电费审核' )" ) 电费审核
                el-menu-item( index="4-3-2" @click="setBreadcrumbLevel( '财务管理', '物业审核', '水费审核' )" ) 水费审核
                el-menu-item( index="4-3-3" @click="setBreadcrumbLevel( '财务管理', '物业审核', '物业费审核' )" ) 物业费审核
                el-menu-item( index="4-3-4" @click="setBreadcrumbLevel( '财务管理', '物业审核', '保证金审核' )" ) 保证金审核

            el-submenu( index="4-4" )
                template( slot="title" ) 财务设置
                el-menu-item( index="4-4-1" @click="setBreadcrumbLevel( '财务管理', '财务设置', '收费设置' )" ) 收费设置
                el-menu-item( index="4-4-2" @click="setBreadcrumbLevel( '财务管理', '财务设置', '开票信息' )" ) 开票信息

        // 一级导航 - 系统设置
        el-submenu( index="5" )
            template( slot="title" )
                // i.el-icon-message
                i.material-icons settings_applications
                span 系统设置
            // 二级导航
            el-submenu( index="5-1" )
                template( slot="title" ) 权限管理
                el-menu-item( index="5-1-1" @click="setBreadcrumbLevel( '系统设置', '权限管理', '角色管理' )" ) 角色管理
                el-menu-item( index="5-1-2" @click="setBreadcrumbLevel( '系统设置', '权限管理', '部门管理' )" ) 部门管理

            el-menu-item-group
                el-menu-item( index="5-2" @click="setBreadcrumbLevel( '系统设置', '登录帐号' )" ) 登录帐号

            el-menu-item-group
                el-menu-item( index="5-3" @click="setBreadcrumbLevel( '系统设置', '数据字典' )" ) 数据字典

            el-menu-item-group
                el-menu-item( index="5-4" @click="setBreadcrumbLevel( '系统设置', '操作日志' )" ) 操作日志
    // 技术支持
    .copyright 青岛上朝科技
</template>

<script>
import  { mapActions, mapGetters }  from    'vuex'

export default {
    methods: {
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
            let firstLevel      = arguments[0]?arguments[0]:'',         // 1级名称
                middleLevel     = arguments[1]?arguments[1]:'',         // 2级名称
                lastLevel       = arguments[2]?arguments[2]:'',         // 3级名称
                argumentsLength = arguments.length                      // 参数个数
            
            let argumentsObj    = new Object                            // 存放参数对象( 触发actions )
            
            // 判断面包屑级别
            if( argumentsLength == 3 ) {
                // 设置参数对象
                argumentsObj.firstLevel     = firstLevel
                argumentsObj.middleLevel    = middleLevel
                argumentsObj.lastLevel      = lastLevel
                // 派发任务( 将argumentsObj对象发给actions )
                this.$store.dispatch({
                    type    : 'setBreadcrumbLevel',
                    attrObj : argumentsObj
                })
            } else {
                // 设置参数对象
                argumentsObj.firstLevel     = firstLevel
                argumentsObj.middleLevel    = middleLevel
                // 派发任务( 将argumentsObj对象发给actions )
                this.$store.dispatch({
                    type    : 'setBreadcrumbLevel',
                    attrObj : argumentsObj
                })
            }
        },
        // 测试点击事件
        logMsg( msg ) {
            console.log( msg )
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
