<template>
  <div class="page-tariffs">
    <app-banner
      class="page-tariffs__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <our-tariffs id="tariffs" class="page-tariffs__tariffs"/>

    <!--<warehousing class="page-tariffs__warehousing"/>-->

    <banner-form class="page-tariffs__form"/>
  </div>
</template>

<script>
  import OurTariffs from '~/components/OurTariffs';
  import Warehousing from '~/components/Warehousing';

  export default {
    name: 'docs',
    transition: 'fade',
    data() {
      return {
        title: 'Тарифы и сроки',
        subtitle: '',
        text: '',
        pictures: {
          mobile: '/images/banners/tariffs.jpg'
        }
      }
    },
    head() {
      return {
        title: this.title
      }
    },
    components: {
      OurTariffs,
      Warehousing
    },
    mounted() {
      /* Скролл к элементу по якорю в URL */
      let hash = this.$route.hash;
      if (hash) {
        this.$scrollTo(hash, 1500);
      }
    },
    async fetch({store}) {
      await store.dispatch('tariffs/getItems');
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .page-tariffs {

    &__documents {
      margin-bottom: 8rem;
    }

    &__tariffs {
      margin-bottom: 6rem;
    }

    &__warehousing {
      margin-bottom: 28rem;
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

