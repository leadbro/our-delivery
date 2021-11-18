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
  import DocumentsItem from './DocumentsItem';


  export default {
    name: 'Documents',
    components: {
      DocumentsItem
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
  @import "../../assets/mixins";

  .documents {

    @media #{$desktop} {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      margin-bottom: 2.4rem;

      @media #{$desktop} {
        margin-right: 10rem;
        margin-bottom: 3.2rem;

        width: calc(50% - 10rem);
      }
    }
  }


</style>
