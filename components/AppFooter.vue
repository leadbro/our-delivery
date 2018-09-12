<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <app-logo class="footer__logo"/>
        <app-footer-nav  class="footer__nav"/>
      </div>
      <div class="footer__bottom">
        <ul class="footer__bottom-list">
          <li class="footer__bottom-item"><span class="footer__bottom-link">Все права защищены</span></li>
          <li class="footer__bottom-item"><nuxt-link class="footer__bottom-link" to="/">Политика конфиденциальности</nuxt-link></li>
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
    computed: {}
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mixins.scss";

  .footer {
    height: 20.5rem;
    background-color: #081305;

    &__container {
      margin: 0 auto;
      max-width: 100%;
      width: 153.5rem;

      padding-top: 1.6rem;
      padding-bottom: 4rem;
    }

    &__top {
      display: flex;
      margin-bottom: 3rem;
    }

    &__bottom {

      &-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
      }

      &-item {
        margin-right: 1.4rem;
      }

      &-link {
        color: #fdfeff;
        font-family: $openSans;
        font-size: 1.4rem;
        line-height: 1.9rem;
        // Text style for "Политика к"
        letter-spacing: 0.035rem;
      }
    }
    
    &__logo {
      color: #fff;
    }

    &__nav {
      margin-left: auto;
      padding-top: 5.4rem;
    }
  }

</style>

