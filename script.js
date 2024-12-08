// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="index.html#"], a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1]; // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Navigate to the target section if it's on another page
            window.location.href = this.getAttribute('href');
        }
    });
});

// Portfolio Button Action
document.getElementById('view-portfolio-btn').addEventListener('click', () => {
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for reaching out!');
        this.reset();
    } else {
        alert('Please complete all fields.');
    }
});
