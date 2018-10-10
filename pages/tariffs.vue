<template>
  <div class="page-tariffs">
    <app-banner
      class="page-tariffs__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <our-tariffs class="page-tariffs__tariffs"/>

    <warehousing class="page-tariffs__warehousing"/>

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
        text: 'Компания ООО «Наша Доставка» транспортно-экспедиционная компания\n' +
          'с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. \n',
        pictures: {
          mobile: '/images/banners/tariffs.jpg'
        }
      }
    },
    components: {
      OurTariffs,
      Warehousing
    },
    async fetch({store}) {
      await store.dispatch('tariffs/getItems');
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/mixins.scss";

  .page-tariffs {
    padding-top: 12rem;

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
    }
  }

</style>

