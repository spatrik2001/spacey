<template>
    <div class="orders">
        <!-- <% if (orders.length <= 0) { %> -->
            <div class="d-flex flex-column align-items-center align-middle pt-5">
                <h3 class="py-4">Még nem rendelt semmit!</h3>
                <a href="/products"><button class="specialButton btn-sm mx-auto">Vásárlás folytatása</button></a>
                <img class="img-fluid center" src="/img/empty_cart_logo.png" alt="Bevásárlókocsi">
            </div>
        <!-- <% } else { %> -->
            <ul class="orders">
                <!-- <% orders.forEach(order => { %> -->
                    <li class="orders__item">
                        <h1>Rendelés - # {{ order.user.email }}</h1>
                        <ul class="orders__products">
                            <!-- <% order.products.forEach(p => { %> -->
                                <li class="orders__products-item">{{ p.product.title }} ({{ p.quantity }})</li>
                            <!-- <% }); %> -->
                        </ul>
                    </li>
                <!-- <% }); %> -->
            </ul>
        <!-- <% } %> -->
    </div>
</template>

<script>
export default {
    name: 'OrderView',
    created() {
        document.title = 'SpaceY · Rendelések';
    }
}
</script>