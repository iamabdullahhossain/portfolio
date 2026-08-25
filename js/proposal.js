/* ==========================================================================
   Proposal Studio & Professional Letterhead Memo Pad JavaScript Logic
   Structured 11-Section Proposal Generator with Dynamic Milestones & PDF
   ========================================================================== */

// Available technology catalog from expertise arsenal
const ALL_TECH_CATALOG = [
  "Flutter", "Dart", "Riverpod", "Clean Architecture", "GetX", "Provider",
  "Android (Kotlin/Java)", "iOS (Swift)", "Offline-First (Hive)", "SQLite",
  "PHP & Laravel", "MySQL Database", "REST API & Dio", "Firebase (Auth/Firestore)",
  "FCM Push Notifications", "Real-Time Pusher & WebSockets", "Google Maps & GPS",
  "In-App Purchases", "Stripe Gateway", "SSLCommerz", "Node.js", "Next.js",
  "PostgreSQL", "Docker", "CI/CD & Git", "Postman", "Linux VPS"
];

// Active selected technologies set
let selectedTechs = new Set(["Flutter", "Dart", "PHP & Laravel", "MySQL Database", "REST API & Dio", "PDF Export"]);

// Dynamic Milestones data store
let milestoneItems = [
  { week: "Milestone 1 — Project Start", desc: "Project setup, architecture, database planning and initial development", amount: "30% — 30,000 BDT" },
  { week: "Milestone 2 — UI Implementation", desc: "Complete Flutter UI implementation for all agreed modules/screens", amount: "20% — 20,000 BDT" },
  { week: "Milestone 3 — Backend Integration", desc: "Laravel backend, API development, database integration and Flutter API integration", amount: "20% — 20,000 BDT" },
  { week: "Milestone 4 — Final Delivery", desc: "Testing, bug fixing, reviews, final adjustments and production-ready delivery", amount: "30% — 30,000 BDT" }
];

