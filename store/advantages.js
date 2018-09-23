export const state = () => ({
  list: []
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
        title: i.title.rendered,
        text: i.content.rendered,
        icon: i.acf.icon.url
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