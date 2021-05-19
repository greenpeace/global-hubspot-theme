document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.fixed-sign-up-button');
  const form = document.querySelector('.petition-form');

  const showOrHideButton = () => {
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', () => {
        const formTopPosition = form.getBoundingClientRect().top;
        if (formTopPosition < window.innerHeight - 70) { // 70px is the height of the fixed button banner
          button.classList.add('hidden');
        } else {
          button.classList.remove('hidden');
        }
      });
    } else {
      button.classList.add('hidden');
    }
  }

  if (button && form) {
    showOrHideButton();
    window.addEventListener('resize', showOrHideButton);
  }
});
