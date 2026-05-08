// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if(localStorage.getItem('theme') === 'light'){
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle Theme

themeToggle.addEventListener('click', () => {

    body.classList.toggle('light-mode');

    // Save theme
    if(body.classList.contains('light-mode')){

        localStorage.setItem('theme', 'light');

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem('theme', 'dark');

        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =========================
// SCROLL ANIMATION
// =========================

const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {

    fadeElements.forEach(element => {

        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(position < screenPosition){
            element.classList.add('show');
        }
    });
});