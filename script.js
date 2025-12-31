// ===================================
// MODERN PROFESSIONAL INTERACTIONS
// Gwaliya International Exporter
// Scroll Animations, Certificate Modal, Mobile Menu
// ===================================

// ===================================
// SCROLL REVEAL ANIMATIONS
// ===================================
function initScrollReveal() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// ===================================
// CERTIFICATE MODAL FUNCTIONS
// ===================================
function openCertificateModal(imageSrc) {
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalImage');

  if (modal && modalImage) {
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');

  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertificateModal();
  }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
function initNavScroll() {
  const nav = document.querySelector('nav, .navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===================================
// DYNAMIC TYPING EFFECT (Optional)
// ===================================
class DynamicTyping {
  constructor(element, phrases, options = {}) {
    this.element = element;
    this.phrases = phrases;
    this.currentPhraseIndex = 0;
    this.currentText = '';
    this.isDeleting = false;
    this.typingSpeed = options.typingSpeed || 100;
    this.deletingSpeed = options.deletingSpeed || 50;
    this.pauseDuration = options.pauseDuration || 2000;

    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isDeleting) {
      this.currentText = currentPhrase.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentPhrase.substring(0, this.currentText.length + 1);
    }

    this.element.textContent = this.currentText;

    let speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentText === currentPhrase) {
      speed = this.pauseDuration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      speed = 500;
    }

    setTimeout(() => this.type(), speed);
  }
}

// ===================================
// INITIALIZE ALL FEATURES
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize scroll reveal animations
  initScrollReveal();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize navigation scroll effect
  initNavScroll();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize dynamic typing effect if element exists
  const dynamicTextElement = document.querySelector('.dynamic-text');
  if (dynamicTextElement) {
    const phrases = [
      'Premium Agricultural Exports 🌾',
      'Global Trade Excellence 🌍',
      'Quality You Can Trust ✨',
      'Connecting Farms to Markets 🚜',
      'Fresh from India to the World 🇮🇳'
    ];

    new DynamicTyping(dynamicTextElement, phrases, {
      typingSpeed: 80,
      deletingSpeed: 40,
      pauseDuration: 2500
    });
  }

  // Add page load animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);

  console.log('✨ Gwaliya International Exporter website loaded successfully!');
});

// Make modal functions globally available
window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;
