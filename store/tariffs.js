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
        name: i.title.rendered,
        type: i.acf.file.filename.split('.').pop(),
        src: i.acf.file.url,
        size: parseInt(i.acf.file.filesize / 1000) + 'Kb'
      }
    })
  }
};

export const actions = {
  async getItems({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 7}});
    commit('setList', response);
  }
};