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

    <div class="page-contacts__form-container container">
      <h3 class="page-contacts__form-title">для связи с нами заполните форму</h3>
      <form-message class="page-contacts__form-message"/>
    </div>

  </div>
</template>

<script>
import ContactsMaps from '~/components/ContactsMaps'
import FormMessage from '~/components/FormMessage'

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
  head() {
    return {
      title: this.title
    }
  },
  components: {
    ContactsMaps,
    FormMessage
  },
  async fetch({store}) {
    await store.dispatch('advantages/getItems');
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/mixins.scss";

  .page-contacts {
    margin-top: -2.6rem;
    padding-bottom: 14rem;

    &__banner {
      width: var(--banner-width);
      height: var(--banner-height);

      position: absolute;
      right: 0;
      top: 0;
      z-index: 3;
    }

    &__maps {
      margin-bottom: 6rem;
    }

    &__form {

      &-title {
        font-family: $bebasNeueBold;
        font-size: 5.5rem;
      }
    }
  }

</style>

