document.addEventListener("DOMContentLoaded", function () {
    // Fix for event listener error
    const menuToggle = document.getElementById("mobile-menu");
    const navContainer = document.querySelector(".nav-container");

    if (menuToggle && navContainer) {
        menuToggle.addEventListener("click", function () {
            navContainer.classList.toggle("active");
        });
    }

    // Booking Form Submission
    const form = document.getElementById("booking-form");
    const message = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            message.classList.remove("hidden");
            form.reset();
        });
    }
});
