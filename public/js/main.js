// Favicon módosítása
const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;
const favicon = document.getElementById('favicon');

function switchIcon(darkMode) {
    if (darkMode)
        favicon.href = '/img/favicon-light.png';
    else
        favicon.href = '/img/favicon-dark.png';
};

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
};

// Checkbox check az akció felvételéhez
function discountRateShow() {
    var input = document.getElementById('discountRate');

    if (document.getElementById('discount').checked) {
        input.type = "number";
        document.getElementById('discount').value = true;
        document.getElementById('discount').setAttribute("checked", "");
    } else {
        input.type = "hidden";
        document.getElementById('discount').value = false;
        document.getElementById('discount').removeAttribute("checked", "");
    }
};