// Built-in Industry-Standard Structured Presets
const PROPOSAL_TEMPLATES = {
  business: {
    clientName: "Valued Enterprise Client",
    projectTitle: "Business Management & Accounting System",
    refNo: "AH-PROP-2026-BMAS",
    cost: "100,000 BDT",
    timeline: "Within 1.5 Months (approx. 6 weeks)",
    techs: ["Flutter", "Dart", "PHP & Laravel", "MySQL Database", "REST API & Dio", "PDF Export"],
    milestones: [
      { week: "Milestone 1 — Project Start", desc: "Project setup, architecture, database planning and initial development", amount: "30% — 30,000 BDT" },
      { week: "Milestone 2 — UI Implementation", desc: "Complete Flutter UI implementation for all agreed modules/screens", amount: "20% — 20,000 BDT" },
      { week: "Milestone 3 — Backend Integration", desc: "Laravel backend, API development, database integration and Flutter API integration", amount: "20% — 20,000 BDT" },
      { week: "Milestone 4 — Final Delivery", desc: "Testing, bug fixing, reviews, final adjustments and production-ready delivery", amount: "30% — 30,000 BDT" }
    ],
    overview: `This project will develop a complete Business Management & Accounting System to manage imports, inventory, sales, customers, suppliers, cash/bank transactions, expenses, and financial reporting from a centralized platform.\n\nThe system will provide real-time visibility into the business’s financial position, stock status, receivables, payables, import costs, sales performance, and profitability.`,
    features: `Authentication
● Username/password login
● New account registration
● Secure logout

Dashboard
● Total Profit & Loss (P&L)
● Cashbox balance
● Customer receivables
● Supplier payables
● Current month's expenses
● Unconfirmed Commission Sale notifications
● Running import stock
● Recent sales

Imports / LC Batches
● Create and manage LC/import batches
● Supplier information
● LC date and bank
● ETA / shipment details
● FOB / CFR shipping terms
● Import items with quantity, weight and bags
● Landed cost calculation
● Shipping, customs, forwarding and carrying costs
● Cost per KG calculation
● Supplier payment terms
● Shipment and arrival payment tracking
● Import-wise stock and remaining quantity
● Weight loss tracking
● Import-wise running profit/loss

Sales
● Forwarding / Direct Sales
● Commission Sales
● Cash, credit and mixed payments
● Estimated profit/loss during sale
● Shipment tracking for Commission Sales
● Commission Sale confirmation
● Actual sold quantity and commission calculation
● Sale return management

Stock Management
● Item-wise stock
● Import batch-wise stock
● Total imported quantity
● Current available stock
● On-hold stock for unconfirmed Commission Sales
● Stock movement tracking

Customers
● Customer ledger
● Sales history
● Payment history
● Outstanding balance
● Chronological transaction history
● Add/edit/delete payment records

Suppliers
● Supplier-wise outstanding balance
● LC-wise payment tracking
● Shipment payment
● Arrival payment
● Supplier payment records

Cashbox & Bank
● Cash balance
● Multiple bank accounts
● Cash flow ledger
● Cash-to-bank / bank-to-cash transfer
● Customer payment integration
● Supplier payment integration
● Expense integration
● Automatic financial transaction entries

Expenses
● Operating expenses
● Non-operating expenses
● Expense categories
● Sub-categories
● Expense records and tracking

Reports
● Import batch-wise Profit & Loss
● Gross Profit
● Operating Expenses
● Net Profit
● Balance Sheet
● Assets vs Liabilities
● Date-wise financial reports
● PDF export for reports`,
    revision: `The project will include client review at each major milestone.\n\nFeedback related to the agreed requirements will be incorporated during development. Final testing and necessary bug fixes will be completed before delivery.\n\nAny major feature or functionality added beyond the agreed requirements may require additional time and cost, which will be discussed and approved beforehand.`,
    maintenance: `An annual maintenance fee of 3,000 BDT will be charged for system support and updates.`,
    deliverables: `● Complete Flutter application
● Laravel backend/API
● Database implementation
● Authentication system
● Import & LC management
● Stock management
● Sales management
● Customer & Supplier ledger
● Cash & Bank management
● Expense management
● Financial reports
● PDF report export
● Final testing and bug fixing
● Production-ready source code`,
    summary: `Project: Business Management & Accounting System
Technology: Flutter + Laravel
Estimated Duration: Within 1.5 Months
Total Cost: 100,000 BDT
Payment: 30% + 20% + 20% + 30%
Review: Included
Final Delivery: Production-ready application with complete source code

I look forward to developing a reliable and scalable business management solution that will simplify daily operations, financial tracking, inventory management, and business decision-making.`,
    comments: `Data & Sync:
Based on the nature of this system, the following approach is recommended for hosting, data safety and future flexibility:
· Hosting & deployment - Laravel backend and MySQL database deployed on a managed VPS or cloud server; domain and SSL configured for secure API access.
· Automated backups - scheduled daily database backups with a defined retention period, so financial data is never at risk of loss.
· Data export - in addition to PDF, key ledgers and reports can be exported to Excel/CSV for accounting and audit purposes.
· Roles & permissions - initial version ships with a single owner login; the architecture will support adding staff/bookkeeper roles with restricted access in a future phase.
· Audit trail - edits and deletions on payments, sales and ledger entries are timestamped, so the history of changes stays visible.
· Connectivity - the app is designed for standard online use; offline queuing can be scoped as a future enhancement if needed.`
  },

  mobile: {
    clientName: "Acme Enterprises Ltd.",
    projectTitle: "Cross-Platform Mobile App (Flutter & Riverpod)",
    refNo: "AH-PROP-2026-MOB",
    cost: "$3,500 USD",
    timeline: "6 - 8 Weeks (Sprint-Based)",
    techs: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "REST API & Dio", "Firebase (Auth/Firestore)", "Offline-First (Hive)", "FCM Push Notifications"],
    milestones: [
      { week: "Week 1 - 2", desc: "Architecture Blueprint, UI/UX Design System, Auth & State Management Setup", amount: "$900" },
      { week: "Week 3 - 5", desc: "Core Feature Engineering, REST API Endpoints Integration & Offline Sync", amount: "$1,400" },
      { week: "Week 6 - 7", desc: "Comprehensive QA, Stress Testing, Edge-case Bug Fixes & Profiling", amount: "$800" },
      { week: "Week 8", desc: "Google Play Store & Apple App Store Production Release, Handover & Docs", amount: "$400" }
    ],
    overview: `This proposal outlines the end-to-end engineering roadmap for designing, architecting, and launching a high-performance cross-platform mobile application for Android and iOS. Leveraging Flutter, Riverpod State Management, and Clean Architecture, the application will deliver 60 FPS fluid interactions, offline caching, and real-time backend synchronization.`,
    features: `• Responsive cross-platform UI compatible with Android 8.0+ and iOS 14+\n• Secure token-based authentication (JWT, Biometrics & Social Login)\n• Offline-first synchronization engine with Hive local database\n• Real-time push notifications via Firebase Cloud Messaging (FCM)\n• In-App payment gateway integration (Stripe / Local Gateways)\n• Automated crash reporting and performance telemetry with Sentry`,
    revision: `Includes up to 2 rounds of design & feature iteration reviews per development sprint, followed by formal staging milestone signoff.`,
    maintenance: `30 Days of dedicated post-launch warranty including critical bug fixes, OS compatibility updates, and performance monitoring support.`,
    deliverables: `1. Complete, clean Flutter & Dart source code repository with modular architecture\n2. Production release packages: Android APK/AAB & iOS IPA TestFlight build\n3. Technical architecture documentation & Postman API collection\n4. App Store & Google Play Store submission management`,
    summary: `Commercial agreement structured into 4 milestones. Initial 30% deposit upon kickoff, 40% upon beta staging release, and 30% upon final store release. 100% intellectual property ownership transfers upon completion.`,
    comments: `Client will provide store developer console accounts (Google Play & Apple Developer), branding vectors, and third-party API credentials prior to sprint kickoff.`
  },

  fullstack: {
    clientName: "NextGen Logistics Inc.",
    projectTitle: "Full-Stack Web Application & Real-Time Management System",
    refNo: "AH-PROP-2026-WEB",
    cost: "$2,900 USD",
    timeline: "5 - 7 Weeks",
    techs: ["PHP & Laravel", "MySQL Database", "REST API & Dio", "Real-Time Pusher & WebSockets", "Docker", "CI/CD & Git", "Postman", "Linux VPS"],
    milestones: [
      { week: "Week 1 - 2", desc: "Database Schema Design, Role-Based Access Control (RBAC) & API Architecture", amount: "$800" },
      { week: "Week 3 - 4", desc: "Operational Dashboards, Data Tables, Real-Time Streams & Business Logic", amount: "$1,200" },
      { week: "Week 5 - 6", desc: "Automated Reporting, PDF/CSV Export, Security Audit & Penetration Testing", amount: "$600" },
      { week: "Week 7", desc: "Production Cloud Server Deployment, CI/CD Pipeline & Final Handover", amount: "$300" }
    ],
    overview: `This proposal covers the custom architectural engineering and cloud deployment of a modern Full-Stack Web Application equipped with real-time operational analytics, role-based access control, and automated reporting systems.`,
    features: `• High-throughput RESTful API architecture with optimized MySQL database indexing\n• Role-based authentication (Admin, Manager, Operator) with audit logs\n• Real-time event broadcasting and WebSockets integration\n• Automated analytics dashboard with dynamic charts and PDF/Excel export\n• Dockerized container setup with automated CI/CD deployment pipelines`,
    revision: `Sprint-end sprint reviews with 2 iterations included for UI dashboards and data workflow adjustments.`,
    maintenance: `45 Days of dedicated server health monitoring, security patch management, and bug fix warranty.`,
    deliverables: `1. Production web application codebase with full documentation\n2. SQL database migrations, seeders, and ER diagrams\n3. Docker compose configuration and deployment scripts\n4. User training manual and admin walkthrough video`,
    summary: `Engagement with 40% upfront kickoff, 30% beta staging milestone, and 30% upon cloud production deployment. Full source code and IP rights transferred upon final settlement.`,
    comments: `Client will provide target VPS/Cloud hosting infrastructure access (AWS, DigitalOcean, or Linux VPS) and domain DNS access.`
  },

  maintenance: {
    clientName: "Horizon Digital Services",
    projectTitle: "Dedicated Mobile & Web Engineering Maintenance Agreement (SLA)",
    refNo: "AH-PROP-2026-SLA",
    cost: "$650 / Month",
    timeline: "Monthly Retainer (6 Months Agreement)",
    techs: ["Flutter", "Dart", "PHP & Laravel", "MySQL Database", "Firebase (Auth/Firestore)", "CI/CD & Git", "Linux VPS"],
    milestones: [
      { week: "Month 1 - 2", desc: "Comprehensive Dependency Audit, Security Patching & OS SDK Upgrades", amount: "$1,300" },
      { week: "Month 3 - 4", desc: "Feature Enhancements, Performance Profiling & Database Optimization", amount: "$1,300" },
      { week: "Month 5 - 6", desc: "Continuous 24/7 Error Telemetry, Cloud Backups & Monthly Health Reports", amount: "$1,300" }
    ],
    overview: `A structured Service Level Agreement (SLA) providing continuous maintenance, OS compatibility upgrades (iOS & Android SDKs), critical security patches, and on-demand feature improvements for your production software.`,
    features: `• 40 Dedicated engineering hours per month for feature tweaks and bug fixes\n• Guaranteed SLA response time within 2 to 4 hours for high-priority incidents\n• Routine dependency updates (Flutter packages, npm modules, Laravel packages)\n• Proactive crash monitoring with Sentry & Firebase Crashlytics\n• Automated weekly database backups and cloud health diagnostics`,
    revision: `Unlimited review and feedback cycles for all tasks completed within the monthly engineering hours.`,
    maintenance: `Continuous monthly SLA coverage with priority queue dispatching throughout the retainer period.`,
    deliverables: `1. Monthly engineering activity timesheet and accomplishment reports\n2. Pull requests and deployment changelogs\n3. Updated application store builds when required`,
    summary: `Monthly retainer billed at the commencement of each 30-day service cycle. Unused hours (up to 10 hours) rollover to the subsequent month.`,
    comments: `Communication via dedicated Slack/WhatsApp channel with weekly async sprint standups.`
  },

  blank: {
    clientName: "Valued Client / Company",
    projectTitle: "Custom Project Proposal & Statement of Work",
    refNo: "AH-PROP-2026-CUSTOM",
    cost: "100,000 BDT",
    timeline: "6 - 8 Weeks",
    techs: ["Flutter", "Dart", "PHP & Laravel", "MySQL Database"],
    milestones: [
      { week: "Milestone 1 — Project Start", desc: "Project setup, architecture, database planning and initial development", amount: "30,000 BDT" },
      { week: "Milestone 2 — UI Implementation", desc: "Complete Flutter UI implementation for all agreed modules/screens", amount: "20,000 BDT" },
      { week: "Milestone 3 — Backend Integration", desc: "Laravel backend, API development, database integration and Flutter API integration", amount: "20,000 BDT" },
      { week: "Milestone 4 — Final Delivery", desc: "Testing, bug fixing, reviews, final adjustments and production-ready delivery", amount: "30,000 BDT" }
    ],
    overview: `Write project overview and business goals here...`,
    features: `Authentication\n● Username/password login\n● Secure logout\n\nDashboard\n● Key metrics\n● Activity logs`,
    revision: `The project will include client review at each major milestone.`,
    maintenance: `Annual maintenance terms...`,
    deliverables: `● Complete application\n● Backend API & database`,
    summary: `Proposal summary & commercials...`,
    comments: `Special prerequisites or notes...`
  }
};

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setupTheme();
  setupMobileNav();
  setupMobileViewTabs();
  setupPreviewScale();
  setupTechChipsPicker();
  setupMilestonesBuilder();
  setupSectionInputsBinding();
  setupPageBreakCheckboxes();
  setupTemplatePills();
  setupLayoutStyleSwitcher();
  setupWatermarkControls();
  setupCostSyncButton();
  setupPdfExport();
  setupPrintButton();

  // Set default current date
  const dateInput = document.getElementById('prop-date');
  if (dateInput && !dateInput.value) {
    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];
  }

  // Load initial business template (Matching the user's PDF)
  loadTemplate('business');
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

