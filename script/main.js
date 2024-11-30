// Add scroll-based animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});
