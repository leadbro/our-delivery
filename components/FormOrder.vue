<template>
  <form class="form-order" @submit.prevent="onFormSubmit">
    <base-input
      class="form-order__input"
      placeholder="Имя"
      v-model="formData.name"
      :color-scheme="colorScheme"
    />

    <base-input
      required="required"
      class="form-order__input"
      placeholder="Телефон"
      v-model="formData.phone"
      :color-scheme="colorScheme"
    />

    <base-button
      class="form-order__submit"
      type="submit"
      :color-scheme="colorScheme"
      :disabled="isFormSuccess"
    >{{buttonText}}
    </base-button>

    <base-checkbox
      class="form-order__checkbox"
      type="submit"
      checked="checked"
      :color-scheme="colorScheme"

    >
      Я соглашаюсь на обработку <a href="/">персональных данных</a>
    </base-checkbox>
  </form>
</template>

<script>
  export default {
    name: 'FormOrder',
    data() {
      return {
        formData: {},
        isFormSuccess: false,
        buttonText: 'Заказать'
      }
    },
    components: {},
    computed: {
      formClass() {
        return {
          'form-order--white': this.colorScheme === 'white',
          'form-order--blue': this.colorScheme === 'blue',
        }
      }
    },
    methods: {
      async onFormSubmit() {
        let response = await this.$axios({
          baseURL: 'http://xn--80aaaajk8bsm4al1e.xn--p1ai/',
          url: 'form-handler.php',
          method: 'post',
          params: this.formData
        });

        if (response.data.success) {
          this.isFormSuccess = true;
          this.buttonText = 'Успешно';
        }
      }
    },
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