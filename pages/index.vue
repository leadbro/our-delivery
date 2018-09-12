<template>
  <div class="page-index">
    <our-advantages class="page-index__advantages"/>
    <about-us class="page-index__about-us"/>
    <our-services class="page-index__our-service"/>
  </div>
</template>

<script>
  import AboutUs from '~/components/AboutUs'
  import OurAdvantages from '~/components/OurAdvantages'
  import OurServices from '~/components/OurServices'

export default {
  components: {
    AboutUs,
    OurAdvantages,
    OurServices
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

    &__about-us {
      margin-bottom: 18rem;
    }
  }

</style>

