<template>
    <div class="password-reset">
        <!-- <% if (errorMessage) { %>
            <div class="text-center"><%= errorMessage %></div>
        <% } %> -->
        <div class="login-form shadow">
            <form action="/new-password" method="POST">
                <h4>Új jelszó igénylése</h4>
                <p>Olyan jelszót adjon meg, amit nem felejt el!</p>
                <div class="mb-3">
                    <input type="password" class="mezo" name="password" id="password" placeholder="Jelszó" required>
                </div>
                <input type="hidden" name="userId" value="<%= userId %>">
                <input type="hidden" name="passwordToken" value="<%= passwordToken %>">
                <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                <button class="specialButton btn-sm" type="submit">Jelszó frissítése</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PasswordResetView',
    created() {
        document.title = 'SpaceY · Új jelszó kérése';
    }
}
</script>