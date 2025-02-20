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



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let confirmationMessage = document.getElementById("confirmationMessage");

   
    if (name === "" || email === "" || phone === "" || message === "") {
        confirmationMessage.innerText = "Please fill out all fields.";
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

    
    fetch("https://formsubmit.co/ajax/oacanterov@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            confirmationMessage.innerText = "Message sent successfully!";
            confirmationMessage.style.color = "green";
            confirmationMessage.classList.remove("hidden");

            
            setTimeout(() => {
                document.getElementById("contactForm").reset();
                confirmationMessage.classList.add("hidden");
            }, 3000);
        } else {
            confirmationMessage.innerText = "Error sending message. Try again.";
            confirmationMessage.style.color = "red";
            confirmationMessage.classList.remove("hidden");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        confirmationMessage.innerText = "An error occurred. Please try again later.";
        confirmationMessage.style.color = "red";
        confirmationMessage.classList.remove("hidden");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
