<template>
  <form class="form-message" @submit.prevent="onFormSubmit">
    <base-input
      class="form-message__input"
      placeholder="Имя"
      v-model="formData.name"
      :color-scheme="colorScheme"
    />

    <base-input
      required="required"
      class="form-message__input"
      placeholder="Телефон"
      v-model="formData.phone"
      :color-scheme="colorScheme"
    />

    <base-input
      class="form-message__input"
      placeholder="Компания"
      v-model="formData.company"
      :color-scheme="colorScheme"
    />

    <base-input
      class="form-message__input"
      placeholder="E-mail"
      v-model="formData.email"
      :color-scheme="colorScheme"
    />

    <base-textarea
      class="form-message__textarea"
      placeholder="Сообщение"
      v-model="formData.message"
      :color-scheme="colorScheme"
    />

    <base-checkbox
      class="form-message__checkbox"
      checked="checked"
      :color-scheme="colorScheme"
    >
      Я соглашаюсь на обработку <a href="/" @click.prevent="showPrivacy">персональных данных</a>
    </base-checkbox>

    <base-button
      class="form-message__submit"
      type="submit"
      :color-scheme="colorScheme"
      :disabled="isFormSuccess"
    >{{buttonText}}
    </base-button>


  </form>
</template>

<script>
  export default {
    name: 'FormMessage',
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
          'form-message--white': this.colorScheme === 'white',
          'form-message--blue': this.colorScheme === 'blue',
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
