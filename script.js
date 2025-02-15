const slideWrapper = document.querySelector('.slide');
slideWrapper.addEventListener('mouseenter', () => {
  slideWrapper.style.animationPlayState = 'paused';
});

slideWrapper.addEventListener('mouseleave', () => {
  slideWrapper.style.animationPlayState = 'running';
});