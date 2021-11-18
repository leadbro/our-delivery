<template>
  <section class="header-slider">
    <swiper
      class="header-slider__swiper"
      v-if="_items"
      :options="swiperOptions"
      ref="swiper"
    >
      <swiper-slide
        class="header-slider__item"
        v-for="item in _items"
        :key="item.id"
      >
        <app-banner
          class="header-slider__banner"
          :title="item.title"
          :subtitle="item.subtitle"
          :text="item.text"
          :pictures="item.pictures"
          :is-with-text="isWithText"
        />
      </swiper-slide>
    </swiper>
    <div class="header-slider__navigation">
      <button
        class="header-slider__button header-slider__button--prev"
        @click="goPrev()"
      />
      <button
        class="header-slider__button header-slider__button--next"
        @click="goNext()"
      />
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'AppHeaderSlider',
    data() {
      return {
        swiperOptions: {
          effect: "fade",
          loop: true,
          observer: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false
          },
          speed: 500,
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.swiper.swiperInstance
      },
      ...mapGetters({
        _items: 'headerSlider/items'
      }),
    },
    props: {
      isWithText: {
        type: Boolean,
        default() {
          return true
        }
      },
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

  .header-slider {
    position: relative;

    &__swiper {
      height: 100%;
    }

    &__item {
      position: relative;
    }

    &__picture {
      height: 100%;

      position: relative;
      z-index: 1;

      overflow: hidden;

      &:after {
        content: '';
        display: block;

        background-color: rgba(0, 0, 0, .4);

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    &__banner {
      height: 100%;
    }

    &__navigation {
      --button-size: 3.2rem;

      display: flex;

      position: absolute;
      bottom: 0;
      left: var(--side-padding);
      z-index: 3;

      @media #{$desktop} {
        --button-size: 5.0rem;

        left: calc(var(--button-size) * -1);
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

