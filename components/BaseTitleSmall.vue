<template>
  <h2 class="base-title-small">
    <span class="base-title-small__sup"><slot name="sup"></slot>&nbsp;</span>
    <span class="base-title-small__text"><slot></slot></span>
  </h2>
</template>

<script>
  export default {
    name: "BaseTitleSmall",
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-title-small {
    margin-bottom: 3.0rem;

    @media #{$desktop} {
      margin-bottom: 5.2rem;
    }

    &__sup {
      display: block;

      color: inherit;
      font-family: $openSans;
      font-size: 1.4rem;
      line-height: 3rem;
      font-weight: 400;

      @media #{$desktop} {
        font-size: 1.6rem;
        line-height: 2.6rem;
        letter-spacing: 0.08rem;
      }
    }

    &__text {
      font-family: $bebasNeueBold;
      font-size: 3rem;
      line-height: 3rem;
      letter-spacing: 0.02rem;
      text-transform: uppercase;

      @media #{$desktop} {
        font-size: 6rem;
        line-height: 6rem;
      }
    }
  }
</style>
