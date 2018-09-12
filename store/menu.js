export const state = () => ({
  list: [
    { id: 0, name: 'О нас', to: '/' },
    { id: 1, name: 'Услуги', to: '/' },
    { id: 2, name: 'Тарифы и сроки', to: '/' },
    { id: 3, name: 'Документы', to: '/' },
    { id: 4, name: 'Контакты', to: '/' },
  ]
});

export const getters = {
  items(state) {
    return state.list
  }
};