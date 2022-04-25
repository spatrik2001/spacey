<template>
    <div class="error">
        <div class="d-flex flex-column align-items-center align-middle">
            <h1 class="pt-5">404</h1>
            <p>A megadott oldal nem található!</p>
            <img class="img-fluid center" src="../assets/img/404.jpg" alt="404">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ErrorView',
    created() {
        document.title = 'SpaceY · A keresett oldal nem található!';
    }
}
</script>