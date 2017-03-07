<template lang="pug">
#Breadcrumb
    el-breadcrumb( separator="/" )
        span.el-breadcrumb__item.breadcrumb--links( v-bind:to="{ path: '/' }" )
            span.el-breadcrumb__item__inner 首页
            span.el-breadcrumb__separator /

        // 未添加 v-bind:to="跳转地址"
        span.el-breadcrumb__item.breadcrumb--links( v-for="item in breadcrumbLevelArr" )
            span.el-breadcrumb__item__inner( class="breadcrumb--title" ) {{ item.levelName }}
            span.el-breadcrumb__separator /
</template>

<script>
import  { mapGetters }  from    'vuex'
export default{
    data() {
        return {
            breadcrumbLevelArr : []
        }
    },
    mounted: function() {
        this.initBreadcrumbLevel()
    },
    methods: {
        // 目的: 初始化面包屑状态
        initBreadcrumbLevel() {
            this.$data.breadcrumbLevelArr = this.$store.state.viewState.breadcrumbLevel
        }
    },
    computed: mapGetters({
        breadcrumbLevel     : 'breadcrumbLevel'
    }),
    watch: {
        // 监听: 面包屑状态 是否改变
        breadcrumbLevel: function() {
            this.$data.breadcrumbLevelArr = this.$store.state.viewState.breadcrumbLevel
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#Breadcrumb
    +mB( $D-mainContainerPadding/2 )
    height: $D-mainContainerPadding
    .breadcrumb--links
        +fS( $F-info )
        &:last-child
            >span.breadcrumb--title
                color: $C-theme
                cursor: pointer
</style>
