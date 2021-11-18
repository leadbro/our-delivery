<template>
  <Menu
    class="app-mobile-menu"
    :isOpen="isMenuOpen"
    @closeMenu="handleClose"
    @click.native="handleClose"
    noOverlay
    right
    :width="width"
    :burgerIcon="false"
    :crossIcon="false"
    disableOutsideClick
  >
    <header class="app-mobile-menu__header">
      <app-logo class="app-mobile-menu__logo"/>
      <app-burger-button class="app-mobile-menu__close" type="close" />
    </header>
    <div class="app-mobile-menu__content">
      <nav class="app-mobile-menu__nav">
        <ul class="app-mobile-menu__list">
          <li
              v-for="item in _items"
              :key="item.id"
              class="app-mobile-menu__item"
          >
            <nuxt-link
                :to="item.to"
                class="app-mobile-menu__link"
            >
              {{item.name}}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <a href="tel:+74951367399" class="app-mobile-menu__phone">+7 (495) 136-73-99</a>
      <button
        class="app-mobile-menu__privacy"
        @click.prevent="showPrivacy"
      >Политика конфиденциальности</button>
    </div>
    <footer class="app-mobile-menu__footer">
      <base-button
        class="app-mobile-menu__submit"
        @click.native="onOrderClick"
      >Заказать доставку</base-button>
    </footer>
  </Menu>
</template>

<script>
import { Menu } from 'vue-burger-menu'
import { mapGetters } from 'vuex'
import AppLogo from '~/components/AppLogo.vue'
  import AppBurgerButton from '~/components/AppBurgerButton.vue'

export default {
  name: 'AppMobileMenu',
  data() {
    return {
      width: '320'
    }
  },
  components: {
    AppLogo,
    AppBurgerButton,
    Menu
  },
  computed: {
    ...mapGetters({
      isMenuOpen:'menu/isMenuOpen',
      _items: 'menu/items'
    }),
  },
  created() {
    window.addEventListener('resize', this.triggerCalculate)
  },
  destroyed() {
    window.removeEventListener('resize', this.triggerCalculate)
  },
  mounted() {
    this.calculateWidth()
  },
  methods: {
    calculateWidth() {
      this.$nextTick(() => {
        const html = document.querySelector('html')

        this.width = html.offsetWidth + ''
      })
    },
    onOrderClick() {
      this.$router.push('/#order')
    },
    triggerCalculate() {
      this.handleClose()
      this.calculateWidth()
    },
    handleClose() {
      this.$store.commit('menu/closeMenu')
    },
    showPrivacy () {
      this.$modal.show('privacy-policy');
    }
  }
}
</script>

<style lang="scss">
@import "../assets/mixins.scss";

.app-mobile-menu {

  .bm-menu {
    background-color: white;

    padding-top: 1.6rem;
    padding-bottom: 1.6rem;

    height: 100%;
    transition: .3s ease;
  }

  .bm-item {

    &-list {
      display: flex;
      font-size: inherit;
      flex-direction: column;
      color: black;
      padding: 0;
      padding-left: var(--side-padding);
      padding-right: var(--side-padding);
      margin-left: 0;

      height: 100%;
      width: 100vw;

      & > * {
        display: flex;
        padding: 0;
      }
    }
  }

  &__logo {
    display: flex;
  }

  &__header {
    justify-content: space-between;
    width: 100%;
  }

  &__content {
    display: block !important;
    padding-left: 4.2rem !important;
  }

  &__list {
    font-family: $bebasNeue;

    padding: 0;
    margin: 0;
    margin-top: 3.3rem;
    list-style: none;
  }

  &__item {

    & + & {
      margin-top: 2.5rem;
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

  &__phone {
    display: block;

    font-family: $bebasNeue;
    font-size: 1.8rem;
    line-height: 250%;
    color: #0727E7;
    text-decoration: none;

    margin-top: 3.8rem;
  }

  &__privacy {
    appearance: none;
    display: block;
    border: none;
    background: none;
    text-align: left;
    font-size: 1.4rem;
    line-height: 150%;
    font-family: $openSans;
    font-weight: 600;
    text-decoration: underline;
    max-width: 70%;
    margin-top: 1.4rem;
    padding: 0;
  }

  &__footer {
    margin-top: auto;
    padding-left: var(--side-padding);
    padding-right: var(--side-padding);
  }

  &__submit {
    width: 100%;
  }
}
</style>
