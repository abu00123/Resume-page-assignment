// script.js
// Add an event listener to the menu toggle button to show/hide navigation links
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Toggle the active class to show/hide links
});


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.about-section, .skills-section, .education-section, .experience-section, .projects-section, .contact-section'); // Select your sections

    const options = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class when the section is in view
            } else {
                entry.target.classList.remove('visible'); // Optionally remove the class when not in view
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});


