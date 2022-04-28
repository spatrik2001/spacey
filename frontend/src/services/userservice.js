import api from './authservice';

class UserService {
    getPublicContent() {
      return api.get('/test/all');
    }
    getUserBoard() {
      return api.get('/test/user');
    }
    getAdminBoard() {
      return api.get('/test/admin');
    }
  }
  export default new UserService();