<template>
    <div class="contact">
        <div class="container contact shadow">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                            <div class="w-100 p-md-5 p-4">
                                <h3 class="mb-4">Kapcsolat űrlap</h3>
                                <form method="post" id="urlap" name="urlap" class="urlap" novalidate="novalidate">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <input type="text" class="mezo" name="name" id="name" placeholder="Név" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <input type="email" class="mezo" name="email" id="email" placeholder="Email" required>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <input type="text" class="mezo" name="subject" id="subject" placeholder="Tárgy" required>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <textarea class="mezo" name="message" id="message" cols="30" rows="10" maxlength="500"
                                            placeholder="Üzenet" required></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <input type="hidden" name="_csrf" value="<%= csrfToken %>">
                                            <input type="button" class="specialButton btn-sm" value="Küldés">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-5 d-flex align-items-stretch contact-right">
                            <div class="w-100 p-md-5 p-4">
                                <h3 class="mb-4">Elérhetőségek</h3>
                                <p><i class="fas fa-globe-europe contact-icon"></i>9021 Győr, Szent István út 7.</p>
                                <p><i class="fas fa-phone contact-icon"></i>06 (1) 354 4090</p>
                                <p><i class="fas fa-envelope contact-icon"></i>info@spacey.com</p>
                                <div class="iframe-container">
                                    <div id="spaceyBasement" class="shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContactView',
    created() {
        document.title = 'SpaceY · Kapcsolat';
    }
}
</script>