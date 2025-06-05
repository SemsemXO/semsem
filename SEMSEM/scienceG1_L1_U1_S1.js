const fadeElements = document.querySelectorAll('.fade-in');


const revealOnLoad = () => {
  fadeElements.forEach(el => {
    el.classList.add('visible');
  });
};


const revealOnScroll = () => {
  fadeElements.forEach(el => {
    if (!el.classList.contains('visible')) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    }
  });
};

window.addEventListener('load', revealOnLoad);
window.addEventListener('scroll', revealOnScroll);