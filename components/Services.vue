<template>
  <section class="services">
    <services-item
      class="services__item"
      v-for="item in _items"
      :key="item.id"
      :title="item.servicesTitle"
      :preview-text="item.previewText"
      :text="item.text"
      :icon-src="item.iconSrc"
    />
  </section>
</template>

<script>
  import ServicesItem from '~/components/ServicesItem'

  export default {
    name: 'Services',
    components: {
      ServicesItem
    },
    computed: {
      _items() {
        return this.items
      }
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .services {
    display: flex;
    flex-wrap: wrap;

    &__item {
      margin-right: 10rem;
      margin-bottom: 3.2rem;

      width: calc(50% - 20rem);
    }
  }


</style>
