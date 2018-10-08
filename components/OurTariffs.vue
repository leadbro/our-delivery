<template>
  <section class="our-tariffs">
    <div class="out-tariffs__container container">
      <base-title-small class="our-tariffs__title">
        Найдем лучшее решение для вашего проекта
      </base-title-small>

      <documents class="our-tariffs__documents"/>
    </div>
  </section>
</template>

<script>
  import Documents from '~/components/Documents/Documents'

  export default {
    name: 'OurTariffs',
    components: {
      Documents
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-tariffs {

    &__documents {

    }
  }


</style>