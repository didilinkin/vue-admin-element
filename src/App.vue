<template lang="pug">
#app
    img( src="./assets/logo.png" )
    br
    i.material-icons ring_volume
    h1 material-icons图标
    br
    h1( v-bind:style=" { fontSize: '50px' } " ) 表格
    router-view
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="sass" scoped>
#app
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
