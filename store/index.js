import Debug from '@/helpers/Debug';

export const state = () => ({
  categories: null,
  headerLocate: [{ name: null, id: null }],
  cartItems: [],
});

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
  setHeaderLocate(state, payload) {
    state.headerLocate = payload;
  },
  setCartItems(state, payload) {
    state.cartItems = payload;
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  pushCartItem(state, payload) {
    if (state.cartItems.includes(payload)) {
      state.cartItems = state.cartItems.filter(item => item !== payload);
    } else {
      state.cartItems.push(payload);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeCartItem(state, payload) {
    if (state.cartItems.includes(payload)) {
      state.cartItems = state.cartItems.filter(item => item !== payload);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
};

export const getters = {
  categories: s => s.categories,
  headerLocate: s => s.headerLocate,
  cartItems: s => s.cartItems,
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
  initCartItems({ commit }) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (!cartItems) return localStorage.setItem('cartItems', JSON.stringify([]));
    commit('setCartItems', cartItems);
  },
};
