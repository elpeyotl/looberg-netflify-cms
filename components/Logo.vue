<template>
<div :class="{'sidebar--open': sideBarOpen}" class="sidebar" @click="toggleSidebar()">
     <div  class="sidebar__logo">
        <img src="~assets/images/logo.jpg" />
    </div>
</div>

</template>

<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
    computed: {
         ...mapState(['sideBarOpen'])
    },
    methods: {
         ...mapActions(['toggleSidebar'])
    }

}
</script>

<style>

</style>