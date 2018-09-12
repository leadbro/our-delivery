<template>
  <footer class="footer">
    <div class="footer__top">
      <app-logo class="footer__logo"/>
      <nav class="footer__menu">
        <ul class="footer__menu-list">
          <li class="footer__menu-item" v-for="item in _items" :key="item.id">
            <nuxt-link class="footer__menu-link"></nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer__bottom">
      <ul class="footer__bottom-list">
        <li class="footer__bottom-item"><span class="footer__bottom-link">Все права защищены</span></li>
        <li class="footer__bottom-item"><nuxt-link class="footer__bottom-link">Политика конфиденциальности</nuxt-link></li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'


  export default {
    name: 'AppFooter',
    components: {
      AppLogo
    },
    computed: {
      _items() {
        return []
      }
    }
  }
</script>

<style lang="scss">

</style>

