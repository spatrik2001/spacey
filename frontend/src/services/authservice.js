import api from './api';
import TokenService from './tokenservice';
import store from '../store/authmodule';

// https://www.bezkoder.com/vue-3-refresh-token/
// https://www.bezkoder.com/vue-3-authentication-jwt/

class AuthService {
    login({ email, password }) {
        return api.post("/login", {email, password})
        .then((response) => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }
    logout() {
        TokenService.removeUser();
    }
    signup({ email, password }) {
        return api.post("/signup", {email, password});
    }
}

export default new AuthService();