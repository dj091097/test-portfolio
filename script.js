document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        offset: 50, // offset (in px) from the original trigger point
    });

    // Initialize Typed.js
    const typedOutputElement = document.getElementById('typed-output');
    if (typedOutputElement) {
        var typed = new Typed('#typed-output', {
            strings: ["Business Analytics Specialist", "Data-Driven Problem Solver", "Innovating with Insights"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            smartBackspace: true,
            backDelay: 1500,
        });
    }

    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Check if both elements exist before adding event listeners
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // This toggles the 'hidden' class
            
            // Change hamburger icon to X and vice-versa
            if (mobileMenu.classList.contains('hidden')) {
                // Menu is hidden, show hamburger
                menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
            } else {
                // Menu is visible, show X
                menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            }
        });

        // Close mobile menu when a navigation link inside it is clicked
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden'); // Hide the menu
                // Reset button to hamburger icon
                menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
            });
        });
    }
    
    // Update current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Add a subtle scroll effect to the navbar background
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('bg-slate-900/95'); // More opaque on scroll
                navbar.classList.remove('bg-slate-900/80');
            } else {
                navbar.classList.add('bg-slate-900/80');
                navbar.classList.remove('bg-slate-900/95');
            }
        });
    }
});