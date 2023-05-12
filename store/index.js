import Debug from '@/helpers/Debug';

export const state = () => ({
  categories: null,
  headerLocate: [{ name: null, id: null }],
  cartItems: [],
  lastChecked: [],
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
    if (state.cartItems.filter(item => item.id === payload).length > 0) {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    } else {
      state.cartItems.push({ id: payload, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeCartItem(state, payload) {
    if (state.cartItems.filter(item => item.id === payload).length > 0) {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  changeItemCount(state, payload) {
    state.cartItems = state.cartItems.map(item => {
      if (item.id === payload.id) {
        return {
          ...item,
          count: payload.count,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  setLastChecked(state, payload) {
    state.lastChecked = payload;
    localStorage.setItem('lastChecked', JSON.stringify(state.lastChecked));
  },
  pushLastChecked(state, payload) {
    if (state.lastChecked.includes(payload)) {
      state.lastChecked = state.lastChecked.filter(item => item !== payload);
    }
    state.lastChecked.unshift(payload);
    localStorage.setItem('lastChecked', JSON.stringify(state.lastChecked));
  },
};

export const getters = {
  categories: s => s.categories,
  headerLocate: s => s.headerLocate,
  cartItems: s => s.cartItems,
  lastChecked: s => s.lastChecked,
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
  initLastChecked({ commit }) {
    const lastChecked = JSON.parse(localStorage.getItem('lastChecked'));
    if (!lastChecked) return localStorage.setItem('lastChecked', JSON.stringify([]));
    commit('setLastChecked', lastChecked);
  },
};
