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
    
    border: 0.2rem solid #0000ff;
    background-color: #fff;
    color: #181818;
    font-family: $bebasNeueBold;
    font-size: 3rem;
    outline: none;

    padding: 0 10rem;

    height: 7.6rem;

    position: relative;
    
    transition: color .2s, background-color .1s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &:hover,
    &:focus {

      background-color: #0000ff;
      color: #fff;
    }
  }
</style>
