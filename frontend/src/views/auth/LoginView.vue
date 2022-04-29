<template>
    <div class="login">
        <div v-if="message" class="container alert" :class="!successful ? 'alert-danger' : 'alert-success'">
            {{ message }}
        </div>
        <div class="login-form shadow">
            <form @submit.prevent="handleLogin">
                <img src="@/assets/img/logo.png" class="img-fluid">
                <h4>Jelentkezzen be webáruházunkba!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <a class="text-decoration-none" href="/reset">Elfelejtett jelszó</a>
                </div>
                <button class="specialButton btn-sm">Bejelentkezés</button>
                <div class="pt-3 text-muted">
                    Nincs még fiókja? <a class="text-decoration-none" href="/signup">Regisztráció</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginView',
    data() {
        return {
            message: '',
            successful: ''
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/');
        }
        document.title = 'SpaceY · Bejelentkezés';
    },
    methods: {
        handleLogin(user) {
            this.$store.dispatch('auth/login', user).then(
                () => {
                    this.$router.push('/');
                }, (error) => {
                    this.successful = false;
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString(); 
                }
            )
        }

    }
}
</script>