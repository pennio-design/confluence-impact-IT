document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navContainer = document.querySelector(".nav-container");

  mobileMenu.addEventListener("click", function () {
    navContainer.classList.toggle("active");
  });
});
