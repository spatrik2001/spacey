<template>
    <div class="login">
        {{ error }}
        <div class="login-form shadow">
            <form @submit.prevent="handleLogin">
                <img src="@/assets/img/logo.png" class="img-fluid">
                <h4>Jelentkezzen be webáruházunkba!</h4>
                <div class="mb-3 mt-5">
                    <input type="email" v-model="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <input type="password" v-model="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
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
        // login() {
        //     let user = {
        //         email: this.email,
        //         password: this.password
        //     };

        //     axios.post('http://localhost:3000/api/auth/login', user, { headers: authHeader() })
        //         .then(res => {
        //             if (res.status === 200) {
        //                 localStorage.setItem('token', res.data.token);
        //                 this.$router.push('/');
        //                 this.error = '';
        //             }
        //         }, err => {
        //             console.log(err.response);
        //             this.error = err.response.data.error;
        //         })
        // },
        handleLogin(user) {
            this.$store.dispatch('auth/login', user).then(
                () => {
                    this.$router.push('/');
                }, (error) => {
                    console.log(error);
                }
            )
        }

    }
}
</script>