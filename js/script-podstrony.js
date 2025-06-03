const topbar = document.querySelector('.topbar');
if (topbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1) {
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

const produktButtons = document.querySelectorAll('.produkt-button');

produktButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'podglad_produktu.html';
    });
});

const powrotButton = document.querySelector('.powrot-lista');

if (powrotButton) {
    powrotButton.addEventListener('click', () => {
        window.location.href = 'lista_produktow.html';
    });
}

const blogButton = document.querySelector('.blog-button');

if (blogButton) {
    blogButton.addEventListener('click', () => {
        window.location.href = 'blog_poglad.html';
    });
}

const blog_powrotButton = document.querySelector('.blog-powrot');

if (blog_powrotButton) {
    blog_powrotButton.addEventListener('click', () => {
        window.location.href = 'blog_lista.html';
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.querySelector('input[name="quantity"]');
    const plusButton = document.querySelector('.quantity-control .plus');
    const minusButton = document.querySelector('.quantity-control .minus');

    plusButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    minusButton.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});


const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const container = document.querySelector('.page-numbers');

let currentPage = 1;
const totalPages = 13;
const fixedEndPages = [10, 11, 12, 13];
const visibleWindowSize = 5;

function format(n) {
    return n.toString().padStart(2, '0');
}

function renderPagination() {
    container.innerHTML = '';

    let windowStart = Math.max(1, currentPage - Math.floor(visibleWindowSize / 2));
    let windowEnd = windowStart + visibleWindowSize - 1;

    if (windowEnd >= fixedEndPages[0]) {
        windowEnd = fixedEndPages[0] - 1;
        windowStart = windowEnd - visibleWindowSize + 1;
    }

    windowStart = Math.max(1, windowStart);

    for (let i = windowStart; i <= windowEnd; i++) {
        const page = document.createElement('span');
        page.className = 'page';
        page.textContent = format(i);
        if (i === currentPage) page.classList.add('active');
        page.addEventListener('click', () => {
            currentPage = i;
            renderPagination();
        });
        container.appendChild(page);
    }

    if (windowEnd < fixedEndPages[0] - 1) {
        const dots = document.createElement('span');
        dots.className = 'dots';
        dots.textContent = '...';
        container.appendChild(dots);
    }

    fixedEndPages.forEach((p) => {
        const page = document.createElement('span');
        page.className = 'page';
        page.textContent = format(p);
        if (p === currentPage) page.classList.add('active');
        page.addEventListener('click', () => {
            currentPage = p;
            renderPagination();
        });
        container.appendChild(page);
    });
}

rightArrow.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
    }
});

leftArrow.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPagination();
    }
});

renderPagination();

