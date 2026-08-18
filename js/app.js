/* ==========================================================================
   Abdullah Hossain - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {
  // Load modular HTML sections dynamically
  await loadSections();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Render All Dynamic Components from portfolioData
  renderHeroStats();
  renderPillars();
  renderExperience();
  renderEducation();
  renderServices();
  renderTechStack();
  renderProjects('All');
  renderTestimonials();
  renderFaqs();

  // Setup Event Listeners
  setupHeaderScroll();
  setupMobileNav();
  setupNavigationScrollSpy();
  setupProjectFilters();
  setupContactForm();
  setupModalEvents();
  setupPhotoSlider();
  setupThemeToggle();
  checkUrlPackageParam();

  // Animatic Polish Effects
  setupScrollReveal();
  setupCardTilt();
});

// Scroll Reveal Animations via IntersectionObserver
function setupScrollReveal() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    '.section-header, .glass-card, .stat-item, .experience-card, .service-card, .tech-card, .project-card, .contact-wrapper, .hero-content, .profile-card'
  );

  revealElements.forEach((el, idx) => {
    el.classList.add('reveal-on-scroll');
    el.style.transitionDelay = `${(idx % 4) * 0.08}s`;
    observer.observe(el);
  });
}

// Dynamic 3D Card Tilt on Hover
function setupCardTilt() {
  const cards = document.querySelectorAll('.glass-card, .profile-card, .project-card, .service-card, .tech-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}


// Load sections dynamically from sections/ directory
async function loadSections() {
  const sections = [
    { containerId: 'header-container', path: 'sections/header.html' },
    { containerId: 'hero-container', path: 'sections/hero.html' },
    { containerId: 'about-container', path: 'sections/about.html' },
    { containerId: 'experience-container', path: 'sections/experience.html' },
    { containerId: 'services-container', path: 'sections/services.html' },
    { containerId: 'gallery-container', path: 'sections/gallery.html' },
    { containerId: 'tech-container', path: 'sections/tech.html' },
    { containerId: 'projects-container', path: 'sections/projects.html' },
    { containerId: 'testimonials-container', path: 'sections/testimonials.html' },
    { containerId: 'faq-section-container', path: 'sections/faq.html' },
    { containerId: 'contact-container', path: 'sections/contact.html' },
    { containerId: 'footer-container', path: 'sections/footer.html' }
  ];

  await Promise.all(sections.map(async ({ containerId, path }) => {
    const el = document.getElementById(containerId);
    if (!el) return;
    try {
      const res = await fetch(path);
      if (res.ok) {
        el.innerHTML = await res.text();
      }
    } catch (err) {
      console.error(`Failed to load section ${path}:`, err);
    }
  }));
}


/* --------------------------------------------------------------------------
   1. Dynamic Rendering Functions
   -------------------------------------------------------------------------- */

