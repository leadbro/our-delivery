<template>
  <label
      class="base-input"
      :class="baseInputClass"
  >
    <input
        v-bind="$attrs"
        v-model="inputValue"
        v-on="listeners"
        placeholder=""
        class="base-input__input"
    />
    <span class="base-input__placeholder">{{$attrs.placeholder}}</span>
  </label>
</template>

<script>
  export default {
    name: "BaseInput",
    inheritAttrs: false,
    data() {
      return {
        inputValue: ''
      };
    },
    computed: {
      isEmpty() {
        return this.inputValue.length === 0
      },
      isRequired() {
        return this.$attrs.required
      },
      baseInputClass() {
        return {
          'base-input--not-empty': !this.isEmpty,
          'base-input--required': this.isRequired,
          'base-input--white': this.colorScheme === 'white',
          'base-input--blue': this.colorScheme === 'blue',
        }
      },
      listeners() {
        return {
          ...this.$listeners,
          input: () => {
            this.$emit('input', this.inputValue)
          }
        }
      },
    },
    props: {
      value: {
        type: String,
        default: ''
      },
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

  .base-input {

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

    display: inline-block;

    border-bottom: 0.2rem solid var(--border-color);
    background-color: var(--bg-color);
    color: var(--color);
    font-family: $gothamPro;
    font-size: 1.8rem;

    position: relative;

    &--required {

      &:after {
        content: '*';
        display: block;

        color: #f00b3c;
        font-family: $gothamPro;
        font-size: 2.4rem;
        line-height: 1em;

        width: 1.2rem;
        height: 1.3rem;

        position: absolute;
        right: 0;
        bottom: 1rem;

        transition: opacity .3s;
      }
    }

    &__input {
      display: block;
      outline: none;

      border: none;
      background-color: rgba(255,255,255, 0);
      color: var(--color);

      font-size: inherit;
      font-family: inherit;

      padding: .9rem 1.4rem .4rem .5rem;

      width: 100%;
      height: 4.2rem;

      position: relative;
      z-index: 2;
    }

    &__placeholder {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      transform: translate(.6rem, 1.3rem) scale(1);
      transform-origin: 0 0;

      transition: transform .3s cubic-bezier(0.215, 0.61, 0.355, 1);;
    }

    &__input:focus + &__placeholder,
    &--not-empty &__placeholder {
      transform: translate(0, 0) scale(.5);
    }

    &--not-empty:after {
      opacity: 0;
    }

  }
</style>
