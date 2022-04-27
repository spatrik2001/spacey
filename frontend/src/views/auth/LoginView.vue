<template>
    <div class="login">
        <!-- <% if (errorMessage) { %>
            <div class="text-center"><%= errorMessage %></div>
        <% } %> -->
        <div class="login-form shadow">
            <form action="/login" v-on:submit="login" method="POST">
                <img src="@/assets/img/logo.png" class="img-fluid">
                <h4>Jelentkezzen be webáruházunkba!</h4>
                <div class="mb-3 mt-5">
                    <input v-model="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <a class="text-decoration-none" href="/reset">Elfelejtett jelszó</a>
                </div>
                <input type="hidden" name="_csrf" value="{{csrfToken}}%>">
                <button class="specialButton btn-sm" type="submit">Bejelentkezés</button>
                <div class="pt-3 text-muted">
                    Nincs még fiókja? <a class="text-decoration-none" href="/signup">Regisztráció</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AuthService from '@/services/authservice';
// import bcrypt from 'bcryptjs';
export default {
    name: 'loginView',
    data() {
        return {
            email: "",
            password: "",
            isLoggedIn: false
        }
    },
    methods: {
        login() {
            const data = {
                email: this.email,
                password: this.password
            };

            AuthService.postLogin(data)
                .then((response) => {
                    console.log(response);
                    this.isLoggedIn = true;
                    // router.push("/");
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    created() {
        document.title = 'SpaceY · Bejelentkezés';
    }
}
</script>