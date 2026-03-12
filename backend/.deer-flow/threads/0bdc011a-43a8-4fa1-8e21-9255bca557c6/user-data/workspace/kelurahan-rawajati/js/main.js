/* ========================================
   KELURAHAN RAWAJATI - MAIN JAVASCRIPT
   ======================================== */

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animated Counter Function
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current).toLocaleString('id-ID');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString('id-ID');
        }
    };
    
    updateCounter();
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number, .statistik-number');
            counters.forEach(counter => {
                animateCounter(counter);
            });
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Observe hero stats and statistik section
const heroStats = document.querySelector('.hero-stats');
const statistikSection = document.querySelector('.statistik-section');

if (heroStats) {
    counterObserver.observe(heroStats);
}

if (statistikSection) {
    counterObserver.observe(statistikSection);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Chatbot Toggle Function (Global)
function openChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow) {
        chatbotWindow.classList.add('active');
    }
}

function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow) {
        chatbotWindow.classList.toggle('active');
    }
}

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.berita-card, .service-card, .keunggulan-card, .statistik-card');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current || 
            link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console Branding
console.log('%cKELURAHAN RAWAJATI', 'font-size: 24px; font-weight: 800; color: #E30613;');
console.log('%cWebsite Resmi - Kecamatan Pancoran, Jakarta Selatan', 'font-size: 12px; color: #666;');
console.log('%cCreated by Deerflow - https://deerflow.tech', 'font-size: 12px; color: #00A651;');

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTop');

if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('active');
        } else {
            scrollBtn.classList.remove('active');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
