document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const navItems = document.querySelectorAll("nav ul li a");

    // Toggle Menu on Click
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });

    // Close Menu When a Link is Clicked
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.classList.remove("active");
        });
    });

    // Auto Hide Navbar on Scroll
    let lastScrollY = window.scrollY;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            header.style.top = "-80px"; // Hide Navbar
        } else {
            header.style.top = "0"; // Show Navbar
        }
        lastScrollY = window.scrollY;
    });
});
