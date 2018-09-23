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
        title: i.acf.title,
        subtitle: i.acf.subtitle,
        text: i.acf.text,
        pictures: {
          mobile: i.acf.pictures.mobile.url
        }
      }
    })
  }
};

export const actions = {
  async GET_ITEMS({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 2}});
    commit('setList', response);
  }
};