<template>
  <div class="about-us">
    <div class="about-us__container container">
      <div class="about-us__col-title">
        <base-title
            class="about-us__title"
            image-src="/images/icons/about-us/icon.svg"
        >
          Перевозки по России быстро и надежно
        </base-title>
        <picture class="about-us__picture-left">
          <img src="/images/about-us/rocket.jpg" alt="">
        </picture>
      </div>
      <div class="about-us__col-text">
        <div class="about-us__text">
          <h3 class="about-us__text-title">немного О нас</h3>
          <p>
            Компания ООО «Наша Доставка» транспортно-экспедиционная компания с большим опытом грузоперевозок по России и странам таможенного союза. Более 2-х лет мы доставляем грузы от Калининграда до Владивостока, в Республику Беларусь и Казахстан. Нами было доставлено более 3000 грузов. Самый дорогой груз, который был доставлен нашей транспортной компанией, стоил более 30 000 000 руб.
          </p>
          <p>
            На логотипе компании изображена коробка в цветах Российского флага с изображением запуска ракеты-носителя. Белый цвет символизирует надежность нашей транспортной компании, так как мы работаем только с проверенными перевозчиками и страхуем грузы клиентов. Синий цвет символизирует честность по отношению к клиентам, мы всегда готовы предоставить актуальную информацию по статусу груза и ответить на все интересующие вопросы по доставке груза. Красный цвет символизирует смелость, мы готовы вместе с нашими клиентами реализовывать самые смелые и сложные проекты. Ракета-носитель символизирует скорость, точность, качество и предназначена для доставки грузов в заданную точку, так и наша компания доставляет грузы от двери до двери в заданную точку нашей страны.
          </p>
          <h3 class="about-us__text-title about-us__text-title--blue">Потому что НАША!</h3>
        </div>
        <picture class="about-us__picture-right">
          <img src="/images/about-us/truck.jpg" alt="">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
    components: {

    },
    computed: {
      _items() {
        return []
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .about-us {
    padding-top: 9rem;

    &__container {
      display: flex;
      padding-right: 14rem;
    }

    &__col-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      flex-shrink: 0;
      margin-left: auto;

      width: 52.4rem;
    }

    &__title {
      max-width: 54rem;

      margin-left: 6.8rem;
      margin-bottom: 25rem;
    }

    &__text {
      font-family: $openSans;
      font-size: 1.4rem;
      line-height: 2.4rem;

      &-title {
        font-family: $bebasNeueBold;
        font-size: 3rem;

        margin-bottom: 1rem;

        &--blue {
          color: #1935c5;
          margin-bottom: 10rem;
        }
      }
    }
  }
</style>