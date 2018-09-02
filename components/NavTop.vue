<template>
  <nav class="main-top__nav nav-top">
    <app-logo class="nav-top__logo"/>
    <ul class="nav-top__list">
      <li
          v-for="item in _items"
          :key="item.id"
          class="nav-top__item"
      >
        <nuxt-link
            :to="item.href"
            class="nav-top__link"
        >
          {{item.name}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    name: 'NavTop',
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

<style scoped>

</style>