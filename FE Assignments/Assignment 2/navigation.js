document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.main-nav .nav-list');
    const siteHeader = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        siteHeader.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();

            const parentNavItem = this.parentNode;
            const submenu = parentNavItem.querySelector('.submenu');
            const isActive = parentNavItem.classList.contains('active');

            document.querySelectorAll('.nav-item').forEach(function(item) {
                item.classList.remove('active');
                const sub = item.querySelector('.submenu');
                if (sub) sub.classList.remove('active');
            });

            if (!isActive) {
                parentNavItem.classList.add('active');
                if (submenu) submenu.classList.add('active');
            }
        });
    });
});
