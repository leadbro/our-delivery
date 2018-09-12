<template>
  <button
      class="base-button"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "BaseButton",
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border: none;
    background-color: #fff;
    color: #181818;
    font-family: $bebasNeueBold;
    font-size: 3rem;
    outline: none;

    padding: 0 10rem;

    height: 7.6rem;

    position: relative;

    &:after {
      content: '';
      display: block;

      border: 0.2rem solid #0000ff;

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      transform: scale(.95, .85);

      transition: transform .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }

    &:hover,
    &:focus {

      &:after {
        transform: scale(1);
      }
    }
  }
</style>