// Hero Stats
function renderHeroStats() {
  const container = document.getElementById('stats-grid');
  if (!container || !portfolioData.profile.stats) return;

  container.innerHTML = portfolioData.profile.stats.map(stat => `
    <div class="stat-item">
      <div class="stat-value" data-value="${stat.value}">${stat.value}${stat.suffix}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

// 5 Core Delivery Pillars
function renderPillars() {
  const container = document.getElementById('pillars-grid');
  if (!container || !portfolioData.pillars) return;

  container.innerHTML = portfolioData.pillars.map(pillar => `
    <div class="glass-card pillar-card">
      <div class="pillar-icon-box">
        <i data-lucide="${pillar.icon}"></i>
      </div>
      <h3 class="pillar-title">${pillar.title}</h3>
      <p class="pillar-desc">${pillar.description}</p>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Work Experience Section
function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container || !portfolioData.experience) return;

  container.innerHTML = portfolioData.experience.map(item => `
    <div class="experience-card glass-card ${item.isCurrent ? 'current-card' : ''}">
      <div class="exp-card-header">
        <div>
          <h3 class="exp-role">${item.role}</h3>
          <div class="exp-company-info">
            <span class="exp-company"><i data-lucide="building-2"></i> ${item.company}</span>
            <span class="exp-type">${item.type}</span>
          </div>
        </div>
        <div class="exp-date-group">
          ${item.isCurrent ? '<span class="present-badge"><span class="present-dot"></span> Present</span>' : ''}
          <span class="exp-duration"><i data-lucide="calendar"></i> ${item.duration}</span>
        </div>
      </div>
      <p class="exp-desc">${item.description}</p>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Education Timeline (Removed per requirements)
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container || !portfolioData.education) return;
}

// Services Offered
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !portfolioData.services) return;

  container.innerHTML = portfolioData.services.map(service => `
    <div class="glass-card service-card">
      <div class="service-header">
        <div class="service-icon">
          <i data-lucide="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
      </div>
      <ul class="service-features">
        ${service.features.map(feat => `
          <li class="service-feature-item">
            <i data-lucide="check-circle-2"></i> ${feat}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Tech Stack Matrix
function renderTechStack() {
  const container = document.getElementById('tech-matrix-grid');
  if (!container || !portfolioData.techStack) return;

  container.innerHTML = portfolioData.techStack.map(cat => `
    <div class="tech-category-card">
      <h3 class="tech-category-title">
        <i data-lucide="code-2"></i> ${cat.category}
      </h3>
      <div class="tech-badges-wrapper">
        ${cat.skills.map(skill => `
          <div class="tech-badge">
            <i data-lucide="${skill.icon}"></i>
            <span>${skill.name}</span>
            <span class="tech-level">${skill.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Shipped Projects Showcase
function renderProjects(categoryFilter = 'All') {
  const container = document.getElementById('projects-grid');
  if (!container || !portfolioData.projects) return;

  const filteredProjects = categoryFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === categoryFilter);

  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card" data-project-id="${project.id}">
      <div class="project-image-box">
        <img src="${project.image}" alt="${project.title} Screenshot" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'">
        <span class="project-category-badge">${project.category}</span>
      </div>
      <div class="project-content">
        <span class="project-role-tag">${project.role}</span>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-impact">${project.impact}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="btn btn-primary btn-sm view-details-btn" onclick="openProjectModal('${project.id}')">
            View Details <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Client Testimonials (3D Animatic Coverflow Card Stack)
function renderTestimonials() {
  const container = document.getElementById('testimonial-3d-stage');
  const dotsContainer = document.getElementById('t-dots');
  const prevBtn = document.getElementById('t-prev-btn');
  const nextBtn = document.getElementById('t-next-btn');

  if (!container || !portfolioData.testimonials) return;

  const testimonials = portfolioData.testimonials;
  let activeIndex = 0;
  let autoplayTimer = null;

  container.innerHTML = testimonials.map((t, idx) => `
    <div class="testimonial-stack-card ${idx === 0 ? 'active' : idx === 1 ? 'next' : idx === testimonials.length - 1 ? 'prev' : ''}" data-index="${idx}">
      <div class="card-header-badge">
        <span class="recommend-tag"><i data-lucide="check-circle-2"></i> Endorsement</span>
        <div class="testimonial-stars">★★★★★</div>
      </div>
      <p class="t-quote-text">"${t.quote}"</p>
      <div class="t-author-row">
        <img src="${t.avatar}" alt="${t.client}" class="t-avatar-img" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'">
        <div>
          <div class="author-name">${t.client}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');

  if (dotsContainer) {
    dotsContainer.innerHTML = testimonials.map((_, idx) => `
      <span class="t-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();

  const cards = Array.from(container.children);
  const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

  function render3DStack(index) {
    activeIndex = index;
    if (activeIndex < 0) activeIndex = testimonials.length - 1;
    if (activeIndex >= testimonials.length) activeIndex = 0;

    const total = testimonials.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    cards.forEach((card, idx) => {
      card.classList.remove('active', 'prev', 'next');
      if (idx === activeIndex) {
        card.classList.add('active');
      } else if (idx === prevIndex) {
        card.classList.add('prev');
      } else if (idx === nextIndex) {
        card.classList.add('next');
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      render3DStack(activeIndex - 1);
      resetAutoplay();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      render3DStack(activeIndex + 1);
      resetAutoplay();
    };
  }

  dots.forEach(dot => {
    dot.onclick = (e) => {
      const idx = parseInt(e.target.getAttribute('data-index'), 10);
      render3DStack(idx);
      resetAutoplay();
    };
  });

  cards.forEach(card => {
    card.onclick = () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        render3DStack(idx);
        resetAutoplay();
      }
    };
  });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      render3DStack(activeIndex + 1);
    }, 5000);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

// FAQ Accordion
function renderFaqs() {
  const container = document.getElementById('faq-container');
  if (!container || !portfolioData.faqs) return;

  container.innerHTML = portfolioData.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${faq.question}</span>
        <i data-lucide="chevron-down" class="faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   2. Interactive Event Handlers
   -------------------------------------------------------------------------- */

// Header Background Scroll
function setupHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile Nav Toggle
function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// Navigation Active Section & Smooth Scroll Spy Manager (Top Header + Mobile Bottom Nav)
function setupNavigationScrollSpy() {
  const topNavLinks = document.querySelectorAll('.header .nav-link');
  const bottomNavItems = document.querySelectorAll('.mobile-nav-item');
  if (!topNavLinks.length && !bottomNavItems.length) return;

  // Serialized section list in page scroll order
  const sectionIds = ['hero', 'about', 'experience', 'services', 'gallery', 'tech', 'projects', 'testimonials', 'faq', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  // Click listener for mobile bottom nav items
  bottomNavItems.forEach(item => {
    item.addEventListener('click', () => {
      bottomNavItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Close top mobile menu if open
      const navLinks = document.getElementById('nav-links');
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  // ScrollSpy listener
  function onScrollSpy() {
    let currentSectionId = 'hero';
    const scrollPosition = window.scrollY + (window.innerHeight * 0.35);

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSectionId = section.getAttribute('id');
      }
    }

    // Special case for page bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 60) {
      currentSectionId = 'contact';
    }

    // Update Top Nav Links Active State
    topNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        topNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });

    // Map section IDs to bottom nav data-sections
    let mappedBottomSection = currentSectionId;
    if (['about'].includes(currentSectionId)) mappedBottomSection = 'hero';
    if (['gallery', 'tech'].includes(currentSectionId)) mappedBottomSection = 'services';
    if (['testimonials', 'faq'].includes(currentSectionId)) mappedBottomSection = 'projects';

    bottomNavItems.forEach(item => {
      const sec = item.getAttribute('data-section');
      if (sec === mappedBottomSection) {
        bottomNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScrollSpy, { passive: true });
  onScrollSpy();
}

// Category Filter Tabs
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const category = e.target.getAttribute('data-category');
      renderProjects(category);
    });
  });
}

// FAQ Accordion Toggle
function toggleFaq(button) {
  const item = button.parentElement;
  const isActive = item.classList.contains('active');

  // Close all items
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

  if (!isActive) {
    item.classList.add('active');
  }
}

// Open Project Details Modal
function openProjectModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-body');

  modalContent.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-category-badge" style="position:static; display:inline-block; margin-bottom:0.75rem;">${project.category}</span>
      <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.25rem;">${project.title}</h2>
      <p style="color: var(--accent-yellow); font-weight: 600;">${project.tagline}</p>
    </div>

    <div style="width: 100%; height: 300px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; border: 1px solid var(--border-subtle);">
      <img src="${project.image}" alt="${project.title}" style="width:100%; height:100%; object-fit:cover;">
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Project Overview</h4>
      <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${project.overview}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-primary);">Key Features & Architecture</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
        ${project.features.map(f => `
          <li style="display: flex; align-items: center; gap: 0.6rem; color: var(--text-secondary); font-size: 0.9rem;">
            <i data-lucide="check" style="color: var(--accent-yellow);"></i> ${f}
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  modalOverlay.classList.add('open');
  if (window.lucide) window.lucide.createIcons();
}

function setupModalEvents() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('open');
      }
    });
  }
}

// Contact Form Handler & Service Selector (Formspree Integration)
function setupContactForm() {
  const serviceBtns = document.querySelectorAll('.service-pill-btn');
  let selectedServices = [];

  const form = document.getElementById('lead-contact-form');
  const servicesHiddenInput = document.getElementById('form-services');
  const submitBtn = document.getElementById('submit-lead-btn');

  serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      const val = btn.getAttribute('data-value');
      if (selectedServices.includes(val)) {
        selectedServices = selectedServices.filter(s => s !== val);
      } else {
        selectedServices.push(val);
      }
      if (servicesHiddenInput) {
        servicesHiddenInput.value = selectedServices.length > 0 ? selectedServices.join(', ') : 'Not Specified';
      }
    });
  });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i data-lucide="loader"></i>';
        if (window.lucide) window.lucide.createIcons();
      }

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          showToast(`Thank you ${name}! Your message has been sent directly to my email.`);
          form.reset();
          serviceBtns.forEach(b => b.classList.remove('selected'));
          selectedServices = [];
          if (servicesHiddenInput) servicesHiddenInput.value = 'Not Specified';
        } else {
          showToast(`Oops! Something went wrong. Please try again.`);
        }
      } catch (err) {
        showToast(`Network error. Please check your connection.`);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Message <i data-lucide="send"></i>';
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');

  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

// Animatic 3D Coverflow Gallery Slider Logic
function setupPhotoSlider() {
  const container = document.getElementById('gallery-slider');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const dotsContainer = document.getElementById('gallery-dots');

  if (!container || !prevBtn || !nextBtn || !dotsContainer) return;

  const cards = Array.from(container.querySelectorAll('.gallery-slide-card'));
  const dots = Array.from(dotsContainer.children);
  let activeIndex = 0;
  let autoplayTimer = null;

  function render3DStack(index) {
    activeIndex = index;
    if (activeIndex < 0) activeIndex = cards.length - 1;
    if (activeIndex >= cards.length) activeIndex = 0;

    const total = cards.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    cards.forEach((card, idx) => {
      card.classList.remove('active', 'prev', 'next');
      if (idx === activeIndex) {
        card.classList.add('active');
      } else if (idx === prevIndex) {
        card.classList.add('prev');
      } else if (idx === nextIndex) {
        card.classList.add('next');
      }
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    render3DStack(activeIndex - 1);
    resetAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    render3DStack(activeIndex + 1);
    resetAutoplay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-index'), 10);
      render3DStack(targetIndex);
      resetAutoplay();
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      if (idx !== activeIndex) {
        render3DStack(idx);
        resetAutoplay();
      }
    });
  });

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      render3DStack(activeIndex + 1);
    }, 4500);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  startAutoplay();
}

