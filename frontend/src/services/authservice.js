import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? {status: {loggedIn: true}, user}
    : {status: {loggedIn: false}, user: null};
export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        refreshToken({ commit }, accessToken) {
            commit('refreshToken', accessToken);
        }
    },
    mutations: {
        refreshToken(state, accessToken) {
            state.status.loggedIn = true;
            state.user = { ...state.user, accessToken: accessToken};
        }
    }
};
// https://www.bezkoder.com/vue-3-refresh-token/
