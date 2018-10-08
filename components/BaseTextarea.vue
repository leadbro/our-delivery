<template>
  <label
      class="base-textarea"
      :class="baseInputClass"
  >
    <textarea
        v-bind="$attrs"
        v-model="inputValue"
        v-on="listeners"
        placeholder=""
        class="base-textarea__textarea"
        ref="textarea"
    >
      <slot></slot>
    </textarea>
    <span class="base-textarea__placeholder">{{$attrs.placeholder}}</span>
  </label>
</template>

<script>
  export default {
    name: "BaseTextarea",
    inheritAttrs: false,
    data() {
      return {
        inputValue: '',
        style: null
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
          'base-textarea--not-empty': !this.isEmpty,
          'base-textarea--required': this.isRequired
        }
      },
      listeners() {
        return {
          ...this.$listeners,
          input: () => {
            this.$emit('input', this.inputValue)
          }
        }
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      }
    },

  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  .base-textarea {
    display: block;

    border-bottom: 0.2rem solid #0000ff;
    background-color: #fff;
    color: #181818;
    font-size: 1.8rem;

    padding-top: 1.4rem;

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

    &__textarea {
      display: block;
      outline: none;

      border: none;
      background-color: rgba(255,255,255, 0);

      font-size: inherit;
      font-family: inherit;

      padding: 0rem 1.4rem .4rem .5rem;
      resize: none;

      width: 100%;
      height: 15rem;

      overflow: auto;
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

    &__textarea:focus + &__placeholder,
    &--not-empty &__placeholder {
      transform: translate(0, 0) scale(.5);
    }

    &--not-empty:after {
      opacity: 0;
    }

  }
</style>
