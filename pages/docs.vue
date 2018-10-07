<template>
  <div class="page-docs">
    <our-documents class="page-docs__documents"/>
  </div>
</template>

<script>
  import OurDocuments from '~/components/OurDocuments'

export default {
  components: {
    OurDocuments
  },
  async fetch({store}) {
    await store.dispatch('headerSlider/GET_ITEMS');
    await store.dispatch('advantages/GET_ITEMS');
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-index {
    padding-top: 12rem;

    &__advantages {
      margin-bottom: 10rem;
    }

    &__about-us {
      margin-bottom: 18rem;
    }
  }

</style>

