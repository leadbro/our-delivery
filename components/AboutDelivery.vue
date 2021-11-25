<template>
  <div class="about-delivery">
    <div class="about-delivery__container container">
      <header class="about-delivery__header">
        <base-title
            class="about-delivery__header-title"
            image-src="/images/icons/about-us/icon.svg"
        >
          Личный контакт<br>и постоянный<br>контроль груза
        </base-title>
        <div class="about-delivery__header-text">
          Компания ООО «Наша Доставка» транспортно-экспедиционная компания
          с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. Самый дорогой груз, который был доставлен нашей транспортной компанией, стоил более 30 000 000 руб.
        </div>
      </header>
      <div class="about-delivery__content">
        <picture class="about-delivery__content-picture">
          <img src="/images/about-us/rocket.jpg?v=1" alt="">
        </picture>
        <div class="about-delivery__content-text">
          <p>
            На логотипе компании изображена коробка в цветах Российского флага с изображением запуска ракеты-носителя. Белый цвет символизирует надежность нашей транспортной компании, так как мы работаем только с проверенными перевозчиками и страхуем грузы клиентов. Синий цвет символизирует честность по отношению к клиентам, мы всегда готовы предоставить актуальную информацию по статусу груза и ответить на все интересующие вопросы по доставке груза. Красный цвет символизирует смелость, мы готовы вместе с нашими клиентами реализовывать самые смелые и сложные проекты. Ракета-носитель символизирует скорость, точность, качество и предназначена для доставки грузов в заданную точку, так и наша компания доставляет грузы от двери до двери в заданную точку нашей страны.
          </p>
          <h3 class="about-delivery__content-title">Потому что НАША!</h3>
        </div>
      </div>
    </div>

    <div class="about-delivery__container container">
      <base-title class="about-delivery__thanks-title" sup="Клиенты пишут нам">Благодарственные письма</base-title>
    </div>
      <app-thanks-slider />
  </div>
</template>

<script>
import AppThanksSlider from '~/components/AppThanksSlider';

  export default {
    name: 'AboutDelivery',
    components: {
      AppThanksSlider
    },
    computed: {
      _items() {
        return []
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .about-delivery {
    background-image: url('~/assets/images/about/bg-desktop.jpg');
    background-repeat: no-repeat;
    background-position: center bottom;

    padding-top: 5rem;
    padding-bottom: 23.2rem;

    position: relative;

    @media #{$mobile} {
      background-size: 160%;
    }

    @media #{$tablet} {
      padding-bottom: 30rem;
    }

    @media #{$desktop} {
      background-size: contain;
      padding-top: 9rem;
      padding-bottom: 62rem;
    }

    &__container {
      padding: 0 0rem;

      @media #{$desktop} {
        padding: 0 7rem;

        &:nth-child(2) {
          padding: 0;
        }
      }
    }

    &__thanks-title {
      margin-top: 5.2rem;
      margin-bottom: .4rem;
      max-width: 80%;
    }

    &__header {
      margin-bottom: 4.6rem;

      @media #{$desktop} {
        display: flex;
        padding-left: 7.7rem;
        margin-bottom: 10rem;
        width: 120.0rem;
      }

      &-title {

        @media #{$mobile} {
          margin-left: 6.6rem;
        }
      }

      &-text {
        flex-shrink: 0;

        font-family: $openSans;
        font-size: 1.8rem;
        line-height: 2.7rem;

        @media #{$desktop} {
          padding-left: 8.6rem;
          padding-top: 3.8rem;

          margin-left: auto;
          width: 66.6rem;
        }
      }
    }

    &__content {

      @media #{$desktop} {
        display: flex;
        padding-left: 80px;
      }

      &-picture {
        width: 100%;

        @media #{$mobile} {
          margin-bottom: 55px;
        }

        @media #{$desktop} {
          flex-shrink: 0;
          height: 36.8rem;
          width: 50.2rem;
        }

        img {
          height: 100%;
          width: 100%;

          object-fit: cover;
        }
      }

      &-title {
        font-family: $bebasNeueBold;
        color: #1A36C8;
        font-size: 2.2rem;

        margin-bottom: 1rem;

        @media #{$mobile} {
          margin-top: 6.6rem;
        }

        @media #{$desktop} {
          font-size: 3rem;
        }
      }

      &-text {
        flex-shrink: 0;

        font-family: $openSans;
        font-size: 1.4rem;
        line-height: 2.1rem;

        @media #{$desktop} {
          padding-left: 4.0rem;

          width: 46.6rem;
        }

        :first-child {
          margin-top: 0;
        }
      }
    }

    &__thanks-title {


      @media #{$desktop} {
        margin-bottom: 4.0rem;
      }
    }
  }
</style>
