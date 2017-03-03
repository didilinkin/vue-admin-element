<template lang="pug">
#headerNav
    .headerNav--logo
        h3 {{ logoTitle }}
    .headerNav--menu
        el-menu.el-menu-demo( theme="dark" v-bind:default-active="activeIndex" mode="horizontal" @select="handleSelect" )
            // 邮件
            el-submenu( index="1" )
                template( slot="title" )
                    el-badge.item( v-bind:value="200" v-bind:max="99" )
                        el-button( size="small" )
                    i.material-icons email
                el-menu-item( index="1-1" ) 邮件A
                el-menu-item( index="1-2" ) 邮件B
            // 消息
            el-submenu( index="2" )
                template( slot="title" )
                    el-badge.item( v-bind:value="200" v-bind:max="99" )
                        el-button( size="small" )
                    i.material-icons notifications
                el-menu-item( index="2-1" ) 消息A
                el-menu-item( index="2-2" ) 消息B
                el-menu-item( index="2-3" ) 消息C
            // 个人信息
            el-submenu( index="3" )
                template( slot="title" ) 庞荆津
                el-menu-item( index="3-1" ) 个人设置
                el-menu-item( index="3-2" ) 修改密码
                el-menu-item( index="3-3" ) 安全退出

</template>

<script>
export default {
    data() {
        return {
            logoTitle: '长江中心综合管理系统',
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect( key, keyPath ) {
            console.log( key, keyPath )
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../sass/main'

#headerNav
    position: fixed
    +W100
    .headerNav--logo
        +floatL
        +flexCenter
        +w-h( $sidebarWidth, $headerNavHeight )
        +bC( $C-theme )
        >h3
            +fS( $F-info )
            color: $F
    .headerNav--menu
        +mL( $sidebarWidth )
        min-width: 760px
        height: $headerNavHeight
        .el-menu
            display: flex
            justify-content: flex-end

// 下拉菜单 - 图标大小样式
i.material-icons
    +fS( $F-title*1.5 )
    +pT( 5px )
</style>
