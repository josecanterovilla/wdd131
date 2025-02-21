document.addEventListener("DOMContentLoaded", function () {
    console.log("Services page loaded");

   
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

 
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

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    menu.classList.toggle("active");

    // Cambia el ícono ☰ por una "X"
    menuIcon.innerHTML = menu.classList.contains("active") ? "✖" : "☰";
}

// Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
        document.querySelector(".menu-icon").innerHTML = "☰"; // Restaurar el ícono
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let confirmationMessage = document.getElementById("confirmationMessage");
    let submitButton = document.querySelector("button[type='submit']");

    if (!name || !email || !phone || !message) {
        confirmationMessage.innerText = "⚠️ Please fill out all fields.";
        confirmationMessage.style.color = "red";
        confirmationMessage.classList.remove("hidden");
        return;
    }

    let formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    submitButton.innerText = "Sending...";
    submitButton.disabled = true;

    confirmationMessage.innerText = "✅ Message sent successfully!";
    confirmationMessage.style.color = "green";
    confirmationMessage.classList.remove("hidden");

    fetch("https://formsubmit.co/ajax/oacanterov@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).catch(error => {
        console.error("Error:", error);
        confirmationMessage.innerText = "❌ Error sending message. Try again.";
        confirmationMessage.style.color = "red";
    });

    document.getElementById("contactForm").reset();

    setTimeout(() => {
        submitButton.innerText = "Send Message";
        submitButton.disabled = false;
        confirmationMessage.classList.add("hidden");
    }, 3000);
});
