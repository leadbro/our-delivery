<template>
  <section class="our-tariffs">
    <div class="out-tariffs__container container">
      <base-title-small class="our-tariffs__title">
        Предоставим для Вас оптимальный тариф и сроки доставки
      </base-title-small>

      <documents class="our-tariffs__documents" :items="_items"/>
    </div>
  </section>
</template>

<script>
  import Documents from '~/components/Documents/Documents'
  import {mapGetters} from 'vuex';

  export default {
    name: 'OurTariffs',
    components: {
      Documents
    },
    computed: {
      ...mapGetters({
        _items: 'tariffs/items'
      })
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .our-tariffs {

    &__documents {

    }
  }


</style>
