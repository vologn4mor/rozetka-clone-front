import Debug from '@/helpers/Debug';

export const state = () => ({
  categories: null,
  headerLocate: null,
});

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
  setHeaderLocate(state, payload) {
    state.headerLocate = payload;
  },
};

export const getters = {
  categories: s => s.categories,
  headerLocate: s => s.headerLocate,
};

export const actions = {
  async initCategories({ commit }) {
    // commit('setCategories', null);
    try {
      const res = await this.$axios.$get('Categories/full');
      if (res.data) {
        commit('setCategories', res.data);
      }
    } catch (e) {
      Debug.log(e);
    }
  },
};
