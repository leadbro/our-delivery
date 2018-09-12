<template>
  <nav class="header-nav">
    <app-logo class="header-nav__logo"/>
    <ul class="header-nav__list">
      <li
          v-for="item in _items"
          :key="item.id"
          class="header-nav__item"
      >
        <nuxt-link
            :to="item.to"
            class="header-nav__link"
        >
          {{item.name}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';

  import AppLogo from '~/components/AppLogo.vue'

  export default {
    name: 'AppHeaderNav',
    components: {
      AppLogo
    },
    computed: {
      ...mapGetters({
        _items: 'menu/items'
      })
    }
  }
</script>

<style scoped lang="scss">
@import "../assets/mixins.scss";
  
  .header-nav {
    color: #000;
    
    font-family: $bebasNeue;
    font-size: 2rem;
    
    &__list {
      padding: 5.2rem 0 0 10.8rem;
      margin: 0;
      list-style: none;
    }

    &__item {

      & + & {
        margin-top: 2.8rem;
      }
    }
    
    &__link {
      font-family: inherit;
      color: inherit;
      text-transform: uppercase;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
  
</style>