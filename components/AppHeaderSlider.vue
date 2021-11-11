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
        console.log(this.swiper)
        this.swiper.slideNext()
      },
      goPrev() {
        console.log(this.swiper)
        this.swiper.slidePrev()
      },
    }
  }
</script>

<style
  lang="scss"
  scoped
>
  @import "../assets/mixins.scss";

  .header-slider {

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

    &__content {
      color: #fdfeff;

      max-width: calc(100% - 15rem);
      width: 85rem;

      position: absolute;
      top: 21.1rem;
      left: 11.1rem;
      z-index: 2;

      h2 {
        font-family: $bebasNeueBold;
        font-size: 6rem;
        line-height: 7.5rem;
        text-transform: uppercase;
        margin: 0;
      }

      h3 {
        font-family: $bebasNeueBold;
        font-size: 3rem;
        line-height: 6rem;
        text-transform: uppercase;
        margin: 0;
      }

      p {
        font-family: $PTSans;
        font-size: 1.6rem;
        line-height: 2.6rem;
        margin: 0;
      }
    }

    &__navigation {
      --button-size: 6.7rem;

      display: flex;

      position: absolute;
      bottom: 0;
      left: calc(var(--button-size) * -1);
      z-index: 3;
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
        --arrow-width: 3.2rem;
        --arrow-height: .7rem;

        content: '';
        display: block;

        background-image: url(~/assets/images/header-slider/arrow-left.png);
        background-size: cover;

        width: var(--arrow-width);
        height: var(--arrow-height);

        position: absolute;
        left: calc(50% - var(--arrow-width) / 2);
        top: calc(50% - var(--arrow-height) / 2);
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

