<template lang="pug">
#home
    HeaderNav
    MainContent
</template>

<script>
import HeaderNav                from '@/components/Home/HeaderNav'
import MainContent                     from '@/components/Home/MainContent'
const components = { HeaderNav, MainContent }

export default {
    components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#home
    +H100
</style>
