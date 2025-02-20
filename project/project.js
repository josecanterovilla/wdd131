document.addEventListener("DOMContentLoaded", function () {
    console.log("Services page loaded");

    // Lazy load images
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Service hover effect
    const serviceItems = document.querySelectorAll(".service-item");
    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "0.3s";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});



document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    let form = event.target;
    let formMessage = document.getElementById("formMessage");

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            formMessage.textContent = "✔ Message sent successfully!";
            formMessage.classList.remove("hidden");
            form.reset();
        } else {
            formMessage.textContent = "❌ Error sending message. Try again.";
            formMessage.classList.remove("hidden");
        }
    } catch (error) {
        formMessage.textContent = "❌ Connection error. Try again.";
        formMessage.classList.remove("hidden");
    }
});
