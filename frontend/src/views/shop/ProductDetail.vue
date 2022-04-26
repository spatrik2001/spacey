<template>
    <div class="product-detail">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb py-3">
                    <li class="breadcrumb-item">
                        <a href="/" class="gomb">Kezdőlap</a>
                    </li>
                    <li class="breadcrumb-item">
                        <a href="/products" class="gomb">Termékek</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ egyProduct.title }}</li>
                </ol>
            </nav>
            <div class="row pb-4">
                <div class="col-md-6">
                    <div class="picture">
                        <img class="img-fluid" :src="egyProduct.imageUrl" :alt="egyProduct.title">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="card-title pb-2">{{ egyProduct.title }}</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <span class="badge bg-primary">Űrutazás</span>
                        </div>
                    </div>
                    <div class="row pb-2">
                        <div class="col-md-3">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star pr-2"></span>
                            <span class="badge bg-success">69</span>
                        </div>
                        <div class="col-md-3">
                            <span class="fw-light">Értékelés írása</span>
                        </div>
                    </div>
                    <div class="row pb-3">
                        <div class="col-md-12">
                            <div v-if="egyProduct.discount">
                                <span class="text-decoration-line-through">Eredeti ár:</span>
                                <p class="card-text labels text-decoration-line-through">{{ egyProduct.price }} Ft</p>
                                <br>
                                <span>Akciós ár:</span>
                                <h5 class="card-text labels">{{ (egyProduct.price-(egyProduct.price*(egyProduct.discountRate/100))) }} Ft</h5>
                            </div>
                            <div v-else>
                                <span>Ár:</span>
                                <h5 class="card-text labels">{{ egyProduct.price }} Ft</h5>
                            </div>
                            <hr>
                        </div>
                    </div>
                    <div class="row pb-3">
                        <div class="col-md-5 d-flex d-inline-block">
                            <span class="btn btn-secondary" id="less" onclick="quantityLess()">
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </span>
                            <input type="number" class="form-control w-25 mx-1" name="quantity" id="quantity" value="1" min="1">
                            <span class="btn btn-secondary" id="more" onclick="quantityMore()">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="col-md-3">
                            <!-- <% if (isAuthenticated) { %>
                                <%- include('../includes/add-to-cart2.ejs', {product: product}) %>
                            <% } %> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <hr>
                            <nav>
                                <div class="nav nav-tabs" id="sapceyTab" role="tablist">
                                    <button type="button" id="spaceyDescription" class="nav-link active" aria-controls="description" role="tab"
                                    data-bs-toggle="tab" data-bs-target="#description">Leírás</button>
                                    <button type="button" class="nav-link" id="spaceyReviews" aria-controls="reviews" role="tab"
                                    data-bs-toggle="tab" data-bs-target="#reviews">Értékelések</button>
                                </div>
                                <div class="tab-content pt-3">
                                    <div role="tabpanel" class="tab-pane fade show active" id="description">
                                        <p class="card-text labels">{{ egyProduct.description }}</p>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="reviews">
                                        <p class="card-text labels">asd</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '@/services/productservice';
export default {
    name: 'productDetail',
    data() {
        return {
            egyProduct: []
        }
    },
    created() {
        ProductService.getProductById(this.$route.params.productId)
            .then(response => {
                this.egyProduct = response;
                document.title = `SpaceY · ${this.egyProduct.title}`;
            })
    }
}

</script>