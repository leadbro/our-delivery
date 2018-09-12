<template>
  <div class="page-index">
    <our-advantages class="page-index__advantages"/>
    <about-us/>
    <!--<our-services/>-->
  </div>
</template>

<script>
  import AboutUs from '~/components/AboutUs'
  import OurAdvantages from '~/components/OurAdvantages'

export default {
  components: {
    AboutUs,
    OurAdvantages
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-index {
    padding-top: 12rem;

    &__advantages {
      margin-bottom: 10rem;
    }
  }

</style>

