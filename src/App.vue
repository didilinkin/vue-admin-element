<template lang="pug">
#app
    img( src="./assets/logo.png" )
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
