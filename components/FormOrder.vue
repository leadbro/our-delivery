<template>
  <form class="form-order">
    <base-input
      class="form-order__input"
      placeholder="Имя"
      :color-scheme="colorScheme"
    />

    <base-input
      required="required"
      class="form-order__input"
      placeholder="Телефон"
      :color-scheme="colorScheme"
    />

    <base-button
      class="form-order__submit"
      type="submit"
      :color-scheme="colorScheme"
    >Заказать
    </base-button>

    <base-checkbox
      class="form-order__checkbox"
      :color-scheme="colorScheme"
    >
      Я соглашаюсь на обработку <a href="/">персональных данных</a>
    </base-checkbox>
  </form>
</template>

<script>
  export default {
    name: 'FormOrder',
    components: {},
    computed: {
      formClass() {
        return {
          'form-order--white': this.colorScheme === 'white',
          'form-order--blue': this.colorScheme === 'blue',
        }
      }
    },
    methods: {},
    props: {
      colorScheme: {
        type: String,
        default() {
          return 'blue'
        }
      }
    }
  }
</script>

<style
  scoped
  lang="scss"
>
  @import "../assets/mixins.scss";

  .form-order {
    display: flex;
    align-items: flex-start;

    position: relative;

    &__checkbox {

      position: absolute;
      left: 0;
      bottom: -1rem;
    }

    &__input {
      margin-right: 1.8rem;
      width: 29.3rem;
    }

    &__submit {

    }
  }

</style>