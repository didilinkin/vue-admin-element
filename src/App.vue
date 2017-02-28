<template lang="pug">
#app
    img( src="./assets/logo.png" )
    br
    i( class="el-icon-edit" )
    br
    i.material-icons call
    br
    i.material-icons ring_volume
    br
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
