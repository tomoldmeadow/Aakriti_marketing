// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
