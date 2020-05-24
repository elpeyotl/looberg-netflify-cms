export const state = () => ({
  sideBarOpen: false
});

export const mutations = {
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen;
  },
};

export const actions = {
    toggleSidebar({ commit }) {
      commit("toggleSideBar");
    }
};

export const getters = {

};