function setupMobileViewTabs() {
  const tabs = document.querySelectorAll('.mobile-view-tab');
  const studioGrid = document.getElementById('studio-grid');

  if (!tabs.length || !studioGrid) return;

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
   2. Live Preview Scaling / Zoom for Mobile Screens
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
   3. Technology Chips Picker (Section 3)
   -------------------------------------------------------------------------- */
function setupTechChipsPicker() {
  const container = document.getElementById('tech-chips-picker');
  const customInput = document.getElementById('input-custom-tech');
  const addBtn = document.getElementById('btn-add-custom-tech');

  if (!container) return;

  function renderChips() {
    container.innerHTML = '';
    ALL_TECH_CATALOG.forEach(tech => {
      const isSelected = selectedTechs.has(tech);
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `tech-chip ${isSelected ? 'selected' : ''}`;
      chip.innerHTML = `<i data-lucide="${isSelected ? 'check' : 'code'}"></i> <span>${escapeHtml(tech)}</span>`;
      
      chip.addEventListener('click', () => {
        if (selectedTechs.has(tech)) {
          selectedTechs.delete(tech);
        } else {
          selectedTechs.add(tech);
        }
        renderChips();
        updatePadPreview();
      });

      container.appendChild(chip);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  if (addBtn && customInput) {
    const handleAdd = () => {
      const val = customInput.value.trim();
      if (val) {
        if (!ALL_TECH_CATALOG.includes(val)) {
          ALL_TECH_CATALOG.push(val);
        }
        selectedTechs.add(val);
        customInput.value = '';
        renderChips();
        updatePadPreview();
      }
    };

    addBtn.addEventListener('click', handleAdd);
    customInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
      }
    });
  }

  window.renderTechChips = renderChips;
  renderChips();
}

/* --------------------------------------------------------------------------
   4. Dynamic Milestones Table Builder (Section 4)
   -------------------------------------------------------------------------- */
function setupMilestonesBuilder() {
  const container = document.getElementById('milestones-rows-container');
  const addBtn = document.getElementById('btn-add-milestone-row');

  if (!container || !addBtn) return;

  function renderRows() {
    container.innerHTML = '';
    milestoneItems.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = 'milestone-builder-row';
      row.innerHTML = `
        <input type="text" class="form-input ms-week" placeholder="Week 1" value="${escapeHtml(item.week)}">
        <input type="text" class="form-input ms-desc" placeholder="Scope / Deliverable" value="${escapeHtml(item.desc)}">
        <input type="text" class="form-input ms-amt" placeholder="$500" value="${escapeHtml(item.amount)}">
        <button type="button" class="btn-del-milestone" title="Delete Milestone Row">
          <i data-lucide="trash-2"></i>
        </button>
      `;

      // Inputs change listeners
      const weekInp = row.querySelector('.ms-week');
      const descInp = row.querySelector('.ms-desc');
      const amtInp = row.querySelector('.ms-amt');
      const delBtn = row.querySelector('.btn-del-milestone');

      weekInp.addEventListener('input', () => {
        item.week = weekInp.value;
        updatePadPreview();
      });
      descInp.addEventListener('input', () => {
        item.desc = descInp.value;
        updatePadPreview();
      });
      amtInp.addEventListener('input', () => {
        item.amount = amtInp.value;
        calculateMilestonesSum();
        updatePadPreview();
      });

      delBtn.addEventListener('click', () => {
        milestoneItems.splice(index, 1);
        renderRows();
        calculateMilestonesSum();
        updatePadPreview();
      });

      container.appendChild(row);
    });

    if (window.lucide) window.lucide.createIcons();
    calculateMilestonesSum();
  }

  addBtn.addEventListener('click', () => {
    milestoneItems.push({
      week: `Phase ${milestoneItems.length + 1}`,
      desc: "New project deliverable and milestone description",
      amount: "$500"
    });
    renderRows();
    calculateMilestonesSum();
    updatePadPreview();
  });

  window.renderMilestonesRows = renderRows;
  renderRows();
}

