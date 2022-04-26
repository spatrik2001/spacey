import Axios from "axios";

Axios.defaults.baseURL = 'http://localhost:3000/';

export default{
    getAllProducts() {
        return Axios.get('/api/products')
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getProducts() {
        return Axios.get('/api/products')
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    },
    getNewProducts() {
        return Axios.get('/api/products')
            .sort({ createdAt: 'desc'})
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
            })
    }
}