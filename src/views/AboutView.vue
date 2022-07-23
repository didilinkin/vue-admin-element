<template lang="pug">
.about
  h1 This is an about page

  el-button 中文

  el-button(type="primary") Default
</template>

<style lang="stylus">
@media (min-width 1024px)
  .about
    min-height 100vh
    display flex
    align-items center
    h1
      color red
</style>