function calculateMilestonesSum() {
  const sumDisplay = document.getElementById('milestone-sum-display');
  if (!sumDisplay) return 0;

  let totalNumeric = 0;
  let currencySymbol = '$';

  milestoneItems.forEach(item => {
    const raw = item.amount || '';
    const match = raw.match(/([^\d.,\s]+)?\s*([\d,.]+)/);
    if (match) {
      if (match[1]) currencySymbol = match[1].trim();
      const num = parseFloat(match[2].replace(/,/g, ''));
      if (!isNaN(num)) totalNumeric += num;
    }
  });

  const formatted = totalNumeric.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  sumDisplay.textContent = `Sum: ${currencySymbol}${formatted}`;
  return `${currencySymbol}${formatted}`;
}

function setupCostSyncButton() {
  const btnSync = document.getElementById('btn-sync-cost');
  const costInput = document.getElementById('prop-sec-cost');
  if (!btnSync || !costInput) return;

  btnSync.addEventListener('click', () => {
    const sum = calculateMilestonesSum();
    if (sum) {
      costInput.value = `${sum} USD`;
      updatePadPreview();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Section Inputs Binding & Live Pad Preview
   -------------------------------------------------------------------------- */
function setupSectionInputsBinding() {
  const inputIds = [
    'prop-client', 'prop-title', 'prop-ref', 'prop-date',
    'prop-sec-overview', 'prop-sec-features', 'prop-sec-cost',
    'prop-sec-timeline', 'prop-sec-revision', 'prop-sec-maintenance',
    'prop-sec-deliverables', 'prop-sec-summary', 'prop-sec-comments'
  ];

  inputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updatePadPreview);
      el.addEventListener('change', updatePadPreview);
    }
  });
}

function setupPageBreakCheckboxes() {
  for (let i = 1; i <= 11; i++) {
    const check = document.getElementById(`break-sec-${i}`);
    if (check) {
      check.addEventListener('change', updatePadPreview);
    }
  }
}

let currentDocStyle = 'executive'; // 'executive' or 'letterhead'

function setupLayoutStyleSwitcher() {
  const options = document.querySelectorAll('.layout-mode-option');
  const sheet = document.getElementById('letterhead-sheet');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      currentDocStyle = opt.getAttribute('data-style') || 'executive';

      if (sheet) {
        if (currentDocStyle === 'executive') {
          sheet.classList.remove('style-letterhead');
          sheet.classList.add('style-executive');
        } else {
          sheet.classList.remove('style-executive');
          sheet.classList.add('style-letterhead');
        }
      }
      updatePadPreview();
    });
  });
}

