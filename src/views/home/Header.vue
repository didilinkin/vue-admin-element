<template>
  <div class="aside__header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    <span>Vue Admin</span>
  </div>
</template>

<style lang="stylus">
.aside__header {

  display: flex;
  align-items: center;
  justify-content: center;
  >img {
    width: 30px;
    -o-object-fit: contain;
    object-fit: contain;
    margin-right: 8px;
  }
  span {
    font-size: 22px;
    font-weight: 700;
    color: #dadada;
    white-space: nowrap;
  }
}
</style>
