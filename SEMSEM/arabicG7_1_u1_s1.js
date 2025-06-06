const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const toggleBtn = document.querySelector(".toggle-lessons");
const lessonsList = document.querySelector(".lessons-links");

toggleBtn.addEventListener("click", () => {
  lessonsList.classList.toggle("hidden");
});
