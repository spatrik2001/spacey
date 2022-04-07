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
    const input = document.getElementById('discountRate');

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

// Mennyiség befolyásoló gombok
const quantity = document.getElementById('quantity');
const less = document.getElementById('less');
const more = document.getElementById('more');

function quantityLess() {
    if (less.click) {
        document.getElementById('quantity').value = document.getElementById('quantity').value - 1;
        if (document.getElementById('quantity').value < 1)
            document.getElementById('quantity').value = 1;
    }
};

function quantityMore() {
    if (more.click)
        document.getElementById('quantity').value = (+document.getElementById('quantity').value) + 1;
};