// Global updatePadPreview
function updatePadPreview() {
  const clientName = document.getElementById('prop-client')?.value || 'Client / Organization';
  const projectTitle = document.getElementById('prop-title')?.value || 'Business Management & Accounting System';
  const refNo = document.getElementById('prop-ref')?.value || 'AH-PROP-2026';
  const dateVal = document.getElementById('prop-date')?.value || '';
  const totalCost = document.getElementById('prop-sec-cost')?.value || '100,000 BDT';
  const timeline = document.getElementById('prop-sec-timeline')?.value || 'Within 1.5 Months';

  // Update executive & letterhead headers
  const execTitle = document.getElementById('exec-preview-title');
  if (execTitle) execTitle.textContent = projectTitle;

  const prevClient = document.getElementById('preview-client');
  const prevTitle = document.getElementById('preview-title');
  const prevRef = document.getElementById('preview-ref');
  const prevDate = document.getElementById('preview-date');
  const prevSigDate = document.getElementById('preview-sig-date');
  const prevTimeline = document.getElementById('preview-timeline');
  const prevBudget = document.getElementById('preview-budget');

  if (prevClient) prevClient.textContent = clientName;
  if (prevTitle) prevTitle.textContent = projectTitle;
  if (prevRef) prevRef.textContent = refNo;
  if (prevTimeline) prevTimeline.textContent = timeline;
  if (prevBudget) prevBudget.textContent = totalCost;

  if (dateVal) {
    try {
      const d = new Date(dateVal);
      const formatted = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      if (prevDate) prevDate.textContent = formatted;
      if (prevSigDate) prevSigDate.textContent = formatted;
    } catch (e) {
      if (prevDate) prevDate.textContent = dateVal;
    }
  }

  // Render Sections into #preview-body
  const previewBody = document.getElementById('preview-body');
  if (!previewBody) return;

  const getPageBreakHtml = (secNum) => {
    const check = document.getElementById(`break-sec-${secNum}`);
    return (check && check.checked) ? '<div class="html2pdf__page-break pad-page-break"></div>' : '';
  };

  let html = '';

  if (currentDocStyle === 'executive') {
    // -------------------------------------------------------------
    // EXECUTIVE PROPOSAL LAYOUT (1:1 Exact Match with Attached PDF)
    // -------------------------------------------------------------

    // 1. Overview
    const overviewVal = document.getElementById('prop-sec-overview')?.value?.trim() || '';
    if (overviewVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <h2 class="exec-sec-title">1. Project Overview</h2>
          <div class="exec-sec-content">${formatParagraphs(overviewVal)}</div>
        </div>
        ${getPageBreakHtml(1)}
      `;
    }

    // 2. Key Features
    const featuresVal = document.getElementById('prop-sec-features')?.value?.trim() || '';
    if (featuresVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <h2 class="exec-sec-title">2. Key Features</h2>
          <div class="exec-features-container">${formatExecutiveFeatures(featuresVal)}</div>
        </div>
        ${getPageBreakHtml(2)}
      `;
    }

    // Comments / Data & Sync (If provided before tech or as section)
    const commentsVal = document.getElementById('prop-sec-comments')?.value?.trim() || '';
    if (commentsVal && commentsVal.toLowerCase().includes('data & sync')) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <div class="exec-sec-content">${formatDataAndSync(commentsVal)}</div>
        </div>
        ${getPageBreakHtml(11)}
      `;
    }

    // 3. Technology Stack
    const hasTech = selectedTechs.size > 0;
    if (hasTech) {
      const techList = Array.from(selectedTechs);
      let techItemsHtml = '';
      
      // Check if custom formatted or default catalog
      const standardKeys = ["Frontend", "Backend", "Database", "API", "Report Export"];
      let hasCategorized = false;
      techList.forEach(t => {
        if (t.includes(':')) hasCategorized = true;
      });

      if (!hasCategorized) {
        let frontend = techList.filter(t => ['Flutter', 'Dart', 'React', 'Next.js', 'Vue'].some(k => t.includes(k))).join(', ') || 'Flutter';
        let backend = techList.filter(t => ['Laravel', 'PHP', 'Node.js', 'Express', 'Django'].some(k => t.includes(k))).join(', ') || 'Laravel';
        let database = techList.filter(t => ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Hive'].some(k => t.includes(k))).join(', ') || 'MySQL';
        let api = techList.filter(t => ['REST', 'Dio', 'GraphQL', 'WebSockets', 'Pusher'].some(k => t.includes(k))).join(', ') || 'RESTful API';
        let report = techList.filter(t => ['PDF', 'Excel', 'CSV', 'Export'].some(k => t.includes(k))).join(', ') || 'PDF';

        techItemsHtml = `
          <div class="exec-tech-list">
            <div><strong>Frontend:</strong> ${escapeHtml(frontend)}</div>
            <div><strong>Backend:</strong> ${escapeHtml(backend)}</div>
            <div><strong>Database:</strong> ${escapeHtml(database)}</div>
            <div><strong>API:</strong> ${escapeHtml(api)}</div>
            <div><strong>Report Export:</strong> ${escapeHtml(report)}</div>
          </div>
        `;
      } else {
        techItemsHtml = `<div class="exec-tech-list">${techList.map(t => `<div>${escapeHtml(t)}</div>`).join('')}</div>`;
      }

      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">3. Technology Stack</h2>
          ${techItemsHtml}
          <p class="exec-tech-note" style="margin-top: 14px; color: #1e293b;">
            The application will be developed with a scalable architecture so that additional features can be integrated in the future.
          </p>
        </div>
        ${getPageBreakHtml(3)}
      `;
    }

    // 4. Project Milestones & Payment Schedule
    if (milestoneItems.length > 0) {
      let tableRows = '';
      milestoneItems.forEach(item => {
        tableRows += `
          <tr>
            <td class="exec-td-milestone">${escapeHtml(item.week)}</td>
            <td class="exec-td-desc">${escapeHtml(item.desc)}</td>
            <td class="exec-td-payment">${escapeHtml(item.amount)}</td>
          </tr>
        `;
      });

      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">4. Project Milestones &amp; Payment Schedule</h2>
          <table class="exec-milestones-tbl">
            <thead>
              <tr>
                <th style="width: 28%;">Milestone</th>
                <th style="width: 48%;">Deliverables</th>
                <th style="width: 24%;">Payment</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        ${getPageBreakHtml(4)}
      `;
    }

    // 5. Total Project Cost
    if (totalCost) {
      let paymentScheduleHtml = '';
      if (milestoneItems.length > 0) {
        paymentScheduleHtml = `
          <div class="exec-payment-sched">
            <p style="margin-bottom: 6px; font-weight: 500;">Payment schedule:</p>
            ${milestoneItems.map(m => `
              <div class="exec-bullet-row">
                <span class="exec-bullet">●</span>
                <span>${escapeHtml(m.amount.includes('—') ? m.amount.replace('—', ':') : m.amount)}</span>
              </div>
            `).join('')}
          </div>
        `;
      }

      html += `
        <div class="pad-sec-block exec-block">
          <h2 class="exec-sec-title">5. Total Project Cost</h2>
          <div class="exec-sec-content">
            <p style="font-weight: 700; margin-bottom: 10px; font-size: 0.95rem;">Total Development Cost: ${escapeHtml(totalCost)}</p>
            ${paymentScheduleHtml}
          </div>
        </div>
        ${getPageBreakHtml(5)}
      `;
    }

    // 6. Estimated Delivery Timeline
    if (timeline) {
      html += `
        <div class="pad-sec-block exec-block">
          <h2 class="exec-sec-title">6. Estimated Delivery Timeline</h2>
          <div class="exec-sec-content">
            <p style="margin-bottom: 12px;">The complete project will be delivered within <strong>${escapeHtml(timeline)}</strong>.</p>
            <p style="margin-bottom: 10px;">The development process will include:</p>
            <div class="exec-timeline-breakdown">
              <div class="exec-timeline-item">
                <strong>Week 1–2:</strong>
                <p>Project setup, database architecture, authentication, core UI and module development.</p>
              </div>
              <div class="exec-timeline-item">
                <strong>Week 3–4:</strong>
                <p>Complete UI implementation, Laravel backend/API development and database integration.</p>
              </div>
              <div class="exec-timeline-item">
                <strong>Week 5:</strong>
                <p>Flutter–Laravel integration, business logic, stock, sales, imports and financial calculations.</p>
              </div>
              <div class="exec-timeline-item">
                <strong>Week 6:</strong>
                <p>Testing, bug fixing, client review, requested adjustments and final delivery.</p>
              </div>
            </div>
          </div>
        </div>
        ${getPageBreakHtml(6)}
      `;
    }

    // 7. Review & Revision
    const revisionVal = document.getElementById('prop-sec-revision')?.value?.trim() || '';
    if (revisionVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">7. Review &amp; Revision</h2>
          <div class="exec-sec-content">${formatParagraphs(revisionVal)}</div>
        </div>
        ${getPageBreakHtml(7)}
      `;
    }

    // 8. Maintenance
    const maintenanceVal = document.getElementById('prop-sec-maintenance')?.value?.trim() || '';
    if (maintenanceVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">8. Maintenance</h2>
          <div class="exec-sec-content">${formatParagraphs(maintenanceVal)}</div>
        </div>
        ${getPageBreakHtml(8)}
      `;
    }

    // 9. Final Deliverables
    const deliverablesVal = document.getElementById('prop-sec-deliverables')?.value?.trim() || '';
    if (deliverablesVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">9. Final Deliverables</h2>
          <div class="exec-sec-content">
            <p style="margin-bottom: 8px;">Upon completion, the client will receive:</p>
            ${formatExecutiveBullets(deliverablesVal)}
          </div>
        </div>
        ${getPageBreakHtml(9)}
      `;
    }

    // 10. Proposal Summary
    const summaryVal = document.getElementById('prop-sec-summary')?.value?.trim() || '';
    if (summaryVal) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">10. Proposal Summary</h2>
          <div class="exec-sec-content">
            ${formatExecutiveSummary(summaryVal, projectTitle, totalCost, timeline)}
          </div>
        </div>
        ${getPageBreakHtml(10)}
      `;
    }

    // Comments / Other Notes (If not already rendered)
    if (commentsVal && !commentsVal.toLowerCase().includes('data & sync')) {
      html += `
        <div class="pad-sec-block exec-block">
          <hr class="exec-divider">
          <h2 class="exec-sec-title">11. Comments &amp; Prerequisites</h2>
          <div class="exec-sec-content">${formatParagraphs(commentsVal)}</div>
        </div>
        ${getPageBreakHtml(11)}
      `;
    }

  } else {
    // -------------------------------------------------------------
    // BRANDED LETTERHEAD MEMO LAYOUT
    // -------------------------------------------------------------

    // 1. Overview
    const overviewVal = document.getElementById('prop-sec-overview')?.value?.trim() || '';
    if (overviewVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">1</span> Project Overview</h2>
          <div class="pad-sec-content">${formatParagraphs(overviewVal)}</div>
        </div>
        ${getPageBreakHtml(1)}
      `;
    }

    // 2. Key Features
    const featuresVal = document.getElementById('prop-sec-features')?.value?.trim() || '';
    if (featuresVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">2</span> Key Features &amp; Scope</h2>
          <div class="pad-sec-content">${formatBullets(featuresVal)}</div>
        </div>
        ${getPageBreakHtml(2)}
      `;
    }

    // 3. Technology Stack
    if (selectedTechs.size > 0) {
      const techTags = Array.from(selectedTechs).map(t => `<span class="pad-tech-tag"><i data-lucide="check-circle-2"></i> ${escapeHtml(t)}</span>`).join('');
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">3</span> Technology Stack &amp; Architecture</h2>
          <div class="pad-tech-pills">${techTags}</div>
        </div>
        ${getPageBreakHtml(3)}
      `;
    }

    // 4. Project Milestones & Payment Schedule
    if (milestoneItems.length > 0) {
      let tableRows = '';
      milestoneItems.forEach(item => {
        tableRows += `
          <tr>
            <td style="font-weight: 700; width: 140px; color: #0f172a;">${escapeHtml(item.week)}</td>
            <td>${escapeHtml(item.desc)}</td>
            <td style="font-weight: 700; width: 120px; text-align: right; color: #0f172a;">${escapeHtml(item.amount)}</td>
          </tr>
        `;
      });

      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">4</span> Milestones &amp; Payment Schedule</h2>
          <table class="pad-milestones-tbl">
            <thead>
              <tr>
                <th>Timeline</th>
                <th>Milestone Scope &amp; Deliverables</th>
                <th style="text-align: right;">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        ${getPageBreakHtml(4)}
      `;
    }

    // 5 & 6. Commercials
    if (totalCost || timeline) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">5</span> Commercial Investment &amp; Delivery Schedule</h2>
          <div class="pad-commercials-grid">
            <div class="pad-comm-item">
              <span class="pad-comm-label">TOTAL PROJECT INVESTMENT</span>
              <span class="pad-comm-val" style="color: #0284c7;">${escapeHtml(totalCost)}</span>
            </div>
            <div class="pad-comm-item">
              <span class="pad-comm-label">ESTIMATED DELIVERY TIMELINE</span>
              <span class="pad-comm-val">${escapeHtml(timeline)}</span>
            </div>
          </div>
        </div>
        ${getPageBreakHtml(5)}
        ${getPageBreakHtml(6)}
      `;
    }

    // 7. Review and Revision
    const revisionVal = document.getElementById('prop-sec-revision')?.value?.trim() || '';
    if (revisionVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">7</span> Review &amp; Revision Policy</h2>
          <div class="pad-sec-content">${formatParagraphs(revisionVal)}</div>
        </div>
        ${getPageBreakHtml(7)}
      `;
    }

    // 8. Maintenance & Warranty
    const maintenanceVal = document.getElementById('prop-sec-maintenance')?.value?.trim() || '';
    if (maintenanceVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">8</span> Maintenance &amp; Warranty Support</h2>
          <div class="pad-sec-content">${formatParagraphs(maintenanceVal)}</div>
        </div>
        ${getPageBreakHtml(8)}
      `;
    }

    // 9. Final Deliverables
    const deliverablesVal = document.getElementById('prop-sec-deliverables')?.value?.trim() || '';
    if (deliverablesVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">9</span> Final Deliverables</h2>
          <div class="pad-sec-content">${formatBullets(deliverablesVal)}</div>
        </div>
        ${getPageBreakHtml(9)}
      `;
    }

    // 10. Proposal Summary
    const summaryVal = document.getElementById('prop-sec-summary')?.value?.trim() || '';
    if (summaryVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">10</span> Proposal Summary &amp; Commercial Terms</h2>
          <div class="pad-sec-content">${formatParagraphs(summaryVal)}</div>
        </div>
        ${getPageBreakHtml(10)}
      `;
    }

    // 11. Comments / Notes
    const commentsVal = document.getElementById('prop-sec-comments')?.value?.trim() || '';
    if (commentsVal) {
      html += `
        <div class="pad-sec-block">
          <h2 class="pad-sec-title"><span class="pad-sec-badge">11</span> Comments &amp; Special Notes</h2>
          <div class="pad-sec-content">${formatParagraphs(commentsVal)}</div>
        </div>
        ${getPageBreakHtml(11)}
      `;
    }
  }

  previewBody.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();

  // Re-adjust mobile scaling if active
  if (window.applyPadScale) window.applyPadScale();
}

