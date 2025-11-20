document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 2. MOBILE MENU
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if(menuToggle){
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // 3. REVIEWS SLIDER (Only runs if slider exists on page)
    const track = document.getElementById('slider-track');
    if (track) {
        const slides = document.querySelectorAll('.slide');
        let index = 0;

        function slideReview() {
            index++;
            if (index >= slides.length) {
                index = 0;
            }
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(slideReview, 3000); // 3 Seconds
    }
});