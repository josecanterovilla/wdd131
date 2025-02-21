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

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();
        let submitButton = document.querySelector("button[type='submit']");

        if (!name || !email || !phone || !message) {
            showPopup("⚠️ Please fill out all fields.", "red");
            return;
        }

        submitButton.innerText = "Sending...";
        submitButton.disabled = true;

        let formData = { name, email, phone, message };

        try {
            let response = await fetch("https://formsubmit.co/ajax/oacanterov@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error("Failed to send message.");

            document.getElementById("contactForm").reset();
            showPopup("✅ Message sent successfully!", "green");

        } catch (error) {
            console.error("Error:", error);
            showPopup("❌ Error sending message. Please try again.", "red");
        }

        setTimeout(() => {
            submitButton.innerText = "Send Message";
            submitButton.disabled = false;
        }, 3000);
    });

    function showPopup(message, color) {
        let popup = document.createElement("div");
        popup.innerText = message;
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.padding = "15px 20px";
        popup.style.backgroundColor = color;
        popup.style.color = "white";
        popup.style.fontSize = "16px";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        popup.style.zIndex = "1000";
        popup.style.textAlign = "center";

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);
    }
});

