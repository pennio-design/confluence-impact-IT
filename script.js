document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const navItems = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");

    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");
        });
    });

    // Auto-hide navbar on scroll
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.style.top = "-80px"; // Hide Navbar
        } else {
            header.style.top = "0"; // Show Navbar
        }
        lastScrollY = window.scrollY;
    });
});
