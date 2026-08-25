/* ==========================================================================
   Proposal Studio & Professional Letterhead Memo Pad JavaScript Logic
   ========================================================================== */

// Built-in Industry-Standard Proposal Templates
const PROPOSAL_TEMPLATES = {
  mobile: {
    clientName: "Acme Enterprises Ltd.",
    projectTitle: "Cross-Platform Mobile App (Flutter & Riverpod)",
    refNo: "AH-PROP-2026-MOB",
    timeline: "6 - 8 Weeks",
    budget: "$2,800 - $3,500 USD",
    content: `## 1. Executive Summary
This proposal outlines the end-to-end engineering roadmap for designing, architecting, and launching a high-performance cross-platform mobile application for **Android and iOS**. Leveraging **Flutter**, **Riverpod State Management**, and **Clean Architecture**, the application will deliver 60 FPS fluid interactions, offline caching, and real-time backend synchronization.

## 2. Scope of Deliverables
- **Cross-Platform Application**: Fully responsive native-compiled apps for iOS & Android.
- **State Management & Architecture**: Scalable Riverpod architecture with modular separation of concerns.
- **Backend & REST APIs**: Secure token-based authentication, real-time WebSocket events, and optimized REST endpoints.
- **Offline First**: Local storage with Hive / SQLite for instantaneous data access during network dropouts.
- **Push Notifications & Analytics**: Integrated Firebase Cloud Messaging (FCM) and crash monitoring.

## 3. Milestones & Implementation Roadmap
| Phase | Scope & Milestones | Est. Duration |
| :--- | :--- | :--- |
| **Phase 1** | Architecture Blueprint, Wireframing & Design System | Week 1 - 2 |
| **Phase 2** | Core Feature Engineering & API Integrations | Week 3 - 5 |
| **Phase 3** | QA, Stress Testing, Performance Profiling & Bug Fixes | Week 6 - 7 |
| **Phase 4** | App Store (iOS) & Google Play Store Production Release | Week 8 |

## 4. Investment & Payment Terms
- **Upfront Milestone (Kickoff)**: 30% upon signing and roadmap finalization.
- **Sprint Delivery (Beta Build)**: 40% upon staging build deployment.
- **Final Launch & Store Handover**: 30% post production store verification.

## 5. Warranty & Post-Launch Support
Includes **30 Days of Dedicated Bug-Fix Guarantee** and source code ownership handover with comprehensive documentation.`
  },

  fullstack: {
    clientName: "NextGen Logistics Inc.",
    projectTitle: "Full-Stack Web & Real-Time Dashboard Solution",
    refNo: "AH-PROP-2026-WEB",
    timeline: "4 - 6 Weeks",
    budget: "$2,200 - $2,900 USD",
    content: `## 1. Executive Summary
This proposal covers the design, development, and cloud deployment of a modern **Full-Stack Web Application** equipped with real-time operational analytics, role-based access control (RBAC), and automated reporting.

## 2. Core Technical Architecture
- **Frontend**: Modern SPA with responsive design, dynamic data tables, and interactive dashboards.
- **Backend & Database**: High-throughput REST / GraphQL APIs with PostgreSQL database indexing.
- **Security & Compliance**: JWT authentication, rate limiting, and encrypted credential storage.
- **DevOps**: Automated CI/CD pipelines, Dockerized containers, and cloud deployment on Vercel / AWS.

## 3. Project Milestones
| Milestone | Description | Timeline |
| :--- | :--- | :--- |
| **Milestone 1** | Database Schema, Auth Flow & Core UI Mockups | Week 1 |
| **Milestone 2** | Dashboard Features, Real-Time Streams & API Integration | Week 2 - 3 |
| **Milestone 3** | Analytics Reporting, CSV/PDF Export & User Permissions | Week 4 |
| **Milestone 4** | Staging Testing, Security Audit & Cloud Launch | Week 5 - 6 |

## 4. Commercial Terms
Standard 40% initial commitment, 30% at beta milestone, and 30% upon production deployment.`
  },

  maintenance: {
    clientName: "Horizon Digital Services",
    projectTitle: "Dedicated Mobile & Web Maintenance Agreement (SLA)",
    refNo: "AH-PROP-2026-SLA",
    timeline: "Monthly Retainer (6 Months)",
    budget: "$650 / Month",
    content: `## 1. Overview & Objectives
A dedicated Service Level Agreement (SLA) providing continuous maintenance, OS compatibility upgrades (iOS & Android SDKs), critical security patches, and on-demand feature improvements for your production software.

## 2. Guaranteed Service Inclusions
- **40 Dedicated Engineering Hours / Month** for bug fixes, code refactoring, or UI tweaks.
- **Guaranteed Response Time**: Within 2 to 4 hours for high-priority incidents.
- **Monthly Performance & Dependency Audits**: Keeping Flutter packages, npm modules, and server dependencies up to date.
- **Backup & Server Health Monitoring**: Proactive error monitoring via Sentry / Firebase Crashlytics.

## 3. Retainer Terms
Monthly billing at the start of each service cycle. Unused hours roll over up to 10 hours into the consecutive month.`
  },

  blank: {
    clientName: "Valued Client / Company",
    projectTitle: "Custom Project Proposal & Statement of Work",
    refNo: "AH-PROP-2026-CUSTOM",
    timeline: "TBD",
    budget: "TBD",
    content: `## 1. Project Overview
Write your project overview, background, and objectives here...

## 2. Deliverables & Specifications
- Deliverable 1: High quality engineered modules
- Deliverable 2: Clean code, testing, and technical documentation
- Deliverable 3: Deployment and production configuration

## 3. Timeline & Milestone Schedule
| Milestone | Description | Target Date |
| :--- | :--- | :--- |
| **Phase 1** | Requirement analysis and architectural planning | Week 1 |
| **Phase 2** | Implementation and integration | Week 2 - 3 |
| **Phase 3** | Review, QA, and final signoff | Week 4 |

## 4. Terms & Signature
Work begins upon agreement sign-off and initial deposit.`
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setupTheme();
  setupMobileNav();
  setupMobileViewTabs();
  setupPreviewScale();
  setupFormBindings();
  setupTemplatePills();
  setupToolbarShortcuts();
  setupWatermarkControls();
  setupPdfExport();
  setupPrintButton();
  
  // Set default current date
  const dateInput = document.getElementById('prop-date');
  if (dateInput && !dateInput.value) {
    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];
  }

  // Load initial mobile template
  loadTemplate('mobile');
});

