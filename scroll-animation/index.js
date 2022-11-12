const animatedElements = document.querySelectorAll('.animated-content');

window.addEventListener('scroll', toggleAnimation);

toggleAnimation();

function toggleAnimation() {
  const triggerBottom = window.innerHeight / 5 * 4
  animatedElements.forEach((element) => {
    if (element.getBoundingClientRect().top < triggerBottom) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}



