// ============================================
// PORTFOLIO DATA ANALYST - INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SMOOTH SCROLL NAVIGATION
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link, .btn-contact');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(15, 27, 45, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // FADE-IN ANIMATIONS ON SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ============================================
    // CARD HOVER EFFECTS (Enhanced)
    // ============================================
    const hoverCards = document.querySelectorAll('.stat-card, .project-card, .skill-category, .pillar-card, .experience-card');
    
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
    // ============================================
    // SKILL TAGS INTERACTION
    // ============================================
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ============================================
    // SCROLL TO TOP BUTTON (Auto-create)
    // ============================================
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Retour en haut');
    document.body.appendChild(scrollToTopBtn);
    
    // Add styles dynamically
    const scrollToTopStyle = document.createElement('style');
    scrollToTopStyle.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #C89B3C, #D4A853);
            color: white;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(200, 155, 60, 0.4);
            z-index: 999;
            font-size: 1.2rem;
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(200, 155, 60, 0.5);
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(scrollToTopStyle);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // TYPING EFFECT FOR HERO ROLE (Optional Enhancement)
    // ============================================
    const heroRole = document.querySelector('.hero-role');
    if (heroRole) {
        const roles = ['Data Analyst · BI Analyst', 'Python Expert · SQL Master', 'Data Visualization Specialist'];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let originalText = heroRole.textContent;
        
        // Uncomment to enable typing effect
        /*
        function typeRole() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                heroRole.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroRole.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentRole.length) {
                setTimeout(() => { isDeleting = true; }, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
            
            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(typeRole, typingSpeed);
        }
        
        setTimeout(typeRole, 1000);
        */
    }
    
    // ============================================
    // NUMBER COUNTER ANIMATION FOR STATS
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = element.textContent;
        const isPlus = target.includes('+');
        const isPercent = target.includes('%');
        const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 1500;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(counter);
            }
            
            let displayValue = Math.floor(current).toString();
            if (isPlus) displayValue += '+';
            if (isPercent) displayValue += '%';
            
            element.textContent = displayValue;
        }, stepTime);
    }
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ============================================
    // CONSOLE MESSAGE (Personal Touch)
    // ============================================
    console.log(
        '%c👋 Bonjour ! ',
        'background: #C89B3C; color: #0F1B2D; font-size: 20px; font-weight: bold; padding: 10px;'
    );
    console.log(
        '%cVous êtes curieux, j\'aime ça ! 🔍\nN\'hésitez pas à me contacter pour discuter de vos projets data.',
        'color: #374151; font-size: 14px; line-height: 1.5;'
    );
    console.log(
        '%c📧 gilleangoran@gmail.com | 📱 +225 07 49 34 94 03',
        'color: #C89B3C; font-size: 12px; font-weight: bold;'
    );
    
    // ============================================
    // PARALLAX EFFECT ON HERO SECTION (Subtle)
    // ============================================
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroSection.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
    
    // ============================================
    // PERFORMANCE MONITORING
    // ============================================
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`⚡ Page chargée en ${pageLoadTime}ms`);
            }, 0);
        });
    }
    
});