/* --------------------------------------------------------------------------
   1. Theme Management & Mobile Navigation
   -------------------------------------------------------------------------- */
function setupTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

function setupMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const isOpen = navLinks.classList.contains('active');
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   Mobile View Switcher (Editor vs Live Pad Preview)
   -------------------------------------------------------------------------- */
function setupMobileViewTabs() {
  const tabs = document.querySelectorAll('.mobile-view-tab');
  const studioGrid = document.getElementById('studio-grid');

  if (!tabs.length || !studioGrid) return;

  // Set default view on mobile
  if (window.innerWidth <= 992) {
    studioGrid.classList.add('show-editor');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-tab');
      if (target === 'editor') {
        studioGrid.classList.remove('show-preview');
        studioGrid.classList.add('show-editor');
      } else {
        studioGrid.classList.remove('show-editor');
        studioGrid.classList.add('show-preview');
        if (window.applyPadScale) window.applyPadScale();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      studioGrid.classList.remove('show-editor', 'show-preview');
    } else if (!studioGrid.classList.contains('show-editor') && !studioGrid.classList.contains('show-preview')) {
      studioGrid.classList.add('show-editor');
    }
    if (window.applyPadScale) window.applyPadScale();
  });
}

/* --------------------------------------------------------------------------
   Live Preview Scaling / Zoom for Mobile Screens
   -------------------------------------------------------------------------- */
let isFitViewActive = true;

function setupPreviewScale() {
  const scaleBtn = document.getElementById('btn-scale-toggle');
  const paperWrapper = document.getElementById('paper-wrapper');
  const sheet = document.getElementById('letterhead-sheet');

  if (!paperWrapper || !sheet) return;

  function updateScale() {
    if (!sheet || !paperWrapper) return;
    if (document.body.classList.contains('exporting-pdf')) return;

    const availableWidth = paperWrapper.clientWidth - (window.innerWidth <= 600 ? 16 : 32);
    const unscaledWidth = 794; // approx 210mm in px standard

    if (isFitViewActive && availableWidth < unscaledWidth && availableWidth > 0) {
      const scale = Math.min(1, availableWidth / unscaledWidth);
      sheet.style.transform = `scale(${scale})`;
      sheet.style.transformOrigin = 'top center';
      paperWrapper.style.minHeight = `${Math.round(sheet.offsetHeight * scale + 30)}px`;
      if (scaleBtn) {
        scaleBtn.classList.add('active');
        const textSpan = scaleBtn.querySelector('.scale-mode-text');
        if (textSpan) textSpan.textContent = '100% Zoom';
      }
    } else {
      sheet.style.transform = '';
      sheet.style.transformOrigin = 'top center';
      paperWrapper.style.minHeight = '';
      if (scaleBtn) {
        scaleBtn.classList.remove('active');
        const textSpan = scaleBtn.querySelector('.scale-mode-text');
        if (textSpan) textSpan.textContent = 'Fit View';
      }
    }
  }

  window.applyPadScale = updateScale;

  if (scaleBtn) {
    scaleBtn.addEventListener('click', () => {
      isFitViewActive = !isFitViewActive;
      updateScale();
    });
  }

  setTimeout(updateScale, 350);
}

