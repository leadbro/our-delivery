<template>
  <section class="thanks-slider">
    <swiper
      class="thanks-slider__swiper"
      v-if="_items"
      :options="swiperOptions"
      ref="swiper"
    >
      <swiper-slide
        class="thanks-slider__item"
        v-for="item in _items"
        :key="item.id"
      >
        <picture class="thanks-slider__picture">
          <img :src="item.image" :alt="item.title" />
        </picture>
      </swiper-slide>
    </swiper>
    <div class="thanks-slider__navigation-container container">
      <div class="thanks-slider__navigation">
        <button
          class="thanks-slider__button thanks-slider__button--prev"
          @click="goPrev()"
        />
        <button
          class="thanks-slider__button thanks-slider__button--next"
          @click="goNext()"
        />
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'AppThanksSlider',
    data() {
      return {
        swiperOptions: {
          loop: false,
          observer: true,
          speed: 500,
          slidesPerView: 'auto'
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.swiperInstance
      },
      ...mapGetters({
        _items: 'thanksSlider/items'
      }),
    },
    methods: {
      goNext() {
        this.swiper.slideNext()
      },
      goPrev() {
        this.swiper.slidePrev()
      },
    }
  }
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .thanks-slider {
    position: relative;

    &__swiper {
      height: 100%;
      padding: 2.0rem 0;
      padding-left: var(--side-padding);
      overflow: visible;

      @media #{$desktop} {
        margin-left: auto;
        margin-right: auto;
        max-width: 144rem;
        width: calc(100vw - 10rem);
      }
    }

    &__item {
      position: relative;
      padding-right: 3.2rem;
      width: 20.8rem;

      @media #{$desktop} {
        padding-right: 4.1rem;
        width: 33.1rem;

        &:last-child {
          padding-right: 0;
          width: 29rem;
        }
      }
    }

    &__picture {
      height: 100%;
      border-radius: 1.2rem;
      filter:
        drop-shadow(0px .8rem 3.0rem rgba(0, 0, 0, 0.1))
        drop-shadow(0px .1rem .1rem rgba(0, 0, 0, 0.05));

      width: 17.6rem;

      position: relative;
      overflow: hidden;
      z-index: 1;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

      @media #{$desktop} {
        height: 40.9rem;
        width: 29.0rem;
      }
    }

    &__navigation {
      --button-size: 3.2rem;

      display: flex;

      position: absolute;
      bottom: -6.0rem;
      left: var(--side-padding);
      z-index: 3;

      @media #{$desktop} {
        --button-size: 5.0rem;

        left: 0;
        bottom: -8.4rem;
      }

      &-container {

        @media #{$desktop} {
          position: relative;
        }
      }
    }

    &__button {
      display: block;

      background-color: #081305;
      border: none;
      cursor: pointer;

      padding: 0;

      width: var(--button-size);
      height: var(--button-size);

      position: relative;

      &:before {
        --arrow-width: 1.1rem;
        --arrow-height: 0.811rem;

        content: '';
        display: block;

        background-image: url(~/assets/images/header-slider/arrow-left.svg);
        background-size: cover;

        width: var(--arrow-width);
        height: var(--arrow-height);

        position: absolute;
        left: calc(50% - var(--arrow-width) / 2);
        top: calc(50% - var(--arrow-height) / 2);

        @media #{$desktop} {
          --arrow-width: 1.7rem;
          --arrow-height: 1.26rem;
        }
      }

      &--next {
        right: -.1rem;

        @media #{$desktop} {
          right: auto;
        }
      }

      &--prev {

        @media #{$desktop} {
          right: .1rem;
        }
      }

      &--next:before {
        transform: rotateZ(180deg);
      }

      &:hover,
      &:focus {
        background-color: #1935c5;
      }
    }
  }

</style>

