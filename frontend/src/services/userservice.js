import api from './authservice';
import authHeader from './auth-header';

class UserService {
    getPublicContent() {
        return api.get('/user');
    }
    getUserBoard() {
        return api.get('/user' + 'user', { headers: authHeader() });
    }
    getAdminBoard() {
        return api.get('/user' + 'admin', { headers: authHeader() });
    }
}

export default new UserService();