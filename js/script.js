const header = document.querySelector('header');
const leftArrow = document.querySelector('.strzalka-lewo');
const rightArrow = document.querySelector('.strzalka-prawo');

const backgrounds = [
    "url(../img/tlo.png)",
    "url(../img/tlo2.png) "
];

let currentBackgroundIndex = 0;

const changeBackground = (direction) => {
    if (direction === 'left') {
        currentBackgroundIndex = (currentBackgroundIndex === 0) ? backgrounds.length - 1 : currentBackgroundIndex - 1;
    } else if (direction === 'right') {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    }

    header.style.background = `linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), ${backgrounds[currentBackgroundIndex]} no-repeat center/cover`;
};

leftArrow.addEventListener('click', () => changeBackground('left'));
rightArrow.addEventListener('click', () => changeBackground('right'));

// Pobranie elementu topbaru
const topbar = document.querySelector('.topbar');

// Funkcja nasłuchująca scroll
window.addEventListener('scroll', () => {
    // Jeśli strona jest przewinięta o więcej niż 50px
    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});

