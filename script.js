document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const menu = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');
    const closeBtn = document.getElementById('close');

    if (menu && navbar && closeBtn) {
        menu.addEventListener('click', () => {
            navbar.classList.add('active');
            document.addEventListener('click', handleClickOutside);
        });

        closeBtn.addEventListener('click', () => {
            navbar.classList.remove('active');
            document.removeEventListener('click', handleClickOutside);
        });

        function handleClickOutside(event) {
            if (!navbar.contains(event.target) && !menu.contains(event.target)) {
                navbar.classList.remove('active');
                document.removeEventListener('click', handleClickOutside);
            }
        }
    } else {
        console.error('One or more hamburger menu elements are missing.');
    }

    // Sign-in modal functionality
    const signInBtn = document.getElementById('signInBtn');
    const modal = document.getElementById('sign-in-modal');
    const modalCloseBtn = document.querySelector('.sign-in-modal .close-btn');

    if (signInBtn && modal && modalCloseBtn) {
        signInBtn.addEventListener('click', (event) => {
            event.preventDefault();
            modal.style.display = 'flex';
        });

        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        console.error('Sign-in button or modal elements are missing.');
    }
    
    // GSAP animations
    gsap.from('.title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' });
    gsap.from('.description', { duration: 1, y: 100, opacity: 0, delay: 0.3, ease: 'power3.out' });
    gsap.from('.review', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'power3.out' });
    gsap.from('.benefit', { duration: 1, y: 50, opacity: 0, stagger: 0.3, ease: 'power3.out' });
    gsap.from('.btn', { duration: 1, y: 100, opacity: 0, delay: 0.6, ease: 'power3.out' });

    // Smooth scrolling for anchor links
    const headerHeight = document.querySelector('header').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });
});
