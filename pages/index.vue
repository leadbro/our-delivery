<template>
  <div class="page-index">
    <app-header-slider class="page-index__slider"/>

    <app-header-form
      class="page-index__form"
    />
    <our-advantages class="page-index__advantages"/>
    <about-us class="page-index__about-us"/>
    <our-services class="page-index__our-service"/>
  </div>
</template>

<script>
  import AboutUs from '~/components/AboutUs';
  import OurAdvantages from '~/components/OurAdvantages';
  import OurServices from '~/components/OurServices';
  import AppHeaderForm from '~/components/AppHeaderForm';
  import AppHeaderSlider from '~/components/AppHeaderSlider';

  export default {
    transition: 'fade',
    components: {
      AboutUs,
      AppHeaderForm,
      AppHeaderSlider,
      OurAdvantages,
      OurServices
    },
    async fetch({store}) {
      await store.dispatch('headerSlider/GET_ITEMS');
      await store.dispatch('advantages/GET_ITEMS');
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  @import "../assets/mixins.scss";

  .page-index {

    &__advantages {
      margin-bottom: 10rem;
    }

    &__about-us {
      margin-bottom: 18rem;
    }

    &__form {
      padding-left: calc(100vw - var(--banner-width));
      margin-bottom: 12rem;
    }

    &__slider {
      width: var(--banner-width);
      height: var(--banner-height);

      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;
    }
  }

</style>

