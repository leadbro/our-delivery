<template>
  <h2
      class="base-title"
  >
    <img
        :src="imageSrc"
        class="base-title__icon"
    />
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

    &__icon {
      --icon-size: 34rem;

      display: block;

      width: var(--icon-size);
      height: var(--icon-size);

      position: absolute;
      top: calc(50% - var(--icon-size) / 2);
      left: calc(var(--icon-size) / -2);
      z-index: -1;
    }

    &__text {
      font-family: $bebasNeueBold;
      font-size: 7rem;
      line-height: 8rem;
      text-transform: uppercase;
    }
  }
</style>
