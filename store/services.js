export const state = () => ({
  list: []
});


export const getters = {
  items(state) {
    return state.list
  },
  sliderItems(state) {
    return state.list.filter(i => i.isOnSlider)
  },
  provideItems(state) {
    return state.list.filter(i => i.type === 'Предоставляем')
  },
  deliverItems(state) {
    return state.list.filter(i => i.type === 'Доставляем')
  },
  getItemById: state => id => {
    return state.list.find(i => i.id === id);
  },
};

export const mutations = {
  setList(state, payload) {
    state.list = payload.map(i => {
      return {
        id: i.id,
        color: i.acf.color,
        title: i.title.rendered,
        iconSrc: i.acf.icon,
        servicesTitle: i.acf.servicesTitle || i.title.rendered,
        previewText: i.acf.previewText,
        text: i.acf.detailText,
        isOnSlider: !!i.acf.isOnSlider,
        type:  i.acf.type,
        picture: {
          mobile: i.acf.sliderPicture.url
        }
      }
    })
  }
};

export const actions = {
  async getItems({ state, commit }) {
    let response = await this.$axios.$get('/posts/', {params: {categories: 8}});
    commit('setList', response);
  }
};
