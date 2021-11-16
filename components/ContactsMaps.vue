<template>
  <section class="contacts-maps">

    <div class="contacts-maps__item">
      <div class="contacts-maps__text contacts-maps__text--blue">
        <h2 class="contacts-maps__title">Москва</h2>

        <h4>Адрес:</h4>
        <p>115201, 1-ый Котляковский переулок, д.12, помещение 1, комнаты 1,17,18.</p>

        <h4>Склад:</h4>
        <p>Москва, Фряновское шоссе 52.</p>

        <h4>Телефон:</h4>
        <p><a href="tel:+74951367399">+7 (495) 136-73-99</a></p>

        <h4>E-mail:</h4>
        <p><a href="mailto:info@ndrf.ru">info@ndrf.ru</a></p>

      </div>

      <div class="contacts-maps__map" style="width: 918px; height: 783px">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A281b38c9af79d5b296ef34d5814250d8e99b8d334faaf9fc4a23ea05c392e987&amp;width=918&amp&amp;lang=ru_RU&amp;scroll=true"></script>
      </div>
    </div>
    <div class="contacts-maps__item">
      <div class="contacts-maps__map" style="width: 783px;  height: 689px">
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
    }

    &__title {
      color: #fdfeff;
      font-family: $bebasNeueBold;
      font-size: 5.5rem;
      line-height: 7.5rem;
      text-transform: uppercase;

      margin-top: 11rem;
      margin-bottom: 2rem;
    }

    &__text {
      flex-shrink: 0;

      color: #fdfeff;

      padding-bottom: 9rem;

      &--blue {
        background-color: #0727e7;
        padding-left: 32rem;
        padding-right: 12rem;

        width: 783px;
      }

      &--red {
        background-color: #f00b3c;
        padding-left: 9.7rem;

        width: 918px;
      }

      h4 {
        font-family: $bebasNeue;
        font-size: 3rem;
        font-weight: 400;
        letter-spacing: 0.03rem;
        text-transform: uppercase;

        margin-bottom: 1rem;
      }

      p {
        font-family: $PTSans;
        font-size: 1.6rem;
        line-height: 1.4;
      }

      a {
        color: inherit
      }
    }
  }


</style>
