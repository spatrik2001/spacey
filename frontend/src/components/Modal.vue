<template>
    <div class="modal fade" id="spaceyTermek{{ product._id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-7">
                                <img class="card-img-top" src="{{ product.imageUrl }}" alt="{{ product.title }}">
                                <p class="pt-2 fw-normal">A fent látható kép néhol csak illusztráció.</p>
                            </div>
                            <div class="col-12 col-lg-5">
                                <a class="btn btn-close float-end" data-bs-dismiss="modal"></a>
                                <h3 class="card-title pb-3">{{ product.title }}</h3>
                                <!-- <% if (product.discount == true) { %> -->
                                    <span class="text-decoration-line-through">Eredeti ár:</span>
                                    <p class="card-text labels text-decoration-line-through">{{ product.price }} Ft</p>
                                    <br>
                                    <span>Akciós ár:</span>
                                    <h5 class="card-text labels">{{ product.price }} Ft</h5>
                                <!-- <% } else { %> -->
                                    <span>Ár:</span>
                                    <h5 class="card-text labels">{{ product.price }} Ft</h5>
                                <!-- <% } %> -->
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
</template>