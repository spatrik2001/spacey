<template>
    <div class="admin">
        <div class="container text-center pt-3">
            <h1>Felvett termékek</h1>
            <a href="/admin/add-product"><button type="submit" class="btn btn-primary btn-lg">Új termék</button></a>
            <!-- <% if (prods.length > 0) { %> -->
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Megnevezés</th>
                        <th scope="col">Ár</th>
                        <th scope="col">Akció</th>
                        <th scope="col">Akciós ár</th>
                        <th scope="col">Leírás</th>
                        <th scope="col">Lehetőségek</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <% for (let product of prods) { %> -->
                    <tr>
                        <td>
                            <h5 class="product__title">{{ product.title }}</h5>
                        </td>
                        <td>
                            <p class="product__price fw-bold">{{ product.price.toLocaleString('en-US') }} Ft</p>
                        </td>
                        <!-- <% if (product.discount == true) { %> -->
                            <td>
                                <p>{{ product.discountRate }}%</p>
                            </td>
                            <td>
                                <p>{{ (product.price-(product.price*(product.discountRate/100))).toLocaleString('en-US') }} Ft</p>
                            </td>
                        <!-- <% } else { %> -->
                            <td>
                                <p>-</p>
                            </td>
                            <td>
                                <p>-</p>
                            </td>
                        <!-- <% } %> -->
                        <td>
                            <p class="product__description">{{ product.description }}</p>
                        </td>
                        <td>
                            <a href="/admin/edit-product/<%= product.id %>?edit=true" class="gomb">Szerkesztés</a>
                            <form action="/admin/delete-product" method="POST">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                                <input type="hidden" name="productId" value="<%- product.id %>">
                                <button class="gomb" type="submit">Törlés</button>
                            </form>
                        </td>
                    </tr>
                    <!-- <% } %> -->
                </tbody>
            </table>
            <!-- <% } else { %> -->
                <h1 class="text-center pt-3">Nincsenek létrehozott termékek!</h1>
            <!-- <% } %> -->
        </div>
    </div>
</template>

<script>
import UserService from '@/services/userservice';
export default {
    name: 'AdminView',
    data() {
        return {
            content: ''
        }
    },
    created() {
        document.title = 'SpaceY · Admin';
    },
    mounted() {
        UserService.getAdminBoard().then(
            (response) => {
                this.content = response.data;
            }, (error) => {
                this.content = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            }
        )
    }
}
</script>