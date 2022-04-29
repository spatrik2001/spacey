<template>
    <div class="signup">
        <div v-if="message" class="container alert" :class="!successful ? 'alert-danger' : 'alert-success'">
            {{ message }}
        </div>
        <div class="login-form shadow">
            <form @submit="signup">
                <img src="@/assets/img/logo.png" class="img-fluid">
                <h4>Regisztráljon webáruházunkra!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" v-model="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" v-model="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3">
                    <input type="password" v-model="confirmPassword" class="mezo" name="confirmPassword" id="confirmPassword" placeholder="Jelszó újra" required>
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
export default {
    name: 'SignupView',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            message: '',
            successful: true
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/');
        }
    },
    methods: {
        signup() {
            let user = {
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            };
            this.$store.dispatch('auth/register', user).then(
                (data) => {
                    this.successful = true;
                    this.message = data.message;
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    this.successful = false;
                }
            );
        }
    },
    created() {
        document.title = 'SpaceY · Regisztráció';
    }
}
</script>