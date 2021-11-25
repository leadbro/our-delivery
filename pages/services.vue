<template>
  <div class="page-services">
    <app-banner
      class="page-services__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <section class="page-services" id="services">
      <div class="page-services__container container">
        <base-title-small class="page-services__title">Мы доставляем</base-title-small>
        <services
          class="page-services__services"
          :items="deliverItems"
        />

        <base-title-small class="page-services__title">Мы предоставляем</base-title-small>
        <services
          class="page-services__services"
          :items="provideItems"
        />
      </div>
    </section>

    <banner-form class="page-services__form"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ScrollToHash from '~/mixins/ScrollToHash.js'

  import Services from '~/components/Services'

  export default {
    name: 'docs',
    transition: 'fade',
    data() {
      return {
        title: 'Услуги',
        subtitle: '',
        text: '',
        pictures: {
          mobile: '/images/banners/services.jpg?v=1'
        }
      }
    },
    head() {
      return {
        title: this.title
      }
    },
    mixins: [ ScrollToHash ],
    components: {
      Services
    },
    computed: {
      ...mapGetters({
        provideItems: 'services/provideItems',
        deliverItems: 'services/deliverItems',
      })
    },
    async fetch({store}) {
      await store.dispatch('advantages/getItems');
      await store.dispatch('services/getItems');

    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .page-services {

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

    &__services {
      margin-bottom: 6rem;
    }
  }

</style>

