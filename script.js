// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form submission alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real form submission
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset(); // Optionally reset form fields
});
