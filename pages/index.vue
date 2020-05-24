<template>
<div class="main-content">
    <div class="content-left">
        <div class="container">
          <div class="content__heading">
            <h1>Bildhauerei<br>Grabmale<br>Workshops</h1>
          </div>

           <div class="content__element">
            </div>
        </div>

        {{pageContent}}
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    pageContent () {
      return  this.$store.getters['content/retrievePage']('home')
    }
  },
};
</script>

<style>

</style>
