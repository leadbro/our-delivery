<template>
  <section class="warehousing">
    <div class="warehousing__container container">
      <img
        class="warehousing__image"
        src="/images/warehousing.jpg"
        alt="Складские услуги"
      />

      <div class="warehousing__content">
        <h3 class="warehousing__title">Компания «Наша Доставка» предлагает складские услуги:</h3>
        <ul class="warehousing__list">
          <li>«Ответственное хранение» - <b>стоимость услуги 1м3 — 25 руб. в сутки;</b></li>
          <li>«Запаллечивание груза» — <b>стоимость услуги 220 р./паллет;</b></li>
          <li>«Изготовление жесткой упаковки» — <b>стоимость услуги 1м3 — 600 руб.;</b></li>
          <li>«Внутритарный пересчет» — <b>стоимость услуги 1 место – 8 рублей.</b></li>
        </ul>
        <h4 class="warehousing__title-address">Наш склад находиться по адресу:</h4>
        <div class="warehousing__text">
          <p>
            Московская область, г. Щелково Фряновское шоссе 52.
          </p>
          <br/>
          <p>
            При необходимости, вынужденное хранение груза осуществляется на складах партнеров в городе получения.
          </p>
          <p>
            За хранение взымается дополнительная плата в размере 100 руб./1 м3. за каждый день.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'Warehousing',
    components: {

    },
    computed: {

    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .warehousing {

    &__container {
      display: flex;
    }

    &__content {
      padding-left: 7.5rem;
    }

    &__title {
      font-family: $bebasNeueBold;
      font-size: 3rem;
      text-transform: uppercase;
    }

    &__title-address {
      font-family: $bebasNeue;
      font-size: 2.4rem;
      line-height: 2.6rem;
      text-transform: uppercase;
    }

    &__text {
      font-size: 1.4rem;
      line-height: .5;

      p {
        line-height: 2.6rem;
      }
    }

    ul {
      font-family: $openSans;
      font-size: 1.6rem;
      line-height: 2.4rem;

      padding-left: 1.6rem;
      list-style-type: none;

      li {
        position: relative;

        margin-bottom: 1.4rem;

        &:before {
          content: '';
          display: block;

          background-color: #0727e7;
          border-radius: 50%;

          width: 0.6rem;
          height: 0.6rem;

          position: absolute;
          top: 1rem;
          left: -1.6rem;
        }
      }
    }
  }


</style>