import { createStore } from 'vuex';

export default createStore({
  modules: {},
  state: {
    isSidebarOpen: false
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  },
  actions: {},
  getters: {}
});
