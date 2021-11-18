<template>
  <button class="app-burger-button" @click="onClick">
    <template v-if="isClose">
      <svg class="app-burger-button__icon" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10.4902" y1="20.9611" x2="21.4504" y2="10.001" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="10.0607" y1="10.011" x2="21.0208" y2="20.9712" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </template>
    <template v-else>
      <svg class="app-burger-button__icon" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8.75" y1="9.25" x2="24.25" y2="9.25" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="13.75" y1="15.25" x2="24.25" y2="15.25" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8.75" y1="21.25" x2="24.25" y2="21.25" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </template>

  </button>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'AppBurgerButton',
  props: {
    type: {
      type: String,
      default: 'open'
    }
  },
  computed: {
    isClose() {
      return this.type === 'close'
    }
  },
  methods: {
    ...mapMutations({
      openMenu: 'menu/openMenu',
      closeMenu: 'menu/closeMenu'
    }),
    onClick() {
      if (this.isClose) {
        this.closeMenu()
      } else {
        this.openMenu()
      }
    }
  }
}
</script>

<style lang="scss">
.app-burger-button {
  appearance: none;
  display: block;
  outline: none;
  background: none;
  padding: 0;
  border: none;

  &__icon {
    height: 3.1rem;
    width: 3.1rem;
  }
}
</style>
