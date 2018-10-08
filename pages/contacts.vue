<template>
  <div class="page-contacts">
    <app-banner
      class="page-contacts__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <contacts-maps class="page-contacts__maps"/>
  </div>
</template>

<script>
import ContactsMaps from '~/components/ContactsMaps'

export default {
  name: 'docs',
  transition: 'fade',
  data() {
    return {
      title: 'Контакты',
      subtitle: '',
      text: 'Компания ООО «Наша Доставка» транспортно-экспедиционная компания\n' +
        'с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. \n',
      pictures: {
        mobile: '/images/banners/contacts.jpg'
      }
    }
  },
  components: {
    ContactsMaps
  },
  async fetch({store}) {
    await store.dispatch('advantages/GET_ITEMS');
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-contacts {
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

