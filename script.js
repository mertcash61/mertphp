// DOM Elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav__link'),
      sections = document.querySelectorAll('section[id]'),
      scrollUp = document.getElementById('scroll-up');

// Show/Hide Menu
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Active link on scroll
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// Show scroll up button
function scrollUp() {
    if(this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// Form validation
const contactForm = document.querySelector('.contact__form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Form validation logic
    });
}

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide-preloader');
});

// Dark/Light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
