// Initialize AOS Scroll Reveal
if (window.AOS) {
  window.AOS.init({
    duration: 850,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
    anchorPlacement: "top-bottom"
  });
}

// Vertical Role Rotator
(function () {
  const wrapper = document.getElementById("hero-role");
  const track = wrapper?.querySelector(".hero-rotate-track");
  if (!wrapper || !track) return;

  const words = Array.from(track.querySelectorAll("span"));
  if (!words.length) return;

  const clone = words[0].cloneNode(true);
  clone.classList.remove("active");
  track.appendChild(clone);

  const items = Array.from(track.querySelectorAll("span"));
  let current = 0;
  let stepHeight = 0;
  let resetting = false;

  function setMetrics() {
    const widths = words.map((word) => word.getBoundingClientRect().width);
    const maxWidth = Math.max(...widths);
    const firstHeight = Math.ceil(words[0].getBoundingClientRect().height);

    stepHeight = firstHeight;
    wrapper.style.width = `${Math.ceil(maxWidth + 6)}px`;
    wrapper.style.height = `${stepHeight}px`;
    track.style.transform = `translateY(${-current * stepHeight}px)`;
  }

  function rotateWord() {
    if (resetting || stepHeight === 0) return;

    current += 1;
    items.forEach((word, index) => word.classList.toggle("active", index === current));
    track.style.transform = `translateY(${-current * stepHeight}px)`;
  }

  track.addEventListener("transitionend", () => {
    if (current !== words.length) return;

    resetting = true;
    track.style.transition = "none";
    current = 0;
    items.forEach((word, index) => word.classList.toggle("active", index === current));
    track.style.transform = "translateY(0px)";
    track.offsetHeight; // force repaint
    track.style.transition = "";
    resetting = false;
  });

  window.addEventListener("load", setMetrics);
  window.addEventListener("resize", setMetrics);

  setMetrics();
  setInterval(rotateWord, 2500);
})();