/* --------------------------------------------------------------------------
   2. Live Form Field Bindings to Pad Preview
   -------------------------------------------------------------------------- */
function setupFormBindings() {
  const inputs = {
    clientName: document.getElementById('prop-client'),
    projectTitle: document.getElementById('prop-title'),
    refNo: document.getElementById('prop-ref'),
    date: document.getElementById('prop-date'),
    timeline: document.getElementById('prop-timeline'),
    budget: document.getElementById('prop-budget'),
    content: document.getElementById('prop-content')
  };

  const previewElements = {
    clientName: document.getElementById('preview-client'),
    projectTitle: document.getElementById('preview-title'),
    refNo: document.getElementById('preview-ref'),
    date: document.getElementById('preview-date'),
    sigDate: document.getElementById('preview-sig-date'),
    timeline: document.getElementById('preview-timeline'),
    budget: document.getElementById('preview-budget'),
    body: document.getElementById('preview-body')
  };

  function updatePreview() {
    if (previewElements.clientName) previewElements.clientName.textContent = inputs.clientName.value || 'Client Name';
    if (previewElements.projectTitle) previewElements.projectTitle.textContent = inputs.projectTitle.value || 'Project Title';
    if (previewElements.refNo) previewElements.refNo.textContent = inputs.refNo.value || 'AH-PROP-2026';
    
    // Format Date nicely (e.g. 25 Aug 2026)
    if (inputs.date.value) {
      try {
        const d = new Date(inputs.date.value);
        const formatted = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        if (previewElements.date) previewElements.date.textContent = formatted;
        if (previewElements.sigDate) previewElements.sigDate.textContent = formatted;
      } catch (e) {
        if (previewElements.date) previewElements.date.textContent = inputs.date.value;
      }
    }

    if (previewElements.timeline) previewElements.timeline.textContent = inputs.timeline.value || 'TBD';
    if (previewElements.budget) previewElements.budget.textContent = inputs.budget.value || 'TBD';

    // Render Markdown / HTML Content
    if (previewElements.body) {
      const rawText = inputs.content.value || '';
      previewElements.body.innerHTML = parseMarkdownToHtml(rawText);
    }
  }

  // Bind input listeners
  Object.values(inputs).forEach(input => {
    if (input) {
      input.addEventListener('input', updatePreview);
      input.addEventListener('change', updatePreview);
    }
  });

  // Expose update for templates
  window.updatePadPreview = updatePreview;
}

/* --------------------------------------------------------------------------
   3. Markdown to Clean HTML Parser
   -------------------------------------------------------------------------- */
