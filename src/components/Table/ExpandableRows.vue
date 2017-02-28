<template lang="pug">
el-table( v-bind:data="tableData5" v-bind:style="{ width: '100%' }" )
    el-table-column( type="expand" )
        template( scope="props" )
            el-form.demo-table-expand( label-position="left" inline  )
                el-form-item( label="商品名称" )
                    span {{ props.row.name }}
                el-form-item( label="所属店铺" )
                    span {{ props.row.shop }}
                el-form-item( label="商品 ID" )
                    span {{ props.row.id }}
                el-form-item( label="店铺 ID" )
                    span {{ props.row.shopId }}
                el-form-item( label="商品分类" )
                    span {{ props.row.category }}
                el-form-item( label="店铺地址" )
                    span {{ props.row.address }}
                el-form-item( label="商品描述" )
                    span {{ props.row.desc }}
    el-table-column( label="商品 ID" prop="id" )
    el-table-column( label="商品名称" prop="name" )
    el-table-column( label="描述" prop="desc" )

</template>

<script>
export default {
    data() {
        return {
            tableData5: [{
                id          : '12987122',
                name        : '好滋好味鸡蛋仔',
                category    : '江浙小吃、小吃零食',
                desc        : '荷兰优质淡奶，奶香浓而不腻',
                address     : '上海市普陀区真北路',
                shop        : '王小虎夫妻店',
                shopId      : '10333'
            }, {
                id          : '12987123',
                name        : '好滋好味鸡蛋仔',
                category    : '江浙小吃、小吃零食',
                desc        : '荷兰优质淡奶，奶香浓而不腻',
                address     : '上海市普陀区真北路',
                shop        : '王小虎夫妻店',
                shopId      : '10333'
            }, {
                id          : '12987125',
                name        : '好滋好味鸡蛋仔',
                category    : '江浙小吃、小吃零食',
                desc        : '荷兰优质淡奶，奶香浓而不腻',
                address     : '上海市普陀区真北路',
                shop        : '王小虎夫妻店',
                shopId      : '10333'
            }, {
                id          : '12987126',
                name        : '好滋好味鸡蛋仔',
                category    : '江浙小吃、小吃零食',
                desc        : '荷兰优质淡奶，奶香浓而不腻',
                address     : '上海市普陀区真北路',
                shop        : '王小虎夫妻店',
                shopId      : '10333'
            }]
        }
    }
}
</script>

<style lang="sass" scoped>

.demo-table-expand
    font-size: 0
    label
        width: 90px
        color: #99a9bf
    .el-form-item
        margin-right: 0
        margin-bottom: 0
        width: 50%
</style>
