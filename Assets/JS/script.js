document.addEventListener('DOMContentLoaded', function() {

    // Toggle Mobile Navigation Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    // Smooth Scroll to Sections
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

