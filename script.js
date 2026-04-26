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
