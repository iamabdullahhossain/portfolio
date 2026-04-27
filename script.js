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

const reviewsGrid = document.getElementById('reviewsGrid');
if (reviewsGrid) {
  const reviewsPrev = document.getElementById('reviewsPrev');
  const reviewsNext = document.getElementById('reviewsNext');

  const showMessage = (message) => {
    reviewsGrid.innerHTML = `<p class="reviews-message">${message}</p>`;
  };

  const updateReviewNavState = () => {
    if (!reviewsPrev || !reviewsNext) {
      return;
    }

    const maxScroll = Math.max(0, reviewsGrid.scrollWidth - reviewsGrid.clientWidth);
    const atStart = reviewsGrid.scrollLeft <= 2;
    const atEnd = reviewsGrid.scrollLeft >= maxScroll - 2;

    reviewsPrev.disabled = atStart;
    reviewsNext.disabled = atEnd;
  };

  const bindReviewSliderControls = () => {
    if (!reviewsPrev || !reviewsNext) {
      return;
    }

    const stepSize = () => {
      const firstCard = reviewsGrid.querySelector('.review-card');
      if (!firstCard) {
        return 280;
      }
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gridStyle = window.getComputedStyle(reviewsGrid);
      const gap = parseFloat(gridStyle.gap) || 0;
      return cardWidth + gap;
    };

    reviewsPrev.addEventListener('click', () => {
      reviewsGrid.scrollBy({ left: -stepSize(), behavior: 'smooth' });
    });

    reviewsNext.addEventListener('click', () => {
      reviewsGrid.scrollBy({ left: stepSize(), behavior: 'smooth' });
    });

    reviewsGrid.addEventListener('scroll', updateReviewNavState);
    window.addEventListener('resize', updateReviewNavState);
    updateReviewNavState();
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
      updateReviewNavState();
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
      updateReviewNavState();
    })
    .catch(() => {
      showMessage('Unable to load reviews right now.');
    });
}

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
