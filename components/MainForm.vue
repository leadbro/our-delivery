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

<style lang="scss">
@import "../assets/mixins.scss";

  .main-form {
    @include wrapper;

    &__title {
      font-family: $bebasNeueBold;
      font-size: 1.6rem;
      line-height: 1.6rem;
      margin-top: 3.6rem;
      margin-bottom: .4rem;

      @media #{$desktop} {
        font-size: 2.6rem;
        line-height: 3rem;

        margin-bottom: 1.5rem;
      }
    }

    &__form {
      display: flex;
      align-items: flex-start;

      position: relative;
    }
  }

</style>
