<template>
  <button
      class="base-button"
      :class="buttonClass"
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
    computed: {
      buttonClass() {
        return {
          'base-button--white': this.colorScheme === 'white',
          'base-button--blue': this.colorScheme === 'blue',
          'base-button--small': this.size === 'small',
        }
      }
    },
    props: {
      colorScheme: {
        type: String,
        default() {
          return 'blue'
        }
      },
      size: {
        type: String,
        default() {
          return ''
        }
      }
    }
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-button {

    &--blue {
      --border-color: #0000ff;
      --bg-color: #fff;
      --bg-color-hover: #0000ff;
      --color: #181818;
      --color-hover: #fff;
    }

    &--white {
      --border-color: #fdfeff;
      --bg-color: rgba(255, 255, 255, 0);
      --bg-color-hover: #fdfeff;
      --color: #fdfeff;
      --color-hover: #000;
    }

    &--small {
      font-size: 2.6rem;

      padding: 0 7rem;

      height: 5.6rem;
    }

    display: inline-flex;
    align-items: center;
    justify-content: center;


    border: 0.2rem solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--color);
    font-family: $bebasNeueBold;
    font-size: 2rem;
    outline: none;

    padding: 0 4rem;

    height: 5.6rem;

    position: relative;

    transition: color .2s, background-color .1s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    @media #{$desktop} {
      font-size: 3rem;

      padding: 0 10rem;

      height: 7.6rem;
    }

    &:hover,
    &:focus {

      &:not([disabled]) {
        background-color: var(--bg-color-hover);
        color: var(--color-hover);
        cursor: pointer;
      }
    }
  }
</style>