// ============================================
// VIDEO MODAL FUNCTIONS
// ============================================
function openVideoModal(videoUrl) {
    // Close other modals first
    closePDFModal();
    closeWebScrapingVideo();
    closeSalesDashboardVideo();
    closeHRSystemImage();
    
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    iframe.src = videoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    modal.style.display = 'none';
    iframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ============================================
// PDF MODAL FUNCTIONS
// ============================================
function openPDFModal(pdfUrl) {
    // Close other modals first
    closeVideoModal();
    closeWebScrapingVideo();
    closeSalesDashboardVideo();
    closeHRSystemImage();
    
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');
    
    iframe.src = pdfUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePDFModal() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfFrame');
    
    modal.style.display = 'none';
    iframe.src = ''; // Clear PDF
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ============================================
// WEB SCRAPING VIDEO MODAL FUNCTIONS
// ============================================
function openWebScrapingVideo() {
    // Close other modals first
    closeVideoModal();
    closePDFModal();
    closeSalesDashboardVideo();
    closeHRSystemImage();
    
    const modal = document.getElementById('videoModalWebScraping');
    const iframe = document.getElementById('videoFrameWebScraping');
    
    // Convert Google Drive link to embeddable format
    const videoUrl = 'https://drive.google.com/file/d/17HzRi7qzQyVdODD70UI8YdASc3AJaOsv/preview';
    
    iframe.src = videoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeWebScrapingVideo() {
    const modal = document.getElementById('videoModalWebScraping');
    const iframe = document.getElementById('videoFrameWebScraping');
    
    modal.style.display = 'none';
    iframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ============================================
// SALES DASHBOARD VIDEO MODAL FUNCTIONS
// ============================================
function openSalesDashboardVideo() {
    // Close other modals first
    closeVideoModal();
    closePDFModal();
    closeWebScrapingVideo();
    closeHRSystemImage();
    
    const modal = document.getElementById('videoModalSalesDashboard');
    const iframe = document.getElementById('videoFrameSalesDashboard');
    
    // Convert Google Drive link to embeddable format
    const videoUrl = 'https://drive.google.com/file/d/14uhFYxOdSBmlpQ7yk8mfRBglSM1FSm-e/preview';
    
    iframe.src = videoUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSalesDashboardVideo() {
    const modal = document.getElementById('videoModalSalesDashboard');
    const iframe = document.getElementById('videoFrameSalesDashboard');
    
    modal.style.display = 'none';
    iframe.src = ''; // Stop video playback
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ============================================
// HR SYSTEM IMAGE MODAL FUNCTIONS
// ============================================
function openHRSystemImage() {
    // Close other modals first
    closeVideoModal();
    closePDFModal();
    closeWebScrapingVideo();
    closeSalesDashboardVideo();
    
    const modal = document.getElementById('imageModalHRSystem');
    const iframe = document.getElementById('imageFrameHRSystem');
    
    // Convert Google Drive link to embeddable format
    const imageUrl = 'https://drive.google.com/file/d/1egPcKCUAo73KzAaWhzzbGq39To9XgZuT/preview';
    
    iframe.src = imageUrl;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeHRSystemImage() {
    const modal = document.getElementById('imageModalHRSystem');
    const iframe = document.getElementById('imageFrameHRSystem');
    
    modal.style.display = 'none';
    iframe.src = ''; // Clear image
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// ============================================
// MODAL EVENT HANDLERS (Click outside & Escape key)
// ============================================
// Close modal when clicking outside the video/PDF
document.addEventListener('click', function(e) {
    const videoModal = document.getElementById('videoModal');
    const pdfModal = document.getElementById('pdfModal');
    const webScrapingModal = document.getElementById('videoModalWebScraping');
    const salesDashboardModal = document.getElementById('videoModalSalesDashboard');
    const hrSystemModal = document.getElementById('imageModalHRSystem');
    
    if (e.target === videoModal) {
        closeVideoModal();
    }
    if (e.target === pdfModal) {
        closePDFModal();
    }
    if (e.target === webScrapingModal) {
        closeWebScrapingVideo();
    }
    if (e.target === salesDashboardModal) {
        closeSalesDashboardVideo();
    }
    if (e.target === hrSystemModal) {
        closeHRSystemImage();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
        closePDFModal();
        closeWebScrapingVideo();
        closeSalesDashboardVideo();
        closeHRSystemImage();
    }
});

// ============================================
// EXTERNAL LINK HANDLER (Open in new tab)
// ============================================
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname) {
        e.target.setAttribute('target', '_blank');
        e.target.setAttribute('rel', 'noopener noreferrer');
    }
});

// ============================================
// PRELOADER (Optional - uncomment if needed)
// ============================================
/*
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 500);
});
*/