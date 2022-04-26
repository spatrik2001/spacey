<template>
    <div class="container">
        <div v-if="products.length > 0">
            <div class="row">
                <div v-for="(product, index) in products" :key="index">
                    <div v-if="index < 4">
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <a href="/products/{{ product._id }}" class="details text-black">
                                        <div class="picture">
                                            <div class="d-grid gap-2 d-md-flex justify-content-start">
                                                <span class="new">Új</span>
                                                <div v-if="product.discount">
                                                    <span class="cheaperHome">-{{ product.discountRate }}%</span>
                                                </div>
                                            </div>
                                            <img class="card-img" :src="product.imageUrl" :alt="product.title">
                                        </div>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                        <h5 class="card-title">{{ product.title }}</h5>
                                        <div v-if="product.discount">
                                            <h4 class="card-text text-danger">{{product.price-(product.price*(product.discountRate/100))}} Ft</h4>
                                        </div>
                                        <div v-else>
                                            <h4 class="card-text">{{ product.price }} Ft</h4>
                                        </div>
                                    </a>
                                    <div class="d-grid gap-2 d-md-flex justify-content-center">
                                        <span class="btn" data-bs-toggle="modal" data-bs-target="[id='spaceyTermek{{ product._id }}']">Adatok</span>
                                        <!-- <% if (isAuthenticated) { %>
                                            <%- include('includes/add-to-cart.ejs', {product: product}) %>
                                        <% } %> -->
                                    </div>
                                    <div class="modal fade" id="spaceyTermek{{ product._id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <div class="container">
                                                        <div class="row">
                                                            <div class="col-12 col-lg-7">
                                                                <img class="card-img-top" :src="product.imageUrl" :alt="product.title">
                                                                <p class="pt-2 fw-normal">A fent látható kép néhol csak illusztráció.</p>
                                                            </div>
                                                            <div class="col-12 col-lg-5">
                                                                <a class="btn btn-close float-end" data-bs-dismiss="modal"></a>
                                                                <h3 class="card-title pb-3">{{ product.title }}</h3>
                                                                <div v-if="product.discount">
                                                                    <span class="text-decoration-line-through">Eredeti ár:</span>
                                                                    <p class="card-text labels text-decoration-line-through">{{ product.price }} Ft</p>
                                                                    <br>
                                                                    <span>Akciós ár:</span>
                                                                    <h5 class="card-text labels">{{product.price-(product.price*(product.discountRate/100))}} Ft</h5>
                                                                </div>
                                                                <div v-else>
                                                                    <span>Ár:</span>
                                                                    <h5 class="card-text labels">{{ product.price }} Ft</h5>
                                                                </div>
                                                                <br>
                                                                <span>Leírás:</span>
                                                                <h5 class="card-text labels fw-light">{{ product.description }}</h5>
                                                                <!-- <% if (isAuthenticated) { %>
                                                                    <%- include('includes/add-to-cart.ejs', {product: product}) %>
                                                                <% } %> -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div v-else>
                        <input type="hidden" name="more">
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-else>
            <h2 class="text-center">Nincsenek elérhető termékek!</h2>
        </div>
    </div>
</template>

<script>
import ProductService from '../services/productservice';
export default {
    name: 'new-products',
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getNewProducts();
    },
    methods: {
        getNewProducts() {
            ProductService.getNewProducts()
                .then((response) => {
                    this.products = response;
                })
                .catch();
        }
        
    }
}
</script>

<style>

</style>