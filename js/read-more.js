document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768) {
    const readMoreButton = document.querySelector('.read-more-button');
    const descriptionElement = document.querySelector('.page-description');

    if (readMoreButton && descriptionElement) {
      const description = descriptionElement.innerHTML;
      if (description.length > 916) {
        descriptionElement.innerHTML = `${description.slice(0, 916).trim()}...`;
        readMoreButton.classList.remove('hidden');
        readMoreButton.onclick = () => {
          descriptionElement.innerHTML = description;
          readMoreButton.classList.add('hidden');
        }
      }
    }
  }
});
