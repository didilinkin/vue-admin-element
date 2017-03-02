<template lang="pug">
#home
    HeaderNav
    Main
</template>

<script>
import HeaderNav                from '@/components/Home/HeaderNav'
import Main                     from '@/components/Home/Main'
const components = { HeaderNav, Main }

export default {
    components: components
}
</script>

<style lang="sass" scoped>
@import '../sass/main'

#home
    +H100
</style>
