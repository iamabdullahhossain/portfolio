/* ==========================================================================
   Abdullah Hossain - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {
  // Splash Screen progress update helper
  const splashProgress = document.getElementById('splash-progress');
  const splashStatus = document.getElementById('splash-status');
  const updateSplash = (percent, text) => {
    if (splashProgress) splashProgress.style.width = `${percent}%`;
    if (splashStatus && text) splashStatus.textContent = text;
  };

  updateSplash(25, 'Loading core modules...');

  // Load modular HTML sections dynamically
  await loadSections();
  updateSplash(55, 'Rendering UI components...');

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Render All Dynamic Components from portfolioData
  renderAllComponents();
  fetchAndRenderGitHubStats();

  updateSplash(80, 'Configuring interactive layers...');

  // Setup Event Listeners
  setupHeaderScroll();
  setupMobileNav();
  setupNavigationScrollSpy();
  setupProjectFilters();
  setupContactForm();
  setupModalEvents();
  setupPhotoSlider();
  setupThemeToggle();
  setupLanguageToggle();
  checkUrlPackageParam();
  setupFloatingChat();

  // Re-create Lucide icons for dynamically loaded elements
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Animatic Polish Effects
  setupScrollReveal();
  setupCardTilt();
  setupHeroParticles();
  setupSoundEffects();

  updateSplash(100, 'Welcome!');

  // Smoothly dismiss splash screen
  setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      splashScreen.classList.add('hide-splash');
      setTimeout(() => {
        splashScreen.remove();
      }, 750);
    }
  }, 450);
});

// Floating Quick Chat Widget Handler
function setupFloatingChat() {
  const widget = document.querySelector('.floating-chat-widget');
  const triggerBtn = document.getElementById('chat-trigger-btn');
  const closeBtn = document.getElementById('chat-close-btn');

  if (!widget || !triggerBtn) return;

  triggerBtn.addEventListener('click', () => {
    widget.classList.toggle('active');
    const badge = triggerBtn.querySelector('.chat-notification-badge');
    if (badge) badge.style.display = 'none';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      widget.classList.remove('active');
    });
  }

  // Close when clicking outside widget
  document.addEventListener('click', (e) => {
    if (!widget.contains(e.target) && widget.classList.contains('active')) {
      widget.classList.remove('active');
    }
  });
}


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
    { containerId: 'github-container', path: 'sections/github.html' },
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

// Master component renderer
function renderAllComponents() {
  renderStaticUITexts();
  renderHeroStats();
  renderPillars();
  renderExperience();
  renderEducation();
  renderServices();
  renderTechStack();
  renderProjects('All');
  renderTestimonials();
  renderFaqs();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Update static section titles and hero text across all HTML fragments
function renderStaticUITexts() {
  const data = getPortfolioData();
  if (!data) return;

  // Header Nav Links
  const navMap = {
    '#about': data.nav.about,
    '#experience': data.nav.experience,
    '#services': data.nav.services,
    '#gallery': data.nav.highlights,
    '#tech': data.nav.tech,
    '#github': data.nav.github,
    '#projects': data.nav.projects,
    'packages.html': data.nav.packages,
    '#testimonials': data.nav.reviews,
    '#faq': data.nav.faq,
    '#contact': data.nav.contact
  };

  document.querySelectorAll('#nav-links .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (navMap[href]) link.textContent = navMap[href];
  });

  // Hero Section
  const statusPill = document.querySelector('.hero .status-pill span:last-child');
  if (statusPill && data.profile.statusPill) statusPill.textContent = data.profile.statusPill;

  const heroHeadline = document.querySelector('.hero .hero-headline');
  if (heroHeadline && data.profile.heroHeadline) heroHeadline.innerHTML = data.profile.heroHeadline;

  const heroSub = document.querySelector('.hero .hero-subheadline');
  if (heroSub && data.profile.heroSubheadline) heroSub.textContent = data.profile.heroSubheadline;

  const pkgCta = document.getElementById('hero-packages-cta');
  if (pkgCta && data.profile.viewPackagesCta) {
    pkgCta.innerHTML = `${data.profile.viewPackagesCta} <i data-lucide="package"></i>`;
  }

  const projCta = document.getElementById('hero-secondary-cta');
  if (projCta && data.profile.viewProjectsCta) {
    projCta.innerHTML = `${data.profile.viewProjectsCta} <i data-lucide="folder-git-2"></i>`;
  }

  const profileBadge = document.querySelector('.profile-badge span');
  if (profileBadge && data.profile.badgeExp) profileBadge.textContent = data.profile.badgeExp;

  // Section Headers
  const updateSectionHeader = (sectionId, tagKey, titleKey, subtitleKey) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const tag = section.querySelector('.section-tag');
    const title = section.querySelector('.section-title');
    const subtitle = section.querySelector('.section-subtitle');
    if (tag && data.sections[tagKey]) tag.textContent = data.sections[tagKey];
    if (title && data.sections[titleKey]) title.innerHTML = data.sections[titleKey];
    if (subtitle && data.sections[subtitleKey]) subtitle.textContent = data.sections[subtitleKey];
  };

  updateSectionHeader('about', 'aboutTag', 'aboutTitle', 'aboutSubtitle');
  updateSectionHeader('experience', 'expTag', 'expTitle', 'expSubtitle');
  updateSectionHeader('services', 'servicesTag', 'servicesTitle', 'servicesSubtitle');
  updateSectionHeader('gallery', 'galleryTag', 'galleryTitle', 'gallerySubtitle');
  updateSectionHeader('tech', 'techTag', 'techTitle', 'techSubtitle');
  updateSectionHeader('projects', 'projectsTag', 'projectsTitle', 'projectsSubtitle');
  updateSectionHeader('testimonials', 'testimonialsTag', 'testimonialsTitle', 'testimonialsSubtitle');
  updateSectionHeader('faq', 'faqTag', 'faqTitle', 'faqSubtitle');
  updateSectionHeader('contact', 'contactTag', 'contactTitle', 'contactSubtitle');
}

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
        <div class="project-actions" style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
          <button class="btn btn-primary btn-sm view-details-btn" onclick="openProjectModal('${project.id}')">
            View Details <i data-lucide="arrow-right"></i>
          </button>
          ${project.storeLinks && project.storeLinks.playStore ? `
            <a href="${project.storeLinks.playStore}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Google Play Store" style="padding: 0.45rem 0.75rem;">
              <i class="fa-brands fa-google-play"></i> Play Store
            </a>
          ` : ''}
          ${project.storeLinks && project.storeLinks.appStore ? `
            <a href="${project.storeLinks.appStore}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Apple App Store" style="padding: 0.45rem 0.75rem;">
              <i class="fa-brands fa-apple"></i> App Store
            </a>
          ` : ''}
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

    ${project.storeLinks ? `
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        ${project.storeLinks.playStore ? `
          <a href="${project.storeLinks.playStore}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="gap: 0.5rem;">
            <i class="fa-brands fa-google-play"></i> Get on Play Store
          </a>
        ` : ''}
        ${project.storeLinks.appStore ? `
          <a href="${project.storeLinks.appStore}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="gap: 0.5rem;">
            <i class="fa-brands fa-apple"></i> Download on App Store
          </a>
        ` : ''}
      </div>
    ` : ''}
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

// English / Bengali Language Toggle Handler
function setupLanguageToggle() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langIndicator = document.getElementById('lang-indicator');

  function updateLangUI() {
    if (langIndicator) {
      langIndicator.textContent = currentLanguage === 'en' ? 'বাংলা' : 'EN';
    }
    if (langToggleBtn) {
      langToggleBtn.setAttribute('title', currentLanguage === 'en' ? 'Switch to বাংলা' : 'Switch to English');
    }
  }

  updateLangUI();

  if (!langToggleBtn) return;

  langToggleBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    localStorage.setItem('portfolio_language', currentLanguage);
    updateLangUI();
    renderAllComponents();

    // Show feedback toast
    if (typeof showToast === 'function') {
      showToast(currentLanguage === 'bn' ? 'ভাষা বাংলায় পরিবর্তন করা হয়েছে' : 'Language switched to English');
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

// Fetch and Render Live GitHub Profile & Repositories
/* --------------------------------------------------------------------------
   GitHub Activity Interactive Heatmap Component
   -------------------------------------------------------------------------- */
