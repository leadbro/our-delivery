export const state = () => ({
  list: [
    { id: 0, name: 'О нас', to: '/about' },
    { id: 1, name: 'Услуги', to: '/services' },
    { id: 2, name: 'Тарифы и сроки', to: '/tariffs' },
    { id: 3, name: 'Документы', to: '/docs' },
    { id: 4, name: 'Контакты', to: '/contacts' },
  ]
});

export const getters = {
  items(state) {
    return state.list
  }
};