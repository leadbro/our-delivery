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
        title: i.acf.title,
        subtitle: i.acf.subtitle,
        text: i.acf.text,
        pictures: {
          mobile: i.acf.pictures.mobile.url
        }
      }
    })
  },
  setItems(state, payload) {
    state.list = payload
  },
};

export const actions = {
  async getItems({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 2}});
    commit('setListFromApi', response);
  }
};