// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) 
    yearElement.textContent = new Date().getFullYear();


// Close the mobile navbar after clicking a navigation link
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            window.innerWidth < 992 &&
            navbarMenu.classList.contains("show")
        ) {
            bootstrap.Collapse
                .getOrCreateInstance(navbarMenu)
                .hide();
        }
    });
});


 // Contact form confirmation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been received.";

        formMessage.style.color = "#7565c9";
        formMessage.style.marginTop = "15px";

        formMessage.style.display = "block";
        contactForm.reset();
    });
}
