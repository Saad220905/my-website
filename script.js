document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my futuristic portfolio website!');
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.8)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});