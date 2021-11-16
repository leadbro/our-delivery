<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <app-logo class="footer__logo"/>
        <app-footer-nav  class="footer__nav"/>
      </div>
      <div class="footer__bottom">
        <ul class="footer__bottom-list">
          <li class="footer__bottom-item"><span class="footer__bottom-span">Все права защищены</span></li>
          <li class="footer__bottom-item"><button class="footer__bottom-link" @click.prevent="showPrivacy">Политика конфиденциальности</button></li>
        </ul>
      </div>
    </div>

  </footer>
</template>

<script>
  import AppLogo from '~/components/AppLogo';
  import AppFooterNav from '~/components/AppFooterNav'

  export default {
    name: 'AppFooter',
    components: {
      AppLogo,
      AppFooterNav
    },
    methods: {
      showPrivacy () {
        this.$modal.show('privacy-policy');
      }
    },
    computed: {}
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .footer {
    background-color: #050713;

    @media #{$desktop} {
      height: 20.5rem;
    }

    &__container {
      margin: 0 auto;
      max-width: 100%;

      padding-top: 4rem;
      padding-bottom: 4rem;

      @media #{$mobile} {
        @include wrapper;
      }

      @media #{$desktop} {
        padding-top: 1.6rem;
        padding-bottom: 4rem;
        width: 153.5rem;
      }
    }

    &__top {
      margin-bottom: 3rem;

      @media #{$desktop} {
        display: flex;
      }
    }

    &__bottom {

      &-list {
        padding: 0;
        margin: 0;
        list-style-type: none;

        @media #{$desktop} {
          display: flex;
        }
      }

      &-item {

        @media #{$desktop} {
          margin-right: 1.4rem;
        }
      }

      &-span {
        color: #fdfeff;
        font-family: $openSans;
        font-size: 1.4rem;
        line-height: 1.9rem;
      }

      &-link {
        cursor: pointer;
        background: none;
        border: none;
        color: #fdfeff;
        font-family: $openSans;
        font-size: 1.4rem;
        line-height: 1.9rem;
        text-decoration: underline;
        // Text style for "Политика к"
        letter-spacing: 0.035rem;

        @media #{$mobile} {
          margin-top: 1.0rem;
          padding: 0;
        }
      }
    }

    &__logo {
      color: #fff;
    }

    &__nav {
      margin-left: auto;
      padding-top: 4.4rem;

      @media #{$desktop} {
        padding-top: 5.4rem;
      }
    }
  }

</style>

