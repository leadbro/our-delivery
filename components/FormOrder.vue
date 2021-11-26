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

    <base-checkbox
      class="form-order__checkbox"
      type="submit"
      checked="checked"
      :color-scheme="colorScheme"

    >
      Я соглашаюсь на обработку <a href="/" @click.prevent="showPrivacy">персональных данных</a>
    </base-checkbox>

    <base-button
      class="form-order__submit"
      type="submit"
      :color-scheme="colorScheme"
      :disabled="isFormSuccess"
    >{{buttonText}}
    </base-button>

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
          baseURL: 'https://xn--80aaaajk8bsm4al1e.xn--p1ai/',
          url: 'form-handler.php',
          method: 'post',
          params: this.formData
        });

        if (response.data.success) {
          this.isFormSuccess = true;
          this.buttonText = 'Успешно';
        }
      },
      showPrivacy () {
        this.$modal.show('privacy-policy');
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

<style lang="scss">
  @import "../assets/mixins.scss";

  .form-order {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    @media #{$desktop} {
      flex-direction: row;
    }

    &__checkbox {
      margin-top: .5rem;
      margin-bottom: 2.4rem;

      @media #{$desktop} {
        margin-top: 0;
        margin-bottom: 0;

        position: absolute;
        left: 0;
        bottom: -1rem;
      }
    }

    &__input {
      margin-bottom: 2.0rem;
      width: 100%;

      @media #{$desktop} {
        margin-right: 1.8rem;
        width: 29.3rem;
      }
    }

    &__submit {

      @media #{$mobile} {
        width: 100%;
      }
    }
  }

</style>