// Light & Dark Theme Toggle Functionality
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme');

  // Apply saved theme preference on load
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  if (!themeToggleBtn) return;

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
}

// Auto-select package from URL parameter & scroll to Contact Section
function checkUrlPackageParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const pkg = urlParams.get('package');

  if (pkg) {
    const contactSection = document.getElementById('contact');
    const formDetails = document.getElementById('form-details');
    const formServices = document.getElementById('form-services');
    const formContainer = document.querySelector('.contact-form');

    if (formDetails) {
      formDetails.value = `Hi Abdullah,\n\nI am interested in ordering the package:\n📦 ${pkg}\n\nPlease share availability and next steps to get started.\n\nThanks!`;
    }

    if (formServices) {
      formServices.value = `Package: ${pkg}`;
    }

    if (formContainer) {
      let badge = document.getElementById('selected-pkg-badge');
      if (!badge) {
        badge = document.createElement('div');
        badge.id = 'selected-pkg-badge';
        badge.style.cssText = 'background: rgba(255, 199, 0, 0.12); border: 1px solid var(--accent-yellow); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 18px; color: var(--accent-yellow); font-size: 0.9rem; font-weight: 700; display: flex; align-items: center; justify-content: space-between;';
        formContainer.insertBefore(badge, formContainer.firstChild);
      }
      badge.innerHTML = `<span><i data-lucide="check-circle-2" style="vertical-align:middle; margin-right:6px;"></i> Selected Package: <strong>${pkg}</strong></span> <a href="packages.html" style="font-size:0.775rem; color:var(--text-secondary); text-decoration:underline;">Change Package</a>`;
      if (window.lucide) window.lucide.createIcons();
    }

    setTimeout(() => {
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }
}

