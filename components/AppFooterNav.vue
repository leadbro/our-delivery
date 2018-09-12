<template>
  <nav class="footer-nav">
    <ul class="footer-nav__list">
      <li
          v-for="item in _items"
          :key="item.id"
          class="footer-nav__item"
      >
        <nuxt-link
            :to="item.to"
            class="footer-nav__link"
        >
          {{item.name}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';


  export default {
    name: 'AppFooterNav',
    computed: {
      ...mapGetters({
        _items: 'menu/items'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .footer-nav {
    color: #fdfeff;
    font-family: $openSans;
    font-size: 1.4rem;

    &__list {
      display: flex;
      align-items: flex-end;

      padding: 0;
      margin: 0;
      list-style: none;
    }

    &__item {

      & + & {
        margin-left: 1.4rem;
      }
    }

    &__link {
      font-family: inherit;
      color: inherit;
      font-size: inherit;
      text-transform: uppercase;
      text-decoration: none;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

</style>