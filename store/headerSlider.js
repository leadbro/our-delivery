export const state = () => ({
  list: [
    {
      id: 0,
      title: 'Компания «Наша Доставка» принимает грузы на ответственное хранение',
      subtitle: 'Стоимость услуги 1м3 — 25 руб. в сутки.',
      text: 'Наш адрес: Московская область, г. Щелково Фряновское шоссе 52.',
      picture: {
        mobile: '/images/slider/1.png'
      }
    },
    {
      id: 1,
      title: 'Перевозки по России быстро и надежно',
      subtitle: 'Стоимость услуги 1м3 — 25 руб. в сутки.',
      text: 'Наш адрес: Московская область, г. Щелково Фряновское шоссе 52.',
      picture: {
        mobile: '/images/slider/2.png'
      }
    }
  ]
});

export const getters = {
  items(state) {
    return state.list
  }
};