export const state = () => ({
  categories: null,
});

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
};

export const getters = {
  categories: s => s.categories,
};

export const actions = {
  async initCategories({ commit }) {
    const res = await this.$axios.$get('Categories/full');
    if (res.data) {
      commit('setCategories', res.data);
    }
  },
};