/* --------------------------------------------------------------------------
   Executive Proposal Text & Bullet Formatters
   -------------------------------------------------------------------------- */

function formatParagraphs(text) {
  if (!text) return '';
  return text.split('\n\n').map(p => {
    const trimmed = p.trim();
    if (!trimmed) return '';
    return `<p style="margin-bottom: 8px; line-height: 1.6;">${escapeHtml(trimmed).replace(/\n/g, '<br>')}</p>`;
  }).join('');
}

function formatExecutiveFeatures(text) {
  if (!text) return '';
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let result = '';
  let inGroup = false;

  lines.forEach(line => {
    const isBullet = line.startsWith('●') || line.startsWith('•') || line.startsWith('-') || line.startsWith('*') || line.startsWith('·');
    if (!isBullet && !line.startsWith('1.') && !line.startsWith('2.')) {
      // Feature group heading (e.g. "Authentication", "Dashboard", "Imports / LC Batches")
      if (inGroup) {
        result += '</div>';
      }
      result += `
        <div class="exec-feature-group">
          <h3 class="exec-feature-group-title">${escapeHtml(line)}</h3>
      `;
      inGroup = true;
    } else {
      const clean = line.replace(/^[●•\-\*·]\s*/, '').replace(/^\d+[\.\)]\s*/, '');
      if (!inGroup) {
        result += '<div class="exec-feature-group">';
        inGroup = true;
      }
      result += `
        <div class="exec-bullet-row">
          <span class="exec-bullet">●</span>
          <span>${escapeHtml(clean)}</span>
        </div>
      `;
    }
  });

  if (inGroup) result += '</div>';
  return result;
}

