<template>
    <div class="reset">
        <!-- <% if (errorMessage) { %>
            <div class="text-center"><%= errorMessage %></div>
        <% } %> -->
        <div class="login-form shadow">
            <form action="/reset" method="POST">
                <h4>Elfelejtette jelszavát?</h4>
                <p>Adja meg az email címét:</p>
                <div class="mb-3">
                    <input type="email" class="mezo" name="email" id="email" placeholder="Email" required>
                </div>
                <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                <button class="specialButton btn-sm" type="submit">Email küldése</button>
            </form>
            <a href="/login"><button class="specialButton btn-sm">Vissza</button></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResetView',
    created() {
        document.title = 'SpaceY · Elfelejtett jelszó';
    }
}
</script>