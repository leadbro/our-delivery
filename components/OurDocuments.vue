<template>
  <section class="our-documents">
    <div class="our-documents__container container">
      <base-title-small class="our-documents__title">
        Перевозки по России быстро и надежно
      </base-title-small>

      <documents class="our-documents__documents"/>
    </div>
  </section>
</template>

<script>
  import Documents from '~/components/Documents'

  export default {
    name: 'OurDocuments',
    components: {
      Documents
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-documents {

    &__documents {

    }
  }


</style>