function formatExecutiveBullets(text) {
  if (!text) return '';
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  return lines.map(line => {
    const clean = line.replace(/^[●•\-\*·]\s*/, '').replace(/^\d+[\.\)]\s*/, '');
    return `
      <div class="exec-bullet-row">
        <span class="exec-bullet">●</span>
        <span>${escapeHtml(clean)}</span>
      </div>
    `;
  }).join('');
}

function formatDataAndSync(text) {
  if (!text) return '';
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let html = '';
  lines.forEach(line => {
    if (line.toLowerCase().startsWith('data & sync')) {
      html += `<h2 class="exec-sec-title">Data &amp; Sync</h2>`;
    } else if (line.startsWith('Based on')) {
      html += `<p style="margin-bottom: 10px;">${escapeHtml(line)}</p>`;
    } else if (line.startsWith('·') || line.startsWith('●') || line.startsWith('•') || line.startsWith('-')) {
      const clean = line.replace(/^[·●•\-]\s*/, '');
      html += `
        <div class="exec-bullet-row" style="margin-bottom: 6px;">
          <span class="exec-bullet" style="font-size: 0.65rem;">·</span>
          <span>${escapeHtml(clean)}</span>
        </div>
      `;
    } else {
      html += `<p style="margin-bottom: 6px;">${escapeHtml(line)}</p>`;
    }
  });
  return html;
}

