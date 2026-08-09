/* ==========================================================================
   Abdullah Hossain - Interactive Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
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
  setupProjectFilters();
  setupContactForm();
  setupModalEvents();
});

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

// Work Experience Timeline
function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container || !portfolioData.experience) return;

  container.innerHTML = portfolioData.experience.map(item => `
    <div class="timeline-item glass-card">
      <div class="timeline-header">
        <h4 class="timeline-role">${item.role}</h4>
        <span class="timeline-duration">${item.duration}</span>
      </div>
      <div class="timeline-company">${item.company}</div>
      <p class="timeline-desc">${item.description}</p>
    </div>
  `).join('');
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

// Client Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container || !portfolioData.testimonials) return;

  container.innerHTML = portfolioData.testimonials.map(t => `
    <div class="glass-card testimonial-card">
      <div>
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.client}" class="testimonial-avatar" onerror="this.src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'">
        <div>
          <div class="author-name">${t.client}</div>
          <div class="author-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
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
  }
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

// Contact Form Handler & Service Selector
function setupContactForm() {
  const serviceBtns = document.querySelectorAll('.service-pill-btn');
  let selectedServices = [];

  serviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      const val = btn.getAttribute('data-value');
      if (selectedServices.includes(val)) {
        selectedServices = selectedServices.filter(s => s !== val);
      } else {
        selectedServices.push(val);
      }
    });
  });

  const form = document.getElementById('lead-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;

      showToast(`Thank you ${name}! Your inquiry has been submitted.`);

      form.reset();
      serviceBtns.forEach(b => b.classList.remove('selected'));
      selectedServices = [];
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
