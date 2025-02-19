document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Lazy load images
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Footer social media links animation
    const socialIcons = document.querySelectorAll("footer a img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "0.3s";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});
