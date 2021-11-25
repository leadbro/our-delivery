<template>
  <section class="contacts-maps">

    <div class="contacts-maps__item">
      <div class="contacts-maps__text contacts-maps__text--blue">
        <h2 class="contacts-maps__title">Москва</h2>

        <h4>Адрес:</h4>
        <p>115201, 1-ый Котляковский переулок, д.12, помещение 1, комнаты 1,17,18.</p>

        <h4>Склад:</h4>
        <p>Москва, ул. Никопольская, дом&nbsp;6&nbsp;строение&nbsp;2</p>

        <h4>Телефон:</h4>
        <p><a href="tel:+74951367399">+7 (495) 136-73-99</a></p>

        <h4>E-mail:</h4>
        <p><a href="mailto:info@ndrf.ru">info@ndrf.ru</a></p>

      </div>

      <div class="contacts-maps__map" style="width: 91.8rem; height: 78.3rem">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2b36ab284ea14ee00dd3b10fc337ee6d87c44c61e105d89aa0f0346a1c958b22&amp;width=918&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
    </div>
    <div class="contacts-maps__item">
      <div class="contacts-maps__map" style="width: 78.3rem;  height: 70.2rem">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adb624cc4442a1dca38f7732a4f575ed14503ba67b8dd4a9ca4819a7a5fc4686e&amp;width=783&amp&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>

      <div class="contacts-maps__text contacts-maps__text--red">
        <h2 class="contacts-maps__title">Стерлитамак, <br/>Республика Башкортостан</h2>

        <h4>Адрес и склад:</h4>
        <p>ул. Черноморская, 29 а.</p>

        <h4>Телефон:</h4>
        <p><a href="tel:+79653380877">+7 (965) 338-08-77</a></p>

        <h4>E-mail:</h4>
        <p><a href="mailto:info@ndrf.ru">info@ndrf.ru</a></p>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactsMaps',
    data() {
      return {
        markers: {
          moskow: {
            position: {lat: 55.563322, lng: 37.5828713}
          },
          sterlitamak: {
            position: {lat: 53.6220306, lng: 55.9216816}
          }
        }
      }
    },
    components: {},
    computed: {},
    props: {}
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .contacts-maps {

    &__item {
      display: flex;

      @media #{$mobile} {
        flex-direction: column;
      }
    }

    &__title {
      color: #fdfeff;
      font-family: $bebasNeueBold;
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;
      margin-top: 0;
      margin-bottom: 5.5rem;

      @media #{$desktop} {
        font-size: 5.5rem;
        line-height: 7.5rem;

        margin-top: 11rem;
        margin-bottom: 2rem;
      }
    }

    &__text {
      flex-shrink: 0;

      color: #fdfeff;

      padding-bottom: 2rem;

      @media #{$mobile} {
        padding-left: var(--side-padding);
        padding-right: var(--side-padding);
        padding-top: 6.8rem;
      }

      @media #{$desktop} {
        padding-bottom: 9rem;
        //max-width: 50%;
      }

      &--blue {
        background-color: #0727e7;

        @media #{$desktop} {
          padding-left: 32rem;
          padding-right: 12rem;

          width: 78.3rem;
        }
      }

      &--red {
        background-color: #f00b3c;

        @media #{$mobile} {
          order: -1;
        }

        @media #{$desktop} {
          padding-left: 9.7rem;

          width: 91.8rem;
        }
      }

      h4 {
        font-family: $bebasNeue;
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: 0.03rem;
        text-transform: uppercase;

        margin-bottom: 0rem;

        @media #{$desktop} {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
      }

      p {
        font-family: $openSans;
        font-size: 1.4rem;
        line-height: 1.9rem;

        @media #{$mobile} {
          margin-top: 1.0rem;
          margin-bottom: 3.4rem;
        }

        @media #{$desktop} {
          font-size: 1.6rem;
          line-height: 1.4;
        }
      }

      a {
        color: inherit
      }
    }

    &__map {

      @media #{$mobile} {
        height: calc(200vw/3.2) !important;
        width: 100vw !important;
      }

      @media #{$desktop} {
        width: 100% !important;

        @media #{$ipadPro} {
          max-width: 50%;
        }
      }

      & > ymaps {
        height: 100% !important;
        width: 100% !important;
      }
    }
  }


</style>
