// import AuthService from '../services/authservice';

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