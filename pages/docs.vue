<template>
  <div class="page-docs">
    <app-banner
      class="page-docs__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <our-documents id="documents" class="page-docs__documents"/>

    <banner-form class="page-docs__form"/>
  </div>
</template>

<script>
  import OurDocuments from '~/components/OurDocuments'
  import ScrollToHash from '~/mixins/ScrollToHash.js'

export default {
  name: 'docs',
  transition: 'fade',
  mixins: [ ScrollToHash ],
  data() {
    return {
      title: 'Документы',
      subtitle: '',
      text: '',
      pictures: {
        mobile: '/images/banners/documents.jpg'
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  components: {
    OurDocuments
  },
  mixins: [ ScrollToHash ],
  async fetch({store}) {
    await store.dispatch('documents/getItems');
  }
}
</script>

<style lang="scss">
@import "../assets/mixins.scss";

  .page-docs {

    &__documents {
      margin-bottom: 8rem;
    }

    &__banner {
      width: var(--banner-width);
      height: var(--banner-height);

      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;

      @media #{$mobile} {
        position: relative;
      }
    }
  }

</style>

