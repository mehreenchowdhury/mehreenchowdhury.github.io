// Filter project cards when a category button is clicked.
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const empty = document.querySelector('#empty-message');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    buttons.forEach(b => {
      const isActive = b === button;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });

    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const visible = selectedCategory === 'all' || categories.includes(selectedCategory);
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    if (empty) empty.hidden = visibleCount > 0;
  });
});
