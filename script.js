
// Mobile Navigation Menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isExpanded);
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});
