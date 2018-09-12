<template>
  <section class="our-services-layer-top">
    <div class="our-services-layer-top__container container">
      <div class="our-services-layer-top__content">
          <base-title class="our-services-layer-top__title">{{ _item.title }}</base-title>
          <div class="our-services-layer-top__text">{{ _item.text }}</div>
          <base-button-2  class="our-services-layer-top__button">Подробнее</base-button-2>
      </div>
      <div class="our-services-layer-top__controls">
        <div class="our-services-layer-top__controls-title">Наши услуги</div>
        <base-pagination-numbered
            class="our-services-layer-top__pagination"
            :current-id="currentItemId"
            :count="_items.length"
            @set-index="onPaginationClick"
        />
      </div>
    </div>
    <!--<ul class="our-services-layer-top__slider-list">-->
    <!--<li class="our-services-layer-top__slider-list-item">-->
    <!--<img class="our-services-layer-top__slider-list-preview" src="/images/our-services-layer-top/1.jpg"/>-->
    <!--</li>-->
    <!--</ul>-->

  </section>
</template>

<script>
  export default {
    name: 'OurServicesLayerTop',
    components: {},
    data() {
      return {}
    },
    computed: {
      _item() {
        return this._items.find(i => i.id === this.currentItemId)
      },
      _items() {
        return this.items
      }
    },
    methods: {
      onPaginationClick(id) {
        this.$emit('set-index', id)
      }
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      },
      currentItemId: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/mixins.scss";

  .our-services-layer-top {
    position: relative;

    &__container {
      position: relative;
      height: 100%;
    }

    &__content {
      color: #fff;
      padding-top: 16rem;
      padding-bottom: 16rem;

      max-width: 50%;
      min-height: 59rem;
    }

    &__title {
      max-width: 80%;
      margin-bottom: 0;
    }

    &__text {
      color: #fdfeff;
      font-family: $openSans;
      font-size: 1.6rem;
      line-height: 2.6rem;

      max-width: 80%;

      margin-bottom: 5.4rem;
    }

    &__controls {
      display: flex;
      align-items: center;

      position: absolute;
      left: 0;
      bottom: 14rem;

      &-title {
        color: #fdfeff;
        font-family: $bebasNeueBold;
        font-size: 3.6rem;
        line-height: 6rem;
        text-decoration: underline;
        text-transform: uppercase;
      }
    }
  }
</style>