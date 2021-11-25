<template>
  <section class="our-services-layer-top">
    <div class="our-services-layer-top__container container">
      <div class="our-services-layer-top__content">
          <base-title class="our-services-layer-top__title">{{ _item.title }}</base-title>
          <div class="our-services-layer-top__text">{{ _item.previewText }}</div>
          <base-button-2  class="our-services-layer-top__button">
            <nuxt-link :to="`/services#service-${_item.id}`">Подробнее</nuxt-link>
          </base-button-2>
      </div>
      <div class="our-services-layer-top__controls">
        <nuxt-link class="our-services-layer-top__controls-title" to="/services#services">Наши услуги</nuxt-link>
        <base-pagination-numbered
            class="our-services-layer-top__pagination"
            :current-id="currentItemIndex"
            :count="_items.length"
            :speed="speed"
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
        return this._items[this.currentItemIndex]
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
      currentItemIndex: {
        type: Number,
        default: 0
      },
      speed: {
        type: Number,
        default: 5000
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .our-services-layer-top {
    position: relative;

    &__container {
      position: relative;
      height: 100%;
    }

    &__content {
      color: #fff;
      padding-top: 2rem;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
      padding-bottom: 4rem;

      @media #{$desktop} {
        padding-left: 0;
        padding-right: 0;
        padding-top: 16rem;
        padding-bottom: 16rem;

        max-width: 50%;
        min-height: 59rem;
      }
    }

    &__title {
      max-width: 80%;
      margin-bottom: 0;
    }

    &__text {
      color: #fdfeff;
      font-family: $openSans;
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 600;

      margin-bottom: 1.7rem;

      max-width: 100%;

      @media #{$mobile} {
        margin-top: .7rem;
      }

      @media #{$desktop} {
        font-size: 1.6rem;
        line-height: 2.6rem;
        margin-bottom: 5.4rem;
        max-width: 80%;
      }
    }

    &__pagination {
      @media #{$mobile} {
        position: relative;
        right: -2.0rem;
      }
    }

    &__controls {
      display: flex;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      left: 2.5rem;
      right: 2.5rem;
      bottom: 97vw;

      @media #{$desktop} {
        left: 0;
        right: auto;
        bottom: 14rem;
      }

      &-title {
        color: #fdfeff;
        font-size: 2.0rem;
        font-family: $bebasNeueBold;
        text-transform: uppercase;
        white-space: nowrap;

        @media #{$mobile} {
          text-decoration: none;
          border-bottom: .2rem solid white;
          padding-bottom: 0;
          margin-bottom: -.6rem;
        }

        @media #{$desktop} {
          font-size: 3.6rem;
          line-height: 6rem;
          margin-right: 5.0rem;
        }
      }
    }
  }
</style>
