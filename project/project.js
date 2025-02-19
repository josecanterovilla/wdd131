document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            localStorage.setItem("contactName", name);
            localStorage.setItem("contactEmail", email);
            localStorage.setItem("contactMessage", message);

            alert("Thank you for reaching out! We will get back to you soon.");
            form.reset();
        });
    }
});
