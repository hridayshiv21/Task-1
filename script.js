// script.js
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#e9d706"; // Solid background color on scroll
    } else {
        navbar.style.backgroundColor = "transparent"; // Transparent background at the top
    }
});
