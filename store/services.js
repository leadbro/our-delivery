export const state = () => ({
  list: [
    {
      id: 0,
      color: '#f00b3c',
      title: 'Доставка сборного груза',
      text: 'Компания «Наша Доставка» осуществляет перевозки сборного груза по всей территории РФ и стран таможенного союза.  Доставка сборного груза осуществляется напрямую «до двери» получателя без складских перегрузов в регионах.',
      picture: {
        mobile: '/images/our-services/1.jpg'
      }
    },
    {
      id: 1,
      color: '#0727e7',
      title: 'Ответственное хранение',
      text: 'Компания «Наша Доставка» принимает грузы на ответственное хранение',
      picture: {
        mobile: '/images/slider/2.png'
      }
    },
  ]
});


export const getters = {
  items(state) {
    return state.list
  },
  getItemById: state => id => {
    return state.list.find(i => i.id === id);
  },
};