function formatExecutiveSummary(text, title, cost, timeline) {
  if (!text) return '';
  // Check if text already has summary key-values
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  let summaryFieldsHtml = '';
  let closingParagraphs = '';

  lines.forEach(line => {
    if (line.includes(':') && (line.startsWith('Project:') || line.startsWith('Technology:') || line.startsWith('Estimated Duration:') || line.startsWith('Total Cost:') || line.startsWith('Payment:') || line.startsWith('Review:') || line.startsWith('Final Delivery:'))) {
      const parts = line.split(':');
      const key = parts[0].trim();
      const val = parts.slice(1).join(':').trim();
      summaryFieldsHtml += `<div><strong>${escapeHtml(key)}:</strong> ${escapeHtml(val)}</div>`;
    } else {
      closingParagraphs += `<p style="margin-top: 14px; line-height: 1.6;">${escapeHtml(line)}</p>`;
    }
  });

  return `
    <div class="exec-summary-card">
      <div class="exec-summary-fields">
        ${summaryFieldsHtml}
      </div>
      ${closingParagraphs}
    </div>
  `;
}

function formatBullets(text) {
  if (!text) return '';
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  return lines.map(l => {
    const isBullet = l.startsWith('●') || l.startsWith('•') || l.startsWith('-') || l.startsWith('*') || /^\d+[\.\)]/.test(l);
    const clean = l.replace(/^[●•\-\*]\s*/, '').replace(/^\d+[\.\)]\s*/, '');
    if (isBullet) {
      return `
        <div class="pad-feature-item">
          <span class="pad-feature-bullet">▸</span>
          <span>${escapeHtml(clean)}</span>
        </div>
      `;
    }
    return `<p style="margin-bottom: 5px;">${escapeHtml(l)}</p>`;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* --------------------------------------------------------------------------
   6. Preset Template Loader
   -------------------------------------------------------------------------- */
function loadTemplate(key) {
  const tmpl = PROPOSAL_TEMPLATES[key];
  if (!tmpl) return;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('prop-client', tmpl.clientName);
  setVal('prop-title', tmpl.projectTitle);
  setVal('prop-ref', tmpl.refNo);
  setVal('prop-sec-cost', tmpl.cost);
  setVal('prop-sec-timeline', tmpl.timeline);
  setVal('prop-sec-overview', tmpl.overview);
  setVal('prop-sec-features', tmpl.features);
  setVal('prop-sec-revision', tmpl.revision);
  setVal('prop-sec-maintenance', tmpl.maintenance);
  setVal('prop-sec-deliverables', tmpl.deliverables);
  setVal('prop-sec-summary', tmpl.summary);
  setVal('prop-sec-comments', tmpl.comments);

  // Set techs
  selectedTechs = new Set(tmpl.techs || []);
  if (window.renderTechChips) window.renderTechChips();

  // Set milestones
  milestoneItems = JSON.parse(JSON.stringify(tmpl.milestones || []));
  if (window.renderMilestonesRows) window.renderMilestonesRows();

  updatePadPreview();
}

function setupTemplatePills() {
  const pills = document.querySelectorAll('.template-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const key = pill.getAttribute('data-template');
      loadTemplate(key);
    });
  });
}

/* --------------------------------------------------------------------------
   7. Watermark & Document Customization
   -------------------------------------------------------------------------- */
function setupWatermarkControls() {
  const watermarkRange = document.getElementById('watermark-opacity');
  const watermarkVal = document.getElementById('watermark-val');
  const toggleWatermark = document.getElementById('toggle-watermark');
  const toggleSignature = document.getElementById('toggle-signature');
  const watermarkEl = document.getElementById('pad-watermark');
  const signatureSection = document.getElementById('pad-signatures');

  if (watermarkRange && watermarkVal && watermarkEl) {
    watermarkRange.addEventListener('input', () => {
      const val = watermarkRange.value;
      watermarkVal.textContent = `${val}%`;
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
   8. High-Resolution PDF Export Engine
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

      // Allow DOM repaint
      await new Promise(r => setTimeout(r, 200));

      const opt = {
        margin: [10, 10, 12, 10], // mm
        filename: cleanFileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2.5, // Ultra-crisp vector-grade resolution
          useCORS: true,
          logging: false,
          scrollY: 0,
          letterRendering: true
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
          compress: true
        },
        pagebreak: {
          mode: ['css', 'legacy'],
          avoid: ['.pad-sec-block', '.pad-signature-section', '.pad-milestones-tbl', '.pad-commercials-grid', '.pad-header', '.pad-meta-bar']
        }
      };

      if (window.html2pdf) {
        await window.html2pdf().set(opt).from(sheet).save();
      } else {
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

function setupPrintButton() {
  const printBtn = document.getElementById('btn-print-pad');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}
