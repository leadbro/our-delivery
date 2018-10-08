<template>
  <form class="form-message">
    <base-input
      class="form-message__input"
      placeholder="Имя"
      :color-scheme="colorScheme"
    />

    <base-input
      required="required"
      class="form-message__input"
      placeholder="Телефон"
      :color-scheme="colorScheme"
    />

    <base-input
      class="form-message__input"
      placeholder="Компания"
      :color-scheme="colorScheme"
    />

    <base-input
      required="required"
      class="form-message__input"
      placeholder="E-mail"
      :color-scheme="colorScheme"
    />

    <base-textarea
      class="form-message__textarea"
      placeholder="Сообщение"
      :color-scheme="colorScheme"
    />

    <base-checkbox
      class="form-message__checkbox"
      :color-scheme="colorScheme"
    >
      Я соглашаюсь на обработку <a href="/">персональных данных</a>
    </base-checkbox>

    <base-button
      class="form-message__submit"
      type="submit"
      :color-scheme="colorScheme"
    >Заказать
    </base-button>


  </form>
</template>

<script>
  export default {
    name: 'FormOrder',
    components: {},
    computed: {
      formClass() {
        return {
          'form-message--white': this.colorScheme === 'white',
          'form-message--blue': this.colorScheme === 'blue',
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

  .form-message {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    width: 60.5rem;

    position: relative;


    &__checkbox {
      margin-bottom: 4rem;
    }

    &__input {
      margin-right: 1.8rem;
      margin-bottom: 3.2rem;

      width: calc(50% - 1.8rem)
    }

    &__textarea {
      margin-bottom: 3.2rem;
      margin-right: 1.8rem;

      width: 100%
    }

    &__submit {

    }
  }

</style>