<template lang="pug">
#Breadcrumb
    el-breadcrumb( separator="/" )
        el-breadcrumb-item( v-bind:to="{ path: '/' }" ) 首页
        el-breadcrumb-item 活动管理
        el-breadcrumb-item 活动列表
        el-breadcrumb-item 活动详情
    h1 {{ testState }}
</template>

<script>
import  { mapGetters }  from    'vuex'
export default{
    mounted: function() {
        this.testFunction()
    },
    methods: {
        // 测试Getters是否获取到数据
        testFunction() {
            // console.log( this.$store.state.viewState.testState )
        }
    },
    computed: mapGetters({
        breadcrumbLevel     : 'breadcrumbLevel',
        testState           : 'testState'   // 测试Getters是否获取到数据
    })
}
</script>

<style lang="sass" scoped>
@import '../../../sass/main'

#Breadcrumb   
</style>