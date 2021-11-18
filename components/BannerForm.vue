<template>
  <div class="banner-form" id="banner-form">
    <div class="banner-form__container container">
      <h2 class="banner-form__title">Заказать доставку</h2>
      <form-order
        class="banner-form__form"
        color-scheme="white"
      />
    </div>
    <picture class="banner-form__picture">
      <source
        srcset="/images/banner-form/bg-desktop.jpg"
        media="(min-width: 1280px)"
      >
      <img
        src="/images/banner-form/bg-mobile.jpg"
        alt="Заказать доставку"
      >
    </picture>
  </div>
</template>

<script>
  export default {
    name: 'BannerForm',
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .banner-form {
    padding-top: 9.5rem;

    height: 35.5rem;

    position: relative;
    z-index: 1;

    @media #{$mobile} {
      height: auto;
      padding-top: 5.6rem;
      padding-bottom: 5.6rem;
    }

    &__container {
      position: relative;
      z-index: 2;
    }

    &__title {
      color: #fdfeff;
      font-family: $bebasNeueBold;
      font-size: 5.5rem;
      line-height: 3rem;

      margin-top: 0;
      margin-bottom: 6.2rem;

      @media #{$mobile} {
        font-size: 3.0rem;
        margin-bottom: 3.4rem;
      }
    }

    &__form {
      display: flex;
      align-items: flex-start;

      position: relative;
    }

    &__picture {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;

      img {
        height: 100%;
        width: 100%;

        object-fit: cover;
      }
    }
  }

</style>
