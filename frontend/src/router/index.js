import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ErrorView from '../views/ErrorView.vue';
import ProductList from '../views/shop/ProductList.vue';
import ProductDetail from '../views/shop/ProductDetail.vue';
import CartView from '../views/shop/CartView.vue';
import OrderView from '../views/shop/OrderView.vue';
import SignupView from '../views/auth/SignupView.vue';
import LoginView from '../views/auth/LoginView.vue';
import ResetView from '../views/auth/ResetView.vue';
const AdminView = () => import('../views/admin/AdminView.vue');

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/about', name: 'about', component: AboutView},
  {path: '/contact', name: 'contact', component: ContactView},
  {path: '/products', name: 'product-list', component: ProductList},
  {path: '/products/:productId', name: 'product-detail', component: ProductDetail, props: true},
  {path: '/cart', name: 'cart', component: CartView},
  {path: '/orders', name: 'orders', component: OrderView},
  {path: '/signup', name: 'signup', component: SignupView},
  {path: '/login', name: 'login', component: LoginView},
  {path: '/reset', name: 'reset', component: ResetView},
  {path: '/admin/products', name: 'admin', component: AdminView},
  {path: '/:pathMatch(.*)*', name: 'error', component: ErrorView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/login', '/signup', '/reset', '/home', '/products', '/about', '/contact'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
