
// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
    });
});

// INTERSECTION OBSERVER - FADE UP
const fadeEls = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
}, { threshold: 0.12 });
fadeEls.forEach(el => io.observe(el));

// ACTIVE NAV LINK
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}` || (current === '' && a.getAttribute('href') === 'index.html'));
    });
});

// CONTACT FORM
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const msg = document.getElementById('form-msg');
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();
//     if (!name || !email || !message) {
//         msg.style.display = 'block';
//         msg.style.background = '#FFF3E0';
//         msg.style.color = '#E65100';
//         msg.textContent = 'Please fill in all required fields.';
//         return;
//     }
//     const btn = this.querySelector('button[type=submit]');
//     btn.textContent = 'Sending...';
//     btn.disabled = true;
//     setTimeout(() => {
//         msg.style.display = 'block';
//         msg.style.background = '#E8F5E9';
//         msg.style.color = '#2E7D32';
//         msg.textContent = '✓ Message sent successfully! We\'ll be in touch within 24 hours.';
//         this.reset();
//         btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> Send Message';
//         btn.disabled = false;
//     }, 1500);
// });

// HERO COUNTER ANIMATION
function animateCount(el, target, suffix = '') {
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.hero-stat strong');
            animateCount(stats[0], 16, '+');
            animateCount(stats[1], 500, '+');
            animateCount(stats[2], 200, '+');
            animateCount(stats[3], 98, '%');
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);
// CATEGORY TABS
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-tab');

            // Remove active classes and forcefully hide contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            // Apply active class and forcefully show target
            this.classList.add('active');
            const activeTab = document.getElementById('tab-' + targetId);
            if (activeTab) {
                activeTab.classList.add('active');
                activeTab.style.display = 'grid';

                // Force visibility instantly to bypass the scroll-observer opacity 0 issue
                setTimeout(() => {
                    activeTab.querySelectorAll('.fade-up').forEach(el => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        el.classList.add('visible');
                    });
                }, 10);
            }
        });
    });

    // On page load, immediately force the first active tab contents to appear
    window.addEventListener('DOMContentLoaded', () => {
        const firstActive = document.querySelector('.tab-content.active');
        if (firstActive) {
            firstActive.style.display = 'grid';
            firstActive.querySelectorAll('.fade-up').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.classList.add('visible');
            });
        }
    });
}
