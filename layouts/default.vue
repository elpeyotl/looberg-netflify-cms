<template>
  <div class="main-grid">
      <Logo />
    <div class="main">
      <nuxt class="content" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/logo'

export default {
   components: {
    Logo
  },
}
</script>

<style>
</style>
