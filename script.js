const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${index * 90}ms`;
  observer.observe(element);
});

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
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
  let refreshReviewControls = () => {};

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
    ) || (() => {});
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

  showMessage('Loading reviews...');
  fetch('reviews.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Review request failed');
      }
      return response.json();
    })
    .then((data) => {
      if (!Array.isArray(data) || data.length === 0) {
        showMessage('No reviews available yet.');
        return;
      }
      reviewsGrid.innerHTML = '';
      data.forEach((item) => {
        if (item && item.review && item.name) {
          reviewsGrid.appendChild(createReviewCard(item));
        }
      });
      bindReviewSliderControls();
      refreshReviewControls();
    })
    .catch(() => {
      showMessage('Unable to load reviews right now.');
    });
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
