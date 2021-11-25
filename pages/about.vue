<template>
  <div class="page-about">
    <app-banner
      class="page-about__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <about-delivery id="about" class="page-about__about-us"/>

    <banner-form class="page-about__form"/>
  </div>
</template>

<script>
import AboutDelivery from '~/components/AboutDelivery';
import ScrollToHash from '~/mixins/ScrollToHash.js'

export default {
  name: 'About',
  transition: 'fade',
  mixins: [ ScrollToHash ],
  data() {
    return {
      title: 'О нас',
      subtitle: '',
      text: '',
      pictures: {
        mobile: '/images/banners/about.jpg?v=1'
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  components: {
    AboutDelivery,
  },
  async fetch({store}) {
    await store.dispatch('advantages/getItems');
    await store.dispatch('thanksSlider/getItems')
  }
}
</script>

<style lang="scss">
@import "../assets/mixins.scss";

  .page-about {
    /*padding-top: 12rem;*/

    &__documents {
      margin-bottom: 8rem;
    }

    &__banner {
      width: var(--banner-width);
      height: var(--banner-height);

      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;

      @media #{$mobile} {
        position: relative;
      }
    }
  }

</style>

