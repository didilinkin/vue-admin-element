<template lang="pug">
#app
    router-view
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="sass" scoped>
@import './sass/main'
@import './sass/vendors/Element'

#app
    height: 100vh
</style>
