import api from './api';
import TokenService from './tokenservice';

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
    register(user) {
        return api.post("/auth/signup", { email: user.email, password: user.password});
    }
}

export default new AuthService();