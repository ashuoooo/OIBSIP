// JavaScript code for My Portfolio

// Event listener for navigation links to scroll to the corresponding section
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Event listener for the "Back to Top" button
const backToTopButton = document.querySelector('#back-to-top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Event listener to show the "Back to Top" button when scrolling down the page
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
