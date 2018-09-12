<template>
  <div class="header-form">
    <h2 class="header-form__title">Заказать доставку</h2>
    <form class="header-form__form">
      <base-input class="header-form__input" placeholder="Имя"/>
      <base-input required="required" class="header-form__input" placeholder="Телефон"/>
      <base-button class="header-form__submit" type="submit">Заказать</base-button>
      <base-checkbox class="header-form__checkbox">
        Я соглашаюсь на обработку <a href="/">персональных данных</a>
      </base-checkbox>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AppHeaderForm',
    components: {
    },
    computed: {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
@import "../assets/mixins.scss";
  
  .header-form {

    &__title {
      font-family: $bebasNeueBold;
      font-size: 2.6rem;
      line-height: 3rem;

      margin-bottom: 1.5rem;
    }

    &__form {
      display: flex;
      align-items: flex-start;

      position: relative;
    }

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