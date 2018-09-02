<template>
  <div class="page-index">
    <section class="main-top">
      <div class="main-top__container container">
        <nav-top/>
        <div class="main-top__slider"></div>
        <div class="main-top__contacts">
          <a href="tel:+74951367399" class="main-top__contacts-phone">+7 (495) 136-73-99</a>
          <div class="main-top__contacts-btn">Обратный звонок</div>
        </div>
        <div class="main-top__form main-top-form">
          <h2 class="main-top-form__title">Заказать доставку</h2>
          <form class="main-top-form__form">
            <base-input placeholder="Имя"/>
            <base-input placeholder="Телефон"/>
            <base-button>Заказать</base-button>
            <base-checkbox>Я соглашаюсь на обработку персональных данных</base-checkbox>
          </form>
        </div>
      </div>
    </section>
    <our-advantages/>
    <our-services/>
  </div>
</template>

<script>
import NavTop from '~/components/NavTop';

export default {
  components: {
    NavTop
  }
}
</script>

<style>

</style>

