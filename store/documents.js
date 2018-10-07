export const state = () => ({
  list: [
    {
      id: 0,
      name: 'Заявление о смене адреса доставки',
      src: '/test/',
      type: 'docx',
      size: '160 Kb'
    },
    {
      id: 1,
      name: 'Заявление о смене грузополучателя',
      src: '/test/',
      type: 'xlsx',
      size: '160 Kb'
    },
    {
      id: 2,
      name: 'Заявление о смене грузополучателя',
      src: '/test/',
      type: 'xlsx',
      size: '160 Kb'
    },
  ]
});


export const getters = {
  items(state) {
    return state.list
  }
};

export const mutations = {
  setList(state, payload) {
    state.list = payload.map(i => {
      return {
        id: i.id,
        name: i.title.rendered,
        type: '',
        src: i.content.rendered,
        size: i.acf.icon.url
      }
    })
  }
};

export const actions = {
  async GET_ITEMS({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 4}});

    commit('setList', response);
  }
};