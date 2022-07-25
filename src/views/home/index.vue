<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template lang="pug">
.home
  h1 Home
  RouterLink(to="/about") About
</template>
