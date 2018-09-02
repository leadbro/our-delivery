<template>
  <div class="advantages">
    <base-title-small class="advantages__title">
      <span slot="sup">Наши</span>
      <span slot="title">Преимущества</span>
    </base-title-small>
    <ul class="advantages__list">
      <li
          v-for="item in _items"
          class="advantages__item"
      >
        <div class="advantages__icon">{{item.icon}}</div>
        <div class="advantages__title">{{item.name}}</div>
        <div class="advantages__text">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'OurAdvantages',
    components: {

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