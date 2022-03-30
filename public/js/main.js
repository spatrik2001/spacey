// favicon módosítása
const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;
const favicon = document.getElementById('favicon');

function switchIcon(darkMode) {
    if (darkMode)
        favicon.href = '/img/favicon-light.png';
    else
        favicon.href = '/img/favicon-dark.png';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => switchIcon(e.matches));
switchIcon(darkMode);

// Google Maps
function basement() {
    const jedlik = { lat: 47.68230, lng: 17.63021 };
    const map = new google.maps.Map(document.getElementById('spaceyBasement'), {
        center: jedlik,
        zoom: 18
    });
    const marker = new google.maps.Marker({
        position: jedlik,
        map: map
    });
}