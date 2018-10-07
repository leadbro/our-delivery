<template>
  <section class="documents">
    <documents-item
      class="documents__item"
      v-for="item in _items"
      :key="item.id"
      :src="item.src"
      :type="item.type"
      :size="item.size"
    >
      {{item.name}}
    </documents-item>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  import DocumentsItem from '~/components/DocumentsItem';


  export default {
    name: 'Documents',
    components: {
      DocumentsItem
    },
    computed: {
      ...mapGetters({
        _items: 'documents/items'
      })
    }
  }
</script>

<style
  scoped
  lang="scss"
>
  @import "../assets/mixins.scss";

  .documents {

    &__list {

    }

    &__item {

    }
  }


</style>