<template>
  <div class="page-docs">
    <app-banner
      class="page-docs__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />
    <our-documents class="page-docs__documents"/>

    <banner-form/>
  </div>
</template>

<script>
  import OurDocuments from '~/components/OurDocuments'

export default {
  name: 'docs',
  transition: 'fade',
  data() {
    return {
      title: 'Документы',
      subtitle: '',
      text: 'Компания ООО «Наша Доставка» транспортно-экспедиционная компания\n' +
        'с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. \n',
      pictures: {
        mobile: '/images/slider/documents.jpg'
      }
    }
  },
  components: {
    OurDocuments
  },
  async fetch({store}) {
    await store.dispatch('advantages/GET_ITEMS');
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-docs {
    padding-top: 12rem;
    padding-bottom: 8rem;

    &__advantages {
      margin-bottom: 10rem;
    }

    &__about-us {
      margin-bottom: 18rem;
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

