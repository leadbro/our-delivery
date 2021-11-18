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

<style lang="scss">
@import "../assets/mixins.scss";

  .header-nav {
    color: #000;

    font-family: $bebasNeue;
    font-size: 1.6rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;

    @media #{$desktop} {
      padding-top: 0;
    }

    &__list {
      padding: 4.2rem 0 0 8rem;
      margin: 0;
      list-style: none;

      @media #{$mobile} {
        display: none;
      }
    }

    &__item {

      & + & {
        margin-top: 2.9rem;
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
