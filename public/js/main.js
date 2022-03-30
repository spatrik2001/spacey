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