export const state = () => ({
  list: []
});

export const getters = {
  items(state) {
    return state.list
  }
};

export const mutations = {
  setListFromApi(state, payload) {
    state.list = payload.map(i => {
      return {
        id: i.id,
        title: i.title,
        image: i.acf.image
      }
    })
  },
  setItems(state, payload) {
    state.list = payload
  },
};

export const actions = {
  async getItems({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 9}});
    commit('setListFromApi', response);
  }
};
