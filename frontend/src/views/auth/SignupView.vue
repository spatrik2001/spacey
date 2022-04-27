<template>
    <div class="signup">
        {{ error }}
        <div class="login-form shadow">
            <form method="post" @submit.prevent="signup">
                <img src="@/assets/img/logo.png" class="img-fluid">
                <h4>Regisztráljon webáruházunkra!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" v-model="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" v-model="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="mezo" v-model="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder="Jelszó újra" required>
                </div>
                <button class="specialButton btn-sm" type="submit">Regisztráció</button>
                <div class="pt-3 text-muted">
                    Már van fiókja? <a class="text-decoration-none" href="/login">Bejelentkezés</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignupView',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    },
    methods: {
        signup() {
            let user = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }
            axios.post('http://localhost:3000/api/auth/signup', user)
                .then(response => {
                    console.log(response);
                    this.error = '';
                    this.$router.push('/login');
                })
                .catch(err => {
                    console.log(err);
                    this.error = err.response.data.error;
                })
        }
    },
    created() {
        document.title = 'SpaceY · Regisztráció';
    }
}
</script>