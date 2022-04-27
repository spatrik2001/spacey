import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:3000';

export default {
    postLogin(user) {
        return Axios.post('/api/auth/login', user)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('token', res.data.token);
                    this.$router.push('/');
                }
                // return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    postSignup(user) {
        return Axios.post('/api/auth/signup', user)
    }
}

