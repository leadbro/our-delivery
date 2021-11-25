<template>
  <div class="page-contacts">
    <app-banner
      class="page-contacts__banner"
      :title="title"
      :subtitle="subtitle"
      :text="text"
      :pictures="pictures"
    />

    <contacts-maps id="contacts" class="page-contacts__maps"/>

    <div class="page-contacts__form-container container">
      <h3 class="page-contacts__form-title">для связи с нами заполните форму</h3>
      <form-message class="page-contacts__form-message"/>
    </div>

  </div>
</template>

<script>
import ContactsMaps from '~/components/ContactsMaps'
import FormMessage from '~/components/FormMessage'
import ScrollToHash from '~/mixins/ScrollToHash.js'

export default {
  name: 'docs',
  transition: 'fade',
  mixins: [ ScrollToHash ],
  data() {
    return {
      title: 'Контакты',
      subtitle: '',
      text: '',
      pictures: {
        mobile: '/images/banners/contacts.jpg?v=1'
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

<style lang="scss">
@import "../assets/mixins.scss";

  .page-contacts {
    padding-bottom: 6.4rem;

    @media #{$desktop} {
      margin-top: -2.6rem;
      padding-bottom: 14rem;
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

    &__maps {
      margin-bottom: 6rem;
    }

    &__form {

      &-title {
        font-family: $bebasNeueBold;
        font-size: 3rem;

        @media #{$mobile} {
          line-height: 3rem;
        }

        @media #{$desktop} {
          font-size: 5.5rem;
        }
      }
    }
  }

</style>

