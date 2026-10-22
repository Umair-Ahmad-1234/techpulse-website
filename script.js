// Simple category filter for the news cards.
const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.news-card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.category;

    buttons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const shouldShow = selectedCategory === 'all' || categories.includes(selectedCategory);
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount++;
    });

    document.querySelector('#no-results').hidden = visibleCount > 0;
  });
});

// Update the copyright year automatically.
document.querySelector('#year').textContent = new Date().getFullYear();
