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

const topbar = document.querySelector('.topbar');
if (topbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
    });
}

const menuIcon = document.querySelector('img[alt="Menu"]');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menuIcon.addEventListener('click', () => {
    hamburgerMenu.style.display = hamburgerMenu.style.display === 'block' ? 'none' : 'block';
});

const headerButton = document.querySelector('.header-button');

if (headerButton) {
    headerButton.addEventListener('click', () => {
        window.location.href = 'lista_produktow.html';
    });
}

const historiaButton = document.querySelector('.historia-button');

if (historiaButton) {
    historiaButton.addEventListener('click', () => {
        window.location.href = 'historia.html';
    });
}

const productButtons = document.querySelectorAll('.button-produkt');

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'lista_produktow.html';
    });
});

