<template>
  <div class="page-index">
    <app-header-slider class="page-index__slider"/>

    <main-form id="order" class="page-index__form"/>

    <our-advantages class="page-index__advantages"/>

    <about-us class="page-index__about-us"/>

    <our-services class="page-index__our-service"/>
  </div>
</template>

<script>
  import AboutUs from '~/components/AboutUs';
  import OurAdvantages from '~/components/OurAdvantages';
  import OurServices from '~/components/OurServices';
  import MainForm from '~/components/MainForm';
  import AppHeaderSlider from '~/components/AppHeaderSlider';
  import ScrollToHash from '~/mixins/ScrollToHash.js'

  export default {
    transition: 'fade',
    mixins: [ ScrollToHash ],
    components: {
      AboutUs,
      MainForm,
      AppHeaderSlider,
      OurAdvantages,
      OurServices
    },
    async fetch({store}) {
      await store.dispatch('headerSlider/getItems');
      await store.dispatch('advantages/getItems');
      await store.dispatch('services/getItems');
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .page-index {

    &__advantages {
      margin-bottom: 8rem;

      @media #{$desktop} {
        margin-bottom: 10rem;
      }
    }

    &__about-us {
      margin-bottom: 7.0rem;

      @media #{$desktop} {
        margin-bottom: 18rem;
      }
    }

    &__form {
      margin-bottom: 5.1rem;

      @media #{$desktop} {
        padding-left: calc(100vw - var(--banner-width));
        margin-bottom: 19rem;
      }
    }

    &__slider {
      width: var(--banner-width);
      height: var(--banner-height);

      @media #{$desktop} {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
      }
    }
  }

</style>

