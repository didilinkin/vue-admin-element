<template>
<el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="日期" sortable width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter"> </el-table-column>
    <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag">
        <template scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
        </template>
    </el-table-column>
</el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                tag: '家'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                tag: '公司'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                tag: '家'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                tag: '公司'
            }]
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
