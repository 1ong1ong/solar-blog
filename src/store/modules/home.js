import {getConfig} from '../../api/config';

const state = {
    currentMenuItem: [''],
    config: {}
};
const mutations = {
    setMenuItem(state, item) {
        state.currentMenuItem.push(item);
    },
    resetMenuItem(state) {
        state.currentMenuItem = [''];
    },
    setConfig(state, config) {
        state.config = config;
    }
};
const actions = {
    selectMenuItem({commit}, item) {
        commit('resetMenuItem');
        commit('setMenuItem', item)
    },
    resetMenuItem({commit}) {
        commit('resetMenuItem');
    },
    initConfig({commit}) {
        getConfig().then(res => {
            commit('setConfig', res);
        })
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
