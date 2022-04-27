<template>
    <div class="cart">
        <!-- <% if (products.length > 0) { %> -->
        <div v-if="products.length > 0">
            <ul class="cart__item-list">
                <!-- <% products.forEach(p => { %> -->
                    <li class="cart__item">
                        <h1>{{ p.productId.title }}</h1>
                        <h2>{{ p.quantity }} db</h2>
                        <form action="/cart-delete-item" method="POST">
                            <input type="hidden" value="{{ p.productId._id }}" name="productId">
                            <input type="hidden" name="_csrf" value="{{ csrfToken }}">
                            <button class="btn danger" type="submit">Törlés</button>
                        </form>
                    </li>
                <!-- <% }) %> -->
            </ul>
            <div class="text-center">
                <form action="/create-order" method="POST">
                    <input type="hidden" name="_csrf" value="{{ csrfToken }}">
                    <button class="specialButton" type="submit">Megrendelés</button>
                </form>
            </div>
        </div>
        <div v-else>
            <div class="d-flex flex-column align-items-center align-middle pt-5">
                <h3 class="py-4">Üres a kosara!</h3>
                <a href="/products"><button class="specialButton btn-sm mx-auto">Vásárlás folytatása</button></a>
                <img class="img-fluid center" src="@/assets/img/empty_cart_logo.png" alt="Bevásárlókocsi">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartView',
    data() {
        return {
            products: []
        }
    },
    created() {
        document.title = 'SpaceY · Kosár';
    }
}
</script>