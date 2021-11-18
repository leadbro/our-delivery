<template>
  <header class="header">
    <div class="header__container container">
      <app-header-nav class="header__nav"/>
      <div class="header__contacts">
        <a href="tel:+74951367399" class="header__contacts-phone">+7 (495) 136-73-99</a>
        <!--<div class="header__contacts-btn">Обратный звонок</div>-->
      </div>
    </div>
  </header>
</template>

<script>
  import AppHeaderNav from '~/components/AppHeaderNav';

  export default {
    name: 'AppHeader',
    components: {
      AppHeaderNav,
    },
    computed: {}
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .header {

    &__container {

      @media #{$min1280} {
        display: flex;
        align-items: flex-start;

        padding-top: 2.4rem;
        padding-left: 3.0rem;
        margin-bottom: 2.6rem;

        height: var(--banner-height);

        max-width: 158.5rem;
      }
    }

    &__contacts {
      display: flex;
      align-items: center;

      margin-left: auto;

      position: relative;
      z-index: 10;

      @media #{$mobile} {
        display: none;
      }

      &-phone {
        color: #fdfeff;
        font-family: $bebasNeueBold;
        font-size: 3rem;
        line-height: 3rem;
        text-decoration: none;
      }

      &-btn {
        color: #c9cad0;
        font-family: $openSans;
        font-size: 1.4rem;
        letter-spacing: -0.014rem;

        margin-left: 6rem;
      }
    }
  }

</style>

