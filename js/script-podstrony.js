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