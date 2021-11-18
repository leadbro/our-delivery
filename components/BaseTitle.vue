<template>
  <h2 class="base-title">
    <img
        v-if="imageSrc"
        :src="imageSrc"
        class="base-title__icon"
    />
    <span v-if="sup" class="base-title__sup">{{ sup }}</span>
    <span class="base-title__text"><slot></slot></span>
  </h2>
</template>

<script>
  export default {
    name: "BaseTitle",
    data() {
      return {};
    },
    props: {
      sup: {
        type: String,
        default: undefined
      },
      imageSrc: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-title {
    margin-bottom: 5.2rem;

    position: relative;

    @media #{$desktop} {
      margin-bottom: 5.2rem;
    }

    &__icon {
      --icon-size: 13.2rem;

      display: block;

      width: var(--icon-size);
      height: var(--icon-size);

      position: absolute;
      top: calc(36% - var(--icon-size) / 2);
      left: calc(var(--icon-size) / -2);
      z-index: -1;

      @media #{$desktop} {
        --icon-size: 34rem;

        top: calc(50% - var(--icon-size) / 2);
      }
    }

    &__sup {
      display: block;
      font-family: $openSans;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.9rem;
      margin-bottom: .6rem;

      @media #{$desktop} {
        font-size: 2.4rem;
        line-height: 3.3rem;
        margin-bottom: 1.4rem;
      }
    }

    &__sup + &__text {


      @media #{$desktop} {
        font-size: 6.0rem;
        line-height: 6.0rem;
      }
    }

    &__text {
      font-family: $bebasNeueBold;
      font-size: 3rem;
      line-height: 3rem;
      text-transform: uppercase;

      @media #{$desktop} {
        font-size: 7rem;
        line-height: 8rem;
      }
    }
  }
</style>
