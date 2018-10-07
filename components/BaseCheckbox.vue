<template>
  <label
      class="base-checkbox"
      :class="baseCheckboxClass"
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
      },
      baseCheckboxClass() {
        return {
          'base-checkbox--white': this.colorScheme === 'white',
          'base-checkbox--blue': this.colorScheme === 'blue',
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
      },
      colorScheme: {
        type: String,
        default() {
          return 'blue'
        }
      }
    },
  };
</script>

<style lang="scss">
  @import "../assets/mixins.scss";

  /*todo: убрать возможность выделить текст*/

  .base-checkbox {

    &--blue {
      --border-color: #bababa;
      --border-color-hover: #0000ff;
      --color: #181818;
    }

    &--white {
      --border-color: #bababa;
      --border-color-hover: #fdfeff;
      --color: #fdfeff;
    }

    display: inline-flex;
    align-items: center;

    cursor: pointer;

    &__input {
      opacity: 0;

      width: 0;
      height: 0;

      overflow: hidden;
    }

    &__checkbox {
      --checkbox-size: 2.1rem;

      border: 0.1rem solid var(--border-color);

      margin-right: 1rem;

      width: var(--checkbox-size);
      height: var(--checkbox-size);

      position: relative;

      transition: border-color .2s ease-in;

      &:after {
        content: '';

        display: block;

        border: 2px solid var(--border-color-hover);
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
      border: 1px solid var(--border-color-hover);
    }

    &:hover &__checkbox {
      border: 1px solid var(--border-color-hover);
    }

    &__input:checked + &__checkbox:after {
      transform: rotateZ(45deg);
      opacity: 1;
    }

    &__label {
      color: var(--color);
      font-family: $PTSans;
      font-size: 1.2rem;

      a {
        color: inherit;
      }
    }
  }
</style>