// 3D Card Tilt Hover Effect
(function () {
  const tilts = document.querySelectorAll(".tilt");
  tilts.forEach(card => {
    card.addEventListener("mousemove", event => {
      const { top, bottom, left, right } = card.getBoundingClientRect();
      const width = right - left;
      const height = bottom - top;
      const middleX = width / 2;
      const middleY = height / 2;
      const offsetX = (event.clientX - left - middleX) / middleX;
      const offsetY = (middleY - (event.clientY - top)) / middleY;
      card.style.transform = `perspective(1000px) rotateY(${offsetX * 6}deg) rotateX(${offsetY * 6}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
    });
  });
})();

// Synthesized Click Audio & Sound Toggle
(function () {
  const toggleBtn = document.getElementById("soundToggle");
  const storageKey = "portfolio_sound_enabled";
  let soundEnabled = true;
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSynthesizedClick() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(850, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);

      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("Web Audio API error:", e);
    }
  }

  function setSoundState(enabled) {
    soundEnabled = enabled;
    if (toggleBtn) {
      toggleBtn.classList.toggle("is-muted", !enabled);
      toggleBtn.setAttribute("aria-pressed", String(enabled));
    }
    try {
      localStorage.setItem(storageKey, String(enabled));
    } catch (_) {}
  }

  let savedState = "true";
  try {
    savedState = localStorage.getItem(storageKey) || "true";
  } catch (_) {}
  setSoundState(savedState === "true");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      setSoundState(!soundEnabled);
      if (soundEnabled) {
        playSynthesizedClick();
      }
      e.stopPropagation();
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("#soundToggle")) return;

    const interactive = target.closest("a, button, summary, .project-card, .dot, .slider-btn, .reviews-nav");
    if (interactive) {
      playSynthesizedClick();
    }
  });
})();

// Scroll to Top Button Functionality
(function () {
  const scrollBtn = document.getElementById("scrollToTop");
  if (!scrollBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

const setupHorizontalControls = (container, prevBtn, nextBtn, itemSelector, fallbackStep = 280) => {
  if (!container || !prevBtn || !nextBtn) {
    return;
  }

  const stepSize = () => {
    const firstItem = container.querySelector(itemSelector);
    if (!firstItem) {
      return fallbackStep;
    }
    const itemWidth = firstItem.getBoundingClientRect().width;
    const containerStyle = window.getComputedStyle(container);
    const gap = parseFloat(containerStyle.gap) || 0;
    return itemWidth + gap;
  };

  const updateNavState = () => {
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
    const atStart = container.scrollLeft <= 2;
    const atEnd = container.scrollLeft >= maxScroll - 2;
    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  };

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -stepSize(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: stepSize(), behavior: 'smooth' });
  });

  container.addEventListener('scroll', updateNavState);
  window.addEventListener('resize', updateNavState);
  updateNavState();

  return updateNavState;
};

const reviewsGrid = document.getElementById('reviewsGrid');
if (reviewsGrid) {
  const reviewsPrev = document.getElementById('reviewsPrev');
  const reviewsNext = document.getElementById('reviewsNext');
  let refreshReviewControls = () => { };

  const showMessage = (message) => {
    reviewsGrid.innerHTML = `<p class="reviews-message">${message}</p>`;
  };

  const bindReviewSliderControls = () => {
    refreshReviewControls = setupHorizontalControls(
      reviewsGrid,
      reviewsPrev,
      reviewsNext,
      '.review-card',
      280
    ) || (() => { });
  };

  const createReviewCard = (review) => {
    const card = document.createElement('article');
    card.className = 'review-card';

    const text = document.createElement('p');
    text.className = 'review-text';
    text.textContent = review.review;

    const meta = document.createElement('div');
    meta.className = 'review-meta';

    const name = document.createElement('strong');
    name.textContent = review.name;

    const role = document.createElement('span');
    role.textContent = `${review.designation} · ${review.company}`;

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'review-toggle';
    toggleButton.textContent = 'Read more';
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.addEventListener('click', () => {
      const isExpanded = card.classList.toggle('is-expanded');
      toggleButton.textContent = isExpanded ? 'Read less' : 'Read more';
      toggleButton.setAttribute('aria-expanded', String(isExpanded));
      refreshReviewControls();
    });

    meta.appendChild(name);
    meta.appendChild(role);
    card.appendChild(text);
    card.appendChild(toggleButton);
    card.appendChild(meta);
    return card;
  };

  const reviewsData = [
    {
      "review": "I've had the pleasure of working with Abdullah Hossain, an exceptionally talented Associate Programmer (App) at ChutyRooms. As a Software Quality Assurance Engineer, I frequently report bugs, and Abdullah always responds swiftly, resolving issues with remarkable efficiency and precision.\n\nBeyond his technical expertise, Abdullah is a proactive and collaborative team player who consistently contributes to the team's success. His problem-solving mindset, dedication, and positive attitude make him a valuable asset to any organization.\n\nI highly recommend Abdullah and have no doubt that he will continue to achieve great things in his career. Wishing him all the best for the future!",
      "name": "Anisur Rahman Akib",
      "designation": "Software Quality Assurance",
      "company": "RILO IT & Software Ltd."
    },
    {
      "review": "I had the pleasure of working with Abdullah Hossain, and I can confidently say that he is an exceptional developer with a deep understanding of Flutter and Android development. His ability to solve complex problems efficiently and his keen eye for detail make him a valuable asset to any development team.\n\nAbdullah is not only technically proficient but also a great team player who is always willing to help and share his knowledge. His dedication to writing clean, maintainable code and his passion for continuous learning set him apart in the field.\n\nIf you're looking for a skilled Flutter developer who is committed to delivering high-quality applications, I highly recommend Abdullah! 🚀",
      "name": "Joyanta Dutta",
      "designation": "Senior Backend Developer",
      "company": "Chuty Bangladesh Pvt Ltd"
    },
    {
      "review": "I have had the pleasure of working with Abdullah Hossain, an excellent junior at ChutyRooms. He is skilled in software development, writes clean and efficient code, and is always eager to learn new technologies.\n\nAbdullah is a proactive problem-solver and a great team player, making him a valuable asset to any development team. I highly recommend him for any future opportunities in software development.",
      "name": "Shimanta Mutsuddi",
      "designation": "Senior Mobile Application Developer",
      "company": "Softrobotics Bangladesh Limited"
    },
    {
      "review": "Working with Abdullah Hossain was a great experience for me. During our time working together, I found him dedicated, helpful, and supportive. He always handled his work with responsibility and stayed focused on quality.His communication was clear, and working as a team was easy with him.He was always ready to help and share his knowledge.It was a pleasure working with him, and I truly value that experience.",
      "name": "Md Tarik Bin Aziz",
      "designation": "Sr. Flutter developer",
      "company": "Razinsoft LTD"
    }
  ];

  reviewsGrid.innerHTML = '';
  reviewsData.forEach((item) => {
    if (item && item.review && item.name) {
      reviewsGrid.appendChild(createReviewCard(item));
    }
  });
  bindReviewSliderControls();
  refreshReviewControls();
}

const projectsGrid = document.querySelector('.projects-grid');
const projectsPrev = document.getElementById('projectsPrev');
const projectsNext = document.getElementById('projectsNext');
setupHorizontalControls(projectsGrid, projectsPrev, projectsNext, '.project-card', 300);

const timelineList = document.querySelector('.timeline-list');
const experiencePrev = document.getElementById('experiencePrev');
const experienceNext = document.getElementById('experienceNext');
setupHorizontalControls(timelineList, experiencePrev, experienceNext, '.timeline-item', 260);

const slider = document.querySelector('.workshot-slider');
if (slider) {
  const slides = Array.from(slider.querySelectorAll('.workshot-image'));
  const dots = Array.from(slider.querySelectorAll('.dot'));
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');
  let current = 0;

  const renderSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    current = index;
  };

  const goNext = () => {
    renderSlide((current + 1) % slides.length);
  };

  const goPrev = () => {
    renderSlide((current - 1 + slides.length) % slides.length);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', goNext);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', goPrev);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => renderSlide(index));
  });

  setInterval(goNext, 4500);
}
