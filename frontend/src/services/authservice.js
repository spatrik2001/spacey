import api from './api';
import TokenService from './tokenservice';

// https://www.bezkoder.com/vue-3-refresh-token/
// https://www.bezkoder.com/vue-3-authentication-jwt/

class AuthService {
    login(user) {
        return api.post("/auth/login", { email: user.email, password: user.password})
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
    signup(user) {
        return api.post("/auth/signup", { email: user.email, password: user.hashedPassword});
    }
}

export default new AuthService();