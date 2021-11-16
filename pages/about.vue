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

export default {
  name: 'docs',
  transition: 'fade',
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
    AboutDelivery
  },
  mounted() {
    /* Скролл к элементу по якорю в URL */
    let hash = this.$route.hash;
    if (hash) {
      this.$scrollTo(hash, 1500);
    }
  },
  async fetch({store}) {
    await store.dispatch('advantages/getItems');
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
    }
  }

</style>

