<template>
  <div class="page-about">
    <app-banner
      class="page-about__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <about-delivery class="page-about__about-us"/>

    <banner-form class="page-about__form"/>
  </div>
</template>

<script>
  import AboutDelivery from '~/components/AboutDelivery';

export default {
  name: 'docs',
  transition: 'fade',
  data() {
    return {
      title: 'Наша доставка',
      subtitle: '',
      text: 'Компания ООО «Наша Доставка» транспортно-экспедиционная компания\n' +
        'с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. \n',
      pictures: {
        mobile: '/images/banners/services.jpg'
      }
    }
  },
  components: {
    AboutDelivery
  },
  async fetch({store}) {
    await store.dispatch('advantages/getItems');
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-about {
    padding-top: 12rem;

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
    }
  }

</style>

