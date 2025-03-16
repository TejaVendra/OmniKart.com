// Toggle Button for Responsive Navigation
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Intro Animation
document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.transition = 'opacity 2s';
        intro.style.opacity = '1';
    }, 500);

    // Animate quotes one by one
    const quotes = document.querySelectorAll('.quotes p');
    quotes.forEach((quote, index) => {
        setTimeout(() => {
            quote.style.opacity = '1';
            quote.style.transform = 'translateX(0)';
        }, index * 500); // Staggered animation
    });
});