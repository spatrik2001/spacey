import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import setupService from './services/setupservice'

import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import './assets/css/style.css';
import './assets/css/forms.css';
import './assets/css/auth.css';
import './assets/css/cart.css';
import './assets/css/orders.css';
import './assets/css/product.css';

setupService(store);
createApp(App).use(router).use(store).mount('#app');