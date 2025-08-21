// Enhanced Portfolio JavaScript with Professional Polish
// Theme Toggle Functionality
const themeBtn = document.getElementById('themeBtn');
const body = document.body;
const themeIcon = themeBtn.querySelector('i');

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
body.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode';
updateThemeIcon();

themeBtn.addEventListener('click', () => {
    // Add click feedback
    themeBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeBtn.style.transform = '';
    }, 150);
    
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Enhanced theme change animation
    body.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
        body.style.transition = '';
    }, 400);
    
    // Trigger theme change event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: currentTheme } }));
});

function updateThemeIcon() {
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
        themeIcon.style.color = '#FF9800';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeIcon.style.color = 'white';
    }
}

// Mobile Navigation Toggle with Enhanced UX
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger lines
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Enhanced Smooth Scrolling with Easing
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        const startPosition = window.pageYOffset;
        const distance = offsetTop - startPosition;
        const duration = 1000;
        let start = null;
        
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }
        
        requestAnimationFrame(animation);
    }
}

// Add click event listeners to all navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Add click event listeners to hero buttons
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.onclick) return; // Skip if already has onclick
    
    btn.addEventListener('click', (e) => {
        const targetId = btn.getAttribute('data-target');
        if (targetId) {
            e.preventDefault();
            scrollToSection(targetId);
        }
    });
});

// Enhanced Skill Bars Animation with Staggered Effect
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        const progressBar = item.querySelector('.skill-progress');
        const skillLevel = item.getAttribute('data-level');
        
        if (progressBar && skillLevel) {
            // Staggered animation
            setTimeout(() => {
                progressBar.style.width = skillLevel + '%';
                
                // Add completion animation
                progressBar.style.animation = 'skillComplete 0.6s ease-out';
                setTimeout(() => {
                    progressBar.style.animation = '';
                }, 600);
            }, index * 200);
        }
    });
}

// Enhanced Intersection Observer with Better Performance
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add staggered animation classes
            if (entry.target.classList.contains('skills-grid')) {
                entry.target.querySelectorAll('.skill-category').forEach((category, index) => {
                    setTimeout(() => {
                        category.classList.add('fade-in-up');
                    }, index * 200);
                });
                animateSkillBars();
            } else if (entry.target.classList.contains('projects-grid')) {
                entry.target.querySelectorAll('.project-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-in-up');
                    }, index * 150);
                });
            } else if (entry.target.classList.contains('stats')) {
                entry.target.querySelectorAll('.stat').forEach((stat, index) => {
                    setTimeout(() => {
                        stat.classList.add('fade-in-up');
                    }, index * 100);
                });
            } else {
                entry.target.classList.add('fade-in-up');
            }
            
            // Animate skill bars when skills section is visible
            if (entry.target.id === 'skills') {
                // Animation already handled above
            }
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced Parallax Effect for Floating Pokéballs
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const pokeballs = document.querySelectorAll('.pokeball');
    
    pokeballs.forEach((pokeball, index) => {
        const speed = 0.3 + (index * 0.15);
        const yPos = -(scrolled * speed);
        const rotation = scrolled * 0.05;
        pokeball.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
    });
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate, { passive: true });

// Enhanced Typing Effect for Hero Title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '3px solid var(--primary-color)';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 120);
        }, 1200);
    }
});

// Enhanced Form Submission Handler with Better UX
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission with delay
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // In a real application, you would send this data to your backend
            console.log('Form submitted:', { name, email, subject, message });
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Enhanced styles with better positioning and animations
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 24px;
        background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--error-color)' : 'var(--info-color)'};
        color: white;
        padding: 18px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in with spring effect
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Remove after 6 seconds with smooth exit
    setTimeout(() => {
        notification.style.transform = 'translateX(400px) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 6000);
}

// Enhanced Particle Effect for Hero Section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Remove existing particles
    const existingParticles = hero.querySelectorAll('.particle');
    existingParticles.forEach(particle => particle.remove());
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${4 + Math.random() * 3}px;
            height: ${4 + Math.random() * 3}px;
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 50%;
            opacity: 0.4;
            pointer-events: none;
            animation: particle-float ${4 + Math.random() * 3}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
            filter: blur(0.5px);
        `;
        hero.appendChild(particle);
    }
}

// Enhanced particle animation styles
const particleStyles = document.createElement('style');
particleStyles.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0) rotate(0deg) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 0.4;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        90% {
            opacity: 0.4;
            transform: translateY(-80vh) rotate(180deg) scale(1);
        }
        100% {
            transform: translateY(-100vh) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes skillComplete {
        0% { transform: scaleX(0.8); }
        50% { transform: scaleX(1.1); }
        100% { transform: scaleX(1); }
    }
`;
document.head.appendChild(particleStyles);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-16px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Enhanced click effect to buttons with better ripple
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create enhanced ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 800);
    });
});

// Enhanced ripple animation styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyles);

// Enhanced scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--accent-color));
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(progressBar);
    
    let ticking = false;
    function updateProgress() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
        ticking = false;
    }
    
    function requestProgressUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
}

// Initialize scroll progress
window.addEventListener('load', createScrollProgress);

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 200);
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Reset hamburger animation
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
    
    if (e.key === 't' && e.ctrlKey) {
        e.preventDefault();
        themeBtn.click();
    }
    
    // Navigation with arrow keys
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const nextSection = getNextSection(currentSection);
        if (nextSection) scrollToSection(nextSection.id);
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const prevSection = getPreviousSection(currentSection);
        if (prevSection) scrollToSection(prevSection.id);
    }
});

// Helper functions for keyboard navigation
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return section;
        }
    }
    return sections[0];
}

function getNextSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex + 1] || null;
}

function getPreviousSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex - 1] || null;
}

// Enhanced accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add ARIA labels and roles
    themeBtn.setAttribute('aria-label', 'Toggle dark mode');
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Add focus indicators and keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '3px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
    
    // Add skip to content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Performance optimization: Enhanced debounce for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply enhanced debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

// Enhanced Easter egg: Konami code with better effects
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Enhanced Konami code activation!
        showNotification('🎉 You found the secret! Pokémon Master! 🎉', 'success');
        
        // Add enhanced fun effects
        document.body.style.animation = 'rainbow 3s infinite';
        
        // Add particle explosion
        createKonamiParticles();
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
        
        konamiCode = [];
    }
});

// Enhanced Konami particle effect
function createKonamiParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${8 + Math.random() * 12}px;
            height: ${8 + Math.random() * 12}px;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            animation: konami-explosion 2s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

// Enhanced rainbow animation for Easter egg
const rainbowStyles = document.createElement('style');
rainbowStyles.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg) brightness(1.2); }
        25% { filter: hue-rotate(90deg) brightness(1.1); }
        50% { filter: hue-rotate(180deg) brightness(1.2); }
        75% { filter: hue-rotate(270deg) brightness(1.1); }
        100% { filter: hue-rotate(360deg) brightness(1.2); }
    }
    
    @keyframes konami-explosion {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1) translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rainbowStyles);

// Enhanced console message
console.log('🎮 Enhanced Pokémon Portfolio loaded successfully! Gotta catch \'em all! 🌿✨');
console.log('💡 Pro tip: Try the Konami code (↑↑↓↓←→←→BA) for a surprise!');
console.log('🎨 Theme toggle available in the top right corner');
console.log('📱 Fully responsive and accessible design');
