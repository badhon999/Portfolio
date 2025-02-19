document.addEventListener("DOMContentLoaded", function () {
  const slideWrapper = document.querySelector('.slide');

  if (slideWrapper) {
      slideWrapper.addEventListener('mouseenter', () => {
          slideWrapper.style.animationPlayState = 'paused';
      });

      slideWrapper.addEventListener('mouseleave', () => {
          slideWrapper.style.animationPlayState = 'running';
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if URL contains a hash (e.g., #Hobbies)
  if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
          setTimeout(() => {
              target.scrollIntoView({ behavior: "smooth" });
          }, 300); // Delay slightly to ensure page loads first
      }
  }
});
