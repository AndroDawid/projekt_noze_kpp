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

const historiaButton = document.querySelector('.produkt-button');

if (historiaButton) {
    historiaButton.addEventListener('click', () => {
        window.location.href = 'podglad_produktu.html';
    });
}

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

    // make sure we don't overlap fixed end pages
    if (windowEnd >= fixedEndPages[0]) {
        windowEnd = fixedEndPages[0] - 1;
        windowStart = windowEnd - visibleWindowSize + 1;
    }

    windowStart = Math.max(1, windowStart);

    // render sliding window of pages
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

    // render ... if needed
    if (windowEnd < fixedEndPages[0] - 1) {
        const dots = document.createElement('span');
        dots.className = 'dots';
        dots.textContent = '...';
        container.appendChild(dots);
    }

    // render fixed pages (10–13)
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

