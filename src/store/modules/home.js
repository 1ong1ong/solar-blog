
const state = {
    currentMenuItem: ['']
};
const mutations = {
    setMenuItem(state, item) {
        state.currentMenuItem.push(item);
    },
    resetMenuItem(state) {
        state.currentMenuItem = [''];
    }
};
const actions = {
    selectMenuItem({commit}, item) {
        commit('resetMenuItem');
        commit('setMenuItem', item)
    },
    resetMenuItem({commit}) {
        commit('resetMenuItem');
    }
};
const getters = {};

const home = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
export default home
