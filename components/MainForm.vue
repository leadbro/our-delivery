<template>
  <div class="main-form">
    <h2 class="main-form__title">Заказать доставку</h2>
    <form-order class="main-form__form"/>
  </div>
</template>

<script>
  export default {
    name: 'MainForm',
    components: {

    },
    computed: {

    },
    methods: {}
  }
</script>

<style scoped lang="scss">
@import "../assets/mixins.scss";
  
  .main-form {

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
  }
  
</style>