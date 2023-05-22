export const state = () => ({
  user: null,
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  initUser({ commit, state }) {
    const user = localStorage.getItem('user');
    if (user) commit('setUser', JSON.parse(user));
  },
  async login({ state, commit }, payload) {
    const resLogin = await this.$axios.$post(process.env.apiBaseUrl + 'authentication/Auth', payload);
    localStorage.setItem('token', resLogin.jwt);
    commit('setUser', resLogin.user);
    localStorage.setItem('user', JSON.stringify(state.user));
    return true;
  },
  logout({ commit }) {
    // const navResult = await this.$router.push(this.localePath('/'));
    // if (!navResult) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    commit('setUser', null);
    // }
  },
};

export const getters = {
  user: s => s.user,
};
