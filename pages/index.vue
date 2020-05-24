<template>
<div class="main-content">
    <div class="content-left">
        <div class="container">
          <div class="content__heading">
            <h1 v-html="$md.render(pageContent.title)"></h1>
          </div>

           <div class="content__element" v-html="$md.render(pageContent.address)">
            </div>

           <div class="content__element" v-html="$md.render(pageContent.intro)">
            </div>
        </div>
    </div>

     <div class="content-right">
        <div class="container">

            <Swiper />

            <div class="img-carousel">
              hoho
            </div>
            <div id="slider">
               bla
            </div>
        </div>


        <div class="container">
            <h2>Angebot</h2>
            <div v-html="$md.render(pageContent.angebot)" class="mb-12"></div>
            <div class="tab">
                <h4 class="tab__heading tab--active">
                    <a href="#">News</a>
                </h4>
                <ul class="no-bullets">
                    <li>
                        <a href="#">
                        <div class="small">postdate</div>
                        posttitle
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swiper from '~/components/swiper'

export default {
  components: {
    Swiper
  },
  computed: {
    pageContent () {
      return this.$store.getters.retrievePage('home')
    }
  },
};
</script>

<style>

</style>
