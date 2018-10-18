export const state = () => ({
  list: [
    { id: 0, name: 'О нас', to: '/about#about' },
    { id: 1, name: 'Услуги', to: '/services#services' },
    { id: 2, name: 'Тарифы и сроки', to: '/tariffs#tariffs' },
    { id: 3, name: 'Документы', to: '/docs#documents' },
    { id: 4, name: 'Контакты', to: '/contacts#contacts' },
  ]
});

export const getters = {
  items(state) {
    return state.list
  }
};