// Intersection Observer for Premium Scroll In Animations
const observerOptions = {
    threshold: 0.05
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply transition hooks securely
document.querySelectorAll('.bento-item, .hero-text, .glass-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
});

// Structural layout styles injected efficiently
const runtimeStyle = document.createElement('style');
runtimeStyle.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(runtimeStyle);

// Contact Submission Logic 
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('.btn');
        btn.innerHTML = "Proposal Sent! ✓";
        btn.style.background = "#22c55e";
        contactForm.reset();
    });
}