function parseMarkdownToHtml(markdown) {
  if (window.marked && typeof window.marked.parse === 'function') {
    return window.marked.parse(markdown);
  }

  // Fallback lightweight parser if marked.js isn't ready
  let html = markdown
    // Headings
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold & Italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Tables
    .replace(/\|(.+)\|/gim, (match) => {
      const cells = match.split('|').filter(c => c.trim() !== '');
      if (cells.some(c => c.includes('---'))) return '';
      const cellTags = cells.map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cellTags}</tr>`;
    })
    // Bullet lists
    .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n+/g, '</p><p>');

  return `<p>${html}</p>`;
}

/* --------------------------------------------------------------------------
   4. Template Loader
   -------------------------------------------------------------------------- */
function loadTemplate(key) {
  const tmpl = PROPOSAL_TEMPLATES[key];
  if (!tmpl) return;

  const inputs = {
    clientName: document.getElementById('prop-client'),
    projectTitle: document.getElementById('prop-title'),
    refNo: document.getElementById('prop-ref'),
    timeline: document.getElementById('prop-timeline'),
    budget: document.getElementById('prop-budget'),
    content: document.getElementById('prop-content')
  };

  if (inputs.clientName) inputs.clientName.value = tmpl.clientName;
  if (inputs.projectTitle) inputs.projectTitle.value = tmpl.projectTitle;
  if (inputs.refNo) inputs.refNo.value = tmpl.refNo;
  if (inputs.timeline) inputs.timeline.value = tmpl.timeline;
  if (inputs.budget) inputs.budget.value = tmpl.budget;
  if (inputs.content) inputs.content.value = tmpl.content;

  if (window.updatePadPreview) window.updatePadPreview();
}

function setupTemplatePills() {
  const pills = document.querySelectorAll('.template-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const templateKey = pill.getAttribute('data-template');
      loadTemplate(templateKey);
    });
  });
}

/* --------------------------------------------------------------------------
   5. Toolbar Shortcuts (Append to Textbox)
   -------------------------------------------------------------------------- */
function setupToolbarShortcuts() {
  const textarea = document.getElementById('prop-content');
  if (!textarea) return;

  function insertText(snippet) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, start) + snippet + text.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + snippet.length;
    textarea.focus();
    if (window.updatePadPreview) window.updatePadPreview();
  }

  document.querySelectorAll('[data-insert]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-insert');
      if (type === 'milestone') {
        insertText('\n| Milestone | Description | Duration |\n| :--- | :--- | :--- |\n| **Phase X** | Description of scope | 2 Weeks |\n');
      } else if (type === 'h2') {
        insertText('\n## Section Title\n');
      } else if (type === 'bullet') {
        insertText('\n- High-performance feature deliverable\n- Clean architecture and unit testing\n');
      } else if (type === 'highlight') {
        insertText('\n> **Special Note:** Project starts immediately upon agreement signing.\n');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Watermark & Pad Customizer Controls
   -------------------------------------------------------------------------- */
function setupWatermarkControls() {
  const watermarkEl = document.getElementById('pad-watermark');
  const opacityRange = document.getElementById('watermark-opacity');
  const opacityValText = document.getElementById('watermark-val');
  const toggleWatermark = document.getElementById('toggle-watermark');
  const toggleSignature = document.getElementById('toggle-signature');
  const signatureSection = document.getElementById('pad-signatures');

  if (opacityRange && watermarkEl && opacityValText) {
    opacityRange.addEventListener('input', () => {
      const val = opacityRange.value;
      opacityValText.textContent = `${val}%`;
      watermarkEl.style.opacity = (val / 100).toString();
    });
  }

  if (toggleWatermark && watermarkEl) {
    toggleWatermark.addEventListener('change', () => {
      watermarkEl.style.display = toggleWatermark.checked ? 'flex' : 'none';
    });
  }

  if (toggleSignature && signatureSection) {
    toggleSignature.addEventListener('change', () => {
      signatureSection.style.display = toggleSignature.checked ? 'grid' : 'none';
    });
  }
}

/* --------------------------------------------------------------------------
   7. PDF Generation Engine (html2pdf.js)
   -------------------------------------------------------------------------- */
function setupPdfExport() {
  const exportBtn = document.getElementById('btn-download-pdf');
  const loadingOverlay = document.getElementById('pdf-loading-overlay');
  const sheet = document.getElementById('letterhead-sheet');

  if (!exportBtn || !sheet) return;

  exportBtn.addEventListener('click', async () => {
    const paperWrapper = document.getElementById('paper-wrapper');
    try {
      exportBtn.disabled = true;
      if (loadingOverlay) loadingOverlay.classList.add('active');

      document.body.classList.add('exporting-pdf');
      sheet.style.transform = '';
      if (paperWrapper) paperWrapper.style.minHeight = '';

      const clientName = document.getElementById('prop-client')?.value || 'Client';
      const projectTitle = document.getElementById('prop-title')?.value || 'Proposal';
      const cleanFileName = `${clientName.replace(/[^a-zA-Z0-9]/g, '_')}_${projectTitle.replace(/[^a-zA-Z0-9]/g, '_')}_Proposal.pdf`;

      // Wait a tick for DOM rendering
      await new Promise(r => setTimeout(r, 200));

      const opt = {
        margin: [10, 10, 10, 10], // mm
        filename: cleanFileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2, // 2x resolution for crisp high-density print
          useCORS: true,
          logging: false,
          scrollY: 0
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        }
      };

      if (window.html2pdf) {
        await window.html2pdf().set(opt).from(sheet).save();
      } else {
        // Fallback to print dialog if library failed to load
        window.print();
      }

    } catch (err) {
      console.error('PDF Export Error:', err);
      alert('PDF generation encountered an issue. Opening print dialog as fallback.');
      window.print();
    } finally {
      document.body.classList.remove('exporting-pdf');
      if (window.applyPadScale) window.applyPadScale();
      exportBtn.disabled = false;
      if (loadingOverlay) loadingOverlay.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   8. Print Dialog Trigger
   -------------------------------------------------------------------------- */
function setupPrintButton() {
  const printBtn = document.getElementById('btn-print-pad');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
