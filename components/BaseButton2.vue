<template>
  <button
      class="base-button-2"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "BaseButton2",
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-button-2 {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    border: none;
    background-color: rgba(255,255,255,0);
    color: #fbfbfb;
    font-family: $bebasNeueBold;
    font-size: 2.4rem;
    line-height: 3rem;

    padding: 1.3rem;
    padding-right: 16rem;

    height: 5rem;

    position: relative;

    &:after {
      content: '';
      display: block;

      border-bottom: 0.2rem solid #fff;

      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &:hover,
    &:focus {

      &:after {
        transform: scale(1);
      }
    }
  }
</style>
