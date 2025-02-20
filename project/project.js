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



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name && email && phone && message) {
   
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
                document.getElementById("confirmationMessage").classList.remove("hidden");
                document.getElementById("confirmationMessage").innerText = "Message sent successfully!";
                document.getElementById("contactForm").reset();
            } else {
                alert("Error sending message. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    } else {
        alert("Please fill out all fields.");
    }
});
