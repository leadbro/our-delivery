<template>
  <section class="our-documents">
    <div class="our-documents__container container">
      <base-title-small class="our-documents__title">
        Необходимые документы всегда под рукой
      </base-title-small>

      <documents class="our-documents__documents" :items="_items"/>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Documents from '~/components/Documents/Documents'


  export default {
    name: 'OurDocuments',
    components: {
      Documents
    },
    computed: {
      ...mapGetters({
        _items: 'documents/items'
      })
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .our-documents {

    &__documents {

    }
  }


</style>
