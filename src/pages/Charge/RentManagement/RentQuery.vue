// 应收查询
<template lang="pug">
el-tabs( v-model="activeName2" type="card" @tab-click="handleClick" )
    el-tab-pane( label="待收租"       name="first" ) 待收租
    el-tab-pane( label="审核中"       name="second" ) 审核中
    el-tab-pane( label="审核失败"     name="third" ) 审核失败
    el-tab-pane( label="审核成功"     name="fourth" ) 审核成功
</template>

<script>
export default {
    data() {
        return {
            activeName2: 'second'
        }
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event)
        }
    }
}
</script>
