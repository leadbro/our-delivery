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
        }
      }
    },
    props: {
      colorScheme: {
        type: String,
        default() {
          return 'blue'
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

    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
    border: 0.2rem solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--color);
    font-family: $bebasNeueBold;
    font-size: 3rem;
    outline: none;

    padding: 0 10rem;

    height: 7.6rem;

    position: relative;
    
    transition: color .2s, background-color .1s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &:hover,
    &:focus {
      background-color: var(--bg-color-hover);
      color: var(--color-hover);
    }
  }
</style>
