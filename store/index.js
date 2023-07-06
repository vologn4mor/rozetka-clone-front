import Debug from '@/helpers/Debug';

export const state = () => ({
  categories: null,
  headerLocate: [{ name: null, id: null }],
  cartItems: [],
  lastChecked: [],
  favoriteItems: [],
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
  setFavoriteItems(state, payload) {
    state.favoriteItems = payload;
    localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
  },
  pushCartItem(state, payload) {
    if (state.cartItems.filter(item => item.id === payload).length > 0) {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    } else {
      state.cartItems.push({ id: payload, count: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  pushFavoriteItem(state, payload) {
    // console.log(payload);
    if (state.favoriteItems.filter(item => item === payload).length > 0) {
      state.favoriteItems = state.favoriteItems.filter(item => item !== payload);
    } else {
      state.favoriteItems.push(payload);
    }
    localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
  },
  removeCartItem(state, payload) {
    if (state.cartItems.filter(item => item.id === payload).length > 0) {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeFavoriteItem(state, payload) {
    if (state.favoriteItems.filter(item => item === payload).length > 0) {
      state.favoriteItems = state.favoriteItems.filter(item => item !== payload);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.favoriteItems));
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
  favoriteItems: s => s.favoriteItems,
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
  initFavoriteItems({ commit }) {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems'));
    if (!favoriteItems) return localStorage.setItem('favoriteItems', JSON.stringify([]));
    commit('setFavoriteItems', favoriteItems);
  },
};
