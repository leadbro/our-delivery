<template>
  <header class="header">
    <app-header-slider class="header__slider"/>

    <div class="header__container container">
      <app-header-nav/>
      <div class="header__contacts">
        <a href="tel:+74951367399" class="header__contacts-phone">+7 (495) 136-73-99</a>
        <div class="header__contacts-btn">Обратный звонок</div>
      </div>
    </div>

    <app-header-form
      class="header__form"
    />
  </header>
</template>

<script>
  import AppHeaderNav from '~/components/AppHeaderNav';
  import AppHeaderSlider from '~/components/AppHeaderSlider';
  import AppHeaderForm from '~/components/AppHeaderForm';

  export default {
    name: 'AppHeader',
    components: {
      AppHeaderNav,
      AppHeaderSlider,
      AppHeaderForm
    },
    computed: {}
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mixins.scss";

  .header {
    --slider-width: calc((1411 / 1903) * 100%);
    --slider-height: 57.7rem;

    position: relative;

    &__container {
      display: flex;
      align-items: flex-start;

      padding-top: 2.8rem;
      margin-bottom: 2.6rem;

      max-width: 158.5rem;

      height: var(--slider-height);

      position: relative;
      z-index: 2;
    }

    &__contacts {
      display: flex;
      align-items: center;

      margin-left: auto;

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

    &__slider {
      width: var(--slider-width);
      height: var(--slider-height);

      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;
    }

    &__form {
      padding-left: calc(100vw - var(--slider-width));
    }
  }

</style>

