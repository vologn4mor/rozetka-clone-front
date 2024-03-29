import Debug from '@/helpers/Debug';

export const state = () => ({
  user: null,
  showAuth: false,
});

export const mutations = {
  setUser(state, payload) {
    state.user = payload;
    if (!payload) return localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(payload));
  },
  setShowAuth(state, payload) {
    state.showAuth = payload;
  },
};

export const actions = {
  initUser({ commit, state }) {
    const user = localStorage.getItem('user');
    if (user) commit('setUser', JSON.parse(user));
  },
  async login({ state, commit }, payload) {
    try {
      const resLogin = await this.$axios.$post(process.env.apiBaseUrl + 'authentication/Auth', payload);
      if (resLogin.jwt) {
        localStorage.setItem('token', resLogin.jwt);
        commit('setUser', resLogin.user);
        return true;
      } else return false;
    } catch (e) {
      Debug.log(e);
    }
  },
  async register({ state, commit }, payload) {
    try {
      const resRegistration = await this.$axios.$post(process.env.apiBaseUrl + 'authentication/Reg/register-user', payload);
      if (resRegistration.jwt) {
        localStorage.setItem('token', resRegistration.jwt);
        commit('setUser', resRegistration.userModel);
        return true;
      } else return false;
    } catch (e) {
      Debug.log(e);
    }
  },
  async logout({ commit }) {
    await this.$router.replace(this.localePath('/'));
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    commit('setUser', null);
  },
};

export const getters = {
  user: s => s.user,
  showAuth: s => s.showAuth,
};
