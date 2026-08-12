/* ==========================================================================
   Packages Page Interactive JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setupThemeToggle();
  setupMobileNav();
  setupBillingToggle();
  setupEstimator();
  setupPackageModal();
});

/* --------------------------------------------------------------------------
   1. Theme Toggle & Header Nav Sync
   -------------------------------------------------------------------------- */
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme');

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

    if (window.lucide) window.lucide.createIcons();
  });
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
   2. Billing Switch (Monthly vs Yearly Billing)
   -------------------------------------------------------------------------- */
function setupBillingToggle() {
  const billingCheckbox = document.getElementById('billing-toggle');
  const btnMonthly = document.getElementById('label-monthly');
  const btnYearly = document.getElementById('label-yearly');

  if (!btnMonthly || !btnYearly) return;

  const setBillingMode = (isYearly) => {
    if (billingCheckbox) billingCheckbox.checked = isYearly;

    if (isYearly) {
      btnYearly.classList.add('active');
      btnMonthly.classList.remove('active');
    } else {
      btnMonthly.classList.add('active');
      btnYearly.classList.remove('active');
    }

    document.querySelectorAll('.package-price-amount').forEach(el => {
      const monthlyVal = el.getAttribute('data-monthly');
      const yearlyVal = el.getAttribute('data-yearly');
      el.textContent = isYearly ? yearlyVal : monthlyVal;
    });

    document.querySelectorAll('.package-period').forEach(el => {
      const monthlyPeriod = el.getAttribute('data-monthly-period') || '/ month';
      const yearlyPeriod = el.getAttribute('data-yearly-period') || '/ month (billed annually)';
      el.textContent = isYearly ? yearlyPeriod : monthlyPeriod;
    });
  };

  btnMonthly.addEventListener('click', () => setBillingMode(false));
  btnYearly.addEventListener('click', () => setBillingMode(true));
}

/* --------------------------------------------------------------------------
   3. Interactive Cost & Timeline Estimator
   -------------------------------------------------------------------------- */
function setupEstimator() {
  const checkboxes = document.querySelectorAll('.calc-option');
  const priceDisplay = document.getElementById('est-price-val');
  const timeDisplay = document.getElementById('est-time-val');
  const listContainer = document.getElementById('selected-features-list');

  if (!priceDisplay || !checkboxes.length) return;

  const calculate = () => {
    let basePrice = 500;
    let baseDays = 7;
    let selectedItems = [];

    checkboxes.forEach(cb => {
      const card = cb.closest('.calc-checkbox-card');
      if (cb.checked) {
        if (card) card.classList.add('checked');
        const price = parseInt(cb.getAttribute('data-price') || '0', 10);
        const days = parseInt(cb.getAttribute('data-days') || '0', 10);
        const name = cb.getAttribute('data-name') || '';

        basePrice += price;
        baseDays += days;
        selectedItems.push({ name, price });
      } else {
        if (card) card.classList.remove('checked');
      }
    });

    // Format output
    priceDisplay.textContent = `$${basePrice.toLocaleString()}`;
    const weeks = Math.ceil(baseDays / 7);
    timeDisplay.textContent = `Estimated Timeline: ~${baseDays} days (${weeks} ${weeks === 1 ? 'week' : 'weeks'})`;

    if (listContainer) {
      if (selectedItems.length === 0) {
        listContainer.innerHTML = '<span style="color:var(--text-muted);">No custom add-ons selected yet.</span>';
      } else {
        listContainer.innerHTML = selectedItems.map(item => `
          <div class="selected-features-item">
            <span>${item.name}</span>
            <span style="font-weight:700; color:var(--accent-yellow);">+$${item.price}</span>
          </div>
        `).join('');
      }
    }
  };

  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculate);
  });

  calculate();
}

/* --------------------------------------------------------------------------
   4. Package Selection & Redirect to Contact Section
   -------------------------------------------------------------------------- */
function setupPackageModal() {
  const selectBtns = document.querySelectorAll('.select-package-btn');

  selectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      let pkgName = btn.getAttribute('data-package') || 'Custom Package';

      // Check if it's the estimator quote button
      if (btn.id === 'estimator-quote-btn' || pkgName.includes('Custom')) {
        const priceText = document.getElementById('est-price-val')?.textContent || '$500';
        const selectedItems = [];
        document.querySelectorAll('.calc-option:checked').forEach(cb => {
          const name = cb.getAttribute('data-name');
          if (name) selectedItems.push(name);
        });
        pkgName = `Custom Build (${priceText}) - Addons: ${selectedItems.join(', ')}`;
      }

      const encodedPkg = encodeURIComponent(pkgName);
      window.location.href = `index.html?package=${encodedPkg}#contact`;
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