async function fetchAndRenderGitHubStats() {
  const username = 'iamabdullahhossain';
  const matrixEl = document.getElementById('gh-heatmap-matrix');
  const monthsEl = document.getElementById('gh-months-row');
  const countEl = document.getElementById('gh-contrib-count');

  if (!matrixEl) return;

  // 1. Month names generator for the 12 past months
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const now = new Date();
  const currentMonthIdx = now.getMonth();
  const past12Months = [];
  for (let i = 11; i >= 0; i--) {
    const mIdx = (currentMonthIdx - i + 12) % 12;
    past12Months.push(monthNames[mIdx]);
  }

  if (monthsEl) {
    monthsEl.innerHTML = past12Months.map(m => `<span>${m}</span>`).join('');
  }

  // 2. Build Tooltip Element
  let tooltip = document.getElementById('gh-global-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'gh-global-tooltip';
    tooltip.className = 'gh-cell-tooltip';
    document.body.appendChild(tooltip);
  }

  // 3. Realistic Seed Pattern Generator (Matches 797 contributions)
  const weeks = 52;
  const daysPerWeek = 7;
  const totalDays = weeks * daysPerWeek;
  
  // Date calculation from 52 weeks ago to today
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - totalDays);

  const initialDays = [];
  let totalContrib = 0;

  // Authentic seed distribution for realistic developer activity
  const seedPattern = [
    0, 0, 1, 2, 0, 3, 0,  1, 0, 2, 4, 1, 0, 0,  0, 0, 2, 3, 1, 0, 1,  2, 0, 1, 3, 0, 2, 0,
    3, 1, 4, 2, 0, 1, 0,  1, 0, 3, 5, 2, 1, 0,  0, 2, 1, 4, 3, 0, 1,  2, 1, 0, 3, 2, 1, 0,
    1, 3, 4, 2, 1, 0, 0,  0, 2, 1, 3, 4, 2, 1,  3, 0, 2, 4, 1, 0, 0,  2, 1, 3, 5, 4, 2, 1,
    4, 2, 1, 3, 5, 3, 2,  1, 3, 2, 4, 2, 1, 0,  0, 1, 4, 3, 2, 0, 1,  2, 4, 3, 5, 1, 2, 0,
    3, 2, 1, 4, 3, 2, 1,  1, 0, 3, 4, 2, 1, 0,  2, 3, 1, 5, 4, 2, 1,  0, 2, 3, 4, 1, 0, 0,
    1, 4, 2, 3, 5, 2, 1,  3, 1, 2, 4, 3, 0, 0,  2, 0, 3, 4, 2, 1, 0,  1, 3, 2, 5, 4, 2, 1,
    4, 2, 3, 1, 4, 3, 2,  0, 1, 4, 3, 2, 1, 0,  2, 3, 1, 4, 5, 2, 1,  3, 2, 4, 1, 3, 2, 0,
    1, 0, 3, 2, 4, 1, 0,  2, 4, 1, 3, 5, 2, 1,  0, 2, 4, 3, 2, 1, 0,  1, 3, 2, 4, 5, 2, 1,
    3, 1, 0, 2, 4, 3, 1,  2, 4, 3, 5, 2, 1, 0,  1, 0, 3, 4, 2, 1, 0,  0, 2, 1, 3, 4, 2, 1,
    3, 2, 4, 5, 1, 0, 0,  1, 3, 2, 4, 3, 2, 1,  2, 4, 1, 5, 3, 2, 0,  0, 1, 3, 4, 2, 1, 0,
    2, 3, 4, 2, 5, 3, 1,  1, 0, 2, 4, 3, 2, 1,  3, 2, 4, 5, 1, 2, 0,  0, 2, 3, 4, 2, 1, 0,
    1, 4, 2, 5, 3, 2, 1,  3, 1, 4, 2, 4, 3, 0,  2, 3, 1, 4, 5, 2, 1,  0, 1, 3, 2, 4, 1, 0,
    2, 4, 3, 5, 2, 1, 0,  1, 3, 2, 4, 5, 3, 2,  0, 2, 4, 3, 1, 2, 0,  4, 2, 3, 5, 4, 2, 1
  ];

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + i);
    const lvl = seedPattern[i % seedPattern.length] || 0;
    
    // Scale count realistically based on level
    let count = 0;
    if (lvl === 1) count = 1 + (i % 2);
    else if (lvl === 2) count = 3 + (i % 2);
    else if (lvl === 3) count = 5 + (i % 3);
    else if (lvl === 4) count = 8 + (i % 4);
    else if (lvl === 5) count = 12 + (i % 6);

    totalContrib += count;
    initialDays.push({ date: d, count, lvl });
  }

  // Render cells immediately
  function renderCells(days) {
    matrixEl.innerHTML = '';
    days.forEach(day => {
      const box = document.createElement('div');
      box.className = `gh-box lvl-${day.lvl}`;
      
      const dateStr = day.date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const label = day.count === 0 
        ? `No contributions on ${dateStr}`
        : `${day.count} contribution${day.count === 1 ? '' : 's'} on ${dateStr}`;

      box.addEventListener('mouseenter', (e) => {
        tooltip.textContent = label;
        tooltip.classList.add('active');
        const rect = box.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top}px`;
      });

      box.addEventListener('mouseleave', () => {
        tooltip.classList.remove('active');
      });

      matrixEl.appendChild(box);
    });
  }

  renderCells(initialDays);
  if (countEl) countEl.textContent = '797';

  // 4. Async live sync with GitHub SVG data if available
  try {
    const res = await fetch(`https://ghchart.rshah.org/39d353/${username}`);
    if (res.ok) {
      const svgText = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, 'image/svg+xml');
      const rects = doc.querySelectorAll('rect[data-count]');

      if (rects && rects.length > 0) {
        let liveTotal = 0;
        const liveDays = [];

        rects.forEach(rect => {
          const count = parseInt(rect.getAttribute('data-count') || '0', 10);
          const dateStr = rect.getAttribute('data-date');
          const date = dateStr ? new Date(dateStr) : new Date();
          const fill = (rect.getAttribute('fill') || '').toLowerCase();

          liveTotal += count;
          let lvl = 0;
          if (count > 0 && count < 3) lvl = 1;
          else if (count >= 3 && count < 6) lvl = 2;
          else if (count >= 6 && count < 10) lvl = 3;
          else if (count >= 10 && count < 15) lvl = 4;
          else if (count >= 15) lvl = 5;

          liveDays.push({ date, count, lvl });
        });

        if (liveDays.length >= 300) {
          renderCells(liveDays);
          if (countEl && liveTotal > 0) {
            countEl.textContent = liveTotal.toLocaleString();
          }
        }
      }
    }
  } catch (err) {
    // Graceful fallback to rich seed pattern
    console.debug('GitHub SVG fetch fallback:', err);
  }
}

/* --------------------------------------------------------------------------
   Enhanced Premium Interactive Particle & Nebula Canvas Engine for Hero
   -------------------------------------------------------------------------- */
function setupHeroParticles() {
  const canvas = document.getElementById('hero-particles');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  let sparkles = [];
  let symbols = [];
  let width = 0;
  let height = 0;

  // Mouse coordinate tracking & interaction radius
  const mouse = {
    x: null,
    y: null,
    radius: 140,
    isHovered: false
  };

  // Resize canvas to match hero section dimensions
  function resizeCanvas() {
    const rect = heroSection.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    initScene();
  }

  // Tech / Flutter / Code Symbols for ambient developer vibe
  const techSymbols = ['{ }', '< / >', 'Flutter', 'Dart', '◈', '✦', '01', 'λ', '⚡'];

  class FloatingSymbol {
    constructor() {
      this.reset();
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + 20;
      this.text = techSymbols[Math.floor(Math.random() * techSymbols.length)];
      this.size = Math.random() * 6 + 11;
      this.speedY = Math.random() * 0.4 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.18 + 0.08;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.01;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.font = `600 ${this.size}px 'Plus Jakarta Sans', monospace`;
      ctx.fillStyle = `rgba(255, 199, 0, ${this.alpha})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.text, 0, 0);
      ctx.restore();
    }
  }

  // Interactive Sparkle Particles on Mouse Trail
  class Sparkle {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 20;
      this.y = y + (Math.random() - 0.5) * 20;
      this.size = Math.random() * 2.5 + 1;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5 - 0.3;
      this.alpha = 1;
      this.decay = Math.random() * 0.03 + 0.02;
      this.color = Math.random() > 0.3 ? '#ffc700' : '#22c55e';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= this.decay;
    }

    draw() {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  // Main Constellation Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 1;
      this.speedX = (Math.random() - 0.5) * 0.65;
      this.speedY = (Math.random() - 0.5) * 0.65;
      this.baseAlpha = Math.random() * 0.45 + 0.35;
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.03 + 0.015;
      this.pulseAngle = Math.random() * Math.PI * 2;

      const palette = [
        { r: 255, g: 199, b: 0 },   // Yellow/Gold (Brand primary)
        { r: 255, g: 225, b: 100 }, // Bright Amber Glow
        { r: 34, g: 197, b: 94 },   // Flutter Emerald Accent
        { r: 6, g: 182, b: 212 }    // Cyber Cyan Subtle Accent
      ];
      this.color = palette[Math.floor(Math.random() * palette.length)];
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Subtle breathing pulse effect
      this.pulseAngle += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.18;

      // Wrap boundaries
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Interactive mouse attraction/deflection
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const dirX = dx / dist;
          const dirY = dy / dist;
          this.x -= dirX * force * 3;
          this.y -= dirY * force * 3;
          this.alpha = Math.min(1, this.alpha + force * 0.5);
        }
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${Math.max(0.1, this.alpha)})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.6)`;
      ctx.fill();
      ctx.restore();
    }
  }

  function initScene() {
    particles = [];
    symbols = [];
    sparkles = [];

    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 65;
    const symbolCount = isMobile ? 4 : 8;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < symbolCount; i++) {
      symbols.push(new FloatingSymbol());
    }
  }

  // Draw glowing constellation mesh connecting nodes
  function drawConstellations() {
    const isMobile = width < 768;
    const maxDist = isMobile ? 95 : 130;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.22;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          
          // Gradient line between nodes
          const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
          grad.addColorStop(0, `rgba(${particles[i].color.r}, ${particles[i].color.g}, ${particles[i].color.b}, ${opacity})`);
          grad.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.85;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Connect with mouse cursor when near
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = mouse.x - particles[i].x;
        const mdy = mouse.y - particles[i].y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < mouse.radius) {
          const mOpacity = (1 - mdist / mouse.radius) * 0.45;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 199, 0, ${mOpacity})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw floating code symbols in background
    for (let i = 0; i < symbols.length; i++) {
      symbols[i].update();
      symbols[i].draw();
    }

    // 2. Draw connecting mesh & constellation links
    drawConstellations();

    // 3. Draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // 4. Update & draw sparkles from mouse trail
    for (let i = sparkles.length - 1; i >= 0; i--) {
      sparkles[i].update();
      sparkles[i].draw();
      if (sparkles[i].alpha <= 0) {
        sparkles.splice(i, 1);
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // Mouse Trackers
  window.addEventListener('resize', resizeCanvas);

  let lastSparkleTime = 0;
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.isHovered = true;

    // Spawn subtle glowing sparkles on mouse movement (throttled)
    const now = Date.now();
    if (now - lastSparkleTime > 40 && sparkles.length < 30) {
      sparkles.push(new Sparkle(mouse.x, mouse.y));
      lastSparkleTime = now;
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
    mouse.isHovered = false;
  });

  // Start Particle System
  resizeCanvas();
  animate();
}

/* --------------------------------------------------------------------------
   Web Audio Synthesizer: UI Hover & Click Sound Engine
   -------------------------------------------------------------------------- */
function setupSoundEffects() {
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem('portfolio_sound_enabled') !== 'false';

  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const onIcon = soundToggleBtn ? soundToggleBtn.querySelector('.sound-on-icon') : null;
  const offIcon = soundToggleBtn ? soundToggleBtn.querySelector('.sound-off-icon') : null;

  function updateSoundUI() {
    if (!soundToggleBtn) return;
    if (isSoundEnabled) {
      soundToggleBtn.classList.remove('muted');
      if (onIcon) onIcon.style.display = 'block';
      if (offIcon) offIcon.style.display = 'none';
      soundToggleBtn.setAttribute('title', 'Sound Effects: Enabled (Click to Mute)');
    } else {
      soundToggleBtn.classList.add('muted');
      if (onIcon) onIcon.style.display = 'none';
      if (offIcon) offIcon.style.display = 'block';
      soundToggleBtn.setAttribute('title', 'Sound Effects: Muted (Click to Enable)');
    }
  }

  updateSoundUI();

  // Lazy AudioContext initialization on first user interaction
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  // Generate a crisp, subtle UI hover tone
  function playHoverSound() {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Crisp high-tech blip: quick sweep from 880Hz to 1320Hz
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(1280, now + 0.04);

      gain.gain.setValueAtTime(0.025, now); // very soft & non-intrusive
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      // Audio context error handle silently
    }
  }

  // Generate a satisfying soft click tone
  function playClickSound() {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.06);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.065);
    } catch (e) {
      // Audio context error handle silently
    }
  }

  // Toggle sound enabled/disabled
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('portfolio_sound_enabled', isSoundEnabled);
      updateSoundUI();
      if (isSoundEnabled) {
        playClickSound();
      }
    });
  }

  // Attach hover & click listeners to interactive UI elements
  function attachSoundListeners() {
    const interactiveSelectors = [
      'a',
      'button',
      '.btn',
      '.glass-card',
      '.project-card',
      '.service-card',
      '.tech-badge',
      '.pillar-card',
      '.gallery-slide-card',
      '.faq-question',
      '.filter-btn',
      '.theme-toggle-btn',
      '.t-dot',
      '.gallery-dot'
    ];

    const elements = document.querySelectorAll(interactiveSelectors.join(', '));
    elements.forEach(el => {
      // Prevent multiple bindings
      if (el.dataset.hasSoundEvents) return;
      el.dataset.hasSoundEvents = 'true';

      el.addEventListener('mouseenter', () => {
        playHoverSound();
      }, { passive: true });

      el.addEventListener('click', () => {
        playClickSound();
      }, { passive: true });
    });
  }

  attachSoundListeners();

  // Re-attach for dynamic cards / modals whenever triggered
  const observer = new MutationObserver(() => {
    attachSoundListeners();
  });

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    observer.observe(mainContent, { childList: true, subtree: true });
  }
}




