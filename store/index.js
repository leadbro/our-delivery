export const state = () => ({
  privacyPolicy: ''
});

export const getters = {
  privacyPolicy(state) {
    return state.privacyPolicy
  },
};

export const mutations = {

  setPrivacyPolicy(state, payload) {
    state.privacyPolicy = payload.content.rendered
  },
};

export const actions = {
  async getPrivacyPolicy({ state, commit }) {
    let response = await this.$axios.$get('/posts/193/');
    commit('setPrivacyPolicy', response);
  },
};