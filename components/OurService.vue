<template>
  <div class="service">
    <div class="service__content">
      <base-title>Доставка сборного груза</base-title>
      <div class="service__text">Компания «Наша Доставка» осуществляет перевозки сборного груза по всей территории РФ и стран таможенного союза.  Доставка сборного груза осуществляется напрямую «до двери» получателя без складских перегрузов в регионах.</div>
      <button class="service__button">Подробнее</button>
    </div>
    <div class="service__slider">
      <picture class="service__slider-picture">
        <img src="~/images/our-services/1.jpg" alt="">
      </picture>
      <ul class="service__slider-list">
        <li class="service__slider-list-item">
          <img class="service__slider-list-preview"/>
        </li>
      </ul>
    </div>
    <div class="service__controls">
      <div class="service__title">Наши услуги</div>
      <div class="service__pagination">
        <div class="service__pagination-item"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'OurAdvantages',
    components: {

    },
    computed: {
      _items() {
        return []
      }
    }
  }
</script>

<style scoped>

</style>