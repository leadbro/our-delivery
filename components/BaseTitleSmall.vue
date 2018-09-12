<template>
  <h2
      class="base-title-small"
  >
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
    margin-bottom: 5.2rem;

    &__sup {
      display: block;

      color: inherit;
      font-family: $openSans;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.6rem;
      letter-spacing: 0.08rem;
    }

    &__text {
      font-family: $bebasNeueBold;
      font-size: 6rem;
      line-height: 6rem;
      text-transform: uppercase;
    }
  }
</style>
