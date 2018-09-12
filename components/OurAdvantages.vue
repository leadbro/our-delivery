<template>
  <section class="our-advantages">
    <div class="our-advantages__container container">
      <base-title-small class="our-advantages__title">
        <span slot="sup">Наши</span> Преимущества
      </base-title-small>
      <ul class="our-advantages__list">
        <our-advantages-item
            class="our-advantages__item"
            v-for="item in _items"
            :key="item.id"
            :item="item"
        />
      </ul>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';

  import OurAdvantagesItem from '~/components/OurAdvantagesItem'

  export default {
    name: 'OurAdvantages',
    components: {
      OurAdvantagesItem
    },
    computed: {
      ...mapGetters({
        _items: 'advantages/items'
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-advantages {

    &__list {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;

      margin: 0;
      padding: 0;
      list-style: none;
    }

    &__item {
      flex-shrink: 0;
      width: 20%;
    }
  }


</style>