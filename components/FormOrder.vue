<template>
  <form class="form-order">
    <base-input class="form-order__input" placeholder="Имя"/>
    <base-input required="required" class="form-order__input" placeholder="Телефон"/>
    <base-button class="form-order__submit" type="submit">Заказать</base-button>
    <base-checkbox class="form-order__checkbox">
      Я соглашаюсь на обработку <a href="/">персональных данных</a>
    </base-checkbox>
  </form>
</template>

<script>
  export default {
    name: 'FormOrder',
    components: {
    },
    computed: {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
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