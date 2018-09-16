<template>
  <div class="page-dev">
    <base-pagination-numbered
        class="our-services-layer-top__pagination"
        :current-id="currentItemId"
        :count="_items.length"
        @set-index="onPaginationClick"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      currentItemId: 0
    }
  },
  components: {

  },
  computed: {
    ...mapGetters({
      _items: 'services/items',
      getItemById: 'services/getItemById',
    }),
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-dev {

  }

</style>

