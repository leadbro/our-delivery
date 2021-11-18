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
  import Headroom from 'headroom.js'

  export default {
    name: 'AppHeader',
    data() {
      return {
        headroom: null
      }
    },
    components: {
      AppHeaderNav,
    },
    computed: {},
    mounted() {
      this.headroom = new Headroom(this.$el)

      if (!this.headroom.initialized) {
        this.headroom.init()
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .header {
    background: white;


    @media #{$mobile} {

      &.headroom {
        width: 100vw;
        position: fixed;
        top: 0;
        z-index: 10;
        will-change: transform;
        transition: transform 200ms linear;

        & + div {
          position: relative;
          margin-top: 7.2rem;
        }
      }

      &.headroom--pinned {
        transform: translateY(0%);
      }

      &.headroom--unpinned {
        transform: translateY(-100%);
      }
    }

    &__container {

      @media #{$desktop} {
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

