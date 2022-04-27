import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';

export default {
    postLogin() {
        return Axios.post('/api/auth/login')
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    }
}

