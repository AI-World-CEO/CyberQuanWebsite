// app.js

// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.querySelector('.md\\:flex');

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            if (navLinks) {
                navLinks.classList.toggle('hidden');
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center' // Center the section in the viewport
        });
    });
});

// Form submission and validation
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const emailValue = emailInput.value;

            if (validateEmail(emailValue)) {
                // Replace this alert with your form submission logic
                alert('Thank you for subscribing!');
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Lazy loading images for performance optimization
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const lazyLoad = function () {
        lazyImages.forEach(image => {
            if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
                image.src = image.dataset.src;
                image.removeAttribute('data-src');
            }
        });

        // Remove event listener if all images are loaded
        if (lazyImages.length === 0) {
            window.removeEventListener('scroll', lazyLoad);
        }
    };

    lazyLoad(); // Run on page load
    window.addEventListener('scroll', lazyLoad);
});

// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const body = document.body;

    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            updateEdgeDesigns();
            saveThemePreference();
        });
    }

    function saveThemePreference() {
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    function loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.toggle('dark-mode', savedTheme === 'dark');
            updateEdgeDesigns();
        }
    }

    function updateEdgeDesigns() {
        const edgeDesigns = document.querySelectorAll('.edge-design, .hero::before, .hero::after');
        edgeDesigns.forEach(edge => {
            edge.classList.toggle('dark-mode', body.classList.contains('dark-mode'));
        });
    }

    loadThemePreference();
});
