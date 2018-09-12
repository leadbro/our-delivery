<template>
  <label
      class="base-checkbox"
  >
    <input
        v-bind="$attrs"
        :value="value"
        v-on="listeners"
        type="checkbox"
        class="base-checkbox__input"
    />
    <span class="base-checkbox__checkbox"></span>
    <span class="base-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
  export default {
    name: "BaseCheckbox",
    inheritAttrs: false,
    data() {
      return {
        types: [undefined]
      };
    },
    computed: {
      listeners() {
        return {
          ...this.$listeners,
          change: e => {
            this.$emit('change', e.target.value)
          }
        }
      }
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      }
    },
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  /*todo: убрать возможность выделить текст*/

  .base-checkbox {
    display: inline-flex;
    align-items: center;

    cursor: pointer;

    &__input {
      width: 0;
      height: 0;

      overflow: hidden;
    }

    &__checkbox {
      --checkbox-size: 2.1rem;

      border: 0.1rem solid #bababa;

      margin-right: 1rem;

      width: var(--checkbox-size);
      height: var(--checkbox-size);

      position: relative;

      transition: border-color .2s ease-in;

      &:after {
        content: '';

        display: block;

        border: 2px solid #0000ff;
        border-top: none;
        border-left: none;

        position: absolute;
        top: calc(50% - .5rem);
        left: calc(50% - .2rem);

        width: 0.5rem;
        height: 0.8rem;

        transform: rotateZ(0deg);
        opacity: 0;

        transition: transform .3s, opacity .2s;
      }
    }

    &__input:focus + &__checkbox {
      border: 1px solid #0000ff;
    }

    &:hover &__checkbox {
      border: 1px solid #0000ff;
    }

    &__input:checked + &__checkbox:after {
      transform: rotateZ(45deg);
      opacity: 1;
    }

    &__label {
      color: #181818;
      font-family: $PTSans;
      font-size: 1.2rem;

      a {
        color: inherit;
      }
    }
  }
</